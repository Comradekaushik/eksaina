import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
// import Entry from "./components/common/entry/Entry";
// import Home from "./components/home/Home";
// import Dummy from "./components/common/entry/Dummy";
import Login from "./components/login/Login";
import Signup from "./components/Signup/Signup";
import Question from "./components/admin/Question";
import AdminQuestionPaperCreate from "./components/admin/AdminQuestionPaperCreate";
import Requirements from "./components/Requirements";
import AdminMain from "./components/admin/AdminMain";
import Register from "./components/aspirants/Register";
import Home from "./components/home/Home";
// import Signup from "./components/login/Signup";
// import AdminMain from "./components/admin/AdminMain";
// import EntryHeader from "./components/common/entry/EntryHeader";

function App() {
  // console.log("Rendered");
  const [isAuthorized, setIsAuthorized] = useState(null);
  // localStorage.getItem("isAuthorized") && localStorage.getItem("isAuthorized") === 1 ? 1 : 0
  

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthorized");
    setIsAuthorized(storedAuth === "1" ? 1 : 0);
  }, []);
  useEffect(() =>{
    setIsAuthorized(localStorage.getItem("isAuthorized") === "1" ? 1: 0);

  },[localStorage.getItem("isAuthorized")]);

  const setlocalstorage = () => {
    setIsAuthorized(1);
    localStorage.setItem("isAuthorized", "1");
  };
  const removelocalstorage = () => {
    setIsAuthorized(0);
    localStorage.setItem("isAuthorized", "0");
  };
  return (
    <div className="App">
      {/* <button onClick={setlocalstorage}>Set localStorage</button> */}

      {/* <button onClick={removelocalstorage}>unset localStorage</button> */}
      
      {/* <Routes> */}
        {/* <Route path="/" element={isAuthorized=== 1 ? <Entry/> : <Home/>}></Route> */}
        {/* <Route path="/home" element={<Home/>}> */}
          {/* <Route path="calendar" element={<Dummy/>}></Route> */}
          {/* <Route path="entryheader" element={<EntryHeader/>}></Route> */}

        {/* </Route> */}
        {/* <Route path="/notifications" element={<Dummy/>}></Route> */}

        {/* <Route path="/login" element={<Login/>}/> */}
        {/* <Route path="/signup" element={<Signup/>}/> */}
        {/* <Route path="/logout" element={<Signup/>}/> */}

        {/* <Route path="/enrollin" element={<Signup/>}/> */}
        {/* <Route path="/current-enrollments" element={<Signup/>}/> */}
        {/* <Route path="/upcoming" element={<Signup/>}/> */}
        {/* <Route path="/past-performance" element={<Signup/>}/> */}
        {/* <Route path="/enrollments" element={<Signup/>}/> */}

        {/* <Route path="/take-exam" element={<Signup/>}/> */}
        {/* <Route path="/exam/:id/question/:id" element={<Signup/>}/> */}
        {/* <Route path="/certificates" element={<Signup/>}/> */}
        {/* <Route path="/exam/:id" element={<Signup/>}/> */}
        {/* <Route path="/exam/:id/result" element={<Signup/>}/> */}

        {/* <Route path="/admin" element={<AdminMain/>}/> */}
        {/* <Route path="/admin/test/sample-questions" element={<Signup/>}/> */}
        {/* <Route path="/admin/test/user-messages" element={<Signup/>}/> */}
        {/* <Route path="/admin/new-test" element={<Signup/>}/> */}
        {/* <Route path="/admin/all-tests" element={<Signup/>}/> */}
        {/* <Route path="/admin/test/:testid/response/:id" element={<Signup/>}/> */}
        {/* <Route path="/admin/edit/test/:id" element={<Signup/>}/> */}
        {/* <Route path="/admin/test/results" element={<Signup/>}/> */}
        {/* <Route path="/admin/test/violations" element={<Signup/>}/> */}
        {/* <Route path="/admin/test/violations/:id" element={<Signup/>}/> */}
        {/* <Route path="/admin/writemessage/:id" element={<Signup/>}/> */}
        {/* <Route path="/admin/announcements" element={<Signup/>}/> */}

      {/* </Routes> */}


      <Routes>
          
          <Route path='/login' element={<Login/>}>
            <Route path='signup' element={<Signup/>}></Route>
          
          </Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/create-question-paper' element={<AdminMain/>}></Route>
          <Route path='/requirements' element={<Requirements/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          

      </Routes>
    </div>
  );
}

export default App;
