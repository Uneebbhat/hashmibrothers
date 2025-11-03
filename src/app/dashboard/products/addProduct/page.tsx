import AddProductForm from "@/src/modules/dashboard/products/addProduct/components/add-product-form";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export default function AddProductPage() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Add New Product
        </h1>
      </div>

      {/* Product Form */}
      <Card className="shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-800">
            Product Details
          </CardTitle>
        </CardHeader>

        <CardContent>
          <AddProductForm />
        </CardContent>
      </Card>
    </div>
  );
}
