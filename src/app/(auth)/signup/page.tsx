"use client";
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import styles from "./signup.module.css";
import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  
  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

   
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }
    if (password.length < 4 || password.length > 18) {
      setError("Password must be between 4 and 18 characters.");
      setSuccess("");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

   
    const userData = {
      email,
      password, 
    };
    localStorage.setItem("user", JSON.stringify(userData));

    
    setError("");
    setSuccess("Signup successful! Redirecting to login...");
    setTimeout(() => {
      window.location.href = "/login"; 
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">SignUp</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. signup</span>
          </p>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Sign Up</h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <div className={styles.input_div}>
              <input
                className={styles.input}
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email Address"
              />
            </div>

            <div className={styles.input_div}>
              <input
                className={styles.input}
                type="password"
                placeholder="Password 4 - 18"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={4}
                maxLength={18}
                aria-label="Password"
              />
            </div>

            <div className={styles.input_div}>
              <input
                className={styles.input}
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                aria-label="Confirm Password"
              />
            </div>

            <Link className="hover:text-sky-700" href="/forgot-password">
              Forgot your password?
            </Link>
            <button className={styles.btn} type="submit">
              Signup
            </button>

            <p className={styles.last_link}>
              if you have an account?{" "}
              <Link className="hover:text-sky-700" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
