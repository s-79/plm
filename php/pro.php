<?php

include "config.php";

$id_del =  mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$prenom = mysqli_real_escape_string($con, $_GET['prenom']);
$nom =  mysqli_real_escape_string($con, $_GET['nom']);
$fonction = mysqli_real_escape_string($con, $_GET['fonction']);
$id_evt =  mysqli_real_escape_string($con, $_GET['id_evt']);
$mailing = mysqli_real_escape_string($con, $_GET['mailing']);
$mail =  mysqli_real_escape_string($con, $_GET['mail']);
$tel = mysqli_real_escape_string($con, $_GET['tel']);
$commentaires =  mysqli_real_escape_string($con, $_GET['commentaires']);
$id_orga = mysqli_real_escape_string($con, $_GET['id_orga']);
$id_ville =  mysqli_real_escape_string($con, $_GET['id_ville']);

if($id_del) {
    $query = "CALL pro_Delete('$id_del')";
}
elseif($id) {
    $query = "CALL pro_Update ('$id', '$prenom', '$nom', '$fonction', '$id_evt', '$mailing', '$mail', '$tel', '$commentaires', '$id_orga', '$id_ville')";

} else {
    $query = "CALL pro_Create ('$prenom', '$nom', '$fonction', '$id_evt', '$mailing', '$mail', '$tel', '$commentaires', '$id_orga', '$id_ville')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
