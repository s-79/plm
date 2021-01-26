<?php

include "config.php";

$return_arr = array();

$id_orga = mysqli_real_escape_string($con, $_GET['id_orga']);
$nom_orga = mysqli_real_escape_string($con, $_GET['nom_orga']);
$id_ville_qpv = mysqli_real_escape_string($con, $_GET['id_ville_qpv']);
$id_qpv_prij = mysqli_real_escape_string($con, $_GET['id_qpv_prij']);

if($id_orga) {
    $query = "SELECT orga_ExistId('$id_orga')";

} elseif($nom_orga) {
    $query = "SELECT orga_ExistNom('$nom_orga')";

} elseif($id_ville_qpv) {
    $query = "SELECT qpv_ExistId('$id_ville_qpv')";

} elseif($id_qpv_prij) {
    $query = "SELECT qpv_Prij('$id_qpv_prij')";

}

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $statut = $row[0];

    $return_arr[] = array(
        "statut" => $statut,);
}
echo json_encode($return_arr);
