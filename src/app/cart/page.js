"use client";

import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import styles from './cart.module.css'
import { useCart } from "../contaxt/cartcontaxt";
import Link from "next/link";

export default function CartPage() {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Cart</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. Cart</span>
          </p>
        </div>
      </div>
    <div className={styles.main_containar}>
      
      <h1 className="text-3xl font-bold my-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/">Continue Shopping</Link></p>
      ) : (
        <div>
          <table className="table-auto w-full border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300 px-4 py-2">Image</th>
                <th className="border border-slate-300 px-4 py-2">Product</th>
                <th className="border border-slate-300 px-4 py-2">Price</th>
                <th className="border border-slate-300 px-4 py-2">Quantity</th>
                <th className="border border-slate-300 px-4 py-2">Total</th>
                <th className="border border-slate-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="border border-slate-300 px-4 py-2">
                    <img src={item.image} alt={item.name} width="80" />
                  </td>
                  <td className="border border-slate-300 px-4 py-2">{item.name}</td>
                  <td className="border border-slate-300 px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="border border-slate-300 px-4 py-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 border border-slate-400 text-center"
                    />
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-right">
            <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
      <Footer />
    </div>
  );
}
