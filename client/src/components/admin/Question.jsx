import React from "react";
import "./Question.css";

function Question() {
  return (
    <div className="question-edit-main-container">
      <div className="question-edit-top-section">
        <div>
          <div
            className="question-edit-question-text-content"
            contenteditable="true"
          ></div>
          <div className="question-edit-rich-text-editor-container"></div>
        </div>
        <div className="question-edit-question-image-input-container">
          <input className="question-edit-question-image-input" type="file" />
        </div>
        <div>
          <div className="question-edit-type-question-selector"></div>
        </div>
      </div>
      <div className="question-edit-chosen-image"></div>
      <div className="question-edit-options">

      </div>
      <div className="add-option-button-container">
        <button>+ Add Option</button>
      </div>
      
    </div>
  );
}

export default Question;
