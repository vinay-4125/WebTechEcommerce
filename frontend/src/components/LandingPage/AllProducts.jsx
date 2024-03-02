import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductList from "./ProductList";
import ThemeToggle from "../ThemeToggle";

const AllProducts = () => {
  const fetchAllProducts = async () => {
    const res = await axios.get("/api/getProducts");
    return res.data;
  };

  const { data: products } = useQuery({
    queryKey: ["allproducts"],
    queryFn: fetchAllProducts,
  });

  return (
    <>
      <div className="flex">
        <nav
          className={cn(
            `relative hidden h-screen border-r pt-16 lg:block w-72`
          )}
        >

          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                  Filter
                </h2>
              </div>
            </div>
          </div>
        </nav>
        <div className="w-full  overflow-y-auto md:overflow-hidden">
          {products && (
            <ProductList products={products} text="All Categories" />
          )}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
