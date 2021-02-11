<?php

include "config.php";

$id_del =  mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$nom = mysqli_real_escape_string($con, $_GET['nom']);
$contact =  mysqli_real_escape_string($con, $_GET['contact']);
$tel = mysqli_real_escape_string($con, $_GET['tel']);
$mail =  mysqli_real_escape_string($con, $_GET['mail']);
$commentaires =  mysqli_real_escape_string($con, $_GET['commentaires']);

if($id_del) {
    $query = "CALL part_Delete('$id_del')";
}
elseif($id) {
    $query = "CALL part_Update ('$id', '$nom', '$contact', '$tel', '$mail', '$commentaires')";

} else {
    $query = "CALL part_Create ('$nom', '$contact', '$tel', '$mail', '$commentaires')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
