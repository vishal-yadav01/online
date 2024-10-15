//*

// // import { Add } from "./utils";
// // const Pics = ({ photographer, src, hadelAddItme, id }) => {
// //   const obj = { photographer, img: src.medium, id };
// //   return (
// //     <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
// //       <img src={src.medium} alt="img" className="w-full h-64 object-cover" />
// //       <div className="mt-4">
// //         <h2 className="text-lg font-semibold">Photographer: {photographer}</h2>
// //         <h2 className="text-green-500 font-bold">
// //           Price: ${Math.round(id / 10000)}
// //         </h2>
// //       </div>
// //       <div className="flex justify-between mt-4">
// //         <button className="bg-blue-500 text-white py-2 px-4 rounded">
// //           Buy
// //         </button>
// //         <button
// //           className="bg-green-500 text-white py-2 px-4 rounded"
// //           onClick={() => {
// //             hadelAddItme(obj);
// //             Add("Item add in cart");
// //             console.log(Add());
// //           }}
// //         >
// //           Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Pics;

//*

// // import { Add } from "./utils";

// // const Pics = ({ photographer, src, hadelAddItme, id }) => {
// //   const obj = { photographer, img: src.medium, id };
// //   return (
// //     <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 transition-transform transform hover:scale-105 duration-300 shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
// //       {" "}
// //       {/* Stronger shadow on hover */}
// //       <img src={src.medium} alt="img" className="w-full h-64 object-cover" />
// //       <div className="mt-4">
// //         <h2 className="text-lg font-semibold">Photographer: {photographer}</h2>
// //         <h2 className="text-green-500 font-bold">
// //           Price: ${Math.round(id / 10000)}
// //         </h2>
// //       </div>
// //       <div className="flex justify-between mt-4">
// //         <button className="bg-blue-500 text-white py-2 px-4 rounded">
// //           Buy
// //         </button>
// //         <button
// //           className="bg-green-500 text-white py-2 px-4 rounded"
// //           onClick={() => {
// //             hadelAddItme(obj);
// //             Add("Item added to cart");
// //           }}
// //         >
// //           Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Pics;

//*
// import { Add } from "./utils";

// const Pics = ({ photographer, src, hadelAddItme, id }) => {
//   const obj = { photographer, img: src.medium, id };

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
//       {/* Stronger shadow on hover */}
//       <img
//         src={src.medium}
//         alt="img"
//         className="w-full h-64 object-cover transition-transform duration-300"
//       />
//       <div className="mt-4">
//         <h2 className="text-lg font-semibold">Photographer: {photographer}</h2>
//         <h2 className="text-green-500 font-bold">
//           Price: ${Math.round(id / 10000)}
//         </h2>
//       </div>
//       <div className="flex justify-between mt-4">
//         <button className="bg-blue-500 text-white py-2 px-4 rounded transition duration-300 transform hover:scale-105">
//           Buy
//         </button>
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded transition duration-300 transform hover:scale-105"
//           onClick={() => {
//             hadelAddItme(obj);
//             Add("Item added to cart");
//           }}
//         >
//           Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pics;

import { Add } from "./utils";

const Pics = ({ photographer, src, hadelAddItme, id }) => {
  const obj = { photographer, img: src.medium, id };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-3 transition-all duration-300 transform hover:scale-105">
      {/* Image container */}
      <div className="relative">
        {/* Image with hover effect */}
        <img
          src={src.medium}
          alt="img"
          className="w-full h-64 object-cover transition-transform duration-300"
        />
        {/* Download overlay */}
        <a
          href={src.medium} // Link to download the image
          download // This attribute enables downloading the image
          className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-white text-lg font-bold">Download</span>
        </a>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          Photographer: {photographer.split(" ")[0]}
        </h2>
        <h2 className="text-green-500 font-bold">
          Price: ${Math.round(id / 10000)}
        </h2>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded transition duration-300 transform hover:scale-105">
          Buy
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded transition duration-300 transform hover:scale-105"
          onClick={() => {
            hadelAddItme(obj);
            Add("Item added to cart");
          }}
        >
          Cart
        </button>
      </div>
    </div>
  );
};

export default Pics;
