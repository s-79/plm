<?php

include "config.php";

$return_arr = array();

$v_npv = mysqli_real_escape_string($con, $_GET['v_npv']);
$v_orga = mysqli_real_escape_string($con, $_GET['v_orga']);
$v_sensi = mysqli_real_escape_string($con, $_GET['v_sensi']);
$orga_type = mysqli_real_escape_string($con, $_GET['orga_type']);
$v_ville = mysqli_real_escape_string($con, $_GET['v_ville']);
$id_ville_qpv = mysqli_real_escape_string($con, $_GET['id_ville']);
$texte = mysqli_real_escape_string($con, $_GET['texte']);
$texte_dtv = mysqli_real_escape_string($con, $_GET['texte_dtv']);

if($v_npv) {$query = "CALL npv_List ()";

} elseif($v_orga) {
    $query = "CALL orga_List ()";

} elseif($v_sensi) {
    $query = "CALL sensi_List ()";

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

} elseif($texte_dtv) {
    if(strlen($texte_dtv) > 0) {
        $query = "CALL sensi_Search ('$texte_dtv')";
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
