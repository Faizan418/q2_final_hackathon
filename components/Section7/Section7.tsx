// 'use client';
// import styles from "./Section7.module.css";
// import Image from "next/image";

// type Category = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// };

// const categories: Category[] = [
//   {
//     id: "1",
//     name: "Mini LCW Chair",
//     price: 56.0,
//     image: "/images/file-seven/image1.png",
//   },
//   {
//     id: "2",
//     name: "Mini LCW Chair",
//     price: 56.0,
//     image: "/images/file-seven/image2.png",
//   },
//   {
//     id: "3",
//     name: "Mini LCW Chair",
//     price: 56.0,
//     image: "/images/file-seven/image3.png",
//   },
//   {
//     id: "4",
//     name: "Mini LCW Chair",
//     price: 56.0,
//     image: "/images/file-seven/image4.png",
//   },
// ];

// type CategoryCardProps = {
//   category: Category;
// };

// const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => (
//   <div className={styles.card}>
//     <div className={styles.img_div}>
//       <Image
//         className="mb-4"
//         src={category.image}
//         alt={category.name}
//         height={100}
//         width={120}
//       />
//     </div>
//     <h3 className="font-semibold text-sm mt-2">{category.name}</h3>
//     <p className="text-xs">${category.price.toFixed(2)}</p>
//   </div>
// );

// const Section7: React.FC = () => {
//   return (
//     <div className={styles.main_containar}>
//       <div className={styles.containar}>
//         <h2 className="text-2xl font-bold text-center mb-6 text-sky-950">
//           Top Categories
//         </h2>
//         <div className={styles.box}>
//           {categories.map((category) => (
//             <CategoryCard key={category.id} category={category} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section7;






import Image from "next/image";
import styles from "./Section7.module.css";

// const featuredProduct = [
//   {
//     id: "1",
//     name: "Cantilever chair",
//     code: "Y523501",
//     price: 45.0,
//     image: "/images/file-one/CantileverChair.png?height=400&width=100",
//   },
//   {
//     id: "2",
//     name: "Cantilever chair",
//     code: "Y523501",
//     price: 42.0,
//     image: "/images/file-one/CantileverChair2.png",
//   },
//   {
//     id: "3",
//     name: "Cantilever chair",
//     code: "Y523501",
//     price: 42.0,
//     image: "/images/file-one/CantileverChair3.png",
//   },
//   {
//     id: "4",
//     name: "Cantilever chair",
//     code: "Y523501",
//     price: 42.0,
//     image: "/images/file-one/CantileverChair4.png",
//   },
// ];

const categories= [
    {
      id: "1",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/images/file-seven/image1.png",
    },
    {
      id: "2",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/images/file-seven/image2.png",
    },
    {
      id: "3",
      name: "Mini LCW Chair",
      price: 56.0,
      image: "/images/file-seven/image3.png",
    },
    {
      id: "4",
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

export default Section7;
