import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import styles from "./login.module.css";
import Link from "next/link";

const page = () => {
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
          <form className={styles.form}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.para}>
              Please login using your account details below.
            </p>

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
                placeholder="Password"
                required
                aria-label="Password"
              />
            </div>

            <Link className="hover:text-sky-700" href="/forgot-password">
              Forgot your password?
            </Link>
            <Link href={"/"}>
              <button className={styles.btn} type="button">
                Login
              </button>
            </Link>

            <p className={styles.last_link}>
              Don&#39;t have an account?{" "}
              <Link className="hover:text-sky-700" href="/signup">
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

export default page;
