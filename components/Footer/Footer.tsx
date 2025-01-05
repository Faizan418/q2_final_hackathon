import styles from "./Footer.module.css";
import { BiSend } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main_containar}>
      <div className={styles.containar}>
        <div className={styles.box}>
          <div className={styles.card}>
            <h3 className={styles.headings_leftright}>Exclusive</h3>
            <span className={styles.other}>
              <input
                className={styles.input}
                type="email"
                placeholder="Enter your email"
              />
              <BiSend className={styles.send_icon} />
            </span>
            <h2 className={styles.Subscribe}>Contact info</h2>
            <p className={styles.Get}>
              17 Princess Road, London Greader london <br /> NW-1 8JR, UK
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Catagories</h3>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Leptops & Computers
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Cameras & Photography
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Smart Phones & Tables
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Video Games & Consoles
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Waterproof Headphone
              </Link>
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Customer Care</h3>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                My Account
              </Link>{" "}
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Discound
              </Link>{" "}
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Return
              </Link>{" "}
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Orders History
              </Link>{" "}
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Other Tracking
              </Link>{" "}
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headings_center}>Pages</h3>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Blog
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Browse the Shop
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Catagory
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Pre-Build Pages
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                Visual Composer Eiements
              </Link>
            </p>
            <p className={styles.peras}>
              <Link className={styles.Links} href={""}>
                E-Commerce Pages
              </Link>
            </p>
          </div>
          {/* <div className={styles.card}>
          <h3 className={styles.headings_leftright}>Download App</h3>
          <p className={styles.last_box_pera}>Save $3 with App New User Only</p>
          <div className={styles.other_to_other}>
            <span className={styles.o}>
              <Image src={'/images/file-footer/Qr-Code.png'} alt='Q/R Code' height={70} width={70}/>
            </span>
            <span className={styles.t}>
            <Image src={'/images/file-footer/GooglePlay.png'} alt='Q/R Code' height={10} width={105}/>
            <Image src={'/images/file-footer/AppStore.png'} alt='Q/R Code' height={10} width={105}/>
            </span>
          </div>
          <div className={styles.social_icon_div}>
          <span className={styles.icon_}><Link className={styles.Links} href={'https://web.facebook.com/faizan.soomro.963'}><FaFacebookF /></Link></span>
            <span className={styles.icon_}><Link className={styles.Links} href={'https://x.com/muhammadf4060'}><SlSocialTwitter /></Link></span>
            <span className={styles.icon_}><Link className={styles.Links} href={'https://www.instagram.com/fazii.963/'}><FiInstagram /></Link></span>
            <span className={styles.icon_}><Link className={styles.Links} href={'https://www.linkedin.com/in/muhammad-faizan-2541132b8'}><ImLinkedin2 /></Link></span>
          </div>
        </div> */}
        </div>
      </div>

      <hr />
      <span className={styles.copyright}>
        &copy;copyright Muhammad Faizan 2024. All right reserved
      </span>
      <div className="flex justify-evenly text-center">
        <div className={styles.social_icon_div}>
          <span className={styles.icon_}>
            <Link
              className={styles.Links}
              href={"https://web.facebook.com/faizan.soomro.963"}
            >
              <FaFacebookF />
            </Link>
          </span>
          <span className={styles.icon_}>
            <Link className={styles.Links} href={"https://x.com/muhammadf4060"}>
              <SlSocialTwitter />
            </Link>
          </span>
          <span className={styles.icon_}>
            <Link
              className={styles.Links}
              href={"https://www.instagram.com/fazii.963/"}
            >
              <FiInstagram />
            </Link>
          </span>
          <span className={styles.icon_}>
            <Link
              className={styles.Links}
              href={"https://www.linkedin.com/in/muhammad-faizan-2541132b8"}
            >
              <ImLinkedin2 />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
