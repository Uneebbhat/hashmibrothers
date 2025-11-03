"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// --- API call ---
const deleteProduct = async (productId: string) => {
  const { data } = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/delete-product`,
    {
      data: { productId },
    } as any
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
    onError: (error: any) => {
      console.error("❌ Error deleting product:", error);
    },
  });
};

export default useDeleteProduct;
