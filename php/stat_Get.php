<?php

include "config.php";

$return_arr = array();

$annee = mysqli_real_escape_string($con, $_GET['annee']);
$contrat_ville = mysqli_real_escape_string($con, $_GET['contrat_ville']);

if($annee) {
    $query = "SELECT DISTINCT `annee` FROM `v_stat`;";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $annee = $row['annee'];
        $return_arr[] = array("annee" => $annee);
    }
    
} elseif($contrat_ville) {
    $query = "SELECT DISTINCT `contrat_ville` FROM `v_stat`;";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $contrat_ville = $row['contrat_ville'];
        $return_arr[] = array("contrat_ville" => $contrat_ville);
    }
}
if($return_arr) {echo json_encode($return_arr);}
