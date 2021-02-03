<?php

include "config.php";

$id_del =  mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$prenom = mysqli_real_escape_string($con, $_GET['prenom']);
$nom = mysqli_real_escape_string($con, $_GET['nom']);
$actif =  mysqli_real_escape_string($con, $_GET['actif']);
$volontaire =  mysqli_real_escape_string($con, $_GET['volontaire']);

if($id_del) {
    $query = "CALL int_Delete('$id_del')";
}
elseif($id) {
    $query = "CALL int_Update ('$id', '$prenom', '$nom', '$actif', '$volontaire')";

} else {
    $query = "CALL int_Create ('$prenom', '$nom', '$actif', '$volontaire')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
