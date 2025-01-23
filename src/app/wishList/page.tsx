import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import styles from "./wishList.module.css";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Wish List</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. wish list</span>
          </p>
        </div>
      </div>
      <div className="h-screen w-screen text-center content-center justify-center ">

          <p className="text-5xl font-bold"> 404 not found </p>    

      </div>
      <Footer />
    </div>
  );
};

export default page;
