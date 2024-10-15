import { AppContext } from "../store/Store";
import { useContext } from "react";
import { Remove } from "./utils";

const Items = ({ photographer, img, id, handelRemoveItem }) => {
  return (
    <div className="flex justify-between items-start bg-white shadow-lg rounded-lg p-4 mb-6">
      {/* Image */}
      <div className="w-24 h-24">
        <img
          src={img}
          alt="cartItem"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Item Details */}
      <div className="ml-4 flex-grow">
        <h1 className="text-lg font-semibold">Photographer: {photographer}</h1>
        <p className="text-gray-600 text-sm mt-2">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop and more.
        </p>
        <h3 className="text-green-600 text-lg font-bold mt-2">
          ${Math.round(id / 1000)}
        </h3>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => {
          handelRemoveItem(id);
          Remove("Item removed from cart");
        }}
        className="ml-4 bg--500 bg-green-200 text-white py-2 px-3 rounded-full hover:bg-red-500"
      >
        🗑
      </button>
    </div>
  );
};

export default Items;
