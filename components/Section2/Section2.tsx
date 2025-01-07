import Image from "next/image";
import styles from "./Section2.module.css";

const latestProduct = [
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

const Section2 = () => {
  return (
    <div className={styles._main_containar}>
      <h2 className={styles.heading}>Latest Products</h2>

      <div className={styles.containar}>
        {latestProduct.map((product) => (
          <div key={product.id} className={styles.box}>
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
        ))}
      </div>
    </div>
  );
};

export default Section2;
