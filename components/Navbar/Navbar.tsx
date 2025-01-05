"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { IoIosContact } from "react-icons/io";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.upper_portion}>
          <div className={styles.upper_portion_div_one}>
            <span className={styles.name_and_icon}>
              <IoMailOutline className="text-lg" />
              <Link href="mailto:muhammadf4060@gmail.com">
                muhammadf4060@gmail.com
              </Link>
            </span>
            <span className={styles.name_and_icon}>
              <TbPhoneCall className="text-lg" /> (+92340)6044359
            </span>
          </div>
          <div className={styles.upper_portion_div_two}>
            <span>
              <select className={styles._selector}>
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
                <option value="Sindhi">Sindhi</option>
                <option value="Arabic">Arabic</option>
                <option value="Chinese">Chinese</option>
              </select>
            </span>
            <span>
              <select className={styles._selector}>
                <option value="USD">USD</option>
                <option value="PKR">PKR</option>
                <option value="IND">IND</option>
                <option value="UAE">UAE</option>
                <option value="IRA">IRA</option>
              </select>
            </span>
            <Link href={"/login"}>
              <span className={styles.name_and_icon}>
                signup <IoIosContact className="text-lg" />
              </span>
            </Link>
            <Link href={"/wishList"}>
              <span className={styles.name_and_icon}>
                Wishlist <CiHeart className="text-lg" />
              </span>
            </Link>
            <Link href={"/cart"}>
              <span className={styles.name_and_icon}>
                Cart <FaOpencart className="text-lg" />
              </span>
            </Link>
          </div>
        </div>

        {/* Lower Portion */}
        <div className={styles.lower_portion}>
          <div className={styles.lower_portion_div_one}>
            <h1 className={styles.title}>Hekto</h1>
          </div>

          <div
            className={`${styles.lower_portion_div_two} ${
              isMenuOpen ? styles.menu_open : ""
            }`}
          >
            <ul className={styles.ul_div}>
              <Link href="/">
                <li className={styles.li}>Home</li>
              </Link>
              <Link href="/about">
                <li className={styles.li}>About</li>
              </Link>
              <Link href="/product
              ">
                <li className={styles.li}>Products</li>
              </Link>
              <Link href="/blog">
                <li className={styles.li}>Blog</li>
              </Link>
              <Link href="/shop">
                <li className={styles.li}>Shop</li>
              </Link>
              <Link href="/contact">
                <li className={styles.li}>Contact</li>
              </Link>
            </ul>
          </div>

          <div className={styles.lower_portion_div_three}>
            <form className={styles.search_bar}>
              <input
                className={styles.input}
                type="text"
                placeholder="Search..."
              />
              <button className={styles.search_btn} type="submit">
                <CiSearch />
              </button>
            </form>
          </div>

          <div className={styles.hamburger} onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
