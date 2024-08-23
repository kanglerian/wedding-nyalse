<?php

namespace App\Http\Controllers;

use App\Models\Couple;
use Illuminate\Http\Request;

class CoupleController extends Controller
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
            'fullname' => 'required|string',
            'father_name' => 'required|string',
            'mother_name' => 'required|string',
            'nickname' => 'required|string',
            'child' => 'required|string|size:1',
            'gender' => 'required',
        ]);

        try {
            Couple::create([
                'invitation_id' => $request->input('invitation_id'),
                'fullname' => $request->input('fullname'),
                'father_name' => $request->input('father_name'),
                'mother_name' => $request->input('mother_name'),
                'nickname' => $request->input('nickname'),
                'child' => $request->input('child'),
                'gender' => $request->input('gender'),
                'privilage' => $request->input('privilage'),
            ]);

            return back()->with([
                'code' => 201,
                'message' => 'Couple created successfully.'
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
    public function show(Couple $couple)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Couple $couple)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Couple $couple)
    {
        $request->validate([
            'fullname' => 'required|string',
            'father_name' => 'required|string',
            'mother_name' => 'required|string',
            'nickname' => 'required|string',
            'child' => 'required|string|size:1',
            'gender' => 'required',
        ]);

        try {
            $couple->update([
                'fullname' => $request->input('fullname'),
                'father_name' => $request->input('father_name'),
                'mother_name' => $request->input('mother_name'),
                'nickname' => $request->input('nickname'),
                'child' => $request->input('child'),
                'gender' => $request->input('gender'),
                'privilage' => $request->input('privilage'),
            ]);
            return back()->with([
                'code' => 204,
                'message' => 'Couple updated successfully.'
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
    public function destroy(Couple $couple)
    {
        try {
            $couple->delete();
            return back()->with([
                'code' => 200,
                'message' => 'Couple deleted successfully.'
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
