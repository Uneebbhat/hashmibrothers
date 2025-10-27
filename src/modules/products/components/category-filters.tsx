"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { categories } from "@/src/data/data";

export default function CategoryFilters() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    console.log("Selected Category:", value);
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <Select onValueChange={handleCategoryChange} value={selectedCategory}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.title} value={category.title}>
              {category.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
