<?php

include "config.php";

$id_del =  mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$prenom = mysqli_real_escape_string($con, $_GET['prenom']);
$nom = mysqli_real_escape_string($con, $_GET['nom']);
$actif =  mysqli_real_escape_string($con, $_GET['actif']);
$volontaire =  mysqli_real_escape_string($con, $_GET['volontaire']);
$ref =  mysqli_real_escape_string($con, $_GET['ref']);
$mail =  mysqli_real_escape_string($con, $_GET['mail']);

if($id_del) {
    $query = "CALL int_Delete('$id_del')";
}
elseif($id) {
    $query = "CALL int_Update ('$id', '$prenom', '$nom', '$actif', '$volontaire', '$ref', '$mail')";

} else {
    $query = "CALL int_Create ('$prenom', '$nom', '$actif', '$volontaire', '$ref', '$mail')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
