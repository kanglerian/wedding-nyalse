<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;

class VideoController extends Controller
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
            'video' => 'required|string',
        ]);

        try {
            Video::create([
                'invitation_id' => $request->input('invitation_id'),
                'video' => $request->input('video'),
            ]);

            return back()->with([
                'code' => 201,
                'message' => 'Video uploaded successfully.'
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
    public function show(Video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Video $video)
    {
        $request->validate([
            'video' => 'required|string',
        ]);

        try {
            $video->update([
                'invitation_id' => $request->input('invitation_id'),
                'video' => $request->input('video'),
            ]);
            return back()->with([
                'code' => 204,
                'message' => 'Video updated successfully.'
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
    public function destroy(Video $video)
    {
        try {
            $video->delete();
            return back()->with([
                'code' => 200,
                'message' => 'Video deleted successfully.'
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
