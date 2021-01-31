<?php

include "config.php";

$return_arr = array();

$id = mysqli_real_escape_string($con, $_GET['id']);

$query = "CALL evt_Get('$id')";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $nom = $row['nom'];
    $mission = $row['mission'];
    $dat = $row['dat'];
    $id_ville = $row['id_ville'];
    $ville = $row['ville'];
    $type = $row['type'];
    $visio = $row['visio'];
    $intitule = $row['intitule'];
    $id_projet = $row['id_projet'];
    $organise = $row['organise'];
    $nb_jeunes = $row['nb_jeunes'];
    $nb_pro = $row['nb_pro'];
    $commentaire = $row['commentaire'];

    $return_arr[] = array(
        "id" => $id,
        "nom" => $nom,
        "mission" => $mission,
        "dat" => $dat,
        "id_ville" => $id_ville,
        "ville" => $ville,
        "type" => $type,
        "visio" => $visio,
        "intitule" => $intitule,
        "id_projet" => $id_projet,
        "organise" => $organise,
        "nb_jeunes" => $nb_jeunes,
        "nb_pro" => $nb_pro,
        "commentaire" => $commentaire,
        );
}

if($return_arr) {echo json_encode($return_arr);}
