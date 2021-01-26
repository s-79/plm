<?php

include "config.php";

$nom = mysqli_real_escape_string($con, $_GET['nom']);
$type =  mysqli_real_escape_string($con, $_GET['type']);


$query = "CALL orga_Create (NULL, '$nom', '$type')";


$result = $con->prepare($query);

$result->execute();

echo "L'organisme a bien été ajouté à la base de données.";
