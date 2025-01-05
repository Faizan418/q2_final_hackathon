import styles from "./Section3.module.css";
import Image from "next/image";
const Section3 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.title}>
          <h2 className="text-4xl font-semibold flex justify-center p-8 mb-9 text-indigo-700">
            What Shopex Offer!
          </h2>
        </div>
        <div className={styles.box}>
          <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-three/img-1.png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-xs flex text-center">
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
              <br /> Rerum, labore sed!
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-three/img-2.png"}
              alt="item"
              height={100}
              width={64}
            />
            <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-xs flex text-center">
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
              <br /> Rerum, labore sed!
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-three/img-3.png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-xs flex text-center">
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
              <br /> Rerum, labore sed!
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className="mb-4"
              src={"/images/file-three/img-4.png"}
              alt="item"
              height={100}
              width={80}
            />
            <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-xs flex text-center">
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
              <br /> Rerum, labore sed!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
