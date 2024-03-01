import BreadCrumb from "@/components/Breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import ProductTable from "./ProductTable";
import ProductAction from "./ProductAction";

const Products = () => {
  const breadcrumbItems = [{ title: "Products", link: "/admin/products" }];
  const data = [{ abc: "hello" }];

  const productColumn = [
    {
      header: "Product Image",
      accessorKey: "productImage",
    },
    {
      header: "Product Name",
      accessorKey: "name",
    },
    {
      header: "Product Price",
      accessorKey: "price",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => <ProductAction data={row.original} />,
    },
  ];

  return (
    <div>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Products ${data?.length}`}
            description="Manage products"
          />

          <Link
            to={"/admin/products/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New Product
          </Link>
        </div>
        <Separator />
        {data && <ProductTable data={data} columns={productColumn} />}
      </div>
    </div>
  );
};

export default Products;
