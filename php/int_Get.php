<?php

include "config.php";

$return_arr = array();

$id = mysqli_real_escape_string($con, $_GET['id']);

$query = "CALL int_Get('$id')";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $prenom_int = $row['prenom_int'];
    $nom_int = $row['nom_int'];
    $nom = $row['nom'];
    $actif = $row['actif'];
    $volontaire = $row['volontaire'];
    $ref = $row['ref'];

    $return_arr[] = array(
        "id" => $id,
        "prenom_int" => $prenom_int,
        "nom_int" => $nom_int,
        "nom" => $nom,
        "actif" => $actif,
        "volontaire" => $volontaire,
        "ref" => $ref
    );
}

if($return_arr) {echo json_encode($return_arr);}
