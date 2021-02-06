<?php

include "config.php";

$id_acc =  mysqli_real_escape_string($con, $_GET['id_acc']);
$statut =  mysqli_real_escape_string($con, $_GET['statut']);
$id_jeune =  mysqli_real_escape_string($con, $_GET['id_jeune']);
$commentaire =  mysqli_real_escape_string($con, $_GET['commentaire']);

$id_evt =  mysqli_real_escape_string($con, $_GET['id_evt']);
$id_evt_up =  mysqli_real_escape_string($con, $_GET['id_evt_up']);
$id_evt_del =  mysqli_real_escape_string($con, $_GET['id_evt_del']);


if($id_acc) {
    $query = "CALL jeune_Update_Acc('$id_acc', '$statut')";

} elseif($id_evt) {
    $query = "CALL acc_Create_Evt ('$id_jeune', '$id_evt', '$commentaire')";

} elseif($id_evt_up) {
   $query = "CALL acc_Update_Evt ('$id_jeune', '$id_evt_up', '$commentaire')";

} elseif($id_evt_del) {
    $query = "CALL acc_Delete_Evt('$id_jeune', '$id_evt_del')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
