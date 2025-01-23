import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/9feae60ea81842259049ab0f27467b93-free-removebg-preview.png";
import CircleLoader from "react-spinners/CircleLoader";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", phonenumber: "" });
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const navigate = useNavigate();
  const ToastExample = () => {
    const showToast = () => {
      toast.success("This is a toast alert!", {
        position: toast.POSITION.TOP_CENTER,
      });
    };
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(
        "https://fireseysbackend-1.onrender.com/api/v1/FireEyes/register",
        formData
      );
      alert("{validate-otp");
      navigate("/validate-otp", {
        state: { phonenumber: formData.phonenumber },
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="register-background w-full flex justify-center items-center lg:justify-start h-screen lg:py-4">
      <div className="bg-gray-600 w-full h-full  absolute opacity-50 z-40"></div>
      <div className="register-container  lg:h-full w-80 flex flex-col justify-center items-center z-50 relative ml-4">
        <div className="flex justify-center">
          <img class="h-20" src={logo} alt="Fireeye Logo" />
          <span className="brand-text-one self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Fire<span className="brand-text-two text-red-600 ">Eyes</span>
          </span>
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col w-full">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className=" flex flex-col pt-4 w-60">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex justify-center pt-4 pb-6">
            <button
              type="submit"
              className="py-2 px-4 text-white rounded-md bg-red-600"
            >
              {loading ? (
                <CircleLoader
                  loading={loading}
                  size={30}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  color={color}
                />
              ) : (
                "Register"
              )}
            </button>
          </div>

          {error && <p className="error text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
