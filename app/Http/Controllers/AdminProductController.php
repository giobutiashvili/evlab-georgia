<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class AdminProductController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'images' => 'required', // input field name
            'images.*' => 'mimes:jpg,jpeg,png,webp,avif|max:4096',
        ]);

        try {
            $product = Product::create([
                'name' => $request->name,
                'price' => $request->price,
                'description' => $request->description,

            ]);

            $folder = 'products/' . $product->id;


            $files = $request->file('images'); // single or multiple
            if ($files) {
                $files = is_array($files) ? $files : [$files]; // force array
                foreach ($files as $index => $file) {
                    $product->images()->create([
                        'path' => $file->store($folder, 'public'),
                        'is_main' => $index === 0, // პირველი ფაილი main_image
                    ]);
                }
            }

            return response()->json([
                'message' => 'Product added successfully',
                'product' => $product
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function index()
    {
        $products = Product::with('images') // <-- relation აქ
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($products);
    }

    public function show($id)
    {
        $product = Product::with('images')->findOrFail($id); // <-- ერთი ხაზით
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:4096',
        ]);

        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('products', 'public');
            $product->image = $path;
            $product->save();
        }

        return response()->json($product);
    }
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        $product->delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }
}
