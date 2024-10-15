// import { Link } from "react-router-dom";
// import { AppContext } from "../store/Store";
// import { useContext } from "react";
// const Header = ({ cartCount }) => {
//   const { cart } = useContext(AppContext);
//   console.log("context api==", AppContext);

//   return (
//     <div className="bg-black text-white p-4 flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold">
//         ECOMZY
//       </Link>
//       <div className="flex items-center space-x-6">
//         {" "}
//         {/* space between Home and Cart */}
//         <Link to="/" className="text-lg">
//           Home
//         </Link>
//         <Link to="/cart" className="relative">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 inline-block text-green-500" // Cart icon in green
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0L5 21h14M9 21a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
//             />
//           </svg>
//           {/* Display cart count only if it's greater than 0 */}
//           {
//             <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full px-2 text-sm">
//               {cart.length}
//             </span>
//           }
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import { Link } from "react-router-dom";
// import { AppContext } from "../store/Store";
// import { useContext } from "react";

// const Header = () => {
//   const { cart } = useContext(AppContext);
//   console.log("context api==", AppContext);

//   return (
//     <div className="bg-black text-white p-4 flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold">
//         ECOMZY
//       </Link>
//       <div className="flex items-center space-x-6">
//         <Link to="/" className="text-lg">
//           Home
//         </Link>
//         <Link to="/cart" className="relative">
//           {" "}
//           {/* Keep this as relative for absolute positioning of badge */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 inline-block text-green-500" // Cart icon in green
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0L5 21h14M9 21a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
//             />
//           </svg>
//           {/* Display cart count only if it's greater than 0 */}
//           {cart.length > 0 && ( // Only show if cart has items
//             <span className="absolute top-[-8px] right-[-8px] bg-green-500 text-white rounded-full px-2 text-xs">
//               {" "}
//               {/* Adjusted position for count */}
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import { Link } from "react-router-dom";
// import { AppContext } from "../store/Store";
// import { useContext } from "react";

// const Header = () => {
//   const { cart } = useContext(AppContext);

//   return (
//     <div className="bg-black text-white flex justify-between items-center p-5">
//       {" "}
//       {/* Adjusted padding */}
//       <Link to="/" className="text-2xl font-bold">
//         ECOMZY
//       </Link>
//       <div className="flex items-center space-x-5">
//         {" "}
//         {/* Adjusted spacing between items */}
//         <Link to="/" className="text-lg">
//           Home
//         </Link>
//         <Link to="/cart" className="relative">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 inline-block text-green-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0L5 21h14M9 21a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
//             />
//           </svg>
//           {cart.length > 0 && (
//             <span className="absolute top-[-8px] right-[-8px] bg-green-500 text-white rounded-full px-2 text-xs">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;
import { Link } from "react-router-dom";
import { AppContext } from "../store/Store";
import { useContext } from "react";

const Header = () => {
  const { cart } = useContext(AppContext);

  return (
    <div className="bg-black text-white flex justify-between items-center p-5">
      <Link to="/" className="text-2xl font-bold">
        ECOMZY
      </Link>
      <div className="flex items-center space-x-5">
        <Link to="/" className="text-lg hover:underline hover:text-green-500">
          Home
        </Link>
        <Link
          to="/cart"
          className="relative text-lg hover:underline hover:text-green-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0L5 21h14M9 21a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
          {cart.length > 0 && (
            <span className="absolute top-[-8px] right-[-8px] bg-green-500 text-white rounded-full px-2 text-xs">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
