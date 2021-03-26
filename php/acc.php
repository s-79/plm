<?php

include "config.php";
// ---------------------------------------------------------------------------  Statut d'accomp + mobilité et référent
$id_acc =  mysqli_real_escape_string($con, $_GET['id_acc']);
$statut =  mysqli_real_escape_string($con, $_GET['statut']);
$mob =  mysqli_real_escape_string($con, $_GET['mob']);
$id_ref =  mysqli_real_escape_string($con, $_GET['id_ref']);

// ---------------------------------------------------------------------------  Partir
$id_jeune =  mysqli_real_escape_string($con, $_GET['id_jeune']);
$depart =  mysqli_real_escape_string($con, $_GET['depart']);
$retour =  mysqli_real_escape_string($con, $_GET['retour']);
$id_prj =  mysqli_real_escape_string($con, $_GET['id_prj']);
$id_prj_up =  mysqli_real_escape_string($con, $_GET['id_prj_up']);
$id_prj_del =  mysqli_real_escape_string($con, $_GET['id_prj_del']);

// ---------------------------------------------------------------------------  Participer
$id_jeune =  mysqli_real_escape_string($con, $_GET['id_jeune']);
$commentaire =  mysqli_real_escape_string($con, $_GET['commentaire']);
$id_evt =  mysqli_real_escape_string($con, $_GET['id_evt']);
$id_evt_up =  mysqli_real_escape_string($con, $_GET['id_evt_up']);
$id_evt_del =  mysqli_real_escape_string($con, $_GET['id_evt_del']);

// ---------------------------------------------------------------------------  Rendez-vous
$uuid =  mysqli_real_escape_string($con, $_GET['uuid']);
$id_int =  mysqli_real_escape_string($con, $_GET['id_int']);
$dat =  mysqli_real_escape_string($con, $_GET['dat']);
$type =  mysqli_real_escape_string($con, $_GET['type']);
$visio =  mysqli_real_escape_string($con, $_GET['visio']);
$duree =  mysqli_real_escape_string($con, $_GET['duree']);
$commentaires =  mysqli_real_escape_string($con, $_GET['commentaires']);

$id_rdv_up =  mysqli_real_escape_string($con, $_GET['id_rdv_up']);
$id_rdv_del =  mysqli_real_escape_string($con, $_GET['id_rdv_del']);

// ---------------------------------------------------------------------------  Fiches Profil
$id_profil_jeune =  mysqli_real_escape_string($con, $_GET['id_profil_jeune']);

$id_profil_jeune_up =  mysqli_real_escape_string($con, $_GET['id_profil_jeune_up']);
$parcours =  mysqli_real_escape_string($con, $_GET['parcours']);
$exp_pro =  mysqli_real_escape_string($con, $_GET['exp_pro']);
$prj_pro =  mysqli_real_escape_string($con, $_GET['prj_pro']);
$loisirs =  mysqli_real_escape_string($con, $_GET['loisirs']);
$volontariat =  mysqli_real_escape_string($con, $_GET['volontariat']);
$voyages =  mysqli_real_escape_string($con, $_GET['voyages']);
$motivations =  mysqli_real_escape_string($con, $_GET['motivations']);
$prj_mob =  mysqli_real_escape_string($con, $_GET['prj_mob']);
$freins =  mysqli_real_escape_string($con, $_GET['freins']);
$apports =  mysqli_real_escape_string($con, $_GET['apports']);
$attentes =  mysqli_real_escape_string($con, $_GET['attentes']);
$conditions_vie =  mysqli_real_escape_string($con, $_GET['conditions_vie']);
$ressources =  mysqli_real_escape_string($con, $_GET['ressources']);
$docs_adm =  mysqli_real_escape_string($con, $_GET['docs_adm']);
$medical =  mysqli_real_escape_string($con, $_GET['medical']);

if($id_acc) {
    $query = "CALL jeune_Update_Acc('$id_acc', '$statut', '$mob', '$id_ref')";

// ---------------------------------------------------------------------------  Partir - Association jeune-prj
} elseif($id_prj) {
    $query = "CALL acc_Create_Prj ('$id_jeune', '$id_prj', '$depart', '$retour')";

} elseif($id_prj_up) {
   $query = "CALL acc_Update_Prj ('$id_jeune', '$id_prj_up', '$depart', '$retour')";

} elseif($id_prj_del) {
    $query = "CALL acc_Delete_Prj('$id_jeune', '$id_prj_del')";

// ---------------------------------------------------------------------------  Participer - Associations evt, evt2, rdv
} elseif($id_evt) {
    $query = "CALL acc_Create_Evt ('$id_jeune', '$id_evt', '$commentaire')";

} elseif($id_evt_up) {
   $query = "CALL acc_Update_Evt ('$id_jeune', '$id_evt_up', '$commentaire')";

} elseif($id_evt_del) {
    $query = "CALL acc_Delete_Evt('$id_jeune', '$id_evt_del')";

// ---------------------------------------------------------------------------  Rendez-vous
} elseif($uuid) {
    $query = "CALL rdv_Create('$dat', '$type', '$visio', '$uuid', '$commentaires', '$duree', '$id_int')";

} elseif($id_rdv_up) {
    $query = "CALL rdv_Update('$id_rdv_up', '$dat', '$type', '$visio', '$commentaires', '$duree', '$id_int')";

} elseif($id_rdv_del) {
    $query = "CALL rdv_Delete('$id_rdv_del')";

// ---------------------------------------------------------------------------  Fiche Profil
} elseif($id_profil_jeune) {
    $query = "CALL profil_Create('$id_profil_jeune')";

} elseif($id_profil_jeune_up) {
    $query = "CALL profil_Update('$id_profil_jeune_up', '$parcours', '$exp_pro', '$prj_pro', '$loisirs', '$volontariat', '$voyages', '$motivations', '$prj_mob', '$freins', '$apports', '$attentes', '$conditions_vie', '$ressources', '$docs_adm', '$medical')";
}

$result = $con->prepare($query);

$result->execute();

echo "OK";
