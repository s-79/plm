<?php

include "config.php";

$id_del =  mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$type = mysqli_real_escape_string($con, $_GET['type']);
$intitule =  mysqli_real_escape_string($con, $_GET['intitule']);
$id_part = mysqli_real_escape_string($con, $_GET['id_part']);
$id_pays =  mysqli_real_escape_string($con, $_GET['id_pays']);
$ville = mysqli_real_escape_string($con, $_GET['ville']);
$debut =  mysqli_real_escape_string($con, $_GET['debut']);
$fin = mysqli_real_escape_string($con, $_GET['fin']);
$duree =  mysqli_real_escape_string($con, $_GET['duree']);
$them = mysqli_real_escape_string($con, $_GET['them']);
$commentaires =  mysqli_real_escape_string($con, $_GET['commentaires']);
$youth_leader = mysqli_real_escape_string($con, $_GET['youth_leader']);
$nb_participants =  mysqli_real_escape_string($con, $_GET['nb_participants']);
$pays_participants = mysqli_real_escape_string($con, $_GET['pays_participants']);

if($id_del) {
    $query = "CALL prj_Delete('$id_del')";
}
elseif($id) {
    $query = "CALL prj_Update ('$id', '$type', '$intitule', '$id_part', '$id_pays', '$ville', '$debut', '$fin', '$duree', '$them', '$commentaires', '$youth_leader', '$nb_participants', '$pays_participants')";

} else {
    $query = "CALL prj_Create ('$type', '$intitule', '$id_part', '$id_pays', '$ville', '$debut', '$fin', '$duree', '$them', '$commentaires', '$youth_leader', '$nb_participants', '$pays_participants')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
