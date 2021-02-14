<?php

include "config.php";

$return_arr = array();

$id_jeune = mysqli_real_escape_string($con, $_GET['id_jeune']);
$nom_jeune = mysqli_real_escape_string($con, $_GET['nom_jeune']);
$id_orga = mysqli_real_escape_string($con, $_GET['id_orga']);
$nom_orga = mysqli_real_escape_string($con, $_GET['nom_orga']);
$id_int = mysqli_real_escape_string($con, $_GET['id_int']);
$nom_int = mysqli_real_escape_string($con, $_GET['nom_int']);
$id_part = mysqli_real_escape_string($con, $_GET['id_part']);
$nom_part = mysqli_real_escape_string($con, $_GET['nom_part']);
$id_evt = mysqli_real_escape_string($con, $_GET['id_evt']);
$id_ville_qpv = mysqli_real_escape_string($con, $_GET['id_ville_qpv']);
$id_qpv_prij = mysqli_real_escape_string($con, $_GET['id_qpv_prij']);
$id_prj = mysqli_real_escape_string($con, $_GET['id_prj']);
$nom_prj = mysqli_real_escape_string($con, $_GET['nom_prj']);
$id_acc_jeune = mysqli_real_escape_string($con, $_GET['id_acc_jeune']);
$id_acc_evt = mysqli_real_escape_string($con, $_GET['id_acc_evt']);
$id_acc_prj = mysqli_real_escape_string($con, $_GET['id_acc_prj']);

if($id_orga) {
    $query = "SELECT orga_ExistId('$id_orga')";

} elseif($nom_orga) {
    $query = "SELECT orga_ExistNom('$nom_orga')";

} elseif($id_jeune) {
    $query = "SELECT jeune_ExistId('$id_jeune')";

} elseif($nom_jeune) {
    $query = "SELECT jeune_ExistNom('$nom_jeune')";

} elseif($id_int) {
    $query = "SELECT int_ExistId('$id_int')";

} elseif($nom_int) {
    $query = "SELECT int_ExistNom('$nom_int')";

} elseif($id_part) {
    $query = "SELECT part_ExistId('$id_part')";

} elseif($nom_part) {
    $query = "SELECT part_ExistNom('$nom_part')";

} elseif($id_evt) {
    $query = "SELECT evt_ExistId('$id_evt')";

} elseif($id_ville_qpv) {
    $query = "SELECT qpv_ExistId('$id_ville_qpv')";

} elseif($id_qpv_prij) {
    $query = "SELECT qpv_Prij('$id_qpv_prij')";

} elseif($id_prj) {
    $query = "SELECT prj_ExistId('$id_prj')";

} elseif($nom_prj) {
    $query = "SELECT prj_ExistNom('$nom_prj')";

} elseif($id_acc_evt) {
    $query = "SELECT participer_Exist('$id_acc_jeune', '$id_acc_evt')";

} elseif($id_acc_prj) {
    $query = "SELECT partir_Exist('$id_acc_jeune', '$id_acc_prj')";

}

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $exist = $row[0];

    $return_arr[] = array(
        "exist" => $exist,);
}

if($return_arr) {echo json_encode($return_arr);}
