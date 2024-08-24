<?php

namespace App\Http\Controllers;

use App\Models\Time;
use Illuminate\Http\Request;

class TimeController extends Controller
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
            'marriage' => 'required|date_format:Y-m-d H:i:s',
            'reception' => 'required|date_format:Y-m-d H:i:s',
            'location_marriage' => 'required|string',
            'location_reception' => 'required|string',
            'gmaps' => 'required|string',
        ]);

        try {
            Time::create([
                'invitation_id' => $request->input('invitation_id'),
                'marriage' => $request->input('marriage'),
                'reception' => $request->input('reception'),
                'location_marriage' => $request->input('location_marriage'),
                'location_reception' => $request->input('location_reception'),
                'gmaps' => $request->input('gmaps'),
            ]);

            return back()->with([
                'code' => 201,
                'message' => 'Time created successfully.'
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
    public function show(Time $time)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Time $time)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Time $time)
    {
        $request->validate([
            'marriage' => 'required|date_format:Y-m-d H:i:s',
            'reception' => 'required|date_format:Y-m-d H:i:s',
            'location_marriage' => 'required|string',
            'location_reception' => 'required|string',
            'gmaps' => 'required|string',
        ]);

        try {
            $time->update([
                'marriage' => $request->input('marriage'),
                'reception' => $request->input('reception'),
                'location_marriage' => $request->input('location_marriage'),
                'location_reception' => $request->input('location_reception'),
                'gmaps' => $request->input('gmaps'),
            ]);
            return back()->with([
                'code' => 204,
                'message' => 'Time updated successfully.'
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
    public function destroy(Time $time)
    {
        try {
            $time->delete();
            return back()->with([
                'code' => 200,
                'message' => 'Time deleted successfully.'
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
