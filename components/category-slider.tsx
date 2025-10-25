"use client";

import Link from "next/link";

import { useRef } from "react";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Categories } from "@/types/types";
import { categories } from "@/data/data";

export default function CategorySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250; // pixels per click
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative bg-blue-500 text-white py-4 px-5 md:px-10">
      <div className="container mx-auto">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full z-10 cursor-pointer"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slider Container */}
        <div
          ref={scrollRef}
          className="flex items-center justify-start gap-8 overflow-x-auto scroll-smooth hide-scrollbar px-5"
        >
          <Link
            href="/"
            className="font-semibold flex items-center gap-1 whitespace-nowrap"
          >
            Offers
            <Badge variant="destructive">%</Badge>
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="font-semibold whitespace-nowrap"
            >
              {category.title}
            </Link>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full z-10 cursor-pointer"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
