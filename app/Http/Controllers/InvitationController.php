<?php

namespace App\Http\Controllers;

use App\Models\Couple;
use App\Models\Invitation;
use App\Models\Template;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Str;

class InvitationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $templates = Template::where('status', true)->get();
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
            'template' => 'required',
            'contact' => 'required|min:13|max:14',
        ]);

        \Midtrans\Config::$serverKey = 'SB-Mid-server-DTLdj-m3UCy7jzrRNdeLix3b';
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        try {
            $date = date('ymd');
            $uuid = Str::uuid();
            $template = Template::find($request->input('template'));

            $counter = 1;
            $invoice = "I" . $date . $template->code . Auth::user()->id . $counter;

            while (Invitation::where('invoice', $invoice)->exists()) {
                $counter++;
                $invoice = "I" . $date . $template->code . Auth::user()->id . $counter;
            }

            $params = array(
                'transaction_details' => array(
                    'order_id' => $uuid,
                    'gross_amount' => $template->price,
                ),
                'item_details' => [
                    [
                        'id' => $template->code,
                        'price' => $template->price,
                        'quantity' => 1,
                        'name' => $template->name
                    ]
                ],
                'customer_details' => array(
                    'first_name' => Auth::user()->name,
                    'email' => Auth::user()->email,
                    'phone' => $request->input('contact'),
                    'shipping_address' => array(
                        'first_name' => Auth::user()->name,
                        'phone' => $request->input('contact'),
                        'country_code' => 'IDN'
                    )
                ),
            );

            $snapToken = \Midtrans\Snap::getSnapToken($params);

            $data = [
                'uuid' => $uuid,
                'user_id' => Auth::user()->id,
                'invoice' => $invoice,
                'checkout' => Carbon::now()->setTimezone('Asia/Jakarta'),
                'template_id' => $request->input('template'),
                'contact' => $request->input('contact'),
                'order_id' => $uuid,
                'gross_amount' => $template->price,
                'token' => $snapToken
            ];

            Invitation::create($data);

            return redirect()->route('invitation.index')->with([
                'code' => 201,
                'message' => 'Invitation checkout successfully.',
                'token' => $snapToken,
            ], 201);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->route('invitation.index')->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return redirect()->route('invitation.index')->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($invoice)
    {
        $invitation = Invitation::with(['template'])->where('invoice', $invoice)->firstOrFail();
        $couple = Couple::where('invitation_id', $invitation->id)->get();
        $data = [
            'invitation' => $invitation,
            'couple' => $couple,
        ];
        return Inertia::render('Invitation/'.$invitation->template->code.'/Invitation', [
            'invitation' => $data,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($invoice)
    {
        $invitation = Invitation::where('invoice', $invoice)->firstOrFail();
        $couple = Couple::where('invitation_id', $invitation->id)->get();
        $data = [
            'invitation' => $invitation,
            'couple' => $couple,
        ];
        return Inertia::render('Invitation/EditInvitation', [
            'invitation' => $data,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Invitation $invitation)
    {
        $request->validate([
            'template' => 'required',
            'contact' => 'required|min:13|max:14',
        ]);

        try {
            $invitation->update([
                'template_id' => $request->input('template'),
                'contact' => $request->input('contact'),
            ]);

            return redirect()->route('invitation.index')->with([
                'code' => 204,
                'message' => 'Invitation updated successfully.'
            ], 204);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->route('invitation.index')->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return redirect()->route('invitation.index')->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function status(Invitation $invitation)
    {
        try {
            $invitation->update([
                'status' => !$invitation->status,
            ]);

            return redirect()->route('invitation.index')->with([
                'code' => 204,
                'message' => 'Invitation status updated successfully.'
            ], 204);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->route('invitation.index')->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return redirect()->route('invitation.index')->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invitation $invitation)
    {
        try {
            $invitation->delete();
            return redirect()->route('invitation.index')->with([
                'code' => 200,
                'message' => 'Invitation deleted successfully.'
            ], 200);
        } catch (\Throwable $th) {
            if ($th->getCode() == 23000) {
                return redirect()->route('invitation.index')->with([
                    'code' => 23000,
                    'message' => 'Operasi gagal karena adanya keterbatasan pada data terkait.',
                ], 23000);
            } else {
                return redirect()->route('invitation.index')->with([
                    'code' => 500,
                    'message' => 'Maaf, ada masalah teknis di sisi server.'
                ], 500);
            }
        }
    }
}
