"use client";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { useCart } from "../contaxt/cartcontaxt";
import { useState } from "react";
import Swal from "sweetalert2";
import styles from './checkout.module.css'
import Image from "next/image";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate shipping details
    const { name, email, address, city, postalCode } = formData;
    if (!name || !email || !address || !city || !postalCode) {
      Swal.fire({
        title: "Incomplete Form!",
        text: "Please fill out all the shipping details.",
        icon: "error",
      });
      return;
    }

    // Validate payment method
    if (!paymentMethod) {
      Swal.fire({
        title: "Payment Method Required!",
        text: "Please select a payment method to proceed.",
        icon: "error",
      });
      return;
    }

    // Validate card details if payment method is card
    if (
      paymentMethod === "card" &&
      (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv)
    ) {
      Swal.fire({
        title: "Card Details Required!",
        text: "Please provide all card details to proceed.",
        icon: "error",
      });
      return;
    }

    // Success message
    Swal.fire({
      title: "Order Placed Successfully!",
      text: "Your order has been placed. Thank you for shopping with us!",
      icon: "success",
    }).then(() => {
      window.location.href = "/order-confirmation";
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className={styles.abcd}>
        <div className={styles.efgh}>
          <h1 className="text-4xl font-semibold">Check Out</h1>
          <p className="font-semibold">
            Home . page{" "}
            <span className="text-rose-600 font-bold">. Check Out</span>
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Checkout</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Shipping Details</h2>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Details</h2>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={handlePaymentChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                >
                  <option value="">Select Payment Method</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleCardInputChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-600">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={handleCardInputChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-600">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardInputChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-300"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
            <ul className="mb-6">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between mb-2 text-gray-700">
                  <span>
                    <Image src={item.image} alt={item.name} height={100} width={50}/>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="text-2xl font-bold mb-6 text-right text-gray-800">
              Total: ${calculateTotal()}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Confirm Order
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
