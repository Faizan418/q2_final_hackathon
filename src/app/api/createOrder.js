// pages/api/createOrder.js
import { client } from "@/sanity/lib/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const orderData = req.body;

    const result = await client.create(orderData);
    res.status(200).json({ message: "Order placed successfully!", result });
  } catch (error) {
    console.error("Sanity Error:", error);
    res.status(500).json({ error: "Order creation failed!" });
  }
}
