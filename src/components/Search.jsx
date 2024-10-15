import { useState } from "react";

const Search = ({ searchDataHandler }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="coding"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded-l-md"
      />
      <button
        onClick={() => searchDataHandler(search)}
        className="bg-green-500 text-white p-2 rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
