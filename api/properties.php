<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/../config/database.php';

$query = $pdo->query('SELECT id, title, city, district, type, price, area, rooms, image FROM properties ORDER BY id DESC');
$properties = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
    'success' => true,
    'count' => count($properties),
    'data' => $properties,
], JSON_UNESCAPED_UNICODE);