"use client"; // Required to use local storage in a Next.js app
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import styles from "./login.module.css";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validate fields
    if (!email || !password) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    // Retrieve user data from local storage
    let storedUser = null;
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        storedUser = JSON.parse(userData);
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      setError("Something went wrong. Please try again.");
      return;
    }

    // Check if the user exists
    if (!storedUser) {
      setError("No user found. Please sign up first.");
      setSuccess("");
      return;
    }

    // Validate credentials
    if (storedUser.email === email && storedUser.password === password) {
      setError("");
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/home"; // Redirect to homepage
      }, 2000);
    } else {
      setError("Invalid email or password.");
      setSuccess("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Login</h1>
          <p className="font-semibold">
            Home . page <span className="text-rose-600 font-bold">. login</span>
          </p>
        </div>
      </div>

      <div className={styles.main_container}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.para}>
              Please login using your account details below.
            </p>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <div className={styles.input_div}>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                aria-label="Email Address"
              />
            </div>

            <div className={styles.input_div}>
              <input
                className={styles.input}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                aria-label="Password"
              />
            </div>

            <Link className="hover:text-sky-700" href="/forgot-password">
              Forgot your password?
            </Link>
            <button className={styles.btn} type="submit">
              Login
            </button>

            <p className={styles.last_link}>
              Don&#39;t have an account?{" "}
              <Link className="hover:text-sky-500 text-blue-700" href="/signup">
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
