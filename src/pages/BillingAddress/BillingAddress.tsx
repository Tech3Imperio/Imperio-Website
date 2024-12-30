import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiPhone, FiMapPin, FiShoppingBag } from "react-icons/fi";

type ProductDetails = {
  productname: string;
  price: string;
  quantity: number;
  rubber: number;
  nutbolt: number;
  endcap: number;
};

type OrderDetails = {
  items: ProductDetails[];
  totalMRP: number;
  shippingFee: number;
  couponDiscount: number;
  appliedCoupon: string | null;
  totalAmount: number;
};

export default function BillingAddress() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem("orderDetails");
    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order placed:", { name, mobileNo, address, orderDetails });
    localStorage.removeItem("orderDetails");
    navigate("/");
  };

  if (!orderDetails) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center h-screen"
      >
        <div className="text-2xl text-[#03237b]">Loading...</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-5xl font-bold text-[#03237b] mb-8 text-center">
        <span className="text-[#fad000]">Billing</span> Details
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:w-1/2"
        >
          <h2 className="text-2xl text-[#03237b] mb-6 flex items-center">
            <FiShoppingBag className="mr-2" /> Order Summary
          </h2>
          <div className="bg-white rounded-lg drop-shadow-lg shadow-md p-6">
            {orderDetails.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex justify-between mb-4 pb-4 border-b last:border-b-0"
              >
                <div>
                  <h5 className="text-xl text-[#03237b] font-semibold mb-2">
                    {item.productname}
                  </h5>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <li>Quantity: {item.quantity}</li>
                    <li>Rubber: {item.rubber}</li>
                    <li>Nut Bolts: {item.nutbolt}</li>
                    <li>Endcap: {item.endcap}</li>
                  </ul>
                </div>
                <span className="text-lg font-semibold text-[#03237b]">
                  ₹{item.price}
                </span>
              </motion.div>
            ))}

            <div className="mt-4 pt-4 border-t border-dashed">
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Total MRP</span>
                <span>₹{orderDetails.totalMRP.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Shipping Fee</span>
                <span>₹{orderDetails.shippingFee.toFixed(2)}</span>
              </div>
              {orderDetails.appliedCoupon && (
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Coupon Discount ({orderDetails.appliedCoupon})</span>
                  <span>-₹{orderDetails.couponDiscount.toFixed(2)}</span>
                </div>
              )}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
                className="flex justify-between mt-4 pt-4 border-t text-xl font-bold text-[#03237b]"
              >
                <span>Total Amount</span>
                <span>₹{orderDetails.totalAmount.toFixed(2)}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:w-1/2"
        >
          <h2 className="text-2xl text-[#03237b] mb-6 flex items-center">
            <FiMapPin className="mr-2" /> Delivery Address Details
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg drop-shadow-lg shadow-md p-6 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <FiUser className="inline mr-2" /> Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#03237b] focus:border-transparent transition duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="mobileNo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <FiPhone className="inline mr-2" /> Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNo"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#03237b] focus:border-transparent transition duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                <FiMapPin className="inline mr-2" /> Delivery Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows={3}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#03237b] focus:border-transparent transition duration-200"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 w-full py-4 text-[--black] font-bold bg-[--secound] text-xl rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap "
            >
              Confirm Order
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
