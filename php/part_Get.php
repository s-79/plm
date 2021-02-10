<?php

include "config.php";

$return_arr = array();

$id = mysqli_real_escape_string($con, $_GET['id']);

$query = "CALL part_Get('$id')";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $contact = $row['contact'];
    $tel = $row['tel'];
    $mail = $row['mail'];
    $commentaires = $row['commentaires'];

    $return_arr[] = array(
        "contact" => $contact,
        "tel" => $tel,
        "mail" => $mail,
        "commentaires" => $commentaires
        );
}

if($return_arr) {echo json_encode($return_arr);}
