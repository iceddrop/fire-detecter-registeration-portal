import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import ValidateOtp from "./component/ValidateOtp";
import LandingPage from "./pages/LandingPage/LandingPage";
import Team from "./pages/Team/Team"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/validate-otp" element={<ValidateOtp />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
