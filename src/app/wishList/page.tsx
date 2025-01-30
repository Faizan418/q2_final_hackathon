// 'use client';
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import styles from "./wishList.module.css";


// import { useState } from "react";

const page = () => {
  // const [value, setvalue] = useState(0)
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

           {/* <button type="button" onClick={()=> setvalue(value + 1)}>+</button>
           <p>{value}</p> 
           <button type="button" onClick={()=> setvalue(value - 1)}>-</button>  */}

      </div>
      <Footer />
    </div>
  );
};

export default page;
