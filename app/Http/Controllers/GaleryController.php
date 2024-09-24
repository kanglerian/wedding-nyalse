<?php

namespace App\Http\Controllers;

use App\Models\Galery;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class GaleryController extends Controller
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
            'cover' => 'required|mimes:jpg,jpeg,png|max:2048',
        ]);

        $extension = null;

        if ($request->hasFile('cover')) {
            $file = $request->file('cover');
            $extension = $file->getClientOriginalExtension();
            $filename =  Carbon::now()->format('Ymd_His') . $request->input('invitation_id') . Auth::user()->id . '.' . $extension;
            $file->storeAs('covers', $filename, 'public');
        }

        try {
            Galery::create([
                'invitation_id' => $request->input('invitation_id'),
                'cover' => $filename,
            ]);

            return back()->with([
                'code' => 201,
                'message' => 'Galery created successfully.'
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
    public function show(Galery $galery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Galery $galery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Galery $galery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Galery $galery)
    {
        try {
            if ($galery->cover) {
                $coverPath = "covers/{$galery->cover}";
                if (Storage::disk('public')->exists($coverPath)) {
                    Storage::disk('public')->delete($coverPath);
                }
            }
            $galery->delete();
            return back()->with([
                'code' => 200,
                'message' => 'Galery deleted successfully.'
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
