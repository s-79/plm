<?php

include "config.php";

$return_arr = array();

$id_evt = mysqli_real_escape_string($con, $_GET['id_evt']);

$query = "CALL evt_Get_Inter('$id_evt')";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $prenom = $row['prenom'];
    $nom = $row['nom'];
    $actif = $row['actif'];
    $volontaire = $row['volontaire'];

    $return_arr[] = array(
        "id" => $id,
        "prenom" => $prenom,
        "nom" => $nom,
        "actif" => $actif,
        "volontaire" => $volontaire
        );
}

if($return_arr) {echo json_encode($return_arr);}
