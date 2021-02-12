<?php

include "config.php";

$id_del =  mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$mission = mysqli_real_escape_string($con, $_GET['mission']);
$dat =  mysqli_real_escape_string($con, $_GET['dat']);
$id_ville = mysqli_real_escape_string($con, $_GET['id_ville']);
$type =  mysqli_real_escape_string($con, $_GET['type']);
$visio =  mysqli_real_escape_string($con, $_GET['visio']);
$intitule =  mysqli_real_escape_string($con, $_GET['intitule']);
$uuid =  mysqli_real_escape_string($con, $_GET['uuid']);
$id_projet = mysqli_real_escape_string($con, $_GET['id_projet']);
$organise = mysqli_real_escape_string($con, $_GET['organise']);
$nb_jeunes =  mysqli_real_escape_string($con, $_GET['nb_jeunes']);
$nb_pros = mysqli_real_escape_string($con, $_GET['nb_pros']);
$commentaires =  mysqli_real_escape_string($con, $_GET['commentaires']);

$id_int = mysqli_real_escape_string($con, $_GET['id_int']);
$id_evt_del_int = mysqli_real_escape_string($con, $_GET['id_evt_del_int']);
$id_evt =  mysqli_real_escape_string($con, $_GET['id_evt']);

if($id_del) {
    $query = "CALL evt_Delete('$id_del')";
}
elseif($id) {
    $query = "CALL evt_Update ('$id', '$mission', '$dat', '$id_ville', '$type', '$visio', '$intitule', '$uuid', '$id_projet', '$organise', '$nb_jeunes', '$nb_pros', '$commentaires')";

} elseif($id_int) {
    $query = "CALL evt_Create_Int ('$id_int', '$id_evt')";

} elseif($id_evt_del_int) {
    $query = "CALL evt_Delete_Int ('$id_evt_del_int')";

} else {
    $query = "CALL evt_Create ('$mission', '$dat', '$id_ville', '$type', '$visio', '$intitule', '$uuid', '$id_projet', '$organise', '$nb_jeunes', '$nb_pros', '$commentaires')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
