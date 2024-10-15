import Pics from "./Pics";
import { useContext } from "react";
import { AppContext } from "../store/Store";
const Image = ({ photos }) => {
  const { addItem } = useContext(AppContext);
  // console.log(value);

  const hadelAddItme = (item) => {
    addItem(item);
  };

  if (!photos || !photos.length) {
    return <h1 className="text-5xl text-green-500">No Images Sorry</h1>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {photos.map((item) => (
        <Pics {...item} key={item.id} hadelAddItme={hadelAddItme} />
      ))}
      {<Pics {...photos[5]} key={45545} />}
    </div>
  );
};

export default Image;
