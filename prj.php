<?php
include("header.php"); ?>

<div class="container-fluid">
<div class="row justify-content-center mt-5" style="margin-top: 5em !important;">
    <!--                                                                                                              Zone de recherche -->
    <div class="col-12 col-lg-2 my-4 mx-1 text-center">
        <input type="text" class="form-control" id="prj_search" placeholder="Saisir la date, le type ou la ville">
        <label for="dtv" class="d-none">Saisir la date, le type ou la ville</label>
    </div>
    <!--                                                                                                              Résultat de recherche -->
    <div class="col-12 col-lg-2 my-4 mx-1 text-center">
        <select class="form-select" aria-label="Default select example" id="prj_res">
        </select>
    </div>
    <!--                                                                                                              Bouton afficher les infos-->
    <div class="col-5 col-lg-2 my-4 mx-1 text-center">
        <button type="button" id="infos" class="btn btn-primary bg-bleu btn-bleu marine">Afficher les informations</button>
    </div>
    <div class="col-5 col-lg-2 my-4 mx-1 text-center"><button type="button" id="periode" class="btn btn-warning" style="min-width:15em;">Calendrier des projets <i class="far fa-calendar-alt fa-lg ps-2"></i></button>
    </div>


</div>

<form id="form_prj">
<div class="row justify-content-center ">
    <!--                                                                                                              Projet-->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <div class="row pt-4">
            <div class="col-3">
                <h2>Projet</h2>
            </div>
            <div class="col-1 p-0 m-0">
                <i id="new_prj" class="fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Créer un nouvel projet"></i>
            </div>
        </div>
        <!--                                                                                                        Récupération de l'id dans un input invisible -->
        <input type="text" class="form-control d-none" id="id_prj">

        <div class="form-floating mx-3 mt-3">
            <select class="form-select type_m" id="type" aria-label="Type de projet *">
                <option selected value="">Séléctionner un type de projet *</option>
                <option value="Échange de jeunes">Échange de jeunes</option>
                <option value="Volontariat CES court terme">Volontariat CES court terme</option>
                <option value="Volontariat CES long terme">Volontariat CES long terme</option>
                <option value="Chantier international">Chantier international</option>
                <option value="WWoofing / HelpX / Workaway">WWoofing / HelpX / Workaway</option>
                <option value="VIE / VIA / VIS">VIE / VIA / VIS</option>
                <option value="Volontariat hors cadre">Volontariat hors cadre</option>
                <option value="Au pair">Au pair</option>
                <option value="Stage Erasmus +">Stage Erasmus +</option>
                <option value="Stage OFQJ">Stage OFQJ</option>
                <option value="Stage OFAJ">Stage OFAJ</option>
                <option value="PVT">PVT</option>
                <option value="Training Course">Training Course</option>
                <option value="Emploi">Emploi</option>
            </select>
            <label for="type">Type de projet *</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="intitule" placeholder="Intitulé *">
            <label for="intitule">Intitulé *</label>
        </div>
        <div class="row mx-1 mt-3">
            <div class="form-floating col-10">
                <select class="form-select" id="partenaire" aria-label="Partenaire *">
                </select>
                <label for="partenaire">Partenaire *</label>
            </div>
            <div class="col-2 my-auto">
                <i id="new_part" class="fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_part" data-toggle="tooltip" data-placement="top" title="Ajouter / modifier un partenaire"></i>
            </div>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="pays" aria-label="Pays">
            </select>
            <label for="pays">Pays de destination *</label>
        </div>
        <!--                                                                    Div invisible pour récup nom_pays -->
        <div class="form-floating mx-3 mt-3 d-none">
            <input type="text" class="form-control" id="nom_pays_none">
            <label for="nom_pays_none"></label>
        </div>
        <div class="form-floating mx-3 mt-3 mb-4">
            <input type="text" class="form-control" id="ville" placeholder="Ville">
            <label for="ville">Ville de destination</label>
        </div>
    </div>
    <!--                                                                                                              Période -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Période & Détails</h2>
        <div class="form-floating mx-3 mt-4">
            <input type="date" class="form-control" id="debut" placeholder="Début de la période *">
            <label for="debut">Début de la période *</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="date" class="form-control" id="fin" placeholder="Fin de la période *">
            <label for="fin">Fin de la période *</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select type_m" id="duree" aria-label="Durée du projet">
                <option selected value="">Durée du projet</option>
                <option value="- de 2 mois">- de 2 mois</option>
                <option value="2 mois">2 mois</option>
                <option value="entre 2 et 6 mois">entre 2 et 6 mois</option>
                <option value="+ de 6 mois">+ de 6 mois</option>
            </select>
            <label for="duree">Durée du projet</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="them" placeholder="Thématique">
            <label for="them">Thématique</label>
        </div>
        <div class="form-floating mx-3 mt-3 mb-4">
            <textarea class="form-control" placeholder="Commentaires" id="commentaires"></textarea>
            <label for="commentaires">Commentaires</label>
        </div>
    </div>
    <!--                                                                                                              Échange de jeunes -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Échange de jeunes</h2>
        <div class="form-floating mx-3 mt-4">
            <input type="text" class="form-control" id="youth_leader" placeholder="Nom du Youth Leader">
            <label for="youth_leader">Nom du Youth Leader</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="nb_part" placeholder="Nombre de participants">
            <label for="nb_part">Nombre de participants</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <textarea class="form-control" placeholder="Pays participants" id="pays_part" style="height:125px;"></textarea>
            <label for="pays_part">Pays participants</label>
        </div>

        <div id="btn_prj_create" class="form-group d-flex justify-content-center mx-3 mt-1 mb-2">
            <button type="button" id="prj_create" class="btn btn-primary bg-bleu btn-bleu marine m-3">&nbsp;Enregistrer&nbsp;<br>la fiche</button>
        </div>
        <div id="btn_prj_update" class="form-group d-flex justify-content-center mx-3 mt-1 mb-2 d-none">
            <button type="button" id="prj_update" class="btn btn-warning m-3">&nbsp;Modifier&nbsp;<br>la fiche</button>
            <button type="button" id="prj_delete" class="btn btn-danger m-3">Supprimer <br>la fiche</button>
        </div>
    </div>
