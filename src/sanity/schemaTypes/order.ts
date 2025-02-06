export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    { name: "firstName", type: "string", title: "First Name" },
    { name: "lastName", type: "string", title: "Last Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "phone", type: "string", title: "Phone" },
    { name: "address", type: "string", title: "Address" },
    { name: "city", type: "string", title: "City" },
    { name: "postalCode", type: "string", title: "Postal Code" },
    { name: "total", type: "number", title: "Total Amount" },
    { name: "orderStatus", type: "string", title: "Order Status" },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [{ type: "productReference" }],
    },
  ],
};
