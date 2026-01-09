import React, { useState, useEffect, useRef } from "react";
import Banner from "../components/Home/Banner";
import { useSelector } from "react-redux";
import Disclaimer from "../components/Home/Disclaimer";
import PopularCourses from "../components/Home/PopularCourses";
import HomeAboutUs from "../components/Home/HomeAboutUs";
import FeedbackSliderWithFunFacts from "../components/Home/FeedbackSliderWithFunFacts";
import GetInstantCourses from "../components/Home/GetInstantCourses";
import Partner from "../components/Home/Partner";
import NewsLetter from "../components/workWithUs/NewLetter";
import {
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Link } from "react-router-dom";
import ReviewSliderforhome from "./Reviewsliderforhome";

const stripePromise = loadStripe('pk_live_51O5F9gFZtgAr5eHPy7jeusMjQh38l6JqMLq0cHutTr7nfyFbqPZOsNMJaGjfdxZ77lBlz2l7HsTDq8zSqplkasAm00agQNCSx0'); // Replace with your actual public key

export default function HomeMain() {
  const languageState = useSelector((state) => state.language);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <>

      <Banner language={languageState.language.value} />
      <div >
        <Elements stripe={stripePromise}>
          <PopularCourses id="targetSection" language={languageState.language.value} showCancelButton={true} />
        </Elements>
      </div>


      <HomeAboutUs language={languageState.language.value} />
      {
  windowWidth > 500 ?(
      <Disclaimer language={languageState.language.value} />):(null)}
      <div className="homereview">
 
<ReviewSliderforhome/>

      </div>
<div className="coverofdisclaimer">
  {
  windowWidth > 500 ?(
     null):( <Disclaimer language={languageState.language.value} />)}
</div>

      {/* <NewsLetter language={languageState.language.value} /> */}
    </>

  );
}
