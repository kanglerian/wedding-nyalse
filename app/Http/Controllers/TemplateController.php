<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Template;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class TemplateController extends Controller {
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $categories = Category::all();
        $templates = Template::with( [ 'category', 'author' ] )->paginate( 5 );
        $authors = User::where( 'role', 'P' )->get();
        return Inertia::render( 'Template/Template', [
            'categories' => $categories,
            'templates' => $templates,
            'authors' => $authors,
        ] );
    }

    /**
    * Show the form for creating a new resource.
    */

    public function create() {
        //
    }

    /**
    * Store a newly created resource in storage.
    */

    public function store( Request $request ) {
        $request->validate( [
            'author' => 'required',
            'category' => 'required',
            'name' => 'required',
            'price' => 'required|integer|min:0'
        ] );

        $date = date( 'ymd' );
        $category = $request->input( 'category' );
        $author = $request->input( 'author' );

        $counter = 1;
        $code = 'M' . $date . $category . $author . $counter;

        while ( Template::where( 'code', $code )->exists() ) {
            $counter++;
            $code = 'M' . $date . $category . $author . $counter;
        }

        $folderPath = resource_path( "js/Pages/Invitation/{$code}" );

        try {
            if ( !File::exists( $folderPath ) ) {
                File::makeDirectory( $folderPath, 0755, true );
            }

            $filePath = $folderPath . '/Invitation.jsx';
            $jsxTemplate = <<<EOD
            import { Head, usePage } from "@inertiajs/react";

            export default function Invitation({ auth }) {
                const { invitation, flash } = usePage().props;

                return (
                    <main>
                        <Head title="Invitation" />
                        <p className="text-sm text-gray-800">Create template in here...</p>
                    </main>
                );
            }
            EOD;

            // Buat file JSX dengan template dasar
            if ( !File::exists( $filePath ) ) {
                File::put( $filePath, $jsxTemplate );
            }

            Template::create( [
                'user_id' => $request->input( 'author' ),
                'category_id' => $request->input( 'category' ),
                'code' => $code,
                'name' => $request->input( 'name' ),
                'price' => $request->input( 'price' ),
            ] );

            return redirect()->route( 'template.index' )->with( [
                'code' => 201,
                'message' => 'Template created successfully.'
            ], 201 );
        } catch ( \Throwable $th ) {
            if ( $th->getCode() == 23000 ) {
                return redirect()->route( 'template.index' )->with( [
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000 );
            } else {
                return redirect()->route( 'template.index' )->with( [
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500 );
            }
        }
    }

    /**
    * Display the specified resource.
    */

    public function show( Template $template ) {
        //
    }

    /**
    * Show the form for editing the specified resource.
    */

    public function edit( Template $template ) {
        //
    }

    /**
    * Update the specified resource in storage.
    */

    public function update( Request $request, Template $template ) {
        $request->validate( [
            'name' => 'required',
            'price' => 'required|integer|min:0'
        ] );

        try {
            $template->update( [
                'name' => $request->input( 'name' ),
                'price' => $request->input( 'price' ),
            ] );

            return redirect()->route( 'template.index' )->with( [
                'code' => 204,
                'message' => 'User updated successfully.'
            ], 204 );
        } catch ( \Throwable $th ) {
            if ( $th->getCode() == 23000 ) {
                return redirect()->route( 'template.index' )->with( [
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000 );
            } else {
                return redirect()->route( 'template.index' )->with( [
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500 );
            }
        }
    }

    /**
    * Update the specified resource in storage.
    */

    public function status( Template $template ) {
        try {
            $template->update( [
                'status' => !$template->status,
            ] );

            return redirect()->route( 'template.index' )->with( [
                'code' => 204,
                'message' => 'Template status updated successfully.'
            ], 204 );
        } catch ( \Throwable $th ) {
            if ( $th->getCode() == 23000 ) {
                return redirect()->route( 'template.index' )->with( [
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000 );
            } else {
                return redirect()->route( 'template.index' )->with( [
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500 );
            }
        }
    }

    /**
    * Remove the specified resource from storage.
    */

    public function destroy( Template $template ) {
        try {
            $template->delete();
            return redirect()->route( 'template.index' )->with( [
                'code' => 200,
                'message' => 'Template deleted successfully.'
            ], 200 );
        } catch ( \Throwable $th ) {
            if ( $th->getCode() == 23000 ) {
                return redirect()->route( 'template.index' )->with( [
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000 );
            } else {
                return redirect()->route( 'template.index' )->with( [
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500 );
            }
        }
    }
}
