<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'invitation_id' => 'required',
            'meet' => 'required|date',
            'cover' => 'mimes:jpg,jpeg,png|max:2048',
            'title' => 'required|string',
            'description' => 'required|string',
        ]);

        $extension = null;

        if ($request->hasFile('cover')) {
            $file = $request->file('cover');
            $extension = $file->getClientOriginalExtension();
            $filename =  Carbon::now()->format('Ymd_His') . $request->input('invitation_id') . Auth::user()->id . '.' . $extension;
            $filePath = $file->storeAs('covers', $filename, 'public');
        }

        try {
            Story::create([
                'invitation_id' => $request->input('invitation_id'),
                'meet' => $request->input('meet'),
                'cover' => $filename,
                'title' => $request->input('title'),
                'description' => $request->input('description'),
            ]);

            return back()->with([
                'code' => 201,
                'message' => 'Story created successfully.'
            ], 201);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return back()->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return back()->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Story $story)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Story $story)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Story $story)
    {
        $request->validate([
            'meet' => 'required|date',
            'title' => 'required|string',
            'description' => 'required|string',
        ]);

        try {
            $story->update([
                'meet' => $request->input('meet'),
                // 'cover' => $request->input('cover'),
                'title' => $request->input('title'),
                'description' => $request->input('description'),
            ]);
            return back()->with([
                'code' => 204,
                'message' => 'Story updated successfully.'
            ], 204);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return back()->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return back()->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Story $story)
    {
        try {
            $story->delete();
            return back()->with([
                'code' => 200,
                'message' => 'Story deleted successfully.'
            ], 200);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return back()->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return back()->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }
}
