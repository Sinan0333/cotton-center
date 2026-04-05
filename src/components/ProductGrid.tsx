import { ProductCard } from "./ProductCard";
import { IProduct } from "@/models/Product";

interface ProductGridProps {
  products: (Partial<IProduct> & { _id?: string })[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-24 text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product._id || product.slug} product={product} />
      ))}
    </div>
  );
}
