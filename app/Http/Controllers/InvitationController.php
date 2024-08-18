<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use App\Models\Template;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Str;

class InvitationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $templates = Template::all();
        $invitations = Invitation::with(['template', 'user'])->paginate(5);
        return Inertia::render('Invitation/Invitation', [
            'templates' => $templates,
            'invitations' => $invitations,
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
            // 'user_id' => 'required',
            'template' => 'required',
            // 'datetime' => 'required|date',
            'contact' => 'required|min:13|max:14',
        ]);

        \Midtrans\Config::$serverKey = 'SB-Mid-server-DTLdj-m3UCy7jzrRNdeLix3b';
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        // try {
        $uuid = Str::uuid();

        $params = array(
            'transaction_details' => array(
                'order_id' => $uuid,
                'gross_amount' => 12000,
            ),
            'customer_details' => array(
                'first_name' => 'budi',
                'last_name' => 'pratama',
                'email' => 'budi.pra@example.com',
                'phone' => '08111222333',
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        $data = [
            'uuid' => $uuid,
            'user_id' => 2,
            'invoice' => date('ymd h:s:m'),
            'checkout' => Carbon::now()->setTimezone('Asia/Jakarta'),
            'template_id' => $request->input('template'),
            'datetime' => Carbon::now()->setTimezone('Asia/Jakarta'),
            'contact' => $request->input('contact'),
            'order_id' => $uuid,
            'gross_amount' => 12000,
            'token' => $snapToken
        ];

        Invitation::create($data);

        return redirect()->route('invitation.index')->with([
            'code' => 201,
            'message' => 'Invitation checkout successfully.',
            'token' => $snapToken,
        ], 201);

        // return redirect()->route('invitation.index')->with([
        //     'code' => 201,
        //     'message' => 'Invitation checkout successfully.'
        // ], 201);

        // } catch (\Throwable $th) {
        //     if ($th->getCode() == 23000) {
        //         return redirect()->route('invitation.index')->with([
        //             'code' => 23000,
        //             'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
        //         ], 23000);
        //     } else {
        //         return redirect()->route('invitation.index')->with([
        //             'code' => 500,
        //             'message' => 'Maaf, ada masalah teknis di sisi server.'
        //         ], 500);
        //     }
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(Invitation $invitation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invitation $invitation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Invitation $invitation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invitation $invitation)
    {
        //
    }
}
