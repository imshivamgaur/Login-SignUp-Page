import React from "react";
import "../src/App.css"
import { LoginPage } from "./components/Pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "./components/Pages/SignupPage";
import { Home } from "./components/Pages/Home";


const App = () => {
  return (
    <>
      <div className="MainContainer">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
