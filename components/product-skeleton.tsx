import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <Card className="group transition-shadow duration-300">
      {/* Product Link Area */}
      <CardHeader className="flex flex-col items-center justify-center cursor-pointer">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </CardHeader>

      <CardContent className="space-y-2 cursor-pointer">
        <CardTitle className="text-lg font-semibold text-gray-800">
          <Skeleton className="h-4 w-[250px]" />
        </CardTitle>
        <p className="text-sm text-gray-500">
          <Skeleton className="h-4 w-[250px]" />
        </p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <Skeleton className="h-4 w-[250px]" />
          </p>
          <p>
            <Skeleton className="h-4 w-[250px]" />
          </p>
          <p>
            <span className="text-blue-600 font-semibold">
              <Skeleton className="h-4 w-[250px]" />
            </span>
          </p>
        </div>
      </CardContent>

      {/* Independent Button (Separate Link) */}
      <CardFooter className="flex justify-center">
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  );
}
