import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import styles from "./cart.module.css";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Cart List</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. cart list</span>
          </p>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-4 text-left font-bold">Product</th>
                    <th className="p-4 text-left font-bold">Price</th>
                    <th className="p-4 text-left font-bold">Quantity</th>
                    <th className="p-4 text-left font-bold">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                  <tr>
                    <td className="p-4 flex items-center">
                      <img
                        src="https://via.placeholder.com/60"
                        alt="Product"
                        className="w-12 h-12 rounded-md mr-4"
                      />
                      <div>
                        <h3 className="font-bold">Ur atom consequat</h3>
                        <p className="text-sm text-gray-500">
                          Color: Brown, Size: XL
                        </p>
                      </div>
                    </td>
                    <td className="p-4">$53.00</td>
                    <td className="p-4">
                      <input
                        type="number"
                        defaultValue={1}
                        className="w-16 px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="p-4">$53.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
                  Update Cart
                </button>
                <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                  Clear Cart
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-6 bg-white rounded shadow">
                <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
                <div className="flex justify-between mb-2">
                  <p>Subtotals:</p>
                  <p className="font-bold">£219.00</p>
                </div>
                <div className="flex justify-between mb-4">
                  <p>Totals:</p>
                  <p className="font-bold">£325.00</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Shipping & taxes calculated at checkout.
                </p>
                <button className="w-full bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                  Proceed To Checkout
                </button>
              </div>
              <div className="p-6 bg-white rounded shadow">
                <h2 className="text-lg font-bold mb-4">Calculate Shopping</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Mirpur Dhaka - 1200"
                    className="w-full px-4 py-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full px-4 py-2 border rounded"
                  />
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
                  >
                    Calculate Shipping
                  </button>
                </form>
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


