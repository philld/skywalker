<?php
//create db connection
include 'sql_connect.php';

//run sql select statement
$result = mysqli_query($db_connect,"SELECT name,weight_kg,EBC,SRM FROM Grain where InStock = 1 order by weight_kg desc");

$arr = array(); if($result->num_rows > 0)
{
	while($row = $result->fetch_assoc()) { $arr[] = $row; }
}

//JSON-encode the response

echo $json_response = json_encode($arr);

//close db connection
include 'sql_close.php';
?>
