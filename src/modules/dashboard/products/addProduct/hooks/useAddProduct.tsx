"use client";

import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useFormHandler from "@/src/hooks/useFormHandler";

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

// --- API call ---
const addProduct = async (productData: ProductFormData) => {
  const formData = new FormData();

  formData.append("productName", productData.productName);
  formData.append("productDescription", productData.productDescription);
  formData.append("category", productData.category);
  formData.append("quantity", productData.quantity);
  formData.append("inStock", String(productData.inStock));
  formData.append("price", String(productData.price));

  if (productData.productImage) {
    formData.append("productImage", productData.productImage);
  }

  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/add-product`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return data;
};

const useAddProduct = () => {
  const queryClient = useQueryClient();

  const { formData, handleOnChange, handleOnFileChange, loading, setLoading } =
    useFormHandler<ProductFormData>({
      productName: "",
      productDescription: "",
      category: "",
      quantity: "",
      inStock: "",
      price: "",
      productImage: null,
    });

  const mutation = useMutation({
    mutationFn: addProduct,
    onMutate: () => setLoading(true),

    onSuccess: (data) => {
      console.log("✅ Product created successfully:", data);

      // Invalidate existing product list cache
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onError: (error: any) => {
      console.error(
        "❌ Error creating product:",
        error.response?.data || error
      );
    },

    onSettled: () => setLoading(false),
  });

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate(formData);

    console.log(formData);
  };

  return {
    formData,
    handleOnChange,
    handleOnFileChange,
    handleSubmit,
    loading,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useAddProduct;
