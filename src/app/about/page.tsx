import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import Section3 from "../../../components/Section3/Section3";

import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. about us</span>
          </p>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.upper_div}>
            <div className={styles.upper_left_div}>
              <Image
                src={"/images/about/left-img.png"}
                alt="img"
                height={100}
                width={450}
              />
            </div>
            <div className={styles.upper_right_div}>
              <h1 className="text-3xl font-semibold text-blue-900">
                Know About Our Ecomerce <br /> Business, History
              </h1>
              <p className="text-sm mb-10 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis velit accusamus delectus vel necessitatibus, nesciunt
                ad, molestiae aspernatur eveniet, sapiente et veniam?
              </p>
              <Link href={"./contact"} className={styles.btn} type="button">
                Contact Us
              </Link>
            </div>
          </div>

          <div className={styles.middle_div}>
            <Section3 />
          </div>

          <div className={styles.lower_div}>
            <h1 className="text-3xl font-semibold text-blue-900 mt-14 mb-6">
              Our Client Say!
            </h1>
            <div className={styles.client_img}>
              <span>
                <Image
                  src={"/images/about/client1.png"}
                  alt="img"
                  height={100}
                  width={50}
                />
              </span>
              <span>
                <Image
                  src={"/images/about/client2.png"}
                  alt="img"
                  height={100}
                  width={60}
                />
              </span>
              <span>
                <Image
                  src={"/images/about/client3.png"}
                  alt="img"
                  height={100}
                  width={50}
                />
              </span>
            </div>
            <h3 className="text-xl p-3">Seline Gomez</h3>
            <p className="text-xs mb-3 text-slate-500">CEO At Webecy Digital</p>
            <p className="text-xs text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam{" "}
              <br /> quae iure dolor voluptate tempore ad suscipit quisquam.
              Quas velit, modi iure nihil ratione <br /> numquam ullam omnis
              temporibus, aspernatur animi fugiat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