</div>
</form>

<!--                                                                             Agenda -->
<div id="div_agenda" class="container d-none">
<div class="row justify-content-center mt-5">
    <table class="table">
        <thead>
            <tr>
                <th class="d-none" scope="col" style="width:130px">#</th>
                <th scope="col">Type</th>
                <th scope="col">Intitulé</th>
                <th scope="col">Pays</th>
                <th scope="col" style="width:130px">Début</th>
                <th scope="col" style="width:130px">Fin</th>
            </tr>
        </thead>
        <tbody id="agenda">
        </tbody>
    </table>
</div>
</div>

<!--                                                                             Tableau des jeunes -->
<div id="div_tableau" class="container">
<div class="row justify-content-center mt-5">
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" style="width:130px">#</th>
                <th scope="col" style="width:130px">Prénom</th>
                <th scope="col" style="width:130px">Nom</th>
                <th scope="col" style="width:130px">Ville</th>
                <th scope="col" style="width:130px">Accompagnement</th>
            </tr>
        </thead>
        <tbody id="tableau">
        </tbody>
    </table>
</div>
</div>

<!--                                                                             ! ! ! - - M O D A L  P A R T E N A I R E S- - ! ! ! -->

<!--                                                                                                               Modal pour choisir ajouter / modifier un partenaire -->
<div class="modal fade" id="modal_part" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajouter ou modifier un partenaire</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                Souhaitez-vous ajouter ou modifier/supprimer<br> un partenaire ?
            </div>
            <div class="modal-footer">
                <button id="btn_part_create" type="button" class="btn btn-primary close-modal" data-bs-toggle="modal" data-bs-target="#modal_part_create">Ajouter</button>
                <button id="btn_part_update" type="button" class="btn btn-warning close-modal" data-bs-toggle="modal" data-bs-target="#modal_part_update">Modifier</button>
            </div>
        </div>
    </div>
</div>

<!---                                                                                                              Modal pour ajouter un partenaire -->
<div class="modal fade" id="modal_part_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajouter un partenaire</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_part_create">
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="create_nom_part" placeholder="Nom de la structure partenaire *">
                        <label for="create_nom_part">Nom de la structure partenaire *</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="create_contact_part" placeholder="Nom du contact">
                        <label for="create_contact_part">Nom du contact</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="tel" class="form-control" id="create_tel_part" placeholder="Téléphone *">
                        <label for="create_tel_part">Téléphone *</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="mail" class="form-control" id="create_mail_part" placeholder="Email *">
                        <label for="create_mail_part">Email *</label>
                    </div>
                    <div class="form-floating mx-3 mt-3 mb-4">
                        <textarea class="form-control" placeholder="Commentaires" id="create_comm_part" style="height:125px;"></textarea>
                        <label for="create_comm_part">Commentaires</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="part_create" type="button" class="btn btn-primary">Ajouter</button>
            </div>
        </div>
    </div>
</div>

<!---                                                                                                              Modal pour modifier un partenaire -->
<div class="modal fade" id="modal_part_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modifier ou supprimer un partenaire</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_part_update">
                    <div class="form-floating mx-3 mt-4">
                        <select class="form-select" id="select_nom_part" aria-label="Nom du partenaire">
                        </select>
                        <label for="select_nom_part">Séléctionner le partenaire à modifier</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="update_nom_part" placeholder="Nom du partenaire">
                        <label for="update_nom_part">Nom du partenaire</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="update_contact_part" placeholder="Nom du contact">
                        <label for="update_contact_part">Nom du contact</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="tel" class="form-control" id="update_tel_part" placeholder="Téléphone *">
                        <label for="update_tel_part">Téléphone *</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="mail" class="form-control" id="update_mail_part" placeholder="Email *">
                        <label for="update_mail_part">Email *</label>
                    </div>
                    <div class="form-floating mx-3 mt-3 mb-4">
                        <textarea class="form-control" placeholder="Commentaires" id="update_comm_part" style="height:125px;"></textarea>
                        <label for="update_comm_part">Commentaires</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="part_update" type="button" class="btn btn-warning">Modifier</button>
                <button id="part_delete" type="button" class="btn btn-danger">Supprimer</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/ajax_prj.js"></script>
<script src="js/prj.js"></script>
<script src="js/ajax_part.js"></script>
<script src="js/ajax_evt.js"></script>
<script src="js/part.js"></script>
<script src="js/functions.js"></script>

</body>
</html>
