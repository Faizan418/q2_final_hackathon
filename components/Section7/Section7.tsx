
import Image from "next/image";
import styles from "./Section7.module.css";
import Link from 'next/link'

const categories= [
    {
      id: "17",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/images/file-seven/image1.png",
    },
    {
      id: "18",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/images/file-seven/image2.png",
    },
    {
      id: "19",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/images/file-seven/image3.png",
    },
    {
      id: "20",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/images/file-seven/image4.png",
    },
  ];

const Section7 = () => {
  return (
    <div className={styles._main_containar}>
      <h2 className={styles.heading}>Featured Products</h2>

      <div className={styles.containar}>
        {categories.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
          <div className={styles.box}>
            <div className={styles.img_div}>
              <Image
                src={product.image}
                alt={product.name}
                height={100}
                width={200}
                className={styles.img}
                
              />
            </div>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.price}>{product.price.toFixed(2)}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section7;
