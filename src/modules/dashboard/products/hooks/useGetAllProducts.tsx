"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// --- API call ---
const fetchAllProducts = async () => {
  const { data }: any = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get-all-products`
  );
  return data.data || [];
};

// --- Custom Hook ---
const useGetAllProducts = () => {
  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    staleTime: 5 * 60 * 1000,
  });
  console.log("✅ Products fetched successfully:", data);

  return {
    products: data || [],
    isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  };
};

export default useGetAllProducts;
