import React from "react";
import "./Question.css";
import { useState,useEffect } from "react";
import QuestionOption from "./QuestionOption";

function Question(props) {
  // const [options, setOptions] = useState([]);

  

  const [myoptions, setMyOptions] = useState([]);


  // console.log("My correct option is option id " + props.questionCorrectOption);

  useEffect(() => {
    console.log("Updated myoptions:", myoptions);
    props.updateQuestionOptions(props.questionKey, myoptions);

  }, [myoptions,props]);

  const uniqueKeyCreator2 = (optionsarr) => {
    let mydate = Date.now().toString();
    const randomnum = Math.round(Math.random() * 9999);
    const key = "optionid" + mydate + randomnum.toString() + optionsarr.length;
    // console.log("uniquekwycreator"+ key);
    return key;
  };

  // const addoption = () => {
  //   // uniqueKeyCreator2(options);

  //   setOptions([
  //     ...options,
  //     {
  //       optionText: "Default Text",
  //       optionKey: uniqueKeyCreator2(options),
  //       questionKey: props.questionKey,

  //       updateQuestionOptions: props.updateQuestionOptions,
  //       updateQuestionAnswer: props.updateQuestionAnswer,
  //     },
  //   ]);
  // setMyOptions([
  //   ...options,
  //   {
  //     optionText: "this option",
  //     optionKey: uniqueKeyCreator2(options),
  //     questionKey: props.questionKey,
  //     updateQuestionOptions: props.updateQuestionOptions,
  //     updateQuestionAnswer : props.updateQuestionAnswer,
  //   },
  // ]);
  // };

  const updatethisquestionoptions = (questionkey, optionkey, innertext) => {
    console.log(
      `I will update question options and my question key is ${questionkey} my option key is " ${optionkey}`
    );

    // const alloptionsexceptme = myoptions.filter(
    //   (option) => option.optionKey !== optionkey
    // );
    //console.log("Innertext comming? " + innertext); //✅

    // Filter out other options if required
    // setMyOptions([
    //   ...alloptionsexceptme,
    //   {
    //     optionText: innertext,
    //     optionKey: optionkey,
    //     questionKey: questionkey,
    //     // updatethisquestionoptions: updatethisquestionoptions,
    //     // updateQuestionAnswer: props.updateQuestionAnswer,
    //   },
    // ]);
    setMyOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.optionKey === optionkey
          ? { ...option, optionText: innertext }
          : option
      )
    );
    // console.log(myoptions);
  };

  const addoption2 = () => {
    setMyOptions([
      ...myoptions,
      {
        optionText: "Default Text",
        optionKey: uniqueKeyCreator2(myoptions),
        questionKey: props.questionKey,
        // updatethisquestionoptions : updatethisquestionoptions,

        // updateQuestionAnswer: props.updateQuestionAnswer,
      },
    ]);
  };

  // console.log(props.questionType);

  // console.log("This is my question key : " + props.questionKey);
  return (
    <div className="question-edit-main-container">
      <div className="question-edit-top-section">
        <div className="question-edit-top-section-right">
          <div
            className="question-edit-question-text-content"
            contentEditable="true"
            suppressContentEditableWarning={true}
            onBlur={(event) => {
              props.updateQuestionText(
                props.questionKey,
                event.target.innerText
              );
            }}
          >
            Question Text{props.questionText}
            {/* {props.questionType} */}
            {/* {options.map((option) => {
              return <p key={option.optionKey}>{option.optionText}</p>;
            })} */}
          </div>
          <div className="question-edit-rich-text-editor-container"></div>
        </div>
        <div className="question-edit-question-image-input-container">
          <input className="question-edit-question-image-input" type="file" />

          <select
            onChange={(event) =>
              props.updateQuestionType(props.questionKey, event.target.value)
            }
          >
            <option value={"text-mcq"}>mcq</option>
            <option value={"text-subjective"}>subjective</option>
          </select>
        </div>
        <div>
          <div className="question-edit-type-question-selector"></div>
        </div>
      </div>
      <div className="question-edit-chosen-image"></div>
      <div className="question-edit-options">
        {/* {options.map((item) => {
          return <QuestionOption {...item} key={item.optionKey} />;
        })} */}

        <br />
        <br />

        {myoptions.map((item) => {
          let item2 = {
            ...item,
            updatethisquestionoptions: updatethisquestionoptions,

            updateQuestionAnswer: props.updateQuestionAnswer,
          };
          return <QuestionOption {...item2} key={item2.optionKey} />;
        })}
      </div>
      <div className="add-option-button-container">
        <button
          onClick={() => {
            // addoption();
            addoption2();
          }}
        >
          + Add Option
        </button>
      </div>
    </div>
  );
}

export default Question;
