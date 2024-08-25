<?php

namespace App\Http\Controllers;

use App\Models\Gift;
use Illuminate\Http\Request;

class GiftController extends Controller
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
            'payment' => 'required|string',
            'code' => 'required|string',
            'address' => 'string',
        ]);

        try {
            Gift::create([
                'invitation_id' => $request->input('invitation_id'),
                'payment' => $request->input('payment'),
                'code' => $request->input('code'),
                'address' => $request->input('address'),
            ]);

            return back()->with([
                'code' => 201,
                'message' => 'Gift created successfully.'
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
    public function show(Gift $gift)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gift $gift)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gift $gift)
    {
        $request->validate([
            'payment' => 'required|string',
            'code' => 'required|string',
            'address' => 'string',
        ]);

        try {
            $gift->update([
                'invitation_id' => $request->input('invitation_id'),
                'payment' => $request->input('payment'),
                'code' => $request->input('code'),
                'address' => $request->input('address'),
            ]);
            return back()->with([
                'code' => 204,
                'message' => 'Gift updated successfully.'
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
    public function destroy(Gift $gift)
    {
        try {
            $gift->delete();
            return back()->with([
                'code' => 200,
                'message' => 'Gift deleted successfully.'
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
