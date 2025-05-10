<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
 
include('db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmpassword = $_POST['confirmpassword'];

    if ($password !== $confirmpassword) {
        die("Пароли не совпадают!");
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($link, $sql);
    mysqli_stmt_bind_param($stmt, "sss", $fullname, $email, $hashed_password);

    if (mysqli_stmt_execute($stmt)) {
        header("Location: home.html");
        exit();
    } else {
        echo "Ошибка: " . mysqli_error($link);
    }

    mysqli_stmt_close($stmt);
}

mysqli_close($link);
?>
