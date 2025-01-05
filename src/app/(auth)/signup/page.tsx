import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import styles from "./signup.module.css";
import Link from "next/link";

const page = () => {
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
          <form className={styles.form}>
            <h1 className={styles.title}>Sign Up</h1>

            <div className={styles.input_div}>
              <input
                className={styles.input}
                type="email"
                placeholder="Email Address"
                required
                aria-label="Email Address"
              />
            </div>

            <div className={styles.input_div}>
              <input
                className={styles.input}
                type="password"
                placeholder="Password 4 - 18"
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
                required
                aria-label="Password"
              />
            </div>

            <Link className="hover:text-sky-700" href="/forgot-password">
              Forgot your password?
            </Link>
            <Link href={"/login"}>
              <button className={styles.btn} type="button">
                Signup
              </button>
            </Link>

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

export default page;
