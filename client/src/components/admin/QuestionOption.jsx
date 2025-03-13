import React, { useState } from "react";
import "./Question.css";
// import { useEffect } from "react";

function QuestionOption(props) {
  // console.log("This is my option key: " + props.optionKey);
  // console.log(
  //   "I am a option and This is my question key: " + props.questionKey
  // );

  // useEffect(()=>{
  //   console.log("option rendered "+ props.optionKey);
  // },[]);

  return (
    <div className="question-option">
      <div>
        <h1>option details</h1>
        <div>option key: {props.optionKey}</div>
        <div>option text: {props.optionText}</div>
        <div>question key: {props.questionKey}</div>
      </div>

      <label>
        <input
          type="radio"
          name={props.questionKey}
          value={props.optionKey}
          onChange={(event) => {
            props.updateQuestionAnswer(props.questionKey, props.optionKey);
          }}
        />
      </label>
      {/* <div
        className="option-content-editable-portion"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={(event) => {
          console.log(
            `onblur run on option id ${props.optionKey} ${event.target.innerText} `
          );
          props.updateQuestionOptions(props.questionKey, {
            optionText: event.target.innerText,
            optionKey: props.optionKey,
            questionKey: props.questionKey,
          });
        }}
      >
        {props.optionText}
      </div> */}

      <div
        className="option-content-editable-portion"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={(event) => {
          // console.log(
          //   `onblur run on option id ${props.optionKey} ${event.target.innerText} `
          // );
          // props.updateQuestionOptions(props.questionKey, {
          //   optionText: event.target.innerText,
          //   optionKey: props.optionKey,
          //   questionKey: props.questionKey,
          // });
          // props.updatethisquestionoptions(
          //   props.questionKey,
          //   props.optionKey,
          //   event.target.innerText
          // );
          if (event.target.innerText !== props.optionText) {
            props.updatethisquestionoptions(props.questionKey, props.optionKey, event.target.innerText);
          }
        }}
      >
        {props.optionText}
      </div>

      <button className="option-remove-btn">Remove</button>
    </div>
  );
}

export default QuestionOption;
