import axios, { Axios } from "axios";
import { Translator, Translate } from "react-auto-translate";
import { Link, useLocation, useParams } from "react-router-dom";
import barzil from "./Flags/brazil.png"
import america from "./Flags/united states.png"
import pakistan from "./Flags/pakistan.png"
import india from "./Flags/india.png"
import russia from "./Flags/russia.png"
import france from "./Flags/russia.png"
import arabic from "./Flags/jordan.png"
import spain from "./Flags/espan.png"
import "./courses.css"
import { useState, useEffect, useRef } from 'react';
import { Modal, notification } from 'antd';
import CircularLogoSvg from "./CircularLogoSvg"
import Successi from "./images/Group 6674.png"
import errir from "./images/Group 6674 (2).png"
import { jwtDecode } from "jwt-decode";
import CustomDropdown from "./CustomDropdown";
import { useSelector } from "react-redux";
import bannerimage from "./images/Selo.svg"
import GooglePay from "./Googlepay";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// Stripe public key - Get this from your Stripe Dashboard
// For production, use: process.env.REACT_APP_STRIPE_PUBLIC_KEY
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY || 'pk_live_51O5F9gFZtgAr5eHPy7jeusMjQh38l6JqMLq0cHutTr7nfyFbqPZOsNMJaGjfdxZ77lBlz2l7HsTDq8zSqplkasAm00agQNCSx0');

// Payment Form Component that uses Stripe hooks
function PaymentForm({ 
  purchase, 
  cardholderName, 
  email, 
  confirmemail, 
  billingAddress, 
  zip, 
  userId,
  loading,
  handlePayment,
  handleCancel,
  handleupward,
  removeErrorBorder,
  setCardholderName,
  setEmail,
  setConfirmemail,
  setBillingAddress,
  setZip
}) {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <div className="main-content paymentmodal">
      <input
        type="text"
        className=" fnam"
        id="cardholderName"
        placeholder="Full Name"
        value={userId !== null ? userId.Name : cardholderName}
        readOnly={userId !== null}
        onChange={(e) => {
          setCardholderName(e.target.value);
          removeErrorBorder('cardholderName');
        }}
      />
      <input
        type="text"
        className=" fnam"
        id="email"
        placeholder="Email address"
        value={userId !== null ? userId.Email : email}
        readOnly={userId !== null}
        onClick={() => { handleupward("email") }}
        onFocus={() => { handleupward("cardholderName") }}
        onChange={(e) => {
          setEmail(e.target.value.toLowerCase());
          removeErrorBorder('email');
        }}
      />
      <input
        type="text"
        className="fnam"
        id="confirmedemail"
        placeholder="Confirm Email address"
        value={userId !== null ? userId.Email : confirmemail}
        readOnly={userId !== null}
        onClick={() => { handleupward("confirmedemail") }}
        onFocus={() => { handleupward("cardholderName") }}
        onChange={(e) => {
          setConfirmemail(e.target.value.toLowerCase());
        }}
      />

      <label className="labeltext">
        <span className="pasword">Payment information</span>
        <span className="secure"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13 5.5H3C2.72386 5.5 2.5 5.72386 2.5 6V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V6C13.5 5.72386 13.2761 5.5 13 5.5Z" stroke="#2C292A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.75 5.5V3.25C5.75 2.65326 5.98705 2.08097 6.40901 1.65901C6.83097 1.23705 7.40326 1 8 1C8.59674 1 9.16903 1.23705 9.59099 1.65901C10.0129 2.08097 10.25 2.65326 10.25 3.25V5.5" stroke="#2C292A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg> Secure</span>
      </label>

      <div style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '12px' }}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      <label className="labeltext">
        <span className="pasword">Country or region</span>
      </label>

      <input
        type="text"
        className=" fnam"
        id="billingAddress"
        placeholder="Address"
        value={userId !== null ? userId.Address : billingAddress}
        readOnly={userId !== null}
        onClick={() => { handleupward("billingAddress") }}
        onFocus={() => { handleupward("cardholderName") }}
        onChange={(e) => {
          setBillingAddress(e.target.value);
          removeErrorBorder('billingAddress');
        }}
      />

      <input
        type="text"
        className=" fnam"
        placeholder="Zip code"
        id="zip"
        value={userId !== null ? userId.zip : zip}
        readOnly={userId !== null}
        onClick={() => { handleupward("zip") }}
        onFocus={() => { handleupward("cardholderName") }}
        onChange={(e) => {
          setZip(e.target.value);
          removeErrorBorder('zip');
        }}
      />
      <div className="termdiv">
        <span className="term"> By continuing, you agree to the  <span className="condition">Terms of service </span></span>
      </div>
      <button 
        className="buybtn" 
        onClick={() => handlePayment(stripe, elements)}
        disabled={!stripe || loading}
      >
        {
          loading ? (
            <>
              Processing...
            </>
          ) : (
            <>
              Place your order: ${purchase.price}.00 USD
            </>
          )
        }
      </button>
    </div>
  );
}

