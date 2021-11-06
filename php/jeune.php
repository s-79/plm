<?php

include "config.php";

$id_del = mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$genre = mysqli_real_escape_string($con, $_GET['genre']);
$prenom = mysqli_real_escape_string($con, $_GET['prenom']);
$nom = mysqli_real_escape_string($con, $_GET['nom']);
$ddn = mysqli_real_escape_string($con, $_GET['ddn']);
$nationalite = mysqli_real_escape_string($con, $_GET['nationalite']);
$adherent = mysqli_real_escape_string($con, $_GET['adherent']);
$ami = mysqli_real_escape_string($con, $_GET['ami']);
$email =  mysqli_real_escape_string($con, $_GET['email']);
$tel = mysqli_real_escape_string($con, $_GET['tel']);
$facebook = mysqli_real_escape_string($con, $_GET['facebook']);
$insta = mysqli_real_escape_string($con, $_GET['insta']);
$urgence = mysqli_real_escape_string($con, $_GET['urgence']);
$droits_image = mysqli_real_escape_string($con, $_GET['droits_image']);
$rgpd = mysqli_real_escape_string($con, $_GET['rgpd']);
$adresse = mysqli_real_escape_string($con, $_GET['adresse']);
$id_ville = mysqli_real_escape_string($con, $_GET['id_ville']);
$qpv = mysqli_real_escape_string($con, $_GET['qpv']);
$id_qpv = mysqli_real_escape_string($con, $_GET['id_qpv']);
$id_orga = mysqli_real_escape_string($con, $_GET['id_orga']);
$nom_ref = mysqli_real_escape_string($con, $_GET['nom_ref']);
$tel_ref = mysqli_real_escape_string($con, $_GET['tel_ref']);
$email_ref = mysqli_real_escape_string($con, $_GET['email_ref']);
$ml = mysqli_real_escape_string($con, $_GET['ml']);
$gj = mysqli_real_escape_string($con, $_GET['gj']);
$formation = mysqli_real_escape_string($con, $_GET['formation']);
$niveau = mysqli_real_escape_string($con, $_GET['niveau']);
$diplome = mysqli_real_escape_string($con, $_GET['diplome']);
$niveau_anglais = mysqli_real_escape_string($con, $_GET['niveau_anglais']);
$langues = mysqli_real_escape_string($con, $_GET['langues']);
$at_anglais = mysqli_real_escape_string($con, $_GET['at_anglais']);
$statut = mysqli_real_escape_string($con, $_GET['statut']);
$statut2 = mysqli_real_escape_string($con, $_GET['statut2']);
$pe = mysqli_real_escape_string($con, $_GET['pe']);
$rsa = mysqli_real_escape_string($con, $_GET['rsa']);
$id_evt = mysqli_real_escape_string($con, $_GET['id_evt']);

if($id_del) {
    $query = "CALL jeune_Delete('$id_del')";

} elseif($id) {
    $query = "CALL jeune_Update('$id', '$genre', '$prenom', '$nom', '$ddn', '$nationalite', '$adherent',  '$ami', '$email', '$tel', '$facebook', '$insta', '$urgence', '$droits_image', '$rgpd',
    '$adresse', '$id_ville', '$qpv', '$id_qpv', '$id_orga', '$nom_ref', '$tel_ref', '$email_ref', '$ml', '$gj',
    '$formation', '$niveau', '$diplome', '$niveau_anglais', '$langues', '$at_anglais', '$statut', '$statut2', '$pe', '$rsa', '$id_evt')";

} else {
    $query = "CALL jeune_Create ('$genre', '$prenom', '$nom', '$ddn', '$nationalite', '$adherent',  '$ami', '$email', '$tel', '$facebook', '$insta', '$urgence', '$droits_image', '$rgpd',
    '$adresse', '$id_ville', '$qpv', '$id_qpv', '$id_orga', '$nom_ref', '$tel_ref', '$email_ref', '$ml', '$gj',
    '$formation', '$niveau', '$diplome', '$niveau_anglais', '$langues', '$at_anglais', '$statut', '$statut2', '$pe', '$rsa', '$id_evt')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
