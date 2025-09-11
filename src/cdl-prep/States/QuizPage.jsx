import React, { useEffect, useState } from 'react';
import Tanks from "./Tanks.json";
import School from "./school.json"
import "./States.css";
import quizima from "../images/modern-truck-driver-on-highway 1.png";
import { Drawer } from 'antd';
import { Link, useParams } from 'react-router-dom';
import AnswersPage from "./AnswersPage"
import General from "./General.json"
import Brake from "./Brakes.json"
import Combination from "./Combinations.json"
import Double from "./Double.json"
import Hazmat from "./Hazmat.json"
import Passenger from "./Passenger.json"
function QuizPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [seewhy, setSeewhy] = useState(true)
    const [reson, setReson] = useState(false)
    const [error, setError] = useState(null)
    const [submit, setSubmit] = useState(true)
    const [seeanswers, setSeeanswers] = useState(true)
    const [skippedQuestions, setSkippedQuestions] = useState(0);
    const [showresults, setShowresults] = useState(true);
    const [langforquiz, setLangforquiz] = useState("en");
    const [cate, setCate] = useState(null);
    const [Questions, setQuestions]=useState(General)
    const { quizlang } = useParams();
    const {quizcata}=useParams()
    const [answerssele,setAnswerssele]= useState([])

    useEffect(() => {
        setLangforquiz(quizlang);
        setCate(quizcata);
        
        if (quizcata === "general") {
            setQuestions(General);
        } else if (quizcata === "school") {
            setQuestions(School);
        } else if (quizcata === "tanks") {
            setQuestions(Tanks);
        } else if (quizcata === "brakes") {
            setQuestions(Brake);
        } else if (quizcata === "double") {
            setQuestions(Double);
        } else if (quizcata === "combination") {
            setQuestions(Combination);
        } else if (quizcata === "hazmat") {
            setQuestions(Hazmat);
        } else if (quizcata === "Passenger") {
            setQuestions(Passenger);
        }
    }, [quizlang, quizcata]);
    
    useEffect(() => {
        setAnswerssele(Array(Questions[langforquiz]?.length || 0).fill(null));
    }, [Questions, langforquiz]);
    

    
    
    const [result, setResult] = useState({
        correctAnswers: 0,
        skippedQuestions: 0
    });
        const currentQuestion = Questions[langforquiz][currentIndex];
    const totalQuestions = Questions[langforquiz].length;
    console.log(answerssele)
    const handleOptionClick = (index) => {
        const newSelectedAnswers = [...answerssele];
        newSelectedAnswers[currentIndex] = index;
        setAnswerssele(newSelectedAnswers)
        setSelectedAnswer(index);
        setError(null); // Remove error message when a new option is selected

    };
    const handlenext = () => {
        setSelectedAnswer(null)
        setError(null);
        setCurrentIndex(prevIndex => prevIndex + 1);
        setSeewhy(true);
        setSubmit(true)
        calua()
    }
    const handleskip = () => {
        setSelectedAnswer(null)
        setError(null);
        setCurrentIndex(prevIndex => prevIndex + 1);
        setSeewhy(true);
        setSubmit(true)
        calua()
        setSkippedQuestions(prevIndex => prevIndex + 1);

    }
    const handleSubmit = () => {
        if ((currentIndex + 1) < Questions[langforquiz].length) { // Check if all questions are not completed
            if (selectedAnswer !== null) {
                if (currentQuestion.correctAnswer[0] === selectedAnswer) {
                    setCurrentIndex(prevIndex => prevIndex + 1);
                    setResult(prevResult => ({
                        ...prevResult,
                        correctAnswers: prevResult.correctAnswers + 1
                    }));
                    setCorrectAnswers(prev => prev + 1); // Increment correct answers count
                    calua(); // Call function to calculate percentage
                    setSelectedAnswer(null);
                } else {
                    setSeewhy(false);
                    setSubmit(false);
                }
                setError(null);
            } else {
                setError("Please select an option before submitting.");
            }
        } else {
            setShowresults(false); // Set state to display results
            alert(currentQuestion.correctAnswer[0])
        }
    };


    const [percentage, setPercentage] = useState(0)
    const calua = () => {
        const totalquestion = Questions[langforquiz].length
        const progress = (currentIndex + 1) / totalquestion * 100
        setPercentage(progress)
    }
    const totalAttempts = correctAnswers + (totalQuestions - currentIndex - 1) + skippedQuestions;
    const obtainPercentage = (correctAnswers / totalAttempts) * 100;
    const chartData = {
        labels: Questions[langforquiz].map((_, index) => `Question ${index + 1}`),
        datasets: [
            {
                label: 'Percentage Correct',
                data: Questions[langforquiz].map((_, index) => index === currentIndex ? obtainPercentage : null),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    // Chart options
    const chartOptions = {
        scales: {
            yAxes: [{
                type: 'linear',
                display: true,
                position: 'left',
            }],
        },
    };



    return (
        <>
            <>


                {showresults ? (
                    <>

                        <div className='parent_quiz'>
                            <div className='topbar_ofquiz'>
                                <Link to="/cdlprep/home">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70771 0.292893C8.31719 -0.0976311 7.68402 -0.0976311 7.2935 0.292893L0.29398 7.29241L0.293497 7.29289L0.210938 7.38639M0.294027 8.70764L7.2935 15.7071L7.3877 15.7903C7.78 16.0953 8.34723 16.0676 8.70771 15.7071L8.7909 15.6129C9.09592 15.2206 9.06819 14.6534 8.70771 14.2929L3.41548 9H15.0006L15.1172 8.99327C15.6146 8.93551 16.0006 8.51284 16.0006 8C16.0006 7.44772 15.5529 7 15.0006 7H3.41548L8.70771 1.70711L8.7909 1.6129C9.09592 1.22061 9.06819 0.653377 8.70771 0.292893" fill="#313035" />
                                </svg>
                                </Link>
                              
                                <span>Quiz</span>
                               
                            </div>
                            <div className='titleheadingquiz'>
                                Question  {currentIndex + 1}/{Questions[langforquiz].length}
                            </div>
                            <div className='quizQuestion'>
                                {
                                    currentQuestion.question
                                }
                            </div>
                            <div className='forquizimage'>
                                <img src={quizima} alt='quia image' ></img>
                            </div>
                            <div className='progressbarquiz'>
                                <span className='totalnumber'>{percentage.toFixed(2)}%</span>
                                <div className='parentcover'>
                                    <div className='realprogressindi' style={{ width: `${percentage}%` }}></div>
                                </div>
                                <span className='totalnumber'>({currentIndex + 1}/{Questions[langforquiz].length})</span>
                            </div>
                            {
                                submit ? (<>
                                    {currentQuestion.options.map((option, index) => (
                                        <div
                                            key={index}
                                            className={`optionforquiz ${selectedAnswer === index ? 'selected' : ''}`}
                                            onClick={() => handleOptionClick(index)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </>) : (
                                    <>
                                        {currentQuestion.options.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`optionforquiz ${currentQuestion.correctAnswer[0] === index ? 'correct' : ''} ${selectedAnswer === index && !currentQuestion.correctAnswer.includes(index) ? 'incorrect' : ''}`}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </>
                                )
                            }





                            {
                                error === null ? (null) : (<div className="alert alert-danger alertitem" role="alert">
                                    {error}
                                </div>)
                            }
                            {
                                submit ? (
                                    <div className='nextbt mb-4'>
                                        <div className='submitbtn' onClick={handleSubmit}>
                                            Submit
                                        </div>
                                        <div className='submitbtn' onClick={handleskip}>
                                            Skip
                                        </div>

                                    </div>
                                ) : (
                                    <div className='nextbt'>
                                        <div className='submitbtn2' onClick={handlenext}>
                                            Next
                                        </div>

                                    </div>
                                )
                            }


                        </div>
                        {
                            seewhy ? (null) : (<div className='seewhybtn' onClick={() => { setReson(true) }}>See Why</div>)
                        }
                    </>
                ) : (
                    <>
                    {
                        seeanswers ?( <div className="quiz-result">
                        {/* <Line data={chartData} options={chartOptions} /> */}
                        <div className='topbar_ofquiz'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70771 0.292893C8.31719 -0.0976311 7.68402 -0.0976311 7.2935 0.292893L0.29398 7.29241L0.293497 7.29289L0.210938 7.38639M0.294027 8.70764L7.2935 15.7071L7.3877 15.7903C7.78 16.0953 8.34723 16.0676 8.70771 15.7071L8.7909 15.6129C9.09592 15.2206 9.06819 14.6534 8.70771 14.2929L3.41548 9H15.0006L15.1172 8.99327C15.6146 8.93551 16.0006 8.51284 16.0006 8C16.0006 7.44772 15.5529 7 15.0006 7H3.41548L8.70771 1.70711L8.7909 1.6129C9.09592 1.22061 9.06819 0.653377 8.70771 0.292893" fill="#313035" />
                            </svg>
                            <span>Score</span>
                            <span></span>
                        </div>
                        <div className='congratext'>Congratulations!</div>
                        <div className='centergreydiv'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="64" viewBox="0 0 63 64" fill="none">
                                <path d="M20.0902 14.7204C19.8966 14.9139 19.7497 15.1472 19.627 15.403L19.6132 15.3892L0.228654 59.0562L0.247666 59.0752C-0.111819 59.7718 0.489627 61.189 1.7219 62.423C2.95417 63.6552 4.37137 64.2567 5.06787 63.8972L5.08516 63.9145L48.7522 44.5282L48.7384 44.5127C48.9924 44.3917 49.2257 44.2448 49.421 44.0477C52.1206 41.3482 47.7429 32.5944 39.6458 24.4956C31.5453 16.3968 22.7915 12.0208 20.0902 14.7204Z" fill="#FBB723" />
                                <path d="M22.4649 22.5186L0.716033 57.9589L0.228654 59.0564L0.247666 59.0754C-0.111819 59.7719 0.489627 61.1891 1.7219 62.4231C2.12286 62.8241 2.53938 63.1282 2.94726 63.3858L29.378 31.16L22.4649 22.5186Z" fill="#D69813" />
                                <path d="M39.7726 24.36C47.8437 32.4346 52.3252 41.0415 49.7777 43.5855C47.2319 46.133 38.625 41.6533 30.5487 33.5822C22.4759 25.5076 17.9961 16.8972 20.5419 14.3515C23.0894 11.8057 31.6963 16.2854 39.7726 24.36Z" fill="#D69813" />
                                <path d="M32.1301 25.2984C31.7861 25.5767 31.3368 25.7219 30.8615 25.67C29.3613 25.5075 28.0997 24.9856 27.2165 24.1612C26.2815 23.2884 25.8201 22.1166 25.9462 20.9431C26.1675 18.883 28.2345 16.9922 31.7585 17.3725C33.129 17.5194 33.7408 17.0787 33.7616 16.8678C33.7858 16.6587 33.2828 16.097 31.9123 15.9484C30.4121 15.7859 29.1505 15.264 28.2656 14.4396C27.3306 13.5668 26.8674 12.395 26.9953 11.2215C27.22 9.16135 29.2853 7.2706 32.8058 7.65255C33.8048 7.7597 34.3319 7.55404 34.5549 7.42096C34.7329 7.31208 34.8037 7.20838 34.8107 7.14789C34.8314 6.93877 34.3354 6.37707 32.9614 6.22844C32.0125 6.12474 31.3247 5.27442 31.4301 4.32386C31.5321 3.37503 32.3807 2.68889 33.333 2.79259C36.8535 3.17109 38.4712 5.45762 38.2482 7.51947C38.0235 9.58305 35.9582 11.4703 32.4343 11.0919C31.4353 10.983 30.9134 11.1904 30.6887 11.3234C30.5107 11.4306 30.4381 11.536 30.4312 11.5948C30.4087 11.8056 30.9082 12.3656 32.2822 12.5142C35.8027 12.8945 37.4204 15.1793 37.1974 17.2411C36.9745 19.3012 34.9092 21.192 31.3869 20.81C30.388 20.7029 29.8626 20.9103 29.6379 21.0416C29.4581 21.1522 29.389 21.2559 29.3821 21.3147C29.3596 21.5238 29.8591 22.0855 31.2314 22.2342C32.1785 22.3379 32.8681 23.1899 32.7626 24.1387C32.7142 24.6123 32.474 25.0219 32.1301 25.2984Z" fill="#2C292A" />
                                <path d="M52.9937 41.2819C56.4037 40.3192 58.7559 41.8401 59.3158 43.8363C59.8758 45.8307 58.6625 48.3558 55.2543 49.315C53.9236 49.6883 53.5243 50.3243 53.5779 50.5265C53.6367 50.7304 54.3124 51.0657 55.6398 50.6907C59.048 49.7315 61.4002 51.2524 61.9601 53.2468C62.5235 55.243 61.3068 57.7646 57.8969 58.7255C56.5679 59.0988 56.1669 59.7366 56.2256 59.9388C56.2827 60.141 56.9567 60.4763 58.2858 60.103C59.2018 59.8455 60.1592 60.3795 60.4168 61.2972C60.6725 62.2167 60.1385 63.1707 59.2191 63.4299C55.8126 64.3891 53.4587 62.8717 52.8952 60.8738C52.3353 58.8793 53.5503 56.3578 56.9619 55.3968C58.2927 55.0218 58.6919 54.3875 58.6332 54.1836C58.5779 53.9814 57.9038 53.6444 56.5765 54.0177C53.1648 54.9786 50.8144 53.4612 50.2527 51.4615C49.691 49.4671 50.906 46.9455 54.3159 45.9828C55.6432 45.6112 56.0425 44.9718 55.9871 44.7713C55.9284 44.5674 55.2561 44.2321 53.927 44.6054C53.0076 44.8646 52.0553 44.3289 51.796 43.4111C51.5385 42.4951 52.0743 41.5411 52.9937 41.2819Z" fill="#2C292A" />
                                <path d="M39.7532 36.62C39.2451 36.62 38.7439 36.3971 38.4017 35.9719C37.8054 35.2253 37.9281 34.1382 38.6713 33.542C39.048 33.2395 48.0351 26.1812 60.7364 27.9976C61.6817 28.1324 62.3385 29.0069 62.2037 29.9523C62.0689 30.8959 61.2013 31.5596 60.2473 31.4179C49.0255 29.8244 40.9129 36.1776 40.8334 36.2415C40.5119 36.4973 40.1317 36.62 39.7532 36.62Z" fill="#2C292A" />
                                <path d="M9.94393 29.4313C9.77974 29.4313 9.6121 29.4071 9.44618 29.3587C8.53192 29.0839 8.01343 28.1212 8.28823 27.207C10.2464 20.6861 12.0213 10.2801 9.84023 7.56663C9.59654 7.259 9.22842 6.95655 8.38501 7.02049C6.76387 7.14493 6.91769 10.5652 6.91942 10.5998C6.99201 11.5521 6.27649 12.3817 5.32593 12.4525C4.35982 12.5113 3.54406 11.8096 3.4732 10.8573C3.29519 8.47399 4.03663 3.88364 8.12577 3.57428C9.95084 3.43601 11.4666 4.0703 12.5364 5.40108C16.6342 10.5013 12.4742 25.2868 11.5996 28.2007C11.375 28.9491 10.6871 29.4313 9.94393 29.4313Z" fill="#2C292A" />
                                <path d="M44.069 20.7894C45.5008 20.7894 46.6614 19.6287 46.6614 18.1969C46.6614 16.7652 45.5008 15.6045 44.069 15.6045C42.6372 15.6045 41.4766 16.7652 41.4766 18.1969C41.4766 19.6287 42.6372 20.7894 44.069 20.7894Z" fill="#FBB723" />
                                <path d="M3.45658 36.3438C5.3656 36.3438 6.91317 34.7963 6.91317 32.8872C6.91317 30.9782 5.3656 29.4307 3.45658 29.4307C1.54757 29.4307 0 30.9782 0 32.8872C0 34.7963 1.54757 36.3438 3.45658 36.3438Z" fill="#FBB723" />
                                <path d="M56.1667 38.0726C57.5984 38.0726 58.7591 36.9119 58.7591 35.4801C58.7591 34.0484 57.5984 32.8877 56.1667 32.8877C54.7349 32.8877 53.5742 34.0484 53.5742 35.4801C53.5742 36.9119 54.7349 38.0726 56.1667 38.0726Z" fill="#FBB723" />
                                <path d="M40.6159 58.8118C42.0476 58.8118 43.2083 57.6512 43.2083 56.2194C43.2083 54.7876 42.0476 53.627 40.6159 53.627C39.1841 53.627 38.0234 54.7876 38.0234 56.2194C38.0234 57.6512 39.1841 58.8118 40.6159 58.8118Z" fill="#FBB723" />
                                <path d="M48.3902 12.1485C50.2992 12.1485 51.8468 10.601 51.8468 8.69194C51.8468 6.78292 50.2992 5.23535 48.3902 5.23535C46.4812 5.23535 44.9336 6.78292 44.9336 8.69194C44.9336 10.601 46.4812 12.1485 48.3902 12.1485Z" fill="#FBB723" />
                                <path d="M56.1667 19.0609C57.5984 19.0609 58.7591 17.9002 58.7591 16.4684C58.7591 15.0367 57.5984 13.876 56.1667 13.876C54.7349 13.876 53.5742 15.0367 53.5742 16.4684C53.5742 17.9002 54.7349 19.0609 56.1667 19.0609Z" fill="#FBB723" />
                                <path d="M50.9831 25.9739C52.4148 25.9739 53.5755 24.8133 53.5755 23.3815C53.5755 21.9497 52.4148 20.7891 50.9831 20.7891C49.5513 20.7891 48.3906 21.9497 48.3906 23.3815C48.3906 24.8133 49.5513 25.9739 50.9831 25.9739Z" fill="#FBB723" />
                                <path d="M20.6784 5.18488C22.1101 5.18488 23.2708 4.0242 23.2708 2.59244C23.2708 1.16067 22.1101 0 20.6784 0C19.2466 0 18.0859 1.16067 18.0859 2.59244C18.0859 4.0242 19.2466 5.18488 20.6784 5.18488Z" fill="#FBB723" />
                            </svg>
                            <span className='welcometext'>Congratulations!</span>
                            <span className='welcometext'>You are ready to take your exam!</span>
                        </div>
                        <div className='donebtn mt-4' onClick={()=>{setSeeanswers(true)}}>
                        check answers                        </div>
                        <div className='flexforresults'>

                            <div className='boxesforresult'>
                                <span className='realtextdata'> %{percentage.toFixed(2)}</span>
                                <span className='datatitle'>Completion</span>
                            </div>
                            <div className='boxesforresult'>
                                <span className='realtextdata'>  {correctAnswers}</span>
                                <span className='datatitle'>Correct Answer</span>
                            </div>
                            <div className='boxesforresult'>
                                <span className='realtextdata'> {totalQuestions - correctAnswers}</span>
                                <span className='datatitle'>Incorrect Answer</span>
                            </div>
                            <div className='boxesforresult'>
                                <span className='realtextdata'> {skippedQuestions}</span>
                                <span className='datatitle'>Skipped</span>
                            </div>
                        </div>
                        <div className='mt-5'></div>
                        <div className='donebtn'>
                            Done
                        </div>
                        <AnswersPage selectedAnswers={answerssele} questions={Questions} langforquiz={langforquiz}/>
                    </div>):(                       null
)
                    }
                       
                    </>
                )

                }
            </>

            <Drawer
                closeIcon={false}
                placement="bottom"
                height={200}
                onClose={() => { setReson(false) }}
                open={reson}
                style={{ background: "#000" }}
            >
                <div className='readontext' dangerouslySetInnerHTML={{ __html: currentQuestion.reason }}></div>
            </Drawer>
        </>
    )
}

export default QuizPage