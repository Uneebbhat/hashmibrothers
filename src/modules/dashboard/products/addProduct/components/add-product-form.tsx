"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Save, Upload } from "lucide-react";
import { categories } from "@/src/data/data";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import useAddProduct from "../hooks/useAddProduct";

export default function AddProductForm() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const {
    formData,
    handleOnChange,
    handleSubmit,
    loading,
    isPending,
    isSuccess,
    isError,
    error,
    handleOnFileChange,
  } = useAddProduct();

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <Input
          placeholder="e.g., Paracetamol 500mg 1"
          className="w-full"
          id="productName"
          name="productName"
          onChange={handleOnChange}
        />
      </div>

      {/* Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Use for
          </label>
          <Input
            placeholder="Pain Relief Medicine"
            id="productDescription"
            name="productDescription"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <Select
            value={formData.category}
            onValueChange={(v) => {
              handleOnChange({
                target: { name: "category", value: v },
              } as any);
            }}
          >
            <SelectTrigger className="w-full" id="category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem value={category.title} key={category.id}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Hidden fields so the native form submission includes both id and name */}
          <input type="hidden" name="categoryId" value={selectedCategoryId} />
          <input
            type="hidden"
            name="category"
            value={
              categories.find((c) => String(c.id) === selectedCategoryId)
                ?.title ?? ""
            }
          />
        </div>
      </div>

      {/* Quantity, Stock, Price */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <Input
            placeholder="e.g., 500ml"
            onChange={handleOnChange}
            id="quantity"
            name="quantity"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            In Stock
          </label>
          <Input
            type="number"
            placeholder="e.g., 45"
            onChange={handleOnChange}
            id="inStock"
            name="inStock"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price (Rs)
          </label>
          <Input
            type="number"
            placeholder="e.g., 500"
            onChange={handleOnChange}
            id="price"
            name="price"
          />
        </div>
      </div>

      {/* Product Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Image
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-gray-400 transition">
          <Upload className="h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 mb-1">
            Drag and drop an image here, or click to upload
          </p>
          <Input
            id="productImage"
            name="productImage"
            onChange={handleOnFileChange}
            type="file"
            accept="image/*"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
          <Save className="w-4 h-4" />
          Save Product
        </Button>
      </div>
    </form>
  );
}
