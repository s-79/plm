<?php

include "config.php";

$id_acc =  mysqli_real_escape_string($con, $_GET['id_acc']);
$statut =  mysqli_real_escape_string($con, $_GET['statut']);

if($id_acc) {
    $query = "CALL jeune_Update_Acc('$id_acc', '$statut')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
