import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { categories } from "@/src/data/data";
import { Input } from "@/src/components/ui/input";

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
};

export default function ProductFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="sm:max-w-xs bg-white"
      />

      <Select value={category} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((c) => (
            <SelectItem key={c.id} value={c.title}>
              {c.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
