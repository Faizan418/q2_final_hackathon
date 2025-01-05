'use client'
import styles from "./Section2.module.css";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
}

const latestProduct: Product[] = [
  {
    id: '1',
    name: 'Comfort Handly Craft',
    price: 42.0,
    originalPrice: 160.0,
    image: '/images/file-two/ComfortHandlyCraft.png',
  },
  {
    id: '2',
    name: 'Comfort Handly Craft',
    price: 42.0,
    originalPrice: 160.0,
    image: '/images/file-two/ComfortHandlyCraft2.png',
  },
  {
    id: '3',
    name: 'Comfort Handly Craft',
    price: 42.0,
    originalPrice: 160.0,
    image: '/images/file-two/ComfortHandlyCraft3.png',
  },
  {
    id: '4',
    name: 'Comfort Handly Craft',
    price: 42.0,
    originalPrice: 160.0,
    image: '/images/file-two/ComfortHandlyCraft4.png',
  },
  {
    id: '5',
    name: 'Comfort Handly Craft',
    price: 42.0,
    originalPrice: 160.0,
    image: '/images/file-two/ComfortHandlyCraft5.png',
  },
  {
    id: '6',
    name: 'Comfort Handly Craft',
    price: 42.0,
    originalPrice: 160.0,
    image: '/images/file-two/ComfortHandlyCraft6.png',
  },
];

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) =>  {
  return(
    
    <div className={styles._main_containar}>

        <div className={styles.card}>
          <div className={styles._card_img_box}>
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={100}
              className={styles.img}
            />
          </div>
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>{product.name}</h1>
            <p className={styles._card_dec_price}>
              {product.price} <span className={styles.line_throd}>{product.originalPrice}</span>
            </p>
          </div>
        </div>
    </div>
  )
}


const Section2 = () => {
  return (
<div>
    <div>
      <h2 className={styles.heading}>
        Featured Products
      </h2>
      <div className={styles.box}>
        {latestProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  </div>
  );
};

export default Section2;