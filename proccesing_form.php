<?php
$link = mysqli_connect(
    'localhost',
    'root',
    '',
    'perfileva'
);

// var_dump($link);
mysqli_set_charset($link, 'utf8');

if(!empty($_GET) && !empty($_GET['fio']) && !empty($_GET['email']) && !empty($_GET['phone'])){
    $query = "INSERT INTO feedbacks(FIO, EMAIL, PHONE, MESSAGE, ATTRACTIONS) VALUES('{$_GET['fio']}', '{$_GET['email']}', '{$_GET['phone']}', '{$_GET['message']}', '{$_GET['attractions']}');";
    $res = mysqli_query($link, $query);

    if(!$res){
        var_dump(mysqli_error($link));
    }
}

mysqli_close($link);
?>