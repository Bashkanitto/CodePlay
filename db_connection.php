<?php
$host = "MySQL-5.7";
$user = "root";
$password = "root";
$dbname = "site";
$port = 3309;

$conn = mysqli_connect($host, $user, $password, $dbname, $port);

if (!$conn) {
    die("Ошибка подключения: " . mysqli_connect_error());
}
?>
