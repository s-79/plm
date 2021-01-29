<?php

include "config.php";

$id = mysqli_real_escape_string($con, $_GET['id']);

$query = "CALL jeune_Get ('$id')";
$result = mysqli_query($con,$query);

$return_arr = array();

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $adherent = $row['adherent'];
    $genre = $row['genre'];
    $nom = $row['nom'];
    $prenom = $row['prenom'];
    $ddn = $row['ddn'];
    $id_sensi = $row['id_sensi'];
    $nom_sensi = $row['nom_sensi'];
    $email = $row['email'];
    $tel = $row['tel'];
    $facebook = $row['facebook'];
    $skype = $row['skype'];
    $insta = $row['insta'];
    $urgence = $row['urgence'];
    $adresse = $row['adresse'];
    $id_ville = $row['id_ville'];
    $ville = $row['ville'];
    $nom_ville = $row['nom_ville'];
    $contrat_ville = $row['contrat_ville'];
    $qpv = $row['qpv'];
    $id_qpv = $row['id_qpv'];
    $nom_qpv = $row['nom_qpv'];
    $prij = $row['prij'];
    $type_orga = $row['type_orga'];
    $id_orga = $row['id_orga'];
    $nom_orga = $row['nom_orga'];
    $nom_ref = $row['nom_ref'];
    $tel_ref = $row['tel_ref'];
    $email_ref = $row['email_ref'];
    $formation = $row['formation'];
    $niveau = $row['niveau'];
    $diplome = $row['diplome'];
    $niveau_anglais = $row['niveau_anglais'];
    $langues = $row['langues'];
    $statut = $row['statut'];
    $pe = $row['pe'];
    $rsa = $row['rsa'];
    $gj = $row['gj'];

    $return_arr[] = array(
        "id" => $id,
        "adherent" => $adherent,
        "genre" => $genre,
        "nom" => $nom,
        "prenom" => $prenom,
        "ddn" => $ddn,
        "id_sensi" => $id_sensi,
        "nom_sensi" => $nom_sensi,
        "email" => $email,
        "tel" => $tel,
        "facebook" => $facebook,
        "skype" => $skype,
        "insta" => $insta,
        "urgence" => $urgence,
        "adresse" => $adresse,
        "id_ville" => $id_ville,
        "ville" => $ville,
        "nom_ville" => $nom_ville,
        "contrat_ville" => $contrat_ville,
        "qpv" => $qpv,
        "id_qpv" => $id_qpv,
        "nom_qpv" => $nom_qpv,
        "prij" => $prij,
        "type_orga" => $type_orga,
        "id_orga" => $id_orga,
        "nom_orga" => $nom_orga,
        "nom_ref" => $nom_ref,
        "tel_ref" => $tel_ref,
        "email_ref" => $email_ref,
        "formation" => $formation,
        "niveau" => $niveau,
        "diplome" => $diplome,
        "niveau_anglais" => $niveau_anglais,
        "langues" => $langues,
        "statut" => $statut,
        "pe" => $pe,
        "rsa" => $rsa,
        "gj" => $gj);
}

if($return_arr) {echo json_encode($return_arr);}
