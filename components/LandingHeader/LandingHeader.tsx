import Image from "next/image";
import styles from "./LandingHeader.module.css";
import Link from "next/link";
const LandingHeader = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.left_img_div}>
          <Image
            src={"/images/file-header/img-two.png"}
            alt="lamp"
            height={100}
            width={250}
          />
        </div>

        <div className={styles.center_div}>
          <h3 className="text-rose-600 font-bold mb-5">
            Best Furniture For Your Castle...
          </h3>
          <h1 className=" font-bold mb-5 text-4xl font-Josefin Sans">
          Welcome to Hekto

          </h1>
          <p className="text-gray-400 text-sm mb-5">
          Discover the Best Furniture for Your Home. High-quality furniture <br /> with the best deals. Transform your space with elegance.
          </p>
          <Link href="/login">
                <button className={styles.btn}>
                    Login to Continue
                </button>
            </Link>
        </div>

        <div className={styles.right_img_div}>
          <Image
            src={"/images/file-header/img-one.png"}
            alt="lamp"
            height={100}
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
