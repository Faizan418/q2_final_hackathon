import Image from "next/image";
import styles from "./Section1.module.css";
import Link from "next/link";

const featuredProduct = [
  {
    id: "1",
    name: "Cantilever chair",
    code: "Y523501",
    price: 45.0,
    image: "/images/file-one/CantileverChair.png?height=400&width=100",
  },
  {
    id: "2",
    name: "Cantilever chair",
    code: "Y523501",
    price: 42.0,
    image: "/images/file-one/CantileverChair2.png",
  },
  {
    id: "3",
    name: "Cantilever chair",
    code: "Y523501",
    price: 42.0,
    image: "/images/file-one/CantileverChair3.png",
  },
  {
    id: "4",
    name: "Cantilever chair",
    code: "Y523501",
    price: 42.0,
    image: "/images/file-one/CantileverChair4.png",
  },
];

const Section1 = () => {
  return (
    <div className={styles._main_containar}>
      <h2 className={styles.heading}>Featured Products</h2>

      <div className={styles.containar}>
        {featuredProduct.map((product) => (
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
            <p className={styles.code}>{product.code}</p>
            <p className={styles.price}>{product.price.toFixed(2)}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section1;
