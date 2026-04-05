import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IProduct } from "@/models/Product";

export function ProductCard({ product }: { product: Partial<IProduct> & { _id?: string } }) {
  const imageUrl = product.images && product.images.length > 0 
      ? product.images[0] 
      : "https://via.placeholder.com/300x400?text=No+Image";

  return (
    <Card className="group overflow-hidden rounded-xl border-none shadow-sm transition-all hover:shadow-md h-full flex flex-col bg-white">
      <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
        {/* We use a standard img tag with object-cover here or Next Info. Replace with next/image later if hostname is configured */}
        <img
          src={imageUrl}
          alt={product.name || "Product"}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-semibold rounded text-gray-800">
          {product.category}
        </div>
      </Link>
      <CardContent className="p-3 flex-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-sm md:text-base line-clamp-1 mb-1 group-hover:text-black/70 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="font-bold text-sm md:text-lg text-gray-900">
          ${product.price?.toFixed(2)}
        </div>
      </CardContent>
    </Card>
  );
}
