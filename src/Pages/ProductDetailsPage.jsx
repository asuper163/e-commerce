import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import Iphone from "../assets/Iphone14pro1.png";

export default function ProductDetailsPage() {
  const {id} = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const domain = "https://store.skyready.online";

  useEffect(() => {
    axios
      .get(`${domain}/api/products/${id}`, {
        params: {
          populate: "*",
        },
      })
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="p-6">Loading product...</p>;
  }

  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 rounded-lg bg-black px-5 py-2 text-white"
      >
        Back to Products
      </button>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-xl bg-[#F6F6F6] p-8">
          <img
            src={
              product.coverImg?.url
                ? `${domain}${product.coverImg.url}`
                : Iphone
            }
            alt={product.name || "Product"}
            className="max-h-96 w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold text-[#121212]">
            {product.name}
          </h1>

          <p className="text-xl font-semibold text-[#282828]">
            {product.price}
          </p>

          {/* Add more product fields here when needed */}
          <button className="rounded-lg bg-black px-8 py-3 text-white">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
