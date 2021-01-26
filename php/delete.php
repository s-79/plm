<?php

include "config.php";

$id_orga =  mysqli_real_escape_string($con, $_GET['id_orga']);

if($id_orga) {
    $query = "CALL orga_Delete('$id_orga')";
// } elseif {
}

$result = $con->prepare($query);

$result->execute();

echo "L'organisme a bien été supprimé.";
