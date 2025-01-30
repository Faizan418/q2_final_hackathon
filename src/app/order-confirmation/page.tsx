"use client";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./order-confirmation.module.css";
import Link from "next/link";
export default function OrderConfirmationPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Order Completed</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. Order Completed</span>
          </p>
        </div>
      </div>
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-sm  mb-4">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. <br /> You will receive an email confirmation
          when your order is completed.
        </p>
        <Link href='/home'>
        <button className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded">
          Continue Shopping
        </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
