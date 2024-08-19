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
        \Midtrans\Config::$serverKey = 'SB-Mid-server-DTLdj-m3UCy7jzrRNdeLix3b';
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;
        \Midtrans\Config::$is3ds = true;

        $jsonData = $request->getContent();
        $notification = json_decode($jsonData);

        if (!$notification) {
            return response()->json(['message' => 'Invalid notification data'], 400);
        }

        $transaction = $notification->transaction_status;
        $type = $notification->payment_type;
        $orderId = $notification->order_id;
        $fraud = $notification->fraud_status;

        $order = Invitation::where('order_id', $orderId)->first();

        return response()->json('data', $order->user->email);
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        if ($transaction === 'capture') {
            if ($type === 'credit_card') {
                if ($fraud === 'challenge') {
                    $order->update(['is_paid' => 'pending']);
                } else {
                    $order->update(['is_paid' => 'success']);
                }
            }
        } else if ($transaction === 'settlement') {
            $order->update(['is_paid' => 'success']);
            // Mail::to($order->user->email)->send(new OrderSuccessMail($order));
        } else if ($transaction === 'pending') {
            $order->update(['is_paid' => 'pending']);
        } else if (in_array($transaction, ['deny', 'expire', 'cancel'])) {
            $order->update(['is_paid' => 'failed']);
        }

        return response()->json(['message' => 'Notification handled successfully']);
    }
}
