<?php

include "config.php";

$id_del =  mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$nom = mysqli_real_escape_string($con, $_GET['nom']);
$type =  mysqli_real_escape_string($con, $_GET['type']);

if($id_del) {
    $query = "CALL orga_Delete('$id_del')";
}
elseif($id) {
    $query = "CALL orga_Update ('$id', '$nom', '$type')";

} else {
    $query = "CALL orga_Create (NULL, '$nom', '$type')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
