<?php

include "config.php";

$return_arr = array();

$id = mysqli_real_escape_string($con, $_GET['id']);

$query = "CALL prj_Get('$id')";
$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $type = $row['type'];
    $intitule = $row['intitule'];
    $id_part = $row['id_part'];
    $id_pays = $row['id_pays'];
    $ville = $row['ville'];
    $debut = $row['debut'];
    $fin = $row['fin'];
    $duree = $row['duree'];
    $them = $row['them'];
    $commentaires = $row['commentaires'];
    $youth_leader = $row['youth_leader'];
    $nb_participants = $row['nb_participants'];
    $pays_participants = $row['pays_participants'];

    $return_arr[] = array(
        "id" => $id,
        "type" => $type,
        "intitule" => $intitule,
        "id_part" => $id_part,
        "id_pays" => $id_pays,
        "ville" => $ville,
        "debut" => $debut,
        "fin" => $fin,
        "duree" => $duree,
        "them" => $them,
        "commentaires" => $commentaires,
        "youth_leader" => $youth_leader,
        "nb_participants" => $nb_participants,
        "pays_participants" => $pays_participants
    );
}

if($return_arr) {echo json_encode($return_arr);}
