import { message } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

function QuizCreator() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    options: ["", "", ""],
    correctAnswer: [], // Array to hold indices of correct answers
    reason: ""
  });

  const handleQuestionChange = (e) => {
    setNewQuestion({ ...newQuestion, question: e.target.value });
  };

  const handleOptionChange = (value, index) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index] = value;
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const handleCorrectAnswerChange = (index) => {
    const updatedCorrectAnswers = [index]; // Only one correct answer allowed
    setNewQuestion({ ...newQuestion, correctAnswer: updatedCorrectAnswers });
  };

  const handleReasonChange = (value) => {
    setNewQuestion({ ...newQuestion, reason: value });
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    const emptyarray = ""

    setNewQuestion({
      question: emptyarray,
      options: [emptyarray, emptyarray, emptyarray],
      correctAnswer: [], // Reset correct answer
      reason: ""
    });
  
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Add Question</h2>
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="question" className="form-label">Question</label>
              <input
                type="text"
                className="form-control"
                id="question"
                value={newQuestion.question}
                onChange={handleQuestionChange}
              />
            </div>
            {[0, 1, 2].map((index) => (
              <div className="mb-3" key={index}>
                <label htmlFor={`option-${index}`} className="form-label">Option {index + 1}</label>
                <input
                  type="text"
                  className="form-control"
                  id={`option-${index}`}
                  value={newQuestion.options[index]}
                  onChange={(e) => handleOptionChange(e.target.value, index)}
                />
              </div>
            ))}
            <div className="mb-3">
              <label className="form-label">Correct Answer</label>
              {[0, 1, 2].map((index) => (
                <div className="form-check form-check-inline" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`correct-answer-${index}`}
                    checked={newQuestion.correctAnswer.includes(index)}
                    onChange={() => handleCorrectAnswerChange(index)}
                  />
                  <label className="form-check-label" htmlFor={`correct-answer-${index}`}>{`Option ${index + 1}`}</label>
                </div>
              ))}
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">Reason</label>
              <ReactQuill
                value={newQuestion.reason}
                onChange={handleReasonChange}
                modules={{
                  toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['bold', 'italic', 'underline'],
                    ['link'],
                    [{ 'align': [] }],
                    ['clean']
                  ]
                }}
              />
            </div>
            <button className="btn btn-primary" onClick={handleAddQuestion}>Add Question</button>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Preview JSON</h2>
          <div className="border p-3">
            <pre>{JSON.stringify(questions, null, 2)}</pre>
            {questions.length > 0 && (
              <button className="btn btn-secondary" onClick={() => {navigator.clipboard.writeText(JSON.stringify(questions, null, 2));message.success("Ho gaya copy")}}>Copy JSON</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCreator;
