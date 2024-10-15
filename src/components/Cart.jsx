import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { AppContext } from "../store/Store";
import Items from "./Items";
import "./Cart.css"; // Import the CSS file for custom scrollbar styles
// import "react-toastify/dist/ReactToastify.css"; // Make sure CSS is imported
import { ToastContainer } from "react-toastify"; // Import ToastContainer globally

const Cart = () => {
  const { cart, removeItem } = useContext(AppContext);
  const handelRemoveItem = (id) => {
    removeItem(id);
  };

  let totalAmount = 0;
  {
    totalAmount = cart.reduce((sum, item) => sum + item.id / 1000, 0);
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Scrollable Items Section */}
          <div className="w-full lg:w-8/12 h-screen overflow-y-auto pr-6 custom-scrollbar">
            {cart.length <= 0 ? (
              <div className="text-center text-2xl">Your cart is empty</div>
            ) : (
              cart.map((item, index) => {
                return (
                  <Items
                    {...item}
                    key={index}
                    handelRemoveItem={handelRemoveItem}
                  />
                );
              })
            )}
          </div>

          {/* Fixed Cart Summary */}
          <div className="w-full lg:w-4/12 sticky top-20 mt-8 lg:mt-0 lg:ml-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">YOUR CART SUMMARY</h2>
            <p className="text-lg">Total Items: {cart.length}</p>
            <p className="text-lg font-bold text-green-700 mt-4">
              Total Amount: ${Math.round(totalAmount)}
            </p>
            <button className="w-full mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Cart;
