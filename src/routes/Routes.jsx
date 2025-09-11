import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationStudent from "../pages/AuthenticationStudent.jsx";
import HeaderFooter from "../components/global/HeaderFooter";
import ContactUs from "../pages/ContactUs";
import NotFound from "../components/404";
import HomeMain from "../pages/HomeMain";
import Homepage from "../Studentdashboard/Homepage";
import AddLessonForm from "./AddLessonForm";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Studypage from "../Studentdashboard/Studypage.jsx";
import Quize from "../Studentdashboard/Quiz.jsx";
import QuizLesson from "../Studentdashboard/QuizLessons.jsx";
import Allchap from "../Studentdashboard/Allchap.jsx";
import Logout from "../Studentdashboard/Logout.jsx"
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx"
import Loader from "../Studentdashboard/Loader.jsx";
import HomeofclassaSpanish from "../pages/Spanish/HomeofclassaSpanish.jsx"
import {
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StudentNav from "../Studentdashboard/StudentNav.jsx";
import Homeofclassa from "../pages/Homeofclassa.jsx";
import TermsAndCondition from "../pages/TermsAndCondition.jsx";
import LoaderAnimationSVGComponent from "../components/Home/LoaderAnimationSVGComponent.jsx";
import ClassB from "../pages/ClassB.jsx";
import ClassBSpanishSpanish from "../pages/Spanish/ClassBSpanish.jsx";
import Navigate from "../pages/Naviagte.jsx";
import SliderPage from "../components/Home/Sliderpage.jsx";
import CdlPrepHome from "../cdl-prep/Quiez-section/CdlPrepHome.jsx";
import Cdlpretrip from "../cdl-prep/Quiez-section/CdlpretripA.jsx";
import CdlpretripA from "../cdl-prep/Quiez-section/CdlpretripA.jsx";
import CdlpretripB from "../cdl-prep/Quiez-section/CdlpretripB.jsx";
import CdlpretripC from "../cdl-prep/Quiez-section/CdlpretripC.jsx";
import Cdlpretrip1 from "../cdl-prep/Quiez-section/Cdlpretrip1.jsx";
import Cdlpretrip2 from "../cdl-prep/Quiez-section/Cdlpretrip2.jsx";
import Cdlpretrip3 from "../cdl-prep/Quiez-section/Cdlpretrip3.jsx";
import Cdlparking1 from "../cdl-prep/Quiez-section/Cdlparking1.jsx";
import Cdlparking2 from "../cdl-prep/Quiez-section/Cdlparking2.jsx";
import Cdlparking4 from "../cdl-prep/Quiez-section/Cdlparking4.jsx";
import CdlRoad from "../cdl-prep/Quiez-section/CdlRoad.jsx";
import Cdlparking3 from "../cdl-prep/Quiez-section/Cdlparking3.jsx";
import QuizCreator from "../cdl-prep/States/QuizCreator.jsx";
import CdlprepStates from "../cdl-prep/Quiez-section/CdlprepStates.jsx";
import CdlprepSteps from "../cdl-prep/Quiez-section/CdlprepSteps.jsx";
import QuizPage from "../cdl-prep/States/QuizPage.jsx";
import Signin from "../cdl-prep/authenticate/Signin.jsx";


const stripePromise = loadStripe('pk_test_51O5F9gFZtgAr5eHPPYRptE8ZBDBXAtaLj7XGBnSp106qIqacE80PBnqGyndDPhtDYDpBWNvpJ8YmObgxijiNX22o00C8ueO5lb'); // Replace with your actual public key

const AppRoutes = () => {
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const personId = localStorage.getItem("userId");
    console.log("Token from localStorage:", personId); // Log the token value
    if (personId) {
      try {
        const decoded = jwtDecode(personId);
        console.log("Decoded Token:", decoded); // Log the decoded token
        setUserId(decoded);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);
  return (
    <Router>
      <div
        className=""
        style={{
          maxHeight: "fit-content",
        }}
      >

        <Routes>
          {/* ================= Public Routes Started */}

          <Route
            path="/login"
            element={
              <AuthenticationStudent />
            }
          />

          <Route
            path="/classa/:pglan"
            element={

              <Navigate />

            }
          />
              <Route
            path="/cdlprep/home"
            element={

             <CdlPrepHome/>

            }
          />
             <Route
            path="/Pretrip/questionA"
            element={

             <CdlpretripA/>

            }
            
          />
           <Route
            path="/parking/road"
            element={

          <CdlRoad/>

            }
            
          />
          
            <Route
            path="/Pretrip/questionB"
            element={

             <CdlpretripB/>

            }
          />
           <Route
            path="/Pretrip/questionC"
            element={

             <CdlpretripC/>

            }
          />
             <Route
            path="/Pretrip/question1"
            element={

             <Cdlpretrip1/>

            }
          />
            <Route
            path="/copy-json"
            element={

             <QuizCreator/>

            }
          />
          <Route
            path="/Pretrip/question2"
            element={

             <Cdlpretrip2/>

            }
          />
          <Route
            path="/Pretrip/question3"
            element={

             <Cdlpretrip3/>

            }
          />
           <Route
            path="/cdlPrep/login"
            element={

             <Signin/>

            }
          />
             <Route
            path="/parking/straight"
            element={

             <Cdlparking1/>

            }
          />
              <Route
            path="/attempQuiz/:quizcata/:quizlang"
            element={

             <QuizPage/>

            }
          />
           <Route
            path="/parking/Offset"
            element={

             <Cdlparking2/>

            }
          />
          
          <Route
            path="/parking/Alleydock"
            element={

             <Cdlparking4/>

            }
          />
           <Route
            path="/parking/Parallel"
            element={

             <Cdlparking3/>

            }
          />
           <Route
            path="/cdlprep/states"
            element={

            <CdlprepStates/>

            }
          />
             <Route
            path="/cdlprep/steps"
            element={

          <CdlprepSteps/>

            }
          />
          <Route
            path="/privacy"
            element={
              <HeaderFooter>
                <PrivacyPolicy />

              </HeaderFooter>

            }
          />
          
          <Route
            path="/Loading"
            element={

              <LoaderAnimationSVGComponent />


            }
          />
          <Route
            path="/classB"
            element={
              <HeaderFooter>

                <ClassB />
              </HeaderFooter>



            }
          />
          <Route
            path="/termandconditions"
            element={
              <HeaderFooter>
                <TermsAndCondition />

              </HeaderFooter>

            }
          />

          <Route
            path="/logout"
            element={
              <Logout />
            }
          />
          <Route
            path="/loader"
            element={
              <Loader />
            } />

          <Route
            path="/quiz/:id"
            element={
              <QuizLesson />
            }
          />

          <Route
            path="/test/:index/:chap"
            element={
              <Quize />
            }
          />


          <Route
            path="/Alllessons/:id"
            element={
              <Allchap />
            }
          />

          <Route
            path="/"
            element={
              <HeaderFooter>
                <HomeMain />
              </HeaderFooter>
            }
          />
          <Route path="/slider"
            element={
              <SliderPage />
            }
          />


          <Route
            path="/StudentLesson/:id/:index"
            element={
              <Studypage />
            }
          />









          <Route
            path="/contact-us"
            element={
              <HeaderFooter>
                <ContactUs />
              </HeaderFooter>
            }
          />



          {/* ================= Public Routes Started Ended */}


          {/* ============== Admin Routes Ended  */}
          <Route path="/studentdash" element={<Homepage />} />
          <Route path="/studentdash/:local" element={<Homepage />} />
          <Route
            path="/*"
            element={
              <HeaderFooter>
                <NotFound />
              </HeaderFooter>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default AppRoutes;
