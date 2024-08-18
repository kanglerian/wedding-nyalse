<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::paginate(5);
        return Inertia::render('Setting/Category/Category', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:5|max:100|unique:categories,name',
        ]);

        try {
            Category::create([
                'name' => $request->input('name'),
            ]);

            return redirect()->route('category.index')->with([
                'code' => 201,
                'message' => 'Category created successfully.'
            ], 201);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->route('category.index')->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return redirect()->route('category.index')->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|min:5|max:100|unique:categories,name,' . $category->id,
        ]);

        try {
            $category->update([
                'name' => $request->input('name'),
            ]);
            return redirect()->route('category.index')->with([
                'code' => 204,
                'message' => 'Category updated successfully.'
            ], 204);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->route('user.index')->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return redirect()->route('user.index')->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {

        try {
            $category->delete();
            return redirect()->route('category.index')->with([
                'code' => 200,
                'message' => 'Category deleted successfully.'
            ], 200);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->route('category.index')->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return redirect()->route('category.index')->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }
}
