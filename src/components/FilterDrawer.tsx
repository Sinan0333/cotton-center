"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FilterDrawer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [open, setOpen] = useState(false);
  
  const currentCategory = searchParams.get("category") || "";
  const currentSearch = searchParams.get("q") || "";

  const [category, setCategory] = useState(currentCategory);
  const [search, setSearch] = useState(currentSearch);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (search) params.set("q", search);
    
    router.push(`/shop?${params.toString()}`);
    setOpen(false);
  };

  const clearFilters = () => {
    setCategory("");
    setSearch("");
    router.push(`/shop`);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={buttonVariants({ variant: "outline", className: "flex items-center gap-2" })}>
        <SlidersHorizontal className="h-4 w-4" />
        <span>Filters</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
        </SheetHeader>
        <div className="py-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <Input 
              id="search" 
              placeholder="Search products..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Category</Label>
            <div className="grid grid-cols-2 gap-2">
              {["Men", "Women", "Kids"].map((cat) => (
                <Button 
                  key={cat} 
                  type="button"
                  variant={category === cat ? "default" : "outline"}
                  onClick={() => setCategory(category === cat ? "" : cat)}
                  className="w-full"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 pt-4 border-t mt-auto">
          <Button variant="outline" className="flex-1" onClick={clearFilters}>
            Clear
          </Button>
          <Button className="flex-1" onClick={applyFilters}>
            Apply
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
