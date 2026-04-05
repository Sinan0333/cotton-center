import { Suspense } from "react";
import connectToDatabase from "@/lib/mongodb";
import Product from "@/models/Product";
import { ProductGrid } from "@/components/ProductGrid";
import { FilterDrawer } from "@/components/FilterDrawer";

export const dynamic = "force-dynamic";

async function ShopContent({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  await connectToDatabase();
  
  // Await the searchParams object
  const resolvedParams = await Promise.resolve(searchParams);
  
  const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
  const q = typeof resolvedParams.q === 'string' ? resolvedParams.q : undefined;

  const query: any = {};
  if (category) query.category = category;
  if (q) query.name = { $regex: q, $options: "i" };

  const products = await Product.find(query).sort({ createdAt: -1 }).lean();

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {category ? `${category} Collection` : "All Products"}
          </h1>
          <p className="text-gray-500 mt-1">Showing {products.length} products</p>
        </div>
        <div className="w-full md:w-auto flex justify-end">
          <FilterDrawer />
        </div>
      </div>
      
      <ProductGrid products={JSON.parse(JSON.stringify(products))} />
    </div>
  );
}

export default function ShopPage(props: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div className="container px-4 py-24 text-center">Loading products...</div>}>
        <ShopContent searchParams={props.searchParams} />
      </Suspense>
    </div>
  );
}
