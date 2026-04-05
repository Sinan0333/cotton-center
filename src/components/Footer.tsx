import Link from "next/link";
import { MessageCircle } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-bold text-xl tracking-tight">Cotton Center</div>
            <p className="text-sm text-gray-500">
              Premium fashion for men, women, and kids. Mobile-first shopping experience designed for your perfect fit.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/shop" className="hover:text-black">All Products</Link></li>
              <li><Link href="/shop?category=Men" className="hover:text-black">Men</Link></li>
              <li><Link href="/shop?category=Women" className="hover:text-black">Women</Link></li>
              <li><Link href="/shop?category=Kids" className="hover:text-black">Kids</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-black">About Us</Link></li>
              <li><Link href="#" className="hover:text-black">Contact</Link></li>
              <li><Link href="#" className="hover:text-black">FAQ</Link></li>
              <li><Link href="#" className="hover:text-black">Shipping & Returns</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Need Help?</h4>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              Contact on WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cotton Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
