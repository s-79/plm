<?php

include "config.php";

$id = mysqli_real_escape_string($con, $_GET['id']);
$nom = mysqli_real_escape_string($con, $_GET['nom']);
$type = mysqli_real_escape_string($con, $_GET['type']);

$query = "CALL orga_Update ('$id ', '$nom', '$type')";

$result = $con->prepare($query);

$result->execute();

echo "L'organisme a bien été modifié.";
