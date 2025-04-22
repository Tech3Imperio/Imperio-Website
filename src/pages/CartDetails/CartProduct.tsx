// import { useState } from "react";

// export const PriceDetails = ({ items }: { items: ProductCardProps[] }) => {
//   const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
//   const [couponDiscount, setCouponDiscount] = useState(0);

//   const shippingFee = 80;
//   const totalMRP = items.reduce(
//     (sum: number, item: { price: string }) => sum + Number(item.price),
//     0
//   );

//   const coupons = [
//     { code: "SAVE10", discount: 0.1 },
//     { code: "SAVE20", discount: 0.2 },
//     { code: "SAVE30", discount: 0.3 },
//     { code: "SAVE40", discount: 0.4 },
//   ];

//   const applyCoupon = (couponCode: string) => {
//     const coupon = coupons.find((c) => c.code === couponCode);
//     if (coupon) {
//       setAppliedCoupon(couponCode);
//       setCouponDiscount(totalMRP * coupon.discount);
//     }
//   };

//   const removeCoupon = () => {
//     setAppliedCoupon(null);
//     setCouponDiscount(0);
//   };

//   const totalAmount = totalMRP + shippingFee - couponDiscount;

//   return (
//     <div className="bg-white p-6 rounded-none shadow-md">
//       <h3 className="font-semibold text-2xl text-[#03237b] mb-4">
//         Price Details ({items.length} Items)
//       </h3>

//       {items.map((item: ProductCardProps, index: number) => (
//         <div key={index} className="flex justify-between mb-2">
//           <span className="text-gray-600">{item.productname}</span>
//           <span className="text-gray-900 font-medium">₹{item.price}</span>
//         </div>
//       ))}

//       <div className="border-t border-gray-200 my-4"></div>

//       <div className="flex justify-between mb-2">
//         <span className="text-gray-600">Total MRP</span>
//         <span className="text-gray-900 font-medium">₹{totalMRP}</span>
//       </div>

//       <div className="flex justify-between mb-2">
//         <span className="text-gray-600">Shipping Fee</span>
//         <span className="text-gray-900 font-medium">₹{shippingFee}</span>
//       </div>

//       {appliedCoupon && (
//         <div className="flex justify-between mb-2">
//           <span className="text-green-600">Coupon Discount</span>
//           <span className="text-green-600">-₹{couponDiscount.toFixed(2)}</span>
//         </div>
//       )}

//       <div className="border-t border-gray-200 my-4"></div>

//       <div className="mb-4">
//         <h4 className="font-medium text-xl text-[#03237b] mb-2">
//           Apply Coupon
//         </h4>
//         {appliedCoupon ? (
//           <div className="flex justify-between items-center bg-green-100 p-2 rounded-none">
//             <span className="text-green-900">{appliedCoupon} applied</span>
//             <button
//               onClick={removeCoupon}
//               className="text-[#03237b] hover:text-[#03237b]"
//             >
//               <FiX size={20} />
//             </button>
//           </div>
//         ) : (
//           <div className="flex flex-wrap gap-2">
//             {coupons.map((coupon) => (
//               <button
//                 key={coupon.code}
//                 onClick={() => applyCoupon(coupon.code)}
//                 className="border rounded-none hover:text-[#fad000] px-4 py-2 transition duration-700 hover:bg-[#292929] "
//               >
//                 {coupon.code}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="flex justify-between mb-4 border-t-2 border-gray-400 pt-4">
//         <span className="text-[#03237b] font-semibold text-xl">
//           Total Amount
//         </span>
//         <span className="text-[#03237b] font-semibold text-xl">
//           ₹{totalAmount.toFixed(2)}
//         </span>
//       </div>

//       <button className="px-6 w-full py-4 text-[--black] font-bold bg-[--secound] text-xl rounded-none transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap ">
//         Place Order
//       </button>
//     </div>
//   );
// };

// type DecodedToken = {
//   username: string;
// };

// export default function CartProduct() {
//   const encodedToken = localStorage.getItem("token");
//   const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
//   const [allCartItems, setAllCartItems] = useState<ProductCardProps[]>([]);

//   useEffect(() => {
//     const parts = encodedToken?.split(".");

//     if (parts?.length === 3) {
//       setDecodedToken(JSON.parse(atob(parts[1])));
//     }
//   }, [encodedToken]);

//   const LocalStorageCart = localStorage.getItem(
//     `${decodedToken?.username}_CartItems`
//   );

//   const ParsedCartItems = useMemo(() => {
//     return LocalStorageCart ? JSON.parse(LocalStorageCart) : [];
//   }, [LocalStorageCart]);

