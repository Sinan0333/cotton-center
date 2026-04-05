import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';

const seedProducts = [
  {
    name: "Classic Cotton T-Shirt",
    slug: "classic-cotton-t-shirt",
    description: "Premium ring-spun cotton for an ultra-soft feel. Perfect for everyday wear.",
    price: 24.99,
    category: "Men",
    stock: 150,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy"],
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Linen Summer Dress",
    slug: "linen-summer-dress",
    description: "Lightweight and breathable linen dress. Ideal for summer outings and beach days.",
    price: 59.99,
    category: "Women",
    stock: 45,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige", "White"],
    images: ["https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Kids Denim Overalls",
    slug: "kids-denim-overalls",
    description: "Durable and comfortable denim overalls for active kids.",
    price: 34.50,
    category: "Kids",
    stock: 80,
    sizes: ["2T", "3T", "4T", "5T"],
    colors: ["Classic Blue"],
    images: ["https://images.unsplash.com/photo-1519238396521-2eb287eac936?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Slim Fit Jeans",
    slug: "slim-fit-jeans-men",
    description: "Modern slim fit with stretch denim for all-day comfort.",
    price: 49.99,
    category: "Men",
    stock: 120,
    sizes: ["30", "32", "34", "36"],
    colors: ["Dark Wash", "Light Wash"],
    images: ["https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
  {
    name: "Elegant Silk Blouse",
    slug: "elegant-silk-blouse",
    description: "Luxurious silk blouse that transitions seamlessly from office to evening.",
    price: 79.99,
    category: "Women",
    stock: 30,
    sizes: ["S", "M", "L"],
    colors: ["Emerald", "Pearl"],
    images: ["https://images.unsplash.com/photo-1434389678369-10b272fdf624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  }
];

export async function GET() {
  try {
    await connectToDatabase();
    
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert seed data
    await Product.insertMany(seedProducts);
    
    return NextResponse.json({ success: true, message: "Database seeded successfully with 5 products." });
  } catch (error) {
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 });
  }
}
