"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function DeleteProductButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } else {
        alert("Failed to delete product");
        setIsDeleting(false);
      }
    } catch (error) {
      alert("Error deleting product");
      setIsDeleting(false);
    }
  };

  return (
    <Button 
      variant="destructive" 
      size="sm" 
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? "..." : "Delete"}
    </Button>
  );
}
