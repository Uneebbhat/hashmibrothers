"use client";

import { useEffect, useState } from "react";
import axios, { AxiosError, CancelTokenSource } from "axios";

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  productImage?: string;
  [key: string]: unknown;
}

interface ApiResponse {
  success: boolean;
  data?: {
    products?: Product[];
  };
  message?: string;
}

// --- Custom Hook ---
const useGetAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    const fetchAllProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get-all-products`,
          { cancelToken: source.token }
        );

        if (
          response.data?.success &&
          Array.isArray(response.data?.data?.products)
        ) {
          setProducts(response.data.data.products);
        } else {
          setProducts([]);
          setError("Unexpected API response format.");
        }
      } catch (err: unknown) {
        if (axios.isCancel(err)) {
          console.warn("Request canceled:", err.message);
        } else {
          const errorMessage = (err as AxiosError)?.response?.data
            ? JSON.stringify((err as AxiosError).response?.data)
            : (err as Error)?.message || "An unknown error occurred.";

          console.error("Failed to fetch products:", errorMessage);
          setError("Failed to load products. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();

    // Cleanup: cancel request if component unmounts
    return () => {
      source.cancel("Component unmounted - request canceled.");
    };
  }, []);

  return {
    products,
    loading,
    error,
  };
};

export default useGetAllProducts;
