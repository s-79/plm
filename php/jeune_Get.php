<?php

include "config.php";

$return_arr = array();

$id = mysqli_real_escape_string($con, $_GET['id']);
$npv = mysqli_real_escape_string($con, $_GET['npv']);
$id_ville_contrat = mysqli_real_escape_string($con, $_GET['id_ville_contrat']);

if($id) {
    $query = "CALL jeune_Get ('$id')";
    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $genre = $row['genre'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];
        $ddn = $row['ddn'];
        $nationalite = $row['nationalite'];
        $adherent = $row['adherent'];
        $ami = $row['ami'];
        $email = $row['email'];
        $tel = $row['tel'];
        $facebook = $row['facebook'];
        $insta = $row['insta'];
        $urgence = $row['urgence'];
        $droits_image = $row['droits_image'];
        $rgpd = $row['rgpd'];
        $adresse = $row['adresse'];
        $id_ville = $row['id_ville'];
        $ville = $row['ville'];
        $nom_ville = $row['nom_ville'];
        $contrat_ville = $row['contrat_ville'];
        $qpv = $row['qpv'];
        $id_qpv = $row['id_qpv'];
        $prij = $row['prij'];
        $type_orga = $row['type_orga'];
        $id_orga = $row['id_orga'];
        $nom_ref = $row['nom_ref'];
        $tel_ref = $row['tel_ref'];
        $email_ref = $row['email_ref'];
        $ml = $row['ml'];
        $gj = $row['gj'];
        $formation = $row['formation'];
        $niveau = $row['niveau'];
        $diplome = $row['diplome'];
        $niveau_anglais = $row['niveau_anglais'];
        $langues = $row['langues'];
        $at_anglais = $row['at_anglais'];
        $statut = $row['statut'];
        $pe = $row['pe'];
        $rsa = $row['rsa'];
        $connu = $row['connu'];
        $id_evt = $row['id_evt'];

        $return_arr[] = array(
            "id" => $id,
            "genre" => $genre,
            "nom" => $nom,
            "prenom" => $prenom,
            "ddn" => $ddn,
            "nationalite" => $nationalite,
            "adherent" => $adherent,
            "ami" => $ami,
            "email" => $email,
            "tel" => $tel,
            "facebook" => $facebook,
            "insta" => $insta,
            "urgence" => $urgence,
            "droits_image" => $droits_image,
            "rgpd" => $rgpd,
            "adresse" => $adresse,
            "id_ville" => $id_ville,
            "ville" => $ville,
            "nom_ville" => $nom_ville,
            "contrat_ville" => $contrat_ville,
            "qpv" => $qpv,
            "id_qpv" => $id_qpv,
            "prij" => $prij,
            "type_orga" => $type_orga,
            "id_orga" => $id_orga,
            "nom_ref" => $nom_ref,
            "tel_ref" => $tel_ref,
            "email_ref" => $email_ref,
            "ml" => $ml,
            "gj" => $gj,
            "formation" => $formation,
            "niveau" => $niveau,
            "diplome" => $diplome,
            "niveau_anglais" => $niveau_anglais,
            "langues" => $langues,
            "at_anglais" => $at_anglais,
            "statut" => $statut,
            "pe" => $pe,
            "rsa" => $rsa,
            "connu" => $connu,
            "id_evt" => $id_evt
        );
    }

} elseif($npv) {
    $query = "CALL jeune_Get_Id('$npv')";
    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];

        $return_arr[] = array(
            "id" => $id);
    }

} elseif($id_ville_contrat) {
    $query = "CALL ville_contrat ('$id_ville_contrat')";
    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $contrat_ville = $row['contrat_ville'];
        $nom_ville = $row['nom_ville'];
        $return_arr[] = array(
            "contrat_ville" => $contrat_ville,
            "nom_ville" => $nom_ville,);
    }
}

if($return_arr) {echo json_encode($return_arr);}