//   useEffect(() => {
//     setAllCartItems(ParsedCartItems);
//   }, [ParsedCartItems]);
//   // console.log(ParsedCartItems);

//   const handleRemove = (index: number) => {
//     // Remove the item from the cart based on the index
//     const RemovedItem = ParsedCartItems.filter(
//       (_: ProductCardProps, cartindex: number) => cartindex !== index
//     );

//     setAllCartItems(RemovedItem);

//     localStorage.setItem(
//       `${decodedToken?.username}_CartItems`,
//       JSON.stringify(RemovedItem)
//     );
//   };

//   return (
//     <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <section className="lg:w-2/3">
//           <div className="flex items-center justify-between mb-6">
//             {/* <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 className="rounded border-gray-300 w-5 h-5"
//               />
//               <span className="text-gray-600 text-lg">
//                 {ParsedCartItems.length}/{ParsedCartItems.length} Item Selected
//               </span>
//             </div> */}

//             <div className="flex gap-4">
//               {/* <button className="px-6 py-2 bg-red-500 text-white rounded-none hover:bg-red-600 transition-colors">
//                 Remove
//               </button>
//               <button className="px-6 py-2 bg-blue-500 text-white rounded-none hover:bg-blue-600 transition-colors">
//                 Add to Wishlist
//               </button> */}
//               <h5 className="text-3xl text-[#03237b] font-semibold">
//                 Your products
//               </h5>
//             </div>
//           </div>

//           <div className="grid gap-6">
//             {allCartItems.map((item: ProductCardProps, index: number) => (
//               <ProductCard
//                 key={index}
//                 {...item}
//                 onRemove={() => handleRemove(index)}
//               />
//             ))}
//           </div>
//         </section>
//         <aside className="lg:w-1/3">
//           <PriceDetails items={allCartItems} />
//         </aside>
//       </div>
//     </main>
//   );
// }

