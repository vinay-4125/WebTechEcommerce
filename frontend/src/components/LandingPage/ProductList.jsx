import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { addToCart } from "@/slice/cartSlice";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { useState } from "react";

const ProductList = ({ products, text }) => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const filteredProducts =
    products &&
    products.filter(
      (obj) =>
        obj.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(searchKey.toLowerCase().replace(/\s+/g, "")) ||
        obj.color
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(searchKey.toLowerCase().replace(/\s+/g, ""))
    );

  return (
    <>
      <div className="bg-white py-10 sm:py-0">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">{text}</h2>
          <Input
            value={searchKey}
            placeholder="Search Here..."
            onChange={(e) => setSearchKey(e.target.value)}
            className="w-1/2"
          />
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products && filteredProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              filteredProducts &&
              filteredProducts.map((product) => (
                <div key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <div className="relative">
                      <div className="relative w-full h-96 rounded-lg overflow-hidden">
                        <img
                          src={product.image[0]}
                          alt={product.imageAlt}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="absolute top-0 inset-x-0 h-96 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-25"
                        />
                        <p className="relative text-lg font-semibold text-white">
                          ₹{product.price}
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div className="mt-6">
                    <Button
                      href={product.href}
                      onClick={() => dispatch(addToCart(product))}
                      className="relative w-full flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Add to cart
                      <span className="sr-only">, {product.name}</span>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
