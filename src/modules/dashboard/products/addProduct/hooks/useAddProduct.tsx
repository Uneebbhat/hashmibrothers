"use client";

import useFormHandler from "@/src/hooks/useFormHandler";

import axios, { AxiosError } from "axios";
import { HandleOnSubmit } from "@/src/types/FormTypes";
import { toast } from "sonner";

// --- Types ---
interface ProductFormData {
  productName: string;
  productDescription: string;
  category: string;
  quantity: string;
  inStock: string;
  price: string;
  productImage?: File | null;
}

const useAddProduct = () => {
  const {
    formData,
    loading,
    setLoading,
    setFormData,
    handleOnChange,
    handleOnFileChange,
  } = useFormHandler<ProductFormData>({
    productName: "",
    productDescription: "",
    category: "",
    quantity: "",
    inStock: "",
    price: "",
    productImage: null,
  });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formPayload = new FormData();
      formPayload.append("productName", formData.productName);
      formPayload.append("productDescription", formData.productDescription);
      formPayload.append("category", formData.category);
      formPayload.append("quantity", formData.quantity);
      formPayload.append("inStock", formData.inStock);
      formPayload.append("price", formData.price);
      if (formData.productImage) {
        formPayload.append("productImage", formData.productImage);
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/add-product`,
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(data);
      toast.success("Product added successfully!");
      // Reset form
      setFormData({
        productName: "",
        productDescription: "",
        category: "",
        quantity: "",
        inStock: "",
        price: "",
        productImage: null,
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(
          "Error adding product:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formData,
    setLoading,
    handleOnSubmit,
    handleOnChange,
    handleOnFileChange,
  };
};

export default useAddProduct;
