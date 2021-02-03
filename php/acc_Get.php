<?php

include "config.php";

$return_arr = array();

$id_acc = mysqli_real_escape_string($con, $_GET['id_acc']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$id2 = mysqli_real_escape_string($con, $_GET['id2']);

// ----------------------------------------------------------------------------- Récupération du statut d'accompagnement du jeune séléctionné
if($id_acc) {
    $query = "CALL jeune_Get_Acc('$id_acc')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $acc = $row['acc'];

        $return_arr[] = array(
            "acc" => $acc
        );
    }
// ----------------------------------------------------------------------------- Récupération des infos des missions 0 et 1 en fonction de l'id jeune
} elseif($id) {
    $query = "CALL jeune_Get_Evt('$id')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $mission = $row['mission'];
        $dat = $row['dat'];
        $type = $row['type'];
        $nom_ville = $row['nom_ville'];

        $return_arr[] = array(
            "id" => $id,
            "mission" => $mission,
            "dat" => $dat,
            "type" => $type,
            "nom_ville" => $nom_ville
        );
    }
// ----------------------------------------------------------------------------- Récupération des infos des missions 2 en fonction de l'id jeune
} elseif($id2) {
    $query = "CALL jeune_Get_Evt2('$id2')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $mission = $row['mission'];
        $dat = $row['dat'];
        $type = $row['type'];
        $nom_ville = $row['nom_ville'];

        $return_arr[] = array(
            "id" => $id,
            "mission" => $mission,
            "dat" => $dat,
            "type" => $type,
            "nom_ville" => $nom_ville
        );
    }
}

if($return_arr) {echo json_encode($return_arr);}
