<?php

include "config.php";

$return_arr = array();

$v_npv = mysqli_real_escape_string($con, $_GET['v_npv']);
$v_orga = mysqli_real_escape_string($con, $_GET['v_orga']);
$v_evt = mysqli_real_escape_string($con, $_GET['v_evt']);
$orga_type = mysqli_real_escape_string($con, $_GET['orga_type']);
$v_ville = mysqli_real_escape_string($con, $_GET['v_ville']);
$id_ville_qpv = mysqli_real_escape_string($con, $_GET['id_ville']);
$texte = mysqli_real_escape_string($con, $_GET['texte']);
$texte_evt = mysqli_real_escape_string($con, $_GET['texte_evt']);

if($v_npv) {$query = "CALL npv_List ()";

} elseif($v_orga) {
    $query = "CALL orga_List ()";

} elseif($v_evt) {
    $query = "CALL evt_List ()";

} elseif($orga_type) {
    $query = "CALL orga_Type ('$orga_type')";

} elseif($v_ville) {
    $query = "CALL ville_List ()";

} elseif($id_ville_qpv) {
    $query = "CALL ville_Qpv ('$id_ville_qpv')";

} elseif($texte) {
    if(strlen($texte) > 0) {
        $query = "CALL jeune_Search ('$texte')";
    }

} elseif($texte_evt) {
    if(strlen($texte_evt) > 0) {
        $query = "CALL evt_Search ('$texte_evt')";
    }
}

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $nom = $row['nom'];

    $return_arr[] = array(
        "id" => $id,
        "nom" => $nom,);
}
echo json_encode($return_arr);