<?php
// Form verilerinin olup olmadığını kontrol et
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri almak
    $firstn = htmlspecialchars(trim($_POST['firstn']));  // Ad
    $lastn = htmlspecialchars(trim($_POST['lastn']));    // Soyad
    $email = htmlspecialchars(trim($_POST['email']));     // E-posta
    $phone = htmlspecialchars(trim($_POST['phone']));     // Telefon
    $message = htmlspecialchars(trim($_POST['message']));  // Mesaj

    // Basit doğrulama: E-posta kontrolü
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Geçerli bir e-posta adresi giriniz.');</script>";
        exit;
    }

    // Hata kontrolü: Boş alan olup olmadığını kontrol et
    if (empty($firstn) || empty($lastn) || empty($email) || empty($phone) || empty($message)) {
        echo "<script>alert('Lütfen tüm alanları doldurun.');</script>";
        exit;
    }

    // E-posta içeriği oluşturma
    $to = "hsrt.bck002@gmail.com";  // Buraya e-posta adresinizi yazın
    $subject = "Yeni İletişim Formu Mesajı";  // E-posta başlığı
    $body = "Ad: $firstn $lastn\nE-posta: $email\nTelefon: $phone\nMesaj: $message";  // E-posta içeriği
    $headers = "From: $email";

    // E-posta gönderme işlemi
    if (mail($to, $subject, $body, $headers)) {
        // E-posta başarılı bir şekilde gönderildiyse
        echo "<script>alert('Mesajınız başarıyla gönderildi.');</script>";
        echo "<script>window.location.href = 'thank-you.html';</script>";  // Başarı sayfasına yönlendir
    } else {
        // E-posta gönderilemediyse
        echo "<script>alert('Bir hata oluştu, lütfen tekrar deneyin.');</script>";
    }
}
?>