export default function PopularCourses({ language, showCancelButton, handleNavigationClick, large, medium }) {
  const userState = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [InitialCourses, setInitialCourses] = useState([]);
  const [localLang, setLocalLang] = useState(language);
  const [cardholderName, setCardholderName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [purchase, setpurchase] = useState("")
  const [succ, setSucc] = useState(false)
  const [err, setErr] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [available, setAvailable] = useState(false)
  const [coulan, setCoulan] = useState("English")
  const [plans, setPlans] = useState([]);
  const [userId, setUserId] = useState(null);
  const [confirmemail, setConfirmemail] = useState("");
  const location = useLocation();


  useEffect(() => {
    const personId = localStorage.getItem("userId");
    if (personId) {
      try {
        const decoded = jwtDecode(personId);
        setUserId(decoded);
        setEmail(decoded.Email || '');
        setConfirmemail(decoded.Email || '');
        setBillingAddress(decoded.Address || '');
        setCardholderName(decoded.Name || '');
        setZip(decoded.zip || '');
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);
  const languageOptions = [
    { value: 'English', label: 'English', image: america, planId: null },
    { value: 'Spanish', label: 'Spanish', image: spain, planId: null },
    { value: 'Portuguese', label: 'Portuguese', image: barzil, planId: null },
    { value: 'Russian', label: 'Russian', image: russia, planId: null },
    { value: 'Arabic', label: 'Arabic', image: arabic, planId: null },
    { value: 'Hindi', label: 'Hindi', image: india, planId: null },
    { value: 'French', label: 'French', image: france, planId: null },
    { value: 'Urdu', label: 'Urdu', image: pakistan, planId: null },
  ];
  const visibleModal = () => {
    setSucc(true)
  }
  const errModal = (message = "") => {
    setErrorMessage(message)
    setErr(true)
  }
  const availblemodal = () => {
    setAvailable(true)
  }
  const hideModal = () => {
    setSucc(false)
  }
  const hideavailble = () => {
    setAvailable(false)
  }
  const errhideModal = () => {
    setErr(false)
    setErrorMessage("")
    setModalVisible(true);
  }

  const showModal = async (courseId) => {
    setModalVisible(true);

    setpurchase(courseId)



  };
  const handleCancel = () => {
    setModalVisible(false);
  };


  const openNotification = (type, message) => {
    notification[type]({
      message,
      duration: 3,
    });
  };

  function removeErrorBorder(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('error-border')) {
      element.classList.remove('error-border');
    }
  }
  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      console.log('Email is valid.');
      return true;
    } else {
      console.log('Email is invalid.');
      return false;
    }
  }
  const handlePayment = async (stripe, elements) => {
    if (!stripe || !elements) {
      openNotification("error", "Stripe is not loaded. Please refresh the page.");
      return;
    }

    if (!isValidEmail(email)) {
      openNotification("error", "Please enter a valid email address");
      return;
    }
    if (!cardholderName || !email || !billingAddress || !zip) {
      // Handle validation errors
      if (!cardholderName) document.getElementById('cardholderName').classList.add('error-border');
      if (!email) document.getElementById('email').classList.add('error-border');
      if (!billingAddress) document.getElementById('billingAddress').classList.add('error-border');
      if (!zip) document.getElementById('zip').classList.add('error-border');
      if (!confirmemail) document.getElementById('confirmedemail').classList.add('error-border');
      return;
    }
    if (email != confirmemail) {
      openNotification("error", "Confirm Email must be same")
      return;
    }
    try {
      setLoading(false);

      // Create payment intent on backend
      const paymentIntentResponse = await axios.post('https://unitedeldtserver.vercel.app/api/create-payment-transactions', {
        amount: Math.round(purchase.price * 100), // Convert to cents
        courseEnrollments: [
          {
            courseId: purchase._id,
            lessonIndex: 0,
            language: purchase.language || 'English',
            name: purchase.courseName
          },
        ],
        fullName: cardholderName,
        Email: email,
        price: purchase.price,
        address: billingAddress,
        zip: zip,
      });

      if (paymentIntentResponse.data.available === true) {
        availblemodal()
        handleCancel()
        setLoading(true);
        return;
      }

      // Confirm payment with Stripe
      if (paymentIntentResponse.data.clientSecret) {
        const cardElement = elements.getElement(CardElement);
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
          paymentIntentResponse.data.clientSecret,
          {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: cardholderName,
                email: email,
                address: {
                  line1: billingAddress,
                  postal_code: zip,
                },
              },
            },
          }
        );

        if (confirmError) {
          console.error('Payment confirmation error:', confirmError);
          // Get the user-friendly error message from Stripe
          const errorMsg = confirmError.message || 'Payment failed. Please try again.';
          errModal(errorMsg);
          handleCancel();
          setModalVisible(false);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
          // Payment succeeded, now enroll the student
          try {
            const enrollmentResponse = await axios.post('https://unitedeldtserver.vercel.app/api/confirm-payment-enrollment', {
              paymentIntentId: paymentIntentResponse.data.paymentIntentId,
              Email: email,
              courseEnrollments: [
                {
                  courseId: purchase._id,
                  lessonIndex: 0,
                  language: purchase.language || 'English',
                  name: purchase.courseName
                },
              ],
              fullName: cardholderName,
              price: purchase.price,
              address: billingAddress,
              zip: zip,
            });

            if (enrollmentResponse.data.success) {
              visibleModal();
              handleCancel();
            } else {
              throw new Error('Enrollment failed');
            }
          } catch (enrollmentError) {
            console.error('Enrollment error:', enrollmentError);
            // Payment succeeded but enrollment failed - you might want to handle this differently
            const errorMsg = enrollmentError.response?.data?.message || enrollmentError.message || "Payment succeeded but enrollment failed. Please contact support.";
            openNotification("error", errorMsg);
            errModal(errorMsg);
            handleCancel();
            setModalVisible(false);
          }
        }
      } else if (paymentIntentResponse.data.success) {
        // Payment already processed on backend
        visibleModal();
        handleCancel();
      }

    } catch (error) {
      console.error('Payment error:', error);
      // Extract error message from various possible sources
      let errorMsg = "An error occurred while processing your payment. Please try again.";
      
      if (error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error.response?.data?.error) {
        errorMsg = error.response.data.error;
      } else if (error.message) {
        errorMsg = error.message;
      }
      
      errModal(errorMsg);
      handleCancel()
      setModalVisible(false);
    } finally {
      setLoading(true);
    }
  };
  const handleupward = (idofinput) => {
    const screenWidth = window.innerWidth;


  };



  const handleLanguageChange = (selectedOption, planId) => {
    // Update language in state
    setCoulan(selectedOption);
    // Find the index of the plan with the specified planId
    const planIndex = plans.findIndex(plan => plan._id === planId);

    if (planIndex !== -1) {
      // Create a copy of the plans array to avoid mutating state directly
      const updatedPlans = [...plans];

      // If language property doesn't exist in the plan, add it
      if (!updatedPlans[planIndex].language) {
        updatedPlans[planIndex].language = selectedOption;
      } else {
        // Update the language of the plan with the specified planId
        updatedPlans[planIndex] = {
          ...updatedPlans[planIndex],
          language: selectedOption,
        };
      }

      // Update the state with the modified plans
      setPlans(updatedPlans);
    }
  };










  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);
  useEffect(() => {
    axios.get("https://unitedeldtserver.vercel.app/api/courses").then((res) => {
      const pathParts = location.pathname.split('/');
      // Remove the first item from plans if the screen size is small and pathname is '/classa'
      setPlans(pathParts[1] === 'classa' ? res.data.slice(1) : res.data);
    });
    console.log(plans)
  }, [isSmallScreen, location.pathname]);



  const [cardtitle, setCardtitle] = useState([
    { offer:"We have other courses for you"},
  ]);
  
  // Fetch the route parameter
  const { pglan } = useParams();
  
  // Effect to update cardtext based on the route parameter
  useEffect(() => {
    // Define different states for different languages
    let newText;
    switch (pglan) {
      case "Spanish":
        newText = [
          { offer:"Nuestros otros cursos"},        ];
        break;
      case "Portuguese":
        newText = [
          { offer:"Nós temos outros cursos para você"},
        ];
        break;
      // Add more cases for other languages if needed
      default:
        newText = [
          { offer:"We have other courses for you"},
                ];
    }
    // Update the cardtext state
    setCardtitle(newText);
  }, [pglan]);

  return (
    <>
      <Translator
        from="en"
        to={language || "en"}
        googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
      >
       
       
        <div className="courses-area tw-my-3" id="courses">
          <div id="thistarget"></div>
          <div className="container ">
            <div className="nottoshow">
                <div className="section-title titleforcards">
              <span className="sub-title ">
                <Translate>Take the course your way</Translate>
              </span>
              <h3 className="tab-title" >
                <Translate>Choose a course in the language of your preference</Translate>
              </h3>
              <span className="sub">
                <Translate>
                  Enjoy high-level learning methods; you are the creator of your own career, and we will guide you every step of the way
                </Translate>
              </span>
            </div>
            
            </div>
          
<div className="forclassb">
  <div className="section-title mb-0">
    <h3 className="tab-title mt-3 mb-0" >
                <Translate>{cardtitle[0].offer} </Translate>
              </h3>
  </div>

</div>


          </div>
        </div>












        {
          plans.length > 0 ? (
            <>



              <div className="customcard" >
                <CustomDropdown options={languageOptions} handleLanguageChange={handleLanguageChange} language={language} plans={plans} large={large} medium={medium} showModal={showModal} showCancelButton={showCancelButton} handleNavigationClick={handleNavigationClick} />

              </div>

            </>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

                <span>Loading...</span>

              </div>
            </>
          )
        }


        <Modal
          open={modalVisible}
          onCancel={handleCancel}
          className="custom-modal"
          closeIcon={null}
          footer={null}
          id="mainmodalforpay"
        >
          <div className="mainblack">
            <span className="pricetxt">${purchase.price}.00</span><br></br>
            <span className="description"><span className="categoryi"> {purchase.courseName} </span>
              {
                purchase.language ? (
                  <>({purchase.language})  </>
                ) : (
                  <>(English) </>
                )
              }

              - ELDT Theory certificate
            </span>
          </div>

          <GooglePay purchase={purchase} cardholderName={cardholderName} />
          <Elements stripe={stripePromise}>
            <PaymentForm
              purchase={purchase}
              cardholderName={cardholderName}
              email={email}
              confirmemail={confirmemail}
              billingAddress={billingAddress}
              zip={zip}
              userId={userId}
              loading={!loading}
              handlePayment={handlePayment}
              handleCancel={handleCancel}
              handleupward={handleupward}
              removeErrorBorder={removeErrorBorder}
              setCardholderName={setCardholderName}
              setEmail={setEmail}
              setConfirmemail={setConfirmemail}
              setBillingAddress={setBillingAddress}
              setZip={setZip}
            />
          </Elements>
          <div className="cancel" onClick={handleCancel}>Cancel</div>
        </Modal>

        <Modal
          open={succ}
          onCancel={hideModal}
          closeIcon={null}
          footer={null}
        >
          <div className="mainbody">
            <div className="imgalign">
              <img src={Successi} alt="success" />
            </div>
            <span className="message">Payment successfully processed</span><br></br>
            <span className="exp">Congratulations! You are now part of United. Click the button below to start your studies.</span>
            {
              showCancelButton ? (<Link to="/login"><button className="buybtn">Start Now</button></Link>) : (<button onClick={() => { handleNavigationClick("information") }} className="buybtn">Start Now</button>)
            }

            {/* <Link to="/studentdash"><button className="buybtn2">Start Now</button></Link> */}
          </div>
        </Modal>
        <Modal
          open={err}
          onCancel={errhideModal}
          closeIcon={null}
          footer={null}
        >
          <div className="mainbody">
            <div className="imgalign">

              <img src={errir} alt="success" />
            </div>
            <span className="message" style={{ marginTop: "24px" }}>Error processing payment</span><br></br>
            <span className="exp" >
              {errorMessage || "Please try again. If the issue persists, contact your card issuer or try using another card."}
            </span>
            <button className="buybtn" onClick={errhideModal}>To try again</button>
          </div>
        </Modal>
        <Modal

        
          open={available}
          onCancel={hideavailble}
          closeIcon={null}
          footer={null}
        >
          <div className="mainbody">
            <div className="imgalign">

              <img src={errir} alt="success" />
            </div>
            <span className="message" style={{ marginTop: "24px" }}>You have already purchase this course</span><br></br>
            <span className="exp" >Please buy another course or select diffrent language</span>
            <button className="buybtn" onClick={hideavailble}>To try again</button>
          </div>
        </Modal>
      </Translator>
    </>
  );
}
