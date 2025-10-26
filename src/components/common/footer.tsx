import Link from "next/link";

import { categories } from "@/src/data/data";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Popular Categories */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-700 pb-2">
              Popular Categories
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.link}
                    className="text-black hover:text-black transition-colors duration-200 text-sm"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-700 pb-2">
              About Us
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-black">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-4 border-b border-gray-700 pb-2">
              Customer Support
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-black">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-black">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-black">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-black">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-black">
          <p>© {new Date().getFullYear()} MedicoMart. All rights reserved.</p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <Link href="#" className="hover:text-black">
              Facebook
            </Link>
            <Link href="#" className="hover:text-black">
              Instagram
            </Link>
            <Link href="#" className="hover:text-black">
              Twitter
            </Link>
            <Link href="#" className="hover:text-black">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
