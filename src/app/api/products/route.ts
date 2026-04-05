import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import { NextRequest } from 'next/server';

function generateSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '') + '-' + Date.now().toString().slice(-4);
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const data = await request.json();
    
    // Auto-generate slug if not provided or empty
    if (!data.slug) {
      data.slug = generateSlug(data.name);
    }

    const product = new Product(data);
    await product.save();
    
    return NextResponse.json({ success: true, product }, { status: 201 });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json({ error: 'Slug must be unique' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
