"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Package, LogOut, LayoutDashboard, Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const NavLinks = () => (
    <>
      <Link href="/admin" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 font-medium">
        <LayoutDashboard className="h-5 w-5" /> Dashboard
      </Link>
      <Link href="/admin/products" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 font-medium">
        <Package className="h-5 w-5" /> Products
      </Link>
      <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 font-medium text-red-600 text-left w-full mt-auto">
        <LogOut className="h-5 w-5" /> Logout
      </button>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-10">
        <div className="font-bold text-xl">Admin Panel</div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] flex flex-col">
             <div className="font-bold text-2xl mb-8">Admin Panel</div>
             <div className="flex flex-col gap-2 flex-1">
               <NavLinks />
             </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r min-h-screen p-4 sticky top-0">
        <div className="font-bold text-2xl mb-8 pl-3">Cotton Admin</div>
        <div className="flex flex-col gap-2 flex-1 relative">
          <NavLinks />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
