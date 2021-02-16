<?php

include "config.php";

$return_arr = array();

$id = mysqli_real_escape_string($con, $_GET['id']);

if($id) {
    $query = "CALL pro_Get('$id')";
    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $prenom = $row['prenom'];
        $nom = $row['nom_pro'];
        $fonction = $row['fonction'];
        $id_evt = $row['id_evt'];
        $mailing = $row['mailing'];
        $mail = $row['mail'];
        $tel = $row['tel'];
        $commentaires = $row['commentaires'];
        $id_orga = $row['id_orga'];
        $type_orga = $row['type_orga'];
        $id_ville = $row['id_ville'];

        $return_arr[] = array(
            "id" => $id,
            "prenom" => $prenom,
            "nom" => $nom,
            "fonction" => $fonction,
            "id_evt" => $id_evt,
            "mailing" => $mailing,
            "mail" => $mail,
            "tel" => $tel,
            "commentaires" => $commentaires,
            "id_orga" => $id_orga,
            "type_orga" => $type_orga,
            "id_ville" => $id_ville
        );
    }
}

if($return_arr) {echo json_encode($return_arr);}
