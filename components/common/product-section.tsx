import Link from "next/link";
import ProductCard from "../product-card";

import { Button } from "../ui/button";

export default function ProductSection({
  title,
  viewAllLink,
  products,
}: {
  title: string;
  viewAllLink: string;
  products: number;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-3xl font-semibold">{title}</h2>
        <Button variant="link" asChild>
          <Link href={viewAllLink} className="text-blue-600 hover:underline">
            View all
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: products }).map((_, index) => (
          <ProductCard
            key={index}
            imageSrc="/assets/medicine-cart.png"
            productTitle={`Paracetamol 500mg ${index + 1}`}
            productDescription="Pain Relief Medicine"
            quantity="500ml"
            price={500}
          />
        ))}
      </div>
    </div>
  );
}
