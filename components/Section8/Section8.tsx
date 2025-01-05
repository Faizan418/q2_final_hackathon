import Image from "next/image";
import styles from "./Section8.module.css";
const Section8 = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.upper_div}>
          <div className={styles.upper_div_details}>
            <h1 className={styles.main_heading}>
              Get Leader Update By Subscribe <br /> Our Newlater
            </h1>
            <button className={styles.btn} type="button">
              Shop Now
            </button>
          </div>
        </div>
        <div className={styles.lower_div}>
          <div className={styles.img_div}>
            <Image
              src={"/images/file-eight/logos-img.png"}
              alt="logos"
              height={100}
              width={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
