<?php
declare(strict_types=1);

$host = 'localhost';
$dbName = 'emlak_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO(
        "mysql:host={$host};dbname={$dbName};charset=utf8mb4",
        $username,
        $password,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $exception) {
    http_response_code(500);
    exit('Veritabani baglantisi kurulamadi: ' . $exception->getMessage());
}