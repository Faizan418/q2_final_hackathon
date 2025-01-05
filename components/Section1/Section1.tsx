'use client'
import styles from "./Section1.module.css";
import Image from "next/image";

interface Product {
  id: string
  name: string
  code: string
  price: number
  image: string
}

const featuredProduct: Product[] = [
  {
    id: '1',
    name: 'Cantilever chair',
    code: 'Y523501',
    price: 45.00,
    image: '/images/file-one/CantileverChair.png?height=400&width=100'
  },
  {
    id: '2',
    name: 'Cantilever chair',
    code: 'Y523501',
    price: 42.00,
    image: '/images/file-one/CantileverChair2.png'
  },
  {
    id: '3',
    name: 'Cantilever chair',
    code: 'Y523501',
    price: 42.00,
    image: '/images/file-one/CantileverChair3.png'
  },
  {
    id: '4',
    name: 'Cantilever chair',
    code: 'Y523501',
    price: 42.00,
    image: '/images/file-one/CantileverChair4.png'
  }
]

type ProductCardProps = {
  product: Product;
};
// 
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return(

    <div className={styles._main_containar}>
        <div className={styles.card}>
          <div className={styles._card_img_box}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={100}
              className={styles.img}
            />
          </div>
          <div className={styles._card_dec_box}>
            <h1 className={styles._card_dec_name}>{product.name}</h1>
            <p className={styles._card_dec_city}>{product.code}</p>
            <p className={styles._card_dec_price}>{product.price}</p>
          </div>
        </div>
        </div>
        
  )
}

const Section1: React.FC = () => {
  return (

<div>
    <div>
      <h2 className={styles.heading}>
        Featured Products
      </h2>
      <div className={styles.box}>
        {featuredProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  </div>

  );
};

export default Section1;