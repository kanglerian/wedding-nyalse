<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(5);
        return Inertia::render('User/User', [
            'users' => $users,
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
            'name' => 'required|min:5|max:100|unique:users,name',
            'email' => 'required|email|min:5|max:100|unique:users,email',
            'password' => 'required|min:8|confirmed'
        ]);

        try {
            User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);

            return redirect()->route('user.index')->with([
                'code' => 201,
                'message' => 'User created successfully.'
            ], 201);
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
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|min:5|max:100|unique:users,name,' . $user->id,
            'email' => 'required|email|min:5|max:100|unique:users,email,' . $user->id,
        ]);

        try {
            $user->update([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
            ]);
            return redirect()->route('user.index')->with([
                'code' => 204,
                'message' => 'User updated successfully.'
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
     * Update the specified resource in storage.
     */
    public function status(User $user)
    {
        try {
            $user->update([
                'status' => !$user->status,
            ]);

            return redirect()->route('user.index')->with([
                'code' => 204,
                'message' => 'User status updated successfully.'
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
    public function destroy(User $user)
    {
        try {
            $user->delete();
            return redirect()->route('user.index')->with([
                'code' => 200,
                'message' => 'User deleted successfully.'
            ], 200);
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
}