import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  color: string;
  productname: string;
  description: string;
  price: string;
  quantity: number;
  rubber: number;
  endcap: number;
  nutbolt: number;
  img: string;
  blocks: { type: string; quantity: number }[];
  onRemove: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  productname,
  price,
  quantity,
  rubber,
  endcap,
  nutbolt,
  img,
  color,
  onRemove,
}) => {
  return (
    <div className="flex flex-col bg-white drop-shadow-lg p-6 rounded-none gap-2 items-start">
      <div className="flex justify-end items-center w-full">
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FiX size={24} />
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-60 h-54 bg-gray-100 rounded-none flex items-center justify-center overflow-hidden drop-shadow-md">
          <img
            src={img}
            alt={productname}
            className="w-full h-full object-cover "
          />
        </div>

        <div className="flex-1 ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 justify-between w-full">
              <h3 className="font-semibold text-3xl text-[#03237b]">
                {productname}
              </h3>
              <p className="text-[#03237b] font-semibold text-2xl pl-2">
                ₹
                <span className="pl-1 text-2xl">
                  {price} {color}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-rows gap-3  justify-center items-center">
                <span className="text-sm text-gray-600">Quantity:</span>
                <input
                  type="text"
                  value={quantity}
                  className="border-2 rounded-none w-[75px] pl-6 py-1  text-sm phone:text-base  xl:mr-0 transition-500 border-[--secound]"
                  readOnly
                />
              </div>
              <div className="flex flex-rows gap-3 justify-center items-center">
                <span className="text-sm text-gray-600">Nut Bolt:</span>
                <input
                  type="text"
                  value={nutbolt}
                  className="border-2 rounded-none w-[75px] pl-6 py-1  text-sm phone:text-base  xl:mr-0 transition-500 border-[--secound]"
                  readOnly
                />
              </div>
              <div className="flex flex-rows gap-5 justify-center items-center">
                <span className="text-sm text-gray-600">Rubber:</span>
                <input
                  type="text"
                  value={rubber}
                  className="border-2 rounded-none w-[75px] pl-6 py-1  text-sm phone:text-base  xl:mr-0 transition-500 border-[--secound]"
                  readOnly
                />
              </div>
              <div className="flex flex-rows gap-3 justify-center items-center">
                <span className="text-sm text-gray-600">End Cap:</span>
                <input
                  type="text"
                  value={endcap}
                  className="border-2 rounded-none w-[75px] pl-6 py-1  text-sm phone:text-base  xl:mr-0 transition-500 border-[--secound]"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceDetails: React.FC<{ items: ProductCardProps[] }> = ({ items }) => {
  const navigate = useNavigate();
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const shippingFee = 80;
  const totalMRP = items.reduce(
    (sum: number, item: { price: string }) => sum + Number(item.price),
    0
  );

  const coupons = [
    { code: "SAVE10", discount: 0.1 },
    { code: "SAVE20", discount: 0.2 },
    { code: "SAVE30", discount: 0.3 },
    { code: "SAVE40", discount: 0.4 },
  ];

  const applyCoupon = (couponCode: string) => {
    const coupon = coupons.find((c) => c.code === couponCode);
    if (coupon) {
      setAppliedCoupon(couponCode);
      setCouponDiscount(totalMRP * coupon.discount);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
  };

  const totalAmount = totalMRP + shippingFee - couponDiscount;

  const handlePlaceOrder = () => {
    localStorage.setItem(
      "orderDetails",
      JSON.stringify({
        items: items.map((item) => ({
          productname: item.productname,
          price: item.price,
          quantity: item.quantity,
          rubber: item.rubber,
          nutbolt: item.nutbolt,
          endcap: item.endcap,
        })),
        totalMRP,
        shippingFee,
        couponDiscount,
        appliedCoupon,
        totalAmount,
      })
    );
    navigate("/billing-address");
  };

  return (
    <div className="bg-white p-6 rounded-none shadow-md">
      <h3 className="font-semibold text-2xl text-[#03237b] mb-4">
        Price Details ({items.length} Items)
      </h3>

      {items.map((item: ProductCardProps, index: number) => (
        <div key={index} className="flex justify-between mb-2">
          <span className="text-gray-600">{item.productname}</span>
          <span className="text-gray-900 font-medium">₹{item.price}</span>
        </div>
      ))}

      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Total MRP</span>
        <span className="text-gray-900 font-medium">₹{totalMRP}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Shipping Fee</span>
        <span className="text-gray-900 font-medium">₹{shippingFee}</span>
      </div>

      {appliedCoupon && (
        <div className="flex justify-between mb-2">
          <span className="text-green-600">Coupon Discount</span>
          <span className="text-green-600">-₹{couponDiscount.toFixed(2)}</span>
        </div>
      )}

      <div className="border-t border-gray-200 my-4"></div>

      <div className="mb-4">
        <h4 className="font-medium text-xl text-[#03237b] mb-2">
          Apply Coupon
        </h4>
        {appliedCoupon ? (
          <div className="flex justify-between items-center bg-green-100 p-2 rounded-none">
            <span className="text-green-900">{appliedCoupon} applied</span>
            <button
              onClick={removeCoupon}
              className="text-[#03237b] hover:text-[#03237b]"
            >
              <FiX size={20} />
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {coupons.map((coupon) => (
              <button
                key={coupon.code}
                onClick={() => applyCoupon(coupon.code)}
                className="border rounded-none hover:text-[#fad000] px-4 py-2 transition duration-700 hover:bg-[#292929] "
              >
                {coupon.code}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between mb-4 border-t-2 border-gray-400 pt-4">
        <span className="text-[#03237b] font-semibold text-xl">
          Total Amount
        </span>
        <span className="text-[#03237b] font-semibold text-xl">
          ₹{totalAmount.toFixed(2)}
        </span>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="px-6 w-full py-4 text-[--black] font-bold bg-[--secound] text-xl rounded-none transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap "
      >
        Place Order
      </button>
    </div>
  );
};

type DecodedToken = {
  username: string;
};

export default function CartProduct() {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
  const [allCartItems, setAllCartItems] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    if (encodedToken) {
      const parts = encodedToken.split(".");
      if (parts.length === 3) {
        setDecodedToken(JSON.parse(atob(parts[1])));
      }
    }
  }, []);

  useEffect(() => {
    if (decodedToken?.username) {
      const LocalStorageCart = localStorage.getItem(
        `${decodedToken.username}_CartItems`
      );
      const ParsedCartItems = LocalStorageCart
        ? JSON.parse(LocalStorageCart)
        : [];
      setAllCartItems(ParsedCartItems);
    }
  }, [decodedToken]);

  const handleRemove = (index: number) => {
    const updatedItems = allCartItems.filter(
      (_, cartIndex) => cartIndex !== index
    );
    setAllCartItems(updatedItems);

    if (decodedToken?.username) {
      localStorage.setItem(
        `${decodedToken.username}_CartItems`,
        JSON.stringify(updatedItems)
      );
    }
  };

  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <section className="lg:w-2/3">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
              <h5 className="text-3xl text-[#03237b] font-semibold">
                Your products
              </h5>
            </div>
          </div>

          <div className="grid gap-6">
            {allCartItems.map((item: ProductCardProps, index: number) => (
              <ProductCard
                key={index}
                {...item}
                onRemove={() => handleRemove(index)}
              />
            ))}
          </div>
        </section>
        <aside className="lg:w-1/3">
          <PriceDetails items={allCartItems} />
        </aside>
      </div>
    </main>
  );
}
