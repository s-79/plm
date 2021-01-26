<?php

include "config.php";

$return_arr = array();

$id = mysqli_real_escape_string($con, $_GET['id']);

$query = "CALL orga_Get('$id')";

$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id_orga = $row['id'];
    $nom_orga = $row['nom'];
    $type_orga = $row['type'];

    $return_arr[] = array(
        "id_orga" => $id_orga,
        "nom_orga" => $nom_orga,
        "type_orga" => $type_orga,
        );
}

if($return_arr) {echo json_encode($return_arr);}
