import { useEffect, useMemo, useState } from "react";

import { FC } from "react";

export const PriceDetails = ({ items }: { items: ProductCardProps[] }) => {
  const shippingFee = 80;
  const totalMRP = items.reduce(
    (sum: number, item: { price: string }) => sum + Number(item.price),
    0 // Initialize the accumulator as 0 (a number)
  );
  const totalAmount = totalMRP + shippingFee;

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="font-medium text-gray-900 mb-4">
        Price Details {items.length} Items
      </h3>

      {items.map((item: ProductCardProps, index: number) => (
        <div key={index} className="flex justify-between mb-2">
          <span className="text-gray-600">{item.productname}</span>
          <span className="text-gray-900">₹ {item.price}</span>
        </div>
      ))}

      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Total MRP</span>
        <span className="text-gray-900">₹ {totalMRP}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Shipping Fee</span>
        <span className="text-gray-900">₹ {shippingFee}</span>
      </div>

      <div className="flex justify-between mb-4 border-t-2 border-gray-400 pt-2">
        <span className="text-gray-900 font-medium">Total Amount</span>
        <span className="text-gray-900 font-medium">₹ {totalAmount}</span>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Place Order
      </button>
    </div>
  );
};

import { FiX } from "react-icons/fi";
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
  onRemove: () => void;
};

export const ProductCard: FC<ProductCardProps> = ({
  productname,
  description,
  price,
  quantity,
  rubber,
  endcap,
  nutbolt,
  img,
  onRemove,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-lg p-4 rounded-2xl gap-2 items-start">
      <div className="flex justify-between items-center w-full">
        <input type="checkbox" className="rounded border-gray-300 my-4" />
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-gray-600"
        >
          <FiX size={20} />
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-4 my-1">
        <div className="w-36 h-36 bg-gray-200 rounded-lg flex items-center justify-center">
          <img
            src={img}
            alt={productname}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-2 justify-between">
            <div className="flex justify-between w-full">
              <h3 className="font-medium text-gray-900 whitespace-nowrap">
                {productname}
              </h3>
              <p className="text-gray-900 font-medium whitespace-nowrap">
                Price: ₹ {price}
              </p>
            </div>
            <div className="text-sm text-gray-500 text-justify">
              {description.slice(0, 210)}...
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-around w-full">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600">Quantity:</span>
          <div className="flex items-center gap-1">
            <input
              type="text"
              value={quantity}
              className="w-16 text-center border rounded mx-1 focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600">Nut Bolt:</span>
          <div className="flex items-center gap-1">
            <input
              type="text"
              value={nutbolt}
              className="w-16 text-center border rounded mx-1 focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600">Rubber:</span>
          <div className="flex items-center gap-1">
            <input
              type="text"
              value={rubber}
              className="w-16 text-center border rounded mx-1 focus:outline-none"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600">End Cap:</span>
          <div className="flex items-center gap-1">
            <input
              type="text"
              value={endcap}
              className="w-16 text-center border rounded mx-1 focus:outline-none"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type DecodedToken = {
  username: string;
};

export default function CartProdcut() {
  const encodedToken = localStorage.getItem("token");
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);
  const [allCartItems, setAllCartItems] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const parts = encodedToken?.split(".");

    if (parts?.length === 3) {
      setDecodedToken(JSON.parse(atob(parts[1])));
    }
  }, [encodedToken]);

  const LocalStorageCart = localStorage.getItem(
    `${decodedToken?.username}_CartItems`
  );

  const ParsedCartItems = useMemo(() => {
    return LocalStorageCart ? JSON.parse(LocalStorageCart) : [];
  }, [LocalStorageCart]);

  useEffect(() => {
    setAllCartItems(ParsedCartItems);
  }, [ParsedCartItems]);
  // console.log(ParsedCartItems);

  const handleRemove = (index: number) => {
    // Remove the item from the cart based on the index
    const RemovedItem = ParsedCartItems.filter(
      (_: ProductCardProps, cartindex: number) => cartindex !== index
    );

    setAllCartItems(RemovedItem);

    localStorage.setItem(
      `${decodedToken?.username}_CartItems`,
      JSON.stringify(RemovedItem)
    );
  };

  return (
    <main className="max-w-[85rem] mx-auto py-8 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between lg:px-8">
      <section className="px-4 flex flex-col lg:w-[70%]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-gray-600">
              {ParsedCartItems.length}/{ParsedCartItems.length} Item Selected
            </span>
          </div>

          <div className="flex gap-2">
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Remove
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {allCartItems.map((item: ProductCardProps, index: number) => (
            <ProductCard
              key={index}
              productname={item.productname}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              rubber={item.rubber}
              nutbolt={item.nutbolt}
              endcap={item.endcap}
              img={item.img}
              onRemove={() => handleRemove(index)}
              color={""}
            />
          ))}
        </div>
      </section>
      <aside className="flex flex-col lg:w-[30%] px-4 border-l-2">
        <PriceDetails items={allCartItems} />
      </aside>
    </main>
  );
}
