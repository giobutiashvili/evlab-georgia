<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('images')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($products);
    }
    public function show($id)
    {
        $product = Product::with('images')->findOrFail($id);
        return response()->json($product);
    }
}
