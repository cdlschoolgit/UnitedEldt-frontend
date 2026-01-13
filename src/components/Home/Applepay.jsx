import React, { useState, useEffect } from 'react';
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const Applepay = ({ purchase, cardholderName, email, billingAddress, zip, onSuccess, onError }) => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe || !purchase) {
      return;
    }

    const pr = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: purchase.courseName || 'Course Payment',
        amount: Math.round(purchase.price * 100), // Convert to cents
      },
      requestPayerName: true,
      requestPayerEmail: true,
      paymentMethodTypes: ['applePay', 'card'],
    });

    // Handle payment method
    pr.on('paymentmethod', async (e) => {
      try {
        // Create payment intent on backend
        const paymentIntentResponse = await axios.post(
          'https://unitedeldtserver.vercel.app/api/create-payment-transactions',
          {
            amount: Math.round(purchase.price * 100),
            courseEnrollments: [
              {
                courseId: purchase._id,
                lessonIndex: 0,
                language: purchase.language || 'English',
                name: purchase.courseName,
              },
            ],
            fullName: e.payerName || cardholderName,
            Email: e.payerEmail || email,
            price: purchase.price,
            address: e.shippingAddress?.addressLine?.[0] || billingAddress,
            zip: e.shippingAddress?.postalCode || zip,
          }
        );

        if (paymentIntentResponse.data.available === true) {
          e.complete('fail');
          if (onError) {
            onError('This course already exists for the student.');
          }
          return;
        }

        if (paymentIntentResponse.data.clientSecret) {
          // Confirm payment with Stripe
          const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
            paymentIntentResponse.data.clientSecret,
            {
              payment_method: e.paymentMethod.id,
            }
          );

          if (confirmError) {
            e.complete('fail');
            if (onError) {
              onError(confirmError.message || 'Payment failed. Please try again.');
            }
            return;
          }

          if (paymentIntent && paymentIntent.status === 'succeeded') {
            // Payment succeeded, now enroll the student
            try {
              const enrollmentResponse = await axios.post(
                'https://unitedeldtserver.vercel.app/api/confirm-payment-enrollment',
                {
                  paymentIntentId: paymentIntentResponse.data.paymentIntentId,
                  Email: e.payerEmail || email,
                  courseEnrollments: [
                    {
                      courseId: purchase._id,
                      lessonIndex: 0,
                      language: purchase.language || 'English',
                      name: purchase.courseName,
                    },
                  ],
                  fullName: e.payerName || cardholderName,
                  price: purchase.price,
                  address: e.shippingAddress?.addressLine?.[0] || billingAddress,
                  zip: e.shippingAddress?.postalCode || zip,
                }
              );

              if (enrollmentResponse.data.success) {
                e.complete('success');
                if (onSuccess) {
                  onSuccess();
                }
              } else {
                e.complete('fail');
                if (onError) {
                  onError('Payment succeeded but enrollment failed. Please contact support.');
                }
              }
            } catch (enrollmentError) {
              console.error('Enrollment error:', enrollmentError);
              e.complete('fail');
              if (onError) {
                onError('Payment succeeded but enrollment failed. Please contact support.');
              }
            }
          }
        }
      } catch (error) {
        console.error('Apple Pay payment error:', error);
        e.complete('fail');
        const errorMsg = error.response?.data?.message || error.message || 'An error occurred while processing your payment.';
        if (onError) {
          onError(errorMsg);
        }
      }
    });

    // Check the availability of the Payment Request API
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe, purchase, cardholderName, email, billingAddress, zip, onSuccess, onError]);

  if (!paymentRequest) {
    return null; // Don't show anything if Apple Pay is not available
  }

  return (
    <div className="buttonofpayment">
      <PaymentRequestButtonElement options={{ paymentRequest }} />
    </div>
  );
};

export default Applepay;
