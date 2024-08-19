<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Konfirmasi Registrasi Kuliah</title>
    <style>
        ul {
            line-height: 28px;
        }
    </style>
</head>

<body>
    <main>
        <header>
            <p>Gagal! Halo {{ $invitation->invoice }},</p>
            <p>Selamat! Kami dengan senang hati menginformasikan bahwa proses registrasi kuliah Anda telah berhasil. Berikut adalah rincian pendaftaran Anda:</p>
        </header>
        <p>Apabila Anda memerlukan bantuan atau memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami melalui Whatsapp {{ $data['presenter'] ?? 'Administrator' }} yang tertera pada portal E-PMB.</p>
        <p>Terima kasih atas perhatian Anda. Kami berharap Anda sukses dalam perjalanan akademik Anda di Politeknik LP3I Kampus Tasikmalaya.</p>
        <div>
            Salam hormat,<br/>
            Tim Administrasi PMB<br/>
            Politeknik LP3I Kampus Tasikmalaya
        </div>
    </main>
</body>

</html>
