import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import ValidateOtp from "./component/ValidateOtp";
import LandingPage from "./pages/LandingPage/LandingPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/validate-otp" element={<ValidateOtp />} />
      </Routes>
    </Router>
  );
}

export default App;
