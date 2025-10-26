"use client";

import Link from "next/link";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { categories } from "@/src/data/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategorySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250; // pixels per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-blue-500 text-white py-4 px-5 md:px-10">
      <div className="container mx-auto relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-blue-500 bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full z-10 cursor-pointer"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slider Container */}
        <div
          ref={scrollRef}
          className="flex items-center justify-start gap-8 overflow-x-auto scroll-smooth px-5 no-scrollbar"
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
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-blue-500 bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full z-10 cursor-pointer"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
