import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="font-semibold">
            Home . page <span className="text-rose-600 font-bold">. blog</span>
          </p>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* <!-- Main Content --> */}
            <div className="w-full lg:w-2/3 px-4">
              {/* <!-- Post 1 --> */}
              <div className="mb-8">
                <Image
                  alt="Woman working on a laptop"
                  className="w-full h-auto mb-4"
                  height="400"
                  src="/images/blog/themnel1.png"
                  width="800"
                />
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span className="mr-4">By Admin</span>
                  <span className="mr-4">Jan 1, 2023</span>
                  <span>3 Comments</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Mauris et est non vulputate duis tincidunt nec.
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </p>
                <Link className="text-purple-600" href="#">
                  Read More
                </Link>
              </div>
              {/* <!-- Post 2 --> */}
              <div className="mb-8">
                <Image
                  alt="Woman standing in a field"
                  className="w-full h-auto mb-4"
                  height="400"
                  src="/images/blog/themnel2.png"
                  width="800"
                />
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span className="mr-4">By Admin</span>
                  <span className="mr-4">Jan 1, 2023</span>
                  <span>3 Comments</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Aenean vitae nisi in aliquam ultrices lectus Etiam.
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </p>
                <Link className="text-purple-600" href="#">
                  Read More
                </Link>
              </div>
              {/* <!-- Post 3 --> */}
              <div className="mb-8">
                <Image
                  alt="Woman smiling in winter"
                  className="w-full h-auto mb-4"
                  height="400"
                  src="/images/blog/themnel3.png"
                  width="800"
                />
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span className="mr-4">By Admin</span>
                  <span className="mr-4">Jan 1, 2023</span>
                  <span>3 Comments</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Sit nam congue feugiat nisi, mauris amet nisi.
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </p>
                <Link className="text-purple-600" href="#">
                  Read More
                </Link>
              </div>
            </div>
            {/* <!-- Sidebar --> */}
            <div className="w-full lg:w-1/3 px-4">
              {/* <!-- Search --> */}
              <div className="mb-8">
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Search"
                  type="text"
                />
              </div>
              {/* <!-- Categories --> */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Categories
                </h3>
                <ul className="text-gray-600">
                  <li className="mb-2">
                    <Link className="hover:text-purple-600" href="#">
                      Hoodies (14)
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="hover:text-purple-600" href="#">
                      Women (21)
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="hover:text-purple-600" href="#">
                      Women (21)
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="hover:text-purple-600" href="#">
                      Women (21)
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link className="hover:text-purple-600" href="#">
                      Women (21)
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Recent Post --> */}
              <div className="mb-10 ">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Recent Post
                </h3>
                <div className="flex items-center mb-4">
                  <Image
                    alt="Offer product image"
                    className="w-20 h-20 mr-4"
                    height="100"
                    src="/images/blog/offer1.png"
                    width="100"
                  />
                  <div>
                    <h4 className="text-gray-800 font-bold">
                      Duis lectus est.
                    </h4>
                    <p className="text-gray-600">$12.00 - $15.00</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Image
                    alt="Offer product image"
                    className="w-20 h-20 mr-4"
                    height="100"
                    src="/images/blog/offer2.png"
                    width="100"
                  />
                  <div>
                    <h4 className="text-gray-800 font-bold">Sed placerat.</h4>
                    <p className="text-gray-600">$12.00 - $15.00</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Image
                    alt="Offer product image"
                    className="w-20 h-20 mr-4"
                    height="100"
                    src="/images/blog/offer3.png"
                    width="100"
                  />
                  <div>
                    <h4 className="text-gray-800 font-bold">Netus proin.</h4>
                    <p className="text-gray-600">$12.00 - $15.00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="Offer product image"
                    className="w-20 h-20 mr-4"
                    height="100"
                    src="/images/blog/offer4.png"
                    width="100"
                  />
                  <div>
                    <h4 className="text-gray-800 font-bold">Platea in.</h4>
                    <p className="text-gray-600">$12.00 - $15.00</p>
                  </div>
                </div>
              </div>
              {/* <!-- Tag Cloud --> */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Tag Cloud
                </h3>
                <div className="flex flex-wrap">
                  <Link
                    className="bg-gray-200 text-gray-600 px-2 py-1 m-1 rounded hover:bg-purple-600 hover:text-white"
                    href="#"
                  >
                    General
                  </Link>
                  <Link
                    className="bg-gray-200 text-gray-600 px-2 py-1 m-1 rounded hover:bg-purple-600 hover:text-white"
                    href="#"
                  >
                    Atsanil
                  </Link>
                  <Link
                    className="bg-gray-200 text-gray-600 px-2 py-1 m-1 rounded hover:bg-purple-600 hover:text-white"
                    href="#"
                  >
                    Insas.
                  </Link>
                  <Link
                    className="bg-gray-200 text-gray-600 px-2 py-1 m-1 rounded hover:bg-purple-600 hover:text-white"
                    href="#"
                  >
                    Bibsaas
                  </Link>
                  <Link
                    className="bg-gray-200 text-gray-600 px-2 py-1 m-1 rounded hover:bg-purple-600 hover:text-white"
                    href="#"
                  >
                    Nulla.
                  </Link>
                </div>
              </div>

              {/* <!-- Follow Us --> */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Link
                    className="text-gray-600 hover:text-purple-600"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    className="text-gray-600 hover:text-purple-600"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="text-gray-600 hover:text-purple-600"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    className="text-gray-600 hover:text-purple-600"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
              {/* <!-- Offer Product --> */}
              <div className="mb-10 ">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Offer Product
                </h3>
                <div className="flex items-center mb-4">
                  <Image
                    alt="Offer product image"
                    className="w-20 h-20 mr-4"
                    height="100"
                    src="/images/blog/offer1.png"
                    width="100"
                  />
                  <div>
                    <h4 className="text-gray-800 font-bold">
                      Duis lectus est.
                    </h4>
                    <p className="text-gray-600">$12.00 - $15.00</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Image
                    alt="Offer product image"
                    className="w-20 h-20 mr-4"
                    height="100"
                    src="/images/blog/offer2.png"
                    width="100"
                  />
                  <div>
                    <h4 className="text-gray-800 font-bold">Sed placerat.</h4>
                    <p className="text-gray-600">$12.00 - $15.00</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Image
                    alt="Offer product image"
                    className="w-20 h-20 mr-4"
                    height="100"
                    src="/images/blog/offer3.png"
                    width="100"
                  />
                  <div>
                    <h4 className="text-gray-800 font-bold">Netus proin.</h4>
                    <p className="text-gray-600">$12.00 - $15.00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image
                    alt="Offer product image"
                    className="w-20 h-20 mr-4"
                    height="100"
                    src="/images/blog/offer4.png"
                    width="100"
                  />
                  <div>
                    <h4 className="text-gray-800 font-bold">Platea in.</h4>
                    <p className="text-gray-600">$12.00 - $15.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
