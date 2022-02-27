<?php

include "config.php";

$return_arr = array();

$view = mysqli_real_escape_string($con, $_POST['view']);

// ----------------------------------------------------------------------------- Jeune
if($view == "jeune") {
    $query = "CALL csv_jeune_Get()";
    $result = mysqli_query($con,$query);

    $en_tete = "ADH,AMI,D_IMAGE,RGPD,GENRE,PRENOM,NOM,AGE,SENSIBILISATION,EMAIL,TEL,VILLE,CONTRAT,DEP,QPV,NOM_QPV,PRIJ,TYPE_ORGA,NOM_ORGA,NIVEAU,ANGLAIS,EMPLOI,GJ,ACCOMP,MOBILITE,REFERENT,DERNIER_RDV\n";

    while($row = mysqli_fetch_array($result)){
        $adherent = $row['adherent'];
        $ami = $row['ami'];
        $droits_image = $row['droits_image'];
        $rgpd = $row['rgpd'];
        $genre = $row['genre'];
        $prenom = $row['prenom'];
        $nom = $row['nom'];
        $age = $row['age'];
        $nom_evt = $row['nom_evt'];
        $email = $row['email'];
        $tel = $row['tel'];
        $nom_ville = $row['nom_ville'];
        $contrat_ville  = $row['contrat_ville'];
        $departement = $row['departement'];
        $qpv = $row['qpv'];
        $nom_qpv = $row['nom_qpv'];
        $prij = $row['prij'];
        $type_orga = $row['type_orga'];
        $nom_orga = $row['nom_orga'];
        $niveau = $row['niveau'];
        $niveau_anglais = $row['niveau_anglais'];
        $statut = $row['statut'];
        $gj = $row['gj'];
        $acc = $row['acc'];
        $mob = $row['mob'];
        $ref = $row['ref'];
        $last_evt = $row['last_evt'];

        $return_arr[] = array(
            "adherent" => $adherent,
            "ami" => $ami,
            "droits_image" => $droits_image,
            "rgpd" => $rgpd,
            "genre" => $genre,
            "prenom" => $prenom,
            "nom" => $nom,
            "age" => $age,
            "nom_evt" => $nom_evt,
            "email" => $email,
            "tel" => $tel,
            "nom_ville" => $nom_ville,
            "contrat_ville" => $contrat_ville,
            "departement" => $departement,
            "qpv" => $qpv,
            "nom_qpv" => $nom_qpv,
            "prij" => $prij,
            "type_orga" => $type_orga,
            "nom_orga" => $nom_orga,
            "niveau" => $niveau,
            "niveau_anglais" => $niveau_anglais,
            "statut" => $statut,
            "gj" => $gj,
            "acc" => $acc,
            "mob" => $mob,
            "ref" => $ref,
            "last_evt" => $last_evt
        );
    }
}

// ----------------------------------------------------------------------------- Événements
if($view == "evt") {
    $query = "CALL csv_evt_Get()";
    $result = mysqli_query($con,$query);

    $en_tete = "MISSION,DATE,VILLE,DEP,CONTRAT_VILLE,TYPE,VISIO,NB_JEUNES,NB_PROS,DUREE,INTERVENANT·E,VILLE_JEUNE,CV_JEUNE\n";

    while($row = mysqli_fetch_array($result)){
        $mission = $row['mission'];
        $dat = $row['dat'];
        $ville_sd = $row['ville_sd'];
        $departement = $row['departement'];
        $contrat_ville = $row['contrat_ville'];
        $type = $row['type'];
        $visio = $row['visio'];
        $nb_jeunes = $row['nb_jeunes'];
        $nb_pros = $row['nb_pros'];
        $duree = $row['duree'];
        $intervenant = $row['intervenant'];
        $ville_jeune = $row['ville_jeune'];
        $cv_jeune = $row['cv_jeune'];

        $return_arr[] = array(
            "mission" => $mission,
            "dat" => $dat,
            "ville_sd" => $ville_sd,
            "departement" => $departement,
            "contrat_ville" => $contrat_ville,
            "type" => $type,
            "visio" => $visio,
            "nb_jeunes" => $nb_jeunes,
            "nb_pros" => $nb_pros,
            "duree" => $duree,
            "intervenant" => $intervenant,
            "ville_jeune" => $ville_jeune,
            "cv_jeune" => $cv_jeune
        );
    }
}

// ----------------------------------------------------------------------------- Projets
if($view == "prj") {
    $query = "CALL csv_prj_Get()";
    $result = mysqli_query($con,$query);

    $en_tete = "TYPE,INTITULE,PARTENAIRE,PAYS,DEBUT,FIN,DUREE,NB_JEUNES\n";

    while($row = mysqli_fetch_array($result)){
        $type = $row['type'];
        $intitule = $row['intitule'];
        $nom_part = $row['nom_part'];
        $nom_pays = $row['nom_pays'];
        $debut = $row['debut'];
        $fin = $row['fin'];
        $duree = $row['duree'];
        $nb_participants = $row['nb_participants'];

        $return_arr[] = array(
            "type" => $type,
            "intitule" => $intitule,
            "nom_part" => $nom_part,
            "nom_pays" => $nom_pays,
            "debut" => $debut,
            "fin" => $fin,
            "duree" => $duree,
            "nb_participants" => $nb_participants
        );
    }
}

// ---------------------------------------------------------------------------- Create Csv
$dir = "csv/";
$filename = $dir.$view.".csv";

$fp = fopen($filename, 'w') or die("can't open file");

foreach ($return_arr as $fields) {
    fputcsv($fp, $fields);
}

$en_tete .= file_get_contents($filename);
file_put_contents($filename, $en_tete);

fclose($fp);

// ---------------------------------------------------------------------------- Create Zip
// $zip = new ZipArchive();
// $zipFile = $dir.$view.".zip";
//
// if ($zip->open($zipFile, ZipArchive::CREATE)===TRUE) {
//     $zip->addFile($filename);
//     $zip->setEncryptionName($filename, ZipArchive::EM_AES_256, 'OsezLesStats!');
//     $zip->close();
// } else {exit("Impossible d'ouvrir <$zipFile>\n");}


// ----------------------------------------------------------------------------  Download CSV
header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=".$filename);
header("Content-Type: application/csv; ");
readfile($filename);

// ----------------------------------------------------------------------------  Download Zip
// header('Content-Type: application/zip');
// header('Content-Disposition: attachment; filename="'.basename($zipFile).'"');
// header('Content-Length: ' . filesize($zipFile));
// flush();
// readfile($zipFile);
// // ----------------------------------------------------------------------------- Delete file
// unlink($zipFile);

// ----------------------------------------------------------------------------  Reset CSV
file_put_contents($filename, '');

exit();
