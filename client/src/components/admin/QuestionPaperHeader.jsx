import React from "react";

function QuestionPaperHeader() {
  return (
    <div className="question-paper-header-main-container">
      <div
        className="question-paper-header-title"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        QuestionPaperHeaderTitle
      </div>
      <div
        className="question-paper-header-description"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        QuestionPaperHeaderDescription
      </div>
    </div>
  );
}

export default QuestionPaperHeader;
