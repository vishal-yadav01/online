import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Image from "./components/Image";
import Loading from "./components/Lading";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css"; // Make sure CSS is imported
import { ToastContainer } from "react-toastify"; // Import ToastContainer globally

const App = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState("coding");
  const [searchData, setSearchData] = useState([]);

  const searchDataHandler = (val) => {
    if (val.length !== 0) {
      setData(val);
    }
  };

  useEffect(() => {
    apiCall();
  }, [data]);

  const apiCall = async () => {
    try {
      setLoad(true);
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${data}`,
        {
          headers: {
            Authorization:
              "ikAiDd5T6Xoqy5327mgfrIiAx8j6BBa8FYLgo5TZdQfPq21YGaTkKifE",
          },
        }
      );
      const json = await res.json();
      setSearchData(json.photos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Search searchDataHandler={searchDataHandler} />
      {load ? <Loading val={data} /> : <Image photos={searchData} />}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
