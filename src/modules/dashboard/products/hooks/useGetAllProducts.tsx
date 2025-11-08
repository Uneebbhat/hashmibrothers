// useGetAllProducts.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCardProps } from "../components/product-card";

export default function useGetAllProducts() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/get-all-products`
        );
        setProducts(data.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return { products };
}
