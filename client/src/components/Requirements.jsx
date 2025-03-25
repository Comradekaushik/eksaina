import React from "react";

function Requirements() {
  return (
    <div>
      <h1>
        Project 3:- Online Exam & Certification Platform Problem Statement:
      </h1>
      <p>
        Educational institutions and professional organizations struggle with
        conducting online exams efficiently. Traditional exam methods lack
        automation, real-time analytics, and security, making exam management
        time-consuming and prone to errors. There is a need for a secure,
        automated, and feature-rich platform that enables seamless exam
        creation, secure participation, auto-grading, and instant certification.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        ________________________________________ Proposed Solution: Develop an
        Online Exam & Certification Platform using the MERN stack that allows
        students and professionals to:
      </p>
      <ol>
        <li>Take online exams with timed sessions and randomized questions</li>
        <li>Receive instant grading & performance analytics</li>
        <li>Get a downloadable certificate upon passing</li>
        <li>
          Ensure secure and fair exam conditions The platform will have
          role-based access (Admin, Examiner, Student) and provide exam history,
          retakes, and reports. Features & Implementation
        </li>
      </ol>
      <h1>Features</h1>
      <ol>
        <li>
          {" "}
          User Authentication & Role-Based Access Implement secure user login
          and role-based dashboard. Frontend: Use React Context API or Redux for
          managing authentication state. Backend: Use JWT for authentication &
          bcrypt.js for password hashing. Libraries: bcrypt.js, jwt,
          express-validator
        </li>
        <li>
          Timed Exams Ensure exams are time-bound, auto-submit when the timer
          ends. Frontend: Use useEffect with setTimeout for countdown. Send
          remaining time to the backend via WebSockets. Backend: Validate
          submission time on the server. Libraries: socket.io, moment.js
        </li>
        <li>
          Randomized Questions Prevent predictability by showing different
          question orders for each attempt. Frontend: Use _.shuffle() from
          Lodash before displaying questions. Backend: Fetch random questions
          using MongoDB’s $sample aggregation. Libraries: lodash{" "}
        </li>
        <li>
          Auto-Grading (MCQs & Objective Questions) Automatically evaluate MCQs
          based on correct answers stored in the database. Frontend: Capture
          selected answers & send them to the backend. Backend: Compare
          responses with correct answers in MongoDB. Libraries: Mongoose,
          Express.js
        </li>
        <li>
          Manual Evaluation (For Subjective Questions) Allow examiners to review
          and grade subjective answers. Frontend: Display pending evaluations in
          an examiner’s dashboard. Backend: Store responses in MongoDB and
          assign them to examiners. Libraries: MongoDB aggregation
        </li>
        <li>
          Performance Analytics & Reports Show users their performance trends
          and insights. Frontend: Use Recharts to visualize score trends.
          Backend: Aggregate exam scores from MongoDB and return analytics.
          Libraries: recharts, mongoose
        </li>
        <li>
          Certificate Generation & Download Generate a downloadable PDF
          certificate after passing an exam. Frontend: Provide a "Download
          Certificate" button. Backend: Use PDFKit in Node.js to create a
          dynamic certificate with user details.
        </li>
        <li>
          {" "}
          Secure Exam Environment (Preventing Cheating) Prevent tab-switching,
          copying, and external assistance. Frontend: Disable right-click &
          copy-paste using JavaScript event listeners. Detect tab-switching
          using visibilitychange event & warn the user. Backend: Log warnings in
          MongoDB.
        </li>
        <li>
          Email Notifications & Exam Reminders Send email confirmations and
          reminders for scheduled exams. Frontend: Allow users to enable email
          notifications. Backend: Use Nodemailer to send scheduled reminders.{" "}
        </li>
        <li>Question Bank & Exam Creation Panel Allow
      admins to create, update, and manage question sets. Frontend: Build a
      CRUD-based UI for managing questions. Backend: Use REST APIs to handle
      question creation & updates. Libraries: React Admin, Material-UI</li>
        <li>Exam
      History & Retake Options Allow users to view past results and retake exams
      if allowed. Frontend: Show past exams in a dashboard. Backend: Store past
      attempts & track retake eligibility in MongoDB.</li>
        <li> Multi-Device
      Compatibility & Responsive UI Ensure exams work smoothly on mobile,
      tablet, and desktop. Frontend: Use Material-UI or CSS for responsive
      design.</li>

      <li>
        <a href="https://medium.com/@vijayrajhonnur/online-examination-system-ux-case-study-4411faae440d">nice</a>
      </li>
      </ol>



        
    </div>
    
  );
}

export default Requirements;
