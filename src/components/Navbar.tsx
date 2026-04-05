"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center flex-row px-4 md:px-6">
        
        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden mr-2" })}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle mobile menu</span>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left font-bold text-xl">Categories</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/shop" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-black/70">
                All Products
              </Link>
              <Link href="/shop?category=Men" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-black/70">
                Men
              </Link>
              <Link href="/shop?category=Women" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-black/70">
                Women
              </Link>
              <Link href="/shop?category=Kids" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-black/70">
                Kids
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex-1 shrink-0 md:flex-none">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Cotton Center</span>
            <span className="font-bold text-xl tracking-tight sm:hidden">CC</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex ml-8 flex-1 space-x-6">
          <Link href="/shop" className="text-sm font-medium transition-colors hover:text-black/70">
            Shop All
          </Link>
          <Link href="/shop?category=Men" className="text-sm font-medium transition-colors hover:text-black/70">
            Men
          </Link>
          <Link href="/shop?category=Women" className="text-sm font-medium transition-colors hover:text-black/70">
            Women
          </Link>
          <Link href="/shop?category=Kids" className="text-sm font-medium transition-colors hover:text-black/70">
            Kids
          </Link>
        </div>

        <div className="flex items-center ml-auto">
          <Link href="/shop" className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
