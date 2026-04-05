import Link from "next/link";
import { Plus } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import connectToDatabase from "@/lib/mongodb";
import Product from "@/models/Product";
import { DeleteProductButton } from "@/components/DeleteProductButton";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  await connectToDatabase();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Products Management</h1>
        <Link href="/admin/products/new" className="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/80">
          <Plus className="h-4 w-4 mr-2"/> Add Product
        </Link>
      </div>

      <div className="rounded-md border bg-white overflow-x-auto shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No products found. Add one to get started.
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product._id.toString()}>
                  <TableCell>
                    <div className="h-10 w-10 rounded bg-gray-100 overflow-hidden">
                      {product.images && product.images[0] ? (
                        <img src={product.images[0]} alt="" className="h-full w-full object-cover" />
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2 text-sm">
                      <Link href={`/admin/products/${product._id}/edit`} className="inline-flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">
                        Edit
                      </Link>
                      <DeleteProductButton id={product._id.toString()} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
