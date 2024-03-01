import BreadCrumb from "@/components/Breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const breadcrumbItems = [
  { title: "Product", link: "/admin/products" },
  { title: "Add", link: "/admin/products/new" },
];

const sizeCheckboxList = ["XL", "L", "M", "S"];

export const IMG_MAX_LIMIT = 3;

const formSchema = yup.object({
  name: yup.string().min(1).required(),
  price: yup.number().required("price is required").positive().integer(),
  color: yup.string().required(),
  size: yup.array().required(),
});

const AddProductForm = () => {
  const form = useForm({
    defaultValues: {
      imgUrl: [],
      name: "",
      price: 0,
      color: "",
      size: "",
    },
    mode: "all",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/addmember", data);
      toast.success("Member added");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />

      <div className="flex items-start justify-between">
        <Heading title={`Add Product`} description={""} />
      </div>
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full  xl:w-2/3"
        >
          <div className="grid grid-cols-1 sm:Grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="imgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    {/* <FileUpload
                      onChange={field.onChange}
                      value={field.value}
                      onRemove={field.onChange}
                    /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-start items-center">
                    Product Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Regular Fit Textured-knit resort shirt"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="flex justify-start items-center " />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-start items-center">
                    Price
                  </FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="$$$" {...field} />
                  </FormControl>
                  <FormMessage className="flex justify-start items-center " />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-start items-center">
                    Color
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Color" {...field} />
                  </FormControl>
                  <FormMessage className="flex justify-start items-center " />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-start items-center">
                    Size
                  </FormLabel>
                  <FormControl>
                    <ToggleGroup
                      className="flex justify-start gap-5"
                      variant="outline"
                      type="multiple"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      {sizeCheckboxList.map((item, index) => (
                        <ToggleGroupItem
                          className="p-4"
                          value={item}
                          key={index}
                        >
                          {item}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </FormControl>
                  <FormMessage className="flex justify-start items-center " />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <Toaster position="bottom-left" />
    </div>
  );
};

export default AddProductForm;
