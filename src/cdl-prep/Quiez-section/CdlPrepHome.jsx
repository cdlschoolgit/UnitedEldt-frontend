import React, { useEffect, useState } from 'react'
import "../style.css"
import Cdlprepnav from '../Cdlprepnav'
import Cdlprepheader from '../Cdlprepheader'
import img1 from '../images/generalKnowledge.png'
import img2 from '../images/combination.png'
import img3 from '../images/airbreakes.png'
import img4 from '../images/hazmat.png'
import img5 from '../images/passenger.png'
import img6 from '../images/triples.png'
import img11 from '../images/schoolbus.png'
import img7 from '../images/tanks.png'
import img8 from '../engflag.png'
import img9 from '../portflag.png'
import img10 from '../spanflag.png'
import { Empty } from 'antd'
import { Link, redirect } from 'react-router-dom'
import { Translate,Translator } from 'react-auto-translate/lib/commonjs'
function CdlPrepHome() {

  const [selectedLanguage, setSelectedLanguage] = useState('');
  
  const [filteredarray, setFilteredarray] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState(null)
  console.log(selectedLanguage)
  const engques = [{
    title: "General Knowledge",
    question: "240 Questions",
    imgpath: img1,
    time: "1 hour 15 min",
    redirecter:"general"
  }, {
    title: "Combinations",
    question: "65 Questions",
    imgpath: img2,
    time: "1 hour 15 min",
    redirecter:"combination"
  }, {
    title: "Air Brakes",
    question: "71 Questions",
    imgpath: img3,
    time: "1 hour 15 min",
    redirecter:"brakes"
  }
    , {
    title: "Hazmat",
    question: "57 Questions",
    imgpath: img4,
    time: "1 hour 15 min",
    redirecter:"hazmat"
  }, {
    title: "Doubles/Triples",
    question: "35 Questions",
    imgpath: img5,
    time: "1 hour 15 min",
    redirecter:"double"
  }, {
    title: "Tanks",
    question: "37 Questions",
    imgpath: img6,
    time: "1 hour 15 min",
    redirecter:"tanks"
  }, {
    title: "Passenger",
    question: "50 Questions",
    imgpath: img7,
    time: "1 hour 15 min",
    redirecter:"Passenger"
  }
  , {
    title: "School Bus",
    question: "40 Questions",
    imgpath: img11,
    time: "1 hour 15 min",
    redirecter:"school"
  }]
  const Português = [{
    title: "Conhecimento geral",
    question: "240 Questions",
    imgpath: img1,
    time: "1 hour 15 min",
    redirecter:"general"
  }, {
    title: "Combinações",
    question: "65 Questions",
    imgpath: img2,
    time: "1 hour 15 min",
    redirecter:"combination"
  }, {
    title: "Freios a ar",
    question: "71 Questions",
    imgpath: img3,
    time: "1 hour 15 min",
    redirecter:"brakes"
  }
    , {
    title: "Materiais perigosos",
    question: "50 Questions",
    imgpath: img4,
    time: "1 hour 15 min",
    redirecter:"passenger"
  }, {
    title: "Duplos/triplos",
    question: "35 Questions",
    imgpath: img5,
    time: "1 hour 15 min",
    redirecter:"double"
  }, {
    title: "Tanques",
    question: "37 Questions",
    imgpath: img6,
    time: "1 hour 15 min",
    redirecter:"tanks"
  }, {
    title: "Passageira",
    question: "50 Questions",
    imgpath: img7,
    time: "1 hour 15 min",
    redirecter:"Passanger"
  }
  , {
    title: "Ônibus escolar",
    question: "40 Questions",
    imgpath: img11,
    time: "1 hour 15 min",
    redirecter:"school"
  }]
  const spanish = [{
    title: "Conocimientos generales",
    question: "240 Questions",
    imgpath: img1,
    time: "1 hour 15 min",
    redirecter:"general"
  }, {
    title: "Combinaciones",
    question: "65 Questions",
    imgpath: img2,
    time: "1 hour 15 min",
    redirecter:"combination"
  }, {
    title: "Frenos de aire",
    question: "71 Questions",
    imgpath: img3,
    time: "1 hour 15 min",
    redirecter:"brakes"
  }
    , {
    title: "Materiales peligrosos",
    question: "57 Questions",
    imgpath: img4,
    time: "1 hour 15 min",
    redirecter:"passenger"
  }, {
    title: "Dobles/Triples",
    question: "35 Questions",
    imgpath: img5,
    time: "1 hour 15 min",
    redirecter:"double"
  }, {
    title: "Tanques ",
    question: "37 Questions",
    imgpath: img6,
    time: "1 hour 15 min",
    redirecter:"tanks"
  }, {
    title: "Pasajera",
    question: "50 Questions",
    imgpath: img7,
    time: "1 hour 15 min",
    redirecter:"Pasajera"
  }
  , {
    title: "Autobús escolar",
    question: "40 Questions",
    imgpath: img11,
    time: "1 hour 15 min",
    redirecter:"school"
  }]

  const [filteredQuestions, setFilteredQuestions] = useState(engques);
  const handleInputChange = (name) => {
    let filteredArray;
    switch (selectedLanguage?.lang1 || "en") {
      case 'English':
        filteredArray = engques.filter((item) => item.title.toLowerCase().startsWith(name.toLowerCase()));
        break;
      case 'Português':
        filteredArray = Português.filter((item) => item.title.toLowerCase().startsWith(name.toLowerCase()));
        break;
      case 'Español':
        filteredArray = spanish.filter((item) => item.title.toLowerCase().startsWith(name.toLowerCase()));
        break;
      default:
        filteredArray = engques.filter((item) => item.title.toLowerCase().startsWith(name.toLowerCase()));;
    }



    // Filter the original array based on the input value
    // const filteredarraay = engques.filter((item) => item.title.toLowerCase().startsWith(name.toLowerCase()));

    setFilteredQuestions(filteredArray)
  };

  

  const handleLanguageChange = (language, flag) => {
    // Save selected language to local storage
    localStorage.setItem('selectedLanguage',JSON.stringify(language))
    setSelectedLanguage(language);

    setSelectedFlag(flag)
    
   
  };
  useEffect(()=>{switch (storedlang?.lang1 || "en") {
    case "English":
       setSelectedFlag(img8);
       break;
    case "Português":
       setSelectedFlag(img9);
       break;
    case "Español":
       setSelectedFlag(img10);
       break;
    default:
       setSelectedFlag(img8);
       break;
  }
  },[])


const storedLanguage = localStorage.getItem('selectedLanguage');
const storedlang= JSON.parse(storedLanguage)

    return (
        <>
     <Translator
      from="en"
      to={storedlang?.lang2 ||"en"}

      googleApiKey="AIzaSyAajLbnGViR4-G9cLML5HrVv7w0XdJr-9M"
    >
      <Cdlprepnav customclass="cdlnav" />
      <div className='text-center '>
        <div className='dropborder '>
  

          <div class="dropdown dropmen ">
            <button class="btn p-0 ps-1 bgdrop dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedFlag && <img src={selectedFlag} alt="" width="20px" />}
               {storedlang ? storedlang?.lang1 : 'Select language'}
            </button>
            <ul class="dropdown-menu dropitem">
              <li><a class="dropdown-item " href="#" onClick={() => handleLanguageChange({lang1:"English",lang2:"en"}, img8)}><img src={img8} alt="" className='me-1' width="20px" /> English</a></li>
              <li><a class="dropdown-item" href="#" onClick={() => handleLanguageChange({lang1:"Português",lang2:"pt"}, img9)}> <img src={img9} alt="" className='me-1' width="20px" /> Português</a></li>
              <li><a class="dropdown-item" href="#" onClick={() => handleLanguageChange({lang1:"Español",lang2:"es"}, img10)}> <img src={img10} alt="" className='me-1' width="20px" /> Español</a></li>
            </ul>
          </div>
        </div>

      </div>

       <Cdlprepheader handleInputChange={handleInputChange} /> 


      {
        filteredQuestions.length === 0 ? <Empty /> : null
      } 
 
      {

filteredQuestions.map((element) => {
          return <>
            <Link to={`/attempQuiz/${element.redirecter}/${storedlang?.lang2 ||"en"}`}>
              <div className='questionWraper'>

                <img src={element.imgpath} alt="image " className="quizListimage" />
                <div className='inerleft'>
                  <h1><Translate>{element.title}</Translate></h1>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.5123 13.4396H4.63229C4.15229 13.4396 3.76562 13.0529 3.76562 12.5729V3.96628C3.76562 3.48628 4.15229 3.09961 4.63229 3.09961H11.5123C11.9923 3.09961 12.379 3.48628 12.379 3.96628V12.5729C12.379 13.0529 11.9923 13.4396 11.5123 13.4396Z" stroke="#999999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.04688 6.95312H8.76688" stroke="#999999" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.04688 9.58691H10.1002" stroke="#999999" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg><Translate>{element.question}</Translate></div>
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.3051 14.2137C11.5673 14.2137 14.2118 11.5692 14.2118 8.30706C14.2118 5.04489 11.5673 2.40039 8.3051 2.40039C5.04294 2.40039 2.39844 5.04489 2.39844 8.30706C2.39844 11.5692 5.04294 14.2137 8.3051 14.2137Z" stroke="#999999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.30859 5.08008V8.30675L10.2953 9.25341" stroke="#999999" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg><Translate>{element.time}</Translate></div>
                </div>
              </div></Link>



          </>
        })
      } 
      </Translator> 
    </>
  )
}

export default CdlPrepHome