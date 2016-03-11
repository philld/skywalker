<?php

$sql_hostname="127.0.0.1:3306";
$sql_user="root";
$sql_password="stella0059";
$sql_db="brew_conf";

$db_connect=mysqli_connect($sql_hostname, $sql_user, $sql_password, $sql_db)
or die("Unable to connect to MySQL");

?>

