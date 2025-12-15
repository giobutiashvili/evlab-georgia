<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; // Assuming Product model exists

class AdminProductController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('products', 'public');
        }
        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'image' => $imagePath,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        return response()->json([
            'message' => 'Product Add Successfully',
            'product' => $product
        ], 201);
    }

    public function index(Request $request)
    {
        $products = Product::orderby('created_at', 'desc')->get();
        return response()->json($products);
    }
}
