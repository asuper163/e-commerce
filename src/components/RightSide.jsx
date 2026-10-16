import {useEffect, useState} from "react";
import Iphone from "../assets/Iphone14pro1.png";
import axios from "axios";
import Pagination from "./Pagination";
import {useNavigate} from "react-router-dom";

export default function RightSide() {
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const domain = "https://store.skyready.online";
  const endPoint = "/api/products";
  const url = domain + endPoint;

  const productsPerPage = 9;

  useEffect(() => {
    axios
      .get(url, {
        params: {
          populate: "*",
        },
      })
      .then((res) => {
        const productFromBackEnd = res.data.data;
        setProduct(productFromBackEnd);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length === 0) return true;

    return selectedCategories.includes(product.category?.name);
  });

  return (
    <div className="flex flex-col">
      <h1 className="mb-6 font-medium leading-4 tracking-[3%] text-[#6C6C6C]">
        Available Products:
        <span className="text-[20px] font-medium leading-4 tracking-[3%] text-black">
          {` ${products.length}`}
        </span>
      </h1>

      <div className="grid grid-cols-1 items-stretch gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentProducts.map((el) => (
          <div
            key={el.id}
            className="card flex h-full flex-col gap-4 rounded-[9px] bg-[#F6F6F6] px-4 py-6"
          >
            <img
              className="h-40 w-full cursor-pointer object-contain"
              src={el.coverImg?.url ? `${domain}${el.coverImg.url}` : Iphone}
              alt={el.name || "Product"}
              onClick={() => navigate(`/product/${el.id}`)}
            />

            <p className="text-[14px] font-medium leading-6 text-[#121212] lg:text-[16px]">
              {el.name}
            </p>

            <p className="text-[14px] font-semibold leading-6 tracking-[3%] text-[#282828] lg:text-[16px]">
              {el.price}
            </p>

            <button className="mt-auto rounded-lg bg-black px-10 py-3 text-[14px] text-white lg:text-[16px]">
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
