"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

// --- API call ---
const deleteProduct = async (productId: string) => {
  const { data } = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/delete-product`,
    {
      data: { productId },
    }
  );
  return data;
};

// --- Custom Hook ---
const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      console.log("✅ Product deleted successfully:", data);
      // Invalidate the products cache to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        console.error(
          "❌ Error deleting product:",
          error.response?.data || error.message
        );
      } else {
        console.error(error);
      }
    },
  });
};

export default useDeleteProduct;
