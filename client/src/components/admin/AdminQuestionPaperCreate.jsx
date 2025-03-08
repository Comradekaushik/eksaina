import React from "react";
import "./adminquestionpaper.css";
import QuestionPaperHeader from "./QuestionPaperHeader";
import Question from "./Question";

function AdminQuestionPaperCreate() {
  return (
    <div id="admin-question-paper-create-main-container">
      <QuestionPaperHeader />
      <Question/>
    </div>
  );
}

export default AdminQuestionPaperCreate;
