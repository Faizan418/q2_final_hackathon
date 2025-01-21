import Data from "../../../components/Data/Data";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import styles from "./products.module.css";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Products</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. products</span>
          </p>
        </div>
      </div>
      <div className={styles.main_container}>
        <Data/>
      </div>
      <Footer />
    </div>
  );
};

export default page;
