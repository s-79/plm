<?php

include "config.php";

$return_arr = array();

$id_acc = mysqli_real_escape_string($con, $_GET['id_acc']);
$id = mysqli_real_escape_string($con, $_GET['id']);
$id2 = mysqli_real_escape_string($con, $_GET['id2']);
$id_jeune_rdv = mysqli_real_escape_string($con, $_GET['id_jeune_rdv']);
$id_rdv = mysqli_real_escape_string($con, $_GET['id_rdv']);
$id_jeune_prj = mysqli_real_escape_string($con, $_GET['id_jeune_prj']);
$id_evt = mysqli_real_escape_string($con, $_GET['id_evt']);
$id_prj = mysqli_real_escape_string($con, $_GET['id_prj']);
$id_jeune = mysqli_real_escape_string($con, $_GET['id_jeune']);
$uuid = mysqli_real_escape_string($con, $_GET['uuid']);
$id_jeune_fiche = mysqli_real_escape_string($con, $_GET['id_jeune_fiche']);

// ----------------------------------------------------------------------------- Récupération du statut d'accompagnement du jeune séléctionné
if($id_acc) {
    $query = "CALL jeune_Get_Acc('$id_acc')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $acc = $row['acc'];
        $npv = $row['npv'];
        $mob = $row['mob'];
        $id_ref = $row['id_ref'];
        $ref = $row['ref'];

        $return_arr[] = array(
            "acc" => $acc,
            "npv" => $npv,
            "mob" => $mob,
            "id_ref" => $id_ref,
            "ref" => $ref
        );
    }
// ----------------------------------------------------------------------------- Récupération des infos des missions 0 et 1 en fonction de l'id jeune
} elseif($id) {
    $query = "CALL jeune_Get_Evt('$id')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $dat = $row['dat'];
        $type = $row['type'];
        $nom_ville = $row['nom_ville'];
        $commentaire = $row['commentaire'];

        $return_arr[] = array(
            "id" => $id,
            "dat" => $dat,
            "type" => $type,
            "nom_ville" => $nom_ville,
            "commentaire" => $commentaire
        );
    }
// ----------------------------------------------------------------------------- Récupération des infos des missions 2 en fonction de l'id jeune
} elseif($id2) {
    $query = "CALL jeune_Get_Evt2('$id2')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $dat = $row['dat'];
        $type = $row['type'];
        $commentaire = $row['commentaire'];

        $return_arr[] = array(
            "id" => $id,
            "dat" => $dat,
            "type" => $type,
            "commentaire" => $commentaire
        );
    }
// ----------------------------------------------------------------------------- Récupération des infos des RDV en fonction de l'id du jeune
} elseif($id_jeune_rdv) {
    $query = "CALL jeune_Get_Rdv('$id_jeune_rdv')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $dat = $row['dat'];
        $type = $row['type'];
        $intervenant = $row['intervenant'];
        $duree = $row['duree'];
        $commentaires = $row['commentaires'];

        $return_arr[] = array(
            "id" => $id,
            "dat" => $dat,
            "type" => $type,
            "intervenant" => $intervenant,
            "duree" => $duree,
            "commentaires" => $commentaires
        );
    }

// ----------------------------------------------------------------------------- Récupération des infos des projets en fonction de l'id du jeune
} elseif($id_jeune_prj) {
    $query = "CALL jeune_Get_Prj('$id_jeune_prj')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $type = $row['type'];
        $intitule = $row['intitule'];
        $pays = $row['pays'];
        $depart = $row['depart'];
        $retour = $row['retour'];

        $return_arr[] = array(
            "id" => $id,
            "type" => $type,
            "intitule" => $intitule,
            "pays" => $pays,
            "depart" => $depart,
            "retour" => $retour
        );
    }

// ----------------------------------------------------------------------------- Récupération des infos d'un RDV en fonction de son id
} elseif($id_rdv) {
    $query = "CALL acc_Get_Rdv('$id_rdv')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];
        $nom2 = $row['nom2'];
        $dat = $row['dat'];
        $type = $row['type'];
        $visio = $row['visio'];
        $id_intervenant = $row['id_intervenant'];
        $duree = $row['duree'];
        $commentaires = $row['commentaires'];

        $return_arr[] = array(
            "id" => $id,
            "nom2" => $nom2,
            "dat" => $dat,
            "type" => $type,
            "visio" => $visio,
            "id_intervenant" => $id_intervenant,
            "duree" => $duree,
            "commentaires" => $commentaires
        );
    }

} elseif($id_evt) {
    $query = "CALL acc_Get_Evt('$id_evt', '$id_jeune')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id_evt = $row['id'];
        $id_jeune = $row['id_jeune'];
        $nom = $row['nom'];
        $nom_evt = $row['nom_evt'];
        $commentaire = $row['commentaire'];

        $return_arr[] = array(
            "id_evt" => $id_evt,
            "id_jeune" => $id_jeune,
            "nom" => $nom,
            "nom_evt" => $nom_evt,
            "commentaire" => $commentaire
        );
    }

} elseif($id_prj) {
    $query = "CALL acc_Get_Prj('$id_prj', '$id_jeune')";

    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id_prj = $row['id'];
        $id_jeune = $row['jeune_id'];
        $nom = $row['nom'];
        $depart = $row['depart'];
        $retour = $row['retour'];

        $return_arr[] = array(
            "id_prj" => $id_prj,
            "id_jeune" => $id_jeune,
            "nom" => $nom,
            "depart" => $depart,
            "retour" => $retour
        );
    }

} elseif($uuid) {
    $query = "CALL rdv_Get_Id('$uuid')";
    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $id = $row['id'];

        $return_arr[] = array(
            "id" => $id);
    }

} elseif($id_jeune_fiche) {
    $query = "CALL acc_Get_Fiche('$id_jeune_fiche')";
    $result = mysqli_query($con,$query);

    while($row = mysqli_fetch_array($result)){
        $projet_pro = $row['projet_pro'];
        $parcours = $row['parcours'];
        $situation = $row['situation'];
        $prj_mob = $row['prj_mob'];
        $commentaires = $row['commentaires'];

        $return_arr[] = array(
            "projet_pro" => $projet_pro,
            "parcours" => $parcours,
            "situation" => $situation,
            "prj_mob" => $prj_mob,
            "commentaires" => $commentaires

        );
    }
}

if($return_arr) {echo json_encode($return_arr);}
