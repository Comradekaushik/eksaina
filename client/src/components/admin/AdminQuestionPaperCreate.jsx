import React from "react";
import { useState } from "react";
import "./adminquestionpaper.css";
import QuestionPaperHeader from "./QuestionPaperHeader";
import Question from "./Question";

function AdminQuestionPaperCreate() {
  // console.log("Again rendered");
  const [questions, setQuestions] = useState([]);
  // const [questions, setQuestions] = [props.questions, props.setQuestions];

  const uniqueKeyCreator = (questionsarr) => {
    const randomnum = Math.round(Math.random() * 9999);
    const randomnum2 = Math.round(Math.random() * 9999);
    const randomnum3 = Math.round(Math.random() * 9999);
    let datenow = new Date().toString();
    datenow = datenow.split(" ").join("");
    datenow = datenow.replace(/[:+()]/g, "");

    datenow =
      datenow + randomnum + randomnum2 + randomnum3 + (questionsarr.length + 1);
    return datenow.toLowerCase();
  };

  const updateQuestionText = (questionKey, questionText) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        return question.questionKey === questionKey
          ? { ...question, questionText: questionText }
          : question;
      })
    );
  };

  const updateQuestionType = (questionKey, questionType) => {
    // const updatedQuestions = questions.map((item) => {
    //   if (item.questionKey === questionKey) {
    //     // Return a new object with the updated property
    //     return { ...item, questionType: questionType };
    //   }
    //   return item; // Keep other items unchanged
    // });
    // setQuestions(updatedQuestions);
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        return question.questionKey === questionKey
          ? { ...question, questionType: questionType }
          : question;
      })
    );
  };

  const updateQuestionOptions = (questionKey, newOptionArray) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        return question.questionKey === questionKey
          ? { ...question, questionOptions: newOptionArray }
          : question;
      })
    );

    // const updatedQuestions = questions.map((item) => {
    //   if (item.questionKey === questionKey) {
    //     // Return a new object with the updated property
    //     return {
    //       ...item,
    //       questionOptions: [...item.questionOptions, newOptionObj],
    //     };
    //   }
    //   return item; // Keep other items unchanged
    // });
    // setQuestions(updatedQuestions);
    // console.log("update options ran");

    // let myquestionindex = -1;

    // console.log("length of questions " + questions.length);
    // console.log("new option obj questionKey " + newOptionObj.questionKey);
    // console.log("parameter question key " + questionKey);
    // for (let i = 0; i < questions.length; i++) {
    //   console.log("while iterating question keys " + questions[i].questionKey);
    //   if (
    //     questions[i].questionKey.toString() ===
    //     newOptionObj.questionKey.toString()
    //   ) {
    //     myquestionindex = i;
    //     break;
    //   }
    // }
    // console.log("here it is my question index " + myquestionindex);
    // let myquestionoptions = [];
    // if(myquestionindex !== -1){
    //   myquestionoptions = questions[myquestionindex].questionOptions;
    // }

    // console.log(myquestionoptions);

    // setQuestions((prevQuestions) =>
    // prevQuestions.map((question) => {
    // let myoptionarray = question.questionKey;

    // return question.questionKey === questionKey
    //   ? {
    //       ...question,
    //       questionOptions: myoptionarray,
    //     }
    //   : question;

    // return question.questionKey === questionKey
    //   ? {
    //       ...question,
    //       questionOptions: [...question.questionOptions.filter((item)=>item !== newOptionObj.optionKey ), newOptionObj],
    //     }
    //   : question;

    // ---*original below*---

    // return question.questionKey === questionKey
    // ? {
    // ...question,
    // questionOptions: [...question.questionOptions, newOptionObj],
    // }
    // : question;
    // })
    // );
  };

  // const updateQuestionOptions = (questionKey, newOptionObj) => {
  //   setQuestions((prevQuestions) =>
  //     prevQuestions.map((question) => {
  //       // Check if the current question matches the questionKey
  //       if (question.questionKey === questionKey) {
  //         return {
  //           ...question,
  //           questionOptions: question.questionOptions
  //             .map((option) =>
  //               option.optionKey === newOptionObj.optionKey
  //                 ? { ...option, optionText: newOptionObj.optionText } // Update existing option
  //                 : option
  //             )
  //             .some((option) => option.optionKey === newOptionObj.optionKey)
  //             ? [...question.questionOptions] // If already updated, keep it as is
  //             : [...question.questionOptions, newOptionObj], // Add new option if not found
  //         };
  //       }
  //       return question;
  //     })
  //   );
  // };

  const updateQuestionAnswer = (questionKey, optionid) => {
    // const updatedQuestions = questions.map((item) => {
    //   if (item.questionKey === questionKey) {
    //     // Return a new object with the updated property
    //     return { ...item, questionCorrectOption: optionid };
    //   }
    //   return item; // Keep other items unchanged
    // });
    // setQuestions(updatedQuestions);
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        return question.questionKey === questionKey
          ? { ...question, questionCorrectOption: optionid }
          : question;
      })
    );
  };

  const addQuestion = () => {
    const qkey = uniqueKeyCreator(questions);
    console.log("New question created " + qkey);
    setQuestions([
      ...questions,
      {
        questionKey: qkey,
        questionType: "text-mcq",
        questionText: "new question",
        questionImage: "not-selected-yet",
        questionOptions: [
          // {
          //   optionText: "",
          //   optionKey: "",    //just for prototype
          //   questionKey: "",
          // },
        ],
        questionCorrectOption: "not-selected-yet",
        questionMarks: 0,
        // updateQuestionType: updateQuestionType,
        // updateQuestionOptions: updateQuestionOptions,
        // updateQuestionAnswer: updateQuestionAnswer,
        // updateQuestionText : updateQuestionText,
      },
    ]);
  };
  return (
    <div id="admin-question-paper-create-main-container">
      <QuestionPaperHeader />
      {/* <Question/> */}
      <div id="add-question-fixed-btn-container">
        <button onClick={addQuestion}>Add Question</button>
      </div>

      {questions.map((item) => {
        let item2 = {
          ...item,
          updateQuestionType: updateQuestionType,
          updateQuestionOptions: updateQuestionOptions,
          updateQuestionAnswer: updateQuestionAnswer,
          updateQuestionText: updateQuestionText,
        };
        return <Question key={item2.questionKey} {...item2} />;
      })}

      <div>
        <button
          onClick={() => {
            console.log(questions);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AdminQuestionPaperCreate;
