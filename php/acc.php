<?php

include "config.php";
// ---------------------------------------------------------------------------  Participer
$id_acc =  mysqli_real_escape_string($con, $_GET['id_acc']);
$statut =  mysqli_real_escape_string($con, $_GET['statut']);
$id_jeune =  mysqli_real_escape_string($con, $_GET['id_jeune']);
$commentaire =  mysqli_real_escape_string($con, $_GET['commentaire']);

$id_evt =  mysqli_real_escape_string($con, $_GET['id_evt']);
$id_evt_up =  mysqli_real_escape_string($con, $_GET['id_evt_up']);
$id_evt_del =  mysqli_real_escape_string($con, $_GET['id_evt_del']);

// ---------------------------------------------------------------------------  Rendez-vous
$intitule =  mysqli_real_escape_string($con, $_GET['intitule']);
$id_int =  mysqli_real_escape_string($con, $_GET['id_int']);
$dat =  mysqli_real_escape_string($con, $_GET['dat']);
$type =  mysqli_real_escape_string($con, $_GET['type']);
$duree =  mysqli_real_escape_string($con, $_GET['duree']);
$commentaires =  mysqli_real_escape_string($con, $_GET['commentaires']);

$id_rdv_up =  mysqli_real_escape_string($con, $_GET['id_rdv_up']);
$id_rdv_del =  mysqli_real_escape_string($con, $_GET['id_rdv_del']);

if($id_acc) {
    $query = "CALL jeune_Update_Acc('$id_acc', '$statut')";
// ---------------------------------------------------------------------------  Associations evt, evt2, rdv
} elseif($id_evt) {
    $query = "CALL acc_Create_Evt ('$id_jeune', '$id_evt', '$commentaire')";

} elseif($id_evt_up) {
   $query = "CALL acc_Update_Evt ('$id_jeune', '$id_evt_up', '$commentaire')";

} elseif($id_evt_del) {
    $query = "CALL acc_Delete_Evt('$id_jeune', '$id_evt_del')";

// ---------------------------------------------------------------------------  Rendez-vous
} elseif($intitule) {
    $query = "CALL rdv_Create('$dat', '$type', '$intitule', '$commentaires', '$duree', '$id_int')";

} elseif($id_rdv_up) {
    $query = "CALL rdv_Update('$id_rdv_up', '$dat', '$type', '$commentaires', '$duree', '$id_int')";

} elseif($id_rdv_up_del) {
    $query = "CALL rdv_Delete('$id_rdv_up_del')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
