import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Property from '@/app/models/property.model';

export async function GET(request: Request) {
  try {
    console.log('Connecting to MongoDB...');
    await dbConnect();
    console.log('MongoDB connected successfully');
    
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const type = searchParams.get('type');
    const limit = parseInt(searchParams.get('limit') || '6');
    
    console.log('Query parameters:', { status, type, limit });
    
    // Build query
    const query: any = {};
    if (status && status !== 'featured') {
      query.listingType = status;
    }
    if (type) {
      query.propertyType = type;
    }
    
    console.log('MongoDB query:', query);
    
    // Fetch properties
    console.log('Fetching properties...');
    const properties = await Property.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate('owner', 'name email');
    
    console.log(`Found ${properties.length} properties`);
    
    return NextResponse.json({
      success: true,
      properties
    });
  } catch (error) {
    console.error('Fetch properties error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch properties', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 