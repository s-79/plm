<?php

include "config.php";

$id_ville = mysqli_real_escape_string($con, $_GET['id_ville']);

$query = "CALL ville_contrat ('$id_ville')";
$result = mysqli_query($con,$query);

$return_arr = array();

while($row = mysqli_fetch_array($result)){
    $contrat_ville = $row['contrat_ville'];
    $nom_ville = $row['nom_ville'];
    $return_arr[] = array(
        "contrat_ville" => $contrat_ville,
        "nom_ville" => $nom_ville,);
}

if($return_arr) {echo json_encode($return_arr);}
