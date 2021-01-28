<?php

include "config.php";

$id = mysqli_real_escape_string($con, $_GET['id']);
$adherent = mysqli_real_escape_string($con, $_GET['adherent']);
$genre = mysqli_real_escape_string($con, $_GET['genre']);
$prenom = mysqli_real_escape_string($con, $_GET['prenom']);
$nom = mysqli_real_escape_string($con, $_GET['nom']);
$ddn = mysqli_real_escape_string($con, $_GET['ddn']);
$sensibilisation = mysqli_real_escape_string($con, $_GET['sensibilisation']);
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

// $id = 63;
// $adherent = 0;
// $genre = "Femme";
// $prenom = "Femme";
// $nom = "Femme";
// $ddn = "Femme";
// $sensibilisation = 1;
// $email = "Femme";
// $tel = "Femme";
// $facebook = "Femme";
// $skype = "Femme";
// $insta = "Femme";
// $urgence = "Femme";
// $adresse = "Femme";
// $id_ville = 1;
// $qpv =  "Limite";
// $id_qpv = 1;
// $id_orga = 1;
// $nom_ref = "Femme";
// $tel_ref = "Femme";
// $email_ref = "Femme";
// $formation = "Femme";
// $niveau = "Femme";
// $diplome = "Femme";
// $niveau_anglais = "Femme";
// $langues = "Femme";
// $statut = "Femme";
// $pe = "Femme";
// $rsa = "Femme";
// $gj = "Femme";

$query = "CALL jeune_Update('$id', '$adherent', '$genre', '$prenom', '$nom', '$ddn', '$sensibilisation', '$email', '$tel', '$facebook', '$skype',
'$insta', '$urgence', '$adresse', '$id_ville', '$qpv', '$id_qpv', '$id_orga', '$nom_ref', '$tel_ref', '$email_ref', '$formation', '$niveau',
'$diplome', '$niveau_anglais', '$langues', '$statut', '$pe', '$rsa', '$gj')";

$result = $con->prepare($query);

$result->execute();

echo "La fiche du jeune a bien été modifiée dans la base de données.";
