import styles from './Section5.module.css';
import Image from 'next/image';

const Section5 = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-10 mt-10">Trending Products</h1>
        <div className={styles.grid}>
          <div className="bg-white shadow-md rounded-lg p-3 text-center border">
            <Image
              src="/images/file-five/CantileverChair1.png"
              alt="Cantilever Chair"
              width={150}
              height={100}
              className="mx-auto mb-4 hover:scale-125"
            />
            <h2 className="font-semibold">Cantilever Chair</h2>
            <p className="text-gray-500 line-through">$100.00</p>
            <p className="text-blue-800 font-bold">$90.00</p>
            {/* <a href="#" className="text-red-600 underline font-medium hover:text-teal-500">Shop Now</a> */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 text-center border">
            <Image
              src="/images/file-five/CantileverChair2.png"
              alt="Cantilever Chair"
              width={150}
              height={100}
              className="mx-auto mb-4 hover:scale-125"
            />
            <h2 className="font-semibold">Cantilever Chair</h2>
            <p className="text-gray-500 line-through">$100.00</p>
            <p className="text-blue-800 font-bold">$90.00</p>
            {/* <a href="#" className="text-red-600 underline font-medium hover:text-teal-500">Shop Now</a> */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-3 text-center border">
            <Image
              src="/images/file-five/CantileverChair3.png"
              alt="Cantilever Chair"
              width={150}
              height={100}
              className="mx-auto mb-4 hover:scale-125"
            />
            <h2 className="font-semibold">Cantilever Chair</h2>
            <p className="text-gray-500 line-through">$100.00</p>
            <p className="text-blue-800 font-bold">$90.00</p>
            {/* <a href="#" className="text-red-600 underline font-medium hover:text-teal-500">Shop Now</a> */}
          </div>
          <div className="bg-white-200 shadow-md rounded-lg p-3 text-center border">
            <Image
              src="/images/file-five/CantileverChair4.png"
              alt="Cantilever Chair"
              width={150}
              height={100}
              className="mx-auto mb-4 hover:scale-125"
            />
            <h2 className="font-semibold">Cantilever Chair</h2>
            <p className="text-gray-500 line-through">$100.00</p>
            <p className="text-blue-800 font-bold">$90.00</p>
            {/* <a href="#" className="text-red-600 underline font-medium hover:text-teal-500">Shop Now</a> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-pink-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-blue-800 mb-2">23% off in all products</p>
            <a href="#" className="text-red-600 underline font-medium hover:text-blue-800">Shop Now</a>
            <Image
              src="/images/file-five/promo1.png"
              alt="Promo Image"
              width={300}
              height={100}
              className="mx-auto mt-4"
            />
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-red-600 mb-2">23% off in all products</p>
            <a href="#" className="text-blue-800 underline font-medium hover:text-red-600">View Collection</a>
            <a href="#" className="text-blue-800 underline font-medium hover:text-red-600 ">View Collection</a>
            <Image
              src="/images/file-five/promo2.png"
              alt="Promo Image"
              width={300}
              height={100}
              className="mx-auto mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
