import React from 'react';

const AnswersPage = ({ selectedAnswers, questions, langforquiz }) => {
    return (
        <div className='selectedanswers'>
            <h1>Selected Answers</h1>
            <ul>
                {selectedAnswers.map((answer, index) => (
                    <li key={index}>
                        {questions && questions[langforquiz] && questions[langforquiz][index] ? (
                            <>
                                <strong>Question {index + 1}:</strong> 
                                <div className='quizQuestion'>{questions[langforquiz][index].question}</div>
                                <br />
                                {answer !== null ? (
                                    <>
                                        <strong>Selected Answer:</strong>
                                        <div  className={`optionforquiz ${questions[langforquiz][index].correctAnswer[0] === answer ? 'correct' : 'incorrect'}`}>{questions[langforquiz][index].options[answer]}</div> 
                                    </>
                                ) : (
                                    <>
                                        <strong>Selected Answer:</strong>   <div className='optionforquiz incorrect'>Skipped</div>
                                    </>
                                )}
                            </>
                        ) : (
                            <strong>Question {index + 1}: Not found</strong>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnswersPage;
