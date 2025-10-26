import Link from "next/link";
import Container from "./container";
import CategorySlider from "../category-slider";

import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/src/components/ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 z-20">
      <header className="px-5 md:px-10 py-5 bg-white">
        <Container className="flex items-center justify-between gap-10">
          {/* Logo & Searchbar */}
          <div className="flex items-center gap-5 w-full">
            <div>
              <p className="font-semibold text-lg">Hashmi Brothers</p>
            </div>
            <div className="hidden md:flex grow max-w-lg">
              <Input
                type="search"
                placeholder="Search your product"
                name="searchbar"
                id="searchbar"
                className="w-full"
              />
            </div>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center gap-5 w-fit">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="relative">
              <Link href="/cart">
                <ShoppingCart className="cursor-pointer" />
                <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-medium bg-blue-500">
                  0
                </Badge>
              </Link>
            </div>
          </div>
        </Container>
      </header>
      <div>
        <CategorySlider />
      </div>
    </div>
  );
}
