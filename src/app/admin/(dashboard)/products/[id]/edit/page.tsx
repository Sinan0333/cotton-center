import { ProductForm } from "@/components/ProductForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import connectToDatabase from "@/lib/mongodb";
import Product from "@/models/Product";
import { notFound } from "next/navigation";

export default async function EditProductPage(props: { params: { id: string } }) {
  const resolvedParams = await Promise.resolve(props.params);
  
  await connectToDatabase();
  const product = await Product.findById(resolvedParams.id).lean();

  if (!product) {
    notFound();
  }

  // Convert ObjectIds to primitives to pass to client component safely
  const safeProduct = JSON.parse(JSON.stringify(product));

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/products" className="inline-flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100 h-9 w-9 rounded-md text-sm font-medium">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Edit Product</h1>
      </div>
      <ProductForm product={safeProduct} />
    </div>
  );
}
