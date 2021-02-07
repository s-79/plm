<?php

include "config.php";

$id_del = mysqli_real_escape_string($con, $_GET['id_del']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$adherent = mysqli_real_escape_string($con, $_GET['adherent']);
$genre = mysqli_real_escape_string($con, $_GET['genre']);
$prenom = mysqli_real_escape_string($con, $_GET['prenom']);
$nom = mysqli_real_escape_string($con, $_GET['nom']);
$ddn = mysqli_real_escape_string($con, $_GET['ddn']);
$id_evt = mysqli_real_escape_string($con, $_GET['id_evt']);
$email =  mysqli_real_escape_string($con, $_GET['email']);
$tel = mysqli_real_escape_string($con, $_GET['tel']);
$facebook = mysqli_real_escape_string($con, $_GET['facebook']);
$skype = mysqli_real_escape_string($con, $_GET['skype']);
$insta = mysqli_real_escape_string($con, $_GET['insta']);
$urgence = mysqli_real_escape_string($con, $_GET['urgence']);
$adresse = mysqli_real_escape_string($con, $_GET['adresse']);
$id_ville = mysqli_real_escape_string($con, $_GET['id_ville']);
$qpv = mysqli_real_escape_string($con, $_GET['qpv']);
$id_qpv = mysqli_real_escape_string($con, $_GET['id_qpv']);
$id_orga = mysqli_real_escape_string($con, $_GET['id_orga']);
$nom_ref = mysqli_real_escape_string($con, $_GET['nom_ref']);
$tel_ref = mysqli_real_escape_string($con, $_GET['tel_ref']);
$email_ref = mysqli_real_escape_string($con, $_GET['email_ref']);
$formation = mysqli_real_escape_string($con, $_GET['formation']);
$niveau = mysqli_real_escape_string($con, $_GET['niveau']);
$diplome = mysqli_real_escape_string($con, $_GET['diplome']);
$niveau_anglais = mysqli_real_escape_string($con, $_GET['niveau_anglais']);
$langues = mysqli_real_escape_string($con, $_GET['langues']);
$statut = mysqli_real_escape_string($con, $_GET['statut']);
$pe = mysqli_real_escape_string($con, $_GET['pe']);
$rsa = mysqli_real_escape_string($con, $_GET['rsa']);
$gj = mysqli_real_escape_string($con, $_GET['gj']);

if($id_del) {
    $query = "CALL jeune_Delete('$id_del')";

} elseif($id) {
    $query = "CALL jeune_Update('$id', '$adherent', '$genre', '$prenom', '$nom', '$ddn', '$id_evt', '$email', '$tel', '$facebook', '$skype',
    '$insta', '$urgence', '$adresse', '$id_ville', '$qpv', '$id_qpv', '$id_orga', '$nom_ref', '$tel_ref', '$email_ref', '$formation', '$niveau',
    '$diplome', '$niveau_anglais', '$langues', '$statut', '$pe', '$rsa', '$gj')";

} else {
    $query = "CALL jeune_Create ('$adherent', '$genre', '$prenom', '$nom', '$ddn', '$id_evt', '$email', '$tel', '$facebook', '$skype',
    '$insta', '$urgence', '$adresse', '$id_ville', '$qpv', '$id_qpv', '$id_orga', '$nom_ref', '$tel_ref', '$email_ref', '$formation', '$niveau',
    '$diplome', '$niveau_anglais', '$langues', '$statut', '$pe', '$rsa', '$gj')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
