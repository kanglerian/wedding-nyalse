<?php

namespace App\Http\Controllers;

use App\Mail\OrderSuccessMail;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Midtrans\Notification;

class PaymentController extends Controller
{
    public function handleNotification(Request $request)
    {
        // try {
        // \Midtrans\Config::$serverKey = 'SB-Mid-server-DTLdj-m3UCy7jzrRNdeLix3b';
        // \Midtrans\Config::$isProduction = false;
        // \Midtrans\Config::$isSanitized = true;
        // \Midtrans\Config::$is3ds = true;

        // $notification = new Notification();

        // Log::info('Notification received', ['notification' => $notification]);

        // $transaction = $notification->transaction_status;
        // $type = $notification->payment_type;
        // $orderId = $notification->order_id;
        $orderId = '6dc33ade-cd77-4de7-bc56-d0e251e3559d';
        // $fraud = $notification->fraud_status;

        // $order = Invitation::where('order_id', $orderId)->first();
        return response()->json($orderId);
        // if (!$order) {
        //     Log::error('Order not found', ['order_id' => $orderId]);
        //     return response()->json(['message' => 'Order not found'], 404);
        // }

        // if ($transaction == 'capture') {
        //     if ($type == 'credit_card') {
        //         if ($fraud == 'challenge') {
        //             $order->update(['is_paid' => 'pending']);
        //         } else {
        //             $order->update(['is_paid' => 'success']);
        //         }
        //     }
        // } else if ($transaction == 'settlement') {
        //     $order->update(['is_paid' => 'success']);
        //     Mail::to($order->user->email)->send(new OrderSuccessMail($order));
        // } else if ($transaction == 'pending') {
        //     $order->update(['is_paid' => 'pending']);
        // } else if ($transaction == 'deny' || $transaction == 'expire' || $transaction == 'cancel') {
        //     $order->update(['is_paid' => 'failed']);
        // }

        // return response()->json(['message' => 'Notification handled successfully'], 200);
        // } catch (\Exception $e) {
        //     Log::error('Error processing notification', ['error' => $e->getMessage()]);
        //     return response()->json(['message' => $e->getMessage()], 500);
        // }
    }
}
