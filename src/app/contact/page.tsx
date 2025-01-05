import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./contact.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. Contact us</span>
          </p>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className="bg-white text-gray-700">
          <div className="container mx-auto px-4 py-16">
            {/* Top Information Section */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Information About Us */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Information About us
                </h2>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Molestie massa ut et ultrices posuere amet. Morbi tincidunt
                  ornare massa.
                </p>
                <div className="flex space-x-4">
                  <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                  <span className="w-4 h-4 rounded-full bg-pink-500"></span>
                  <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Way</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <span className="font-bold">Phone:</span> +92340-60440-39
                  </li>
                  <li>
                    <span className="font-bold">Email:</span>{" "}
                    muhammadf4060@gmail.com
                  </li>
                  <li>
                    <span className="font-bold">Address:</span> C/o R-484 Rafi
                    Bunglows Malir-15 karachi
                  </li>
                  <li>
                    <span className="font-bold">Support:</span> Free standard
                    shipping on all orders.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 items-center mt-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Molestie massa ut et ultrices posuere amet. Morbi tincidunt
                  ornare massa.
                </p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                  <textarea
                    placeholder="Type Your Message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600"
                  >
                    Send Mail
                  </button>
                </form>
              </div>

              <div className="hidden md:block">
                <Image
                  src="/images/contact/Group 124.png"
                  alt="Contact Illustration"
                  width={400}
                  height={300}
                  className="mx-auto"
                />
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
