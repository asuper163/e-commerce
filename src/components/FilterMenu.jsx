import axios from "axios";
import {useEffect, useState} from "react";

export default function FilterMenu() {
  const [products, setProduct] = useState([]);
  let domain = "https://store.skyready.online";
  let endPoint = "/api/products";
  let url = domain + endPoint;

  useEffect(() => {
    axios
      .get(url, {
        params: {
          populate: "*",
        },
      })
      .then((res) => {
        let productFromBackEnd = res.data.data;
        setProduct(productFromBackEnd);
      });
  }, []);

  const categories = [
    ...new Set(products.map((el) => el.category?.name).filter(Boolean)),
  ];
  return (
    <div className="flex flex-col gap-4 ">
      {categories.map((el) => (
        <div className="flex gap-2 items-center">
          <input type="checkbox" />
          <p className="text-[15px] font-medium leading-6 tracking-[0%]">
            {el}
          </p>
        </div>
      ))}

      <button className="text-white bg-black rounded-lg py-3 px-3 lg:px-16 mt-2">
        Apply
      </button>
    </div>
  );
}
