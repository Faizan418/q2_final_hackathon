'use client'
import Image from "next/image";
import styles from "./ProductDetails.module.css";
import { FaOpencart, FaFacebook, FaWhatsapp,FaInstagram } from "react-icons/fa";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import { useCart } from '../../contaxt/cartcontaxt';
import Swal from 'sweetalert2'

const prod = [
  {
    id: "1",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-one/CantileverChair.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],

  },
  {
    id: "2",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-one/CantileverChair2.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "3",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-one/CantileverChair3.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "4",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-one/CantileverChair4.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "5",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-two/ComfortHandlyCraft.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "6",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-two/ComfortHandlyCraft2.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "7",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-two/ComfortHandlyCraft3.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "8",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-two/ComfortHandlyCraft4.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "9",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-two/ComfortHandlyCraft5.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "10",
    name: "Cantilever Chair",
    code: "Y523501",
    price: 32.0,
    oldPrice: 39.0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-two/ComfortHandlyCraft6.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "17",
    name: "Mini LCW Chair",
    price: 56.0,
    oldPrice: 39.0,
    code: "Y523501",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-seven/image1.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "18",
    name: "Mini LCW Chair",
    price: 56.0,
    oldPrice: 39.0,
    code: "Y523501",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-seven/image2.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "19",
    name: "Mini LCW Chair",
    price: 56.0,
    oldPrice: 39.0,
    code: "Y523501",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-seven/image3.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  {
    id: "20",
    name: "Mini LCW Chair",
    price: 56.0,
    oldPrice: 39.0,
    code: "Y523501",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    image: "/images/file-seven/image4.png",
    categories: ["Furniture", "Living Room"],
    tags: ["Modern", "Comfortable"],
  },
  
];

export default function ProductDetails({ params }) {
  const { id } = params;
  const { dispatch } = useCart();

  const product = prod.find((item) => item.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const addToCart = () => {
    Swal.fire({
      title: "Add to Cart Successfully!",
      icon: "success",
      draggable: true
    });
    dispatch({ type: "ADD_TO_CART", payload: product });
  };


  return (
    <div>
      <Navbar/>
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Product Details</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. product details</span>
          </p>
        </div>
      </div>


    <div className={styles.container}>
      <div className={styles.content}>
        
        <div className={styles.imageSection}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={100}
            className={styles.image}
          />
          <div className={styles.thumbnailContainer}>
            <Image src={product.image} alt="Thumbnail" width={80} height={80} className={styles.thumbnail} />
            <Image src={product.image} alt="Thumbnail" width={80} height={80} className={styles.thumbnail} />
            <Image src={product.image} alt="Thumbnail" width={80} height={80} className={styles.thumbnail} />
          </div>

        </div>
        <div className={styles.detailsSection}>
          <h1 className={styles.heading}>{product.name}</h1>
          <div className={styles.rating}>
            <span>⭐⭐⭐⭐⭐</span> <span>(22)</span>
          </div>
          <div className={styles.price}>
            <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
            <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>
          </div>
          <p className={styles.description}>{product.description}</p>
          <button className={styles.addToCart} onClick={addToCart}>Add To Cart  <FaOpencart className="text-lg"/></button>
          <div className={styles.meta}>
            <p><strong>Categories:</strong> {product.categories.join(", ")}</p>
            <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
          </div>
          <div className={styles.share}>
            <strong>Share:</strong>
            <span className={styles.icon}><FaFacebook /></span>
            <span className={styles.icon}><FaWhatsapp /></span>
            <span className={styles.icon}><FaInstagram /></span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
