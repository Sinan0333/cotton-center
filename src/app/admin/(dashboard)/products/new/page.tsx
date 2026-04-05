import { ProductForm } from "@/components/ProductForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function NewProductPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/products" className="inline-flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100 h-9 w-9 rounded-md text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>
      </div>
      <ProductForm />
    </div>
  );
}
