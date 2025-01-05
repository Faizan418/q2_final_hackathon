"use client";

import styles from "./shop.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { MdZoomOutMap } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Shop List</h1>
          <p className="font-semibold">
            Home . page <span className="text-rose-600 font-bold">. shop</span>
          </p>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.tital_div}>
            <h1 className={styles.heding}>Ecommerce Acceries & Fasion item</h1>
            <p className={styles.pera}>About 9,620 result (0.62 seconds)</p>
          </div>
          <div className={styles.main_items_div}>
            <div className={styles.item}>
              <span className={styles.img_div}>
                <Image
                  src={"/images/shop/img1.png"}
                  alt="itm"
                  height={100}
                  width={210}
                />
              </span>
              <span className={styles.desc_div}>
                <h1 className="text-xl font-semibold">
                  Accumsan tincidunt 🟡🔴🔵
                </h1>
                <div className={styles.info}>
                  <span className="text-sm font-semibold">$26.00</span>
                  <span className="text-sm font-semibold">$52.00</span>
                  <span className={styles.rating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </span>
                </div>
                <p className="font-semibold text-slate-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore fugit delectus illo!
                </p>
                <span className="flex gap-5 mt-3">
                  <BsCart4 />
                  <GiSelfLove />
                  <MdZoomOutMap />
                </span>
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.img_div}>
                <Image
                  src={"/images/shop/img2.png"}
                  alt="itm"
                  height={100}
                  width={210}
                />
              </span>
              <span className={styles.desc_div}>
                <h1 className="text-xl font-semibold">
                  Accumsan tincidunt 🟡🔴🔵
                </h1>
                <div className={styles.info}>
                  <span className="text-sm font-semibold">$26.00</span>
                  <span className="text-sm font-semibold">$52.00</span>
                  <span className={styles.rating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </span>
                </div>
                <p className="font-semibold text-slate-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore fugit delectus illo!
                </p>
                <span className="flex gap-5 mt-3">
                  <BsCart4 />
                  <GiSelfLove />
                  <MdZoomOutMap />
                </span>
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.img_div}>
                <Image
                  src={"/images/shop/img3.png"}
                  alt="itm"
                  height={100}
                  width={210}
                />
              </span>
              <span className={styles.desc_div}>
                <h1 className="text-xl font-semibold">
                  Accumsan tincidunt 🟡🔴🔵
                </h1>
                <div className={styles.info}>
                  <span className="text-sm font-semibold">$26.00</span>
                  <span className="text-sm font-semibold">$52.00</span>
                  <span className={styles.rating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </span>
                </div>
                <p className="font-semibold text-slate-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore fugit delectus illo!
                </p>
                <span className="flex gap-5 mt-3">
                  <BsCart4 />
                  <GiSelfLove />
                  <MdZoomOutMap />
                </span>
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.img_div}>
                <Image
                  src={"/images/shop/img4.png"}
                  alt="itm"
                  height={100}
                  width={210}
                />
              </span>
              <span className={styles.desc_div}>
                <h1 className="text-xl font-semibold">
                  Accumsan tincidunt 🟡🔴🔵
                </h1>
                <div className={styles.info}>
                  <span className="text-sm font-semibold">$26.00</span>
                  <span className="text-sm font-semibold">$52.00</span>
                  <span className={styles.rating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </span>
                </div>
                <p className="font-semibold text-slate-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore fugit delectus illo!
                </p>
                <span className="flex gap-5 mt-3">
                  <BsCart4 />
                  <GiSelfLove />
                  <MdZoomOutMap />
                </span>
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.img_div}>
                <Image
                  src={"/images/shop/img5.png"}
                  alt="itm"
                  height={100}
                  width={210}
                />
              </span>
              <span className={styles.desc_div}>
                <h1 className="text-xl font-semibold">
                  Accumsan tincidunt 🟡🔴🔵
                </h1>
                <div className={styles.info}>
                  <span className="text-sm font-semibold">$26.00</span>
                  <span className="text-sm font-semibold">$52.00</span>
                  <span className={styles.rating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </span>
                </div>
                <p className="font-semibold text-slate-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore fugit delectus illo!
                </p>
                <span className="flex gap-5 mt-3">
                  <BsCart4 />
                  <GiSelfLove />
                  <MdZoomOutMap />
                </span>
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.img_div}>
                <Image
                  src={"/images/shop/img6.png"}
                  alt="itm"
                  height={100}
                  width={210}
                />
              </span>
              <span className={styles.desc_div}>
                <h1 className="text-xl font-semibold">
                  Accumsan tincidunt 🟡🔴🔵
                </h1>
                <div className={styles.info}>
                  <span className="text-sm font-semibold">$26.00</span>
                  <span className="text-sm font-semibold">$52.00</span>
                  <span className={styles.rating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </span>
                </div>
                <p className="font-semibold text-slate-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore fugit delectus illo!
                </p>
                <span className="flex gap-5 mt-3">
                  <BsCart4 />
                  <GiSelfLove />
                  <MdZoomOutMap />
                </span>
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles.img_div}>
                <Image
                  src={"/images/shop/img7.png"}
                  alt="itm"
                  height={100}
                  width={210}
                />
              </span>
              <span className={styles.desc_div}>
                <h1 className="text-xl font-semibold">
                  Accumsan tincidunt 🟡🔴🔵
                </h1>
                <div className={styles.info}>
                  <span className="text-sm font-semibold">$26.00</span>
                  <span className="text-sm font-semibold">$52.00</span>
                  <span className={styles.rating}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </span>
                </div>
                <p className="font-semibold text-slate-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore fugit delectus illo!
                </p>
                <span className="flex gap-5 mt-3">
                  <BsCart4 />
                  <GiSelfLove />
                  <MdZoomOutMap />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
