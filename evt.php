<?php
include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <!--                                                                                                              Zone de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="evt_search" placeholder="Saisir la date, le type ou la ville">
                <label for="evt_search" class="d-none">Saisir la date, le type ou la ville</label>
            </div>
            <!--                                                                                                              Résultat de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="evt_res">
                </select>
            </div>
            <!--                                                                                                              Bouton afficher les infos-->
            <div class="col-12 col-sm-4 py-4 px-1 text-center">
                <button type="button" id="infos" class="btn btn-primary btn-bleu">Afficher les informations</button>
            </div>
        </div>
    </div>

    <form id="form_evt">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              État Civil-->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div class="d-flex pt-3">
                            <h2>Évenement</h2>
                            <i id="new_evt" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Créer un nouvel événement"></i>
                        </div>
                        <div class="mx-3 mt-3 row">
                            <div class="col-12 col-sm-4 p-0">
                                <span class="text-warning fw-bold">MISSION * : </span>
                            </div>
                            <div class="col-12 col-sm-8 d-flex justify-content-end p-0">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="m0" value="m0">
                                    <label class="form-check-label text-white fw-bold m-0" for="inlineRadio1">M0</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="m1" value="m1">
                                    <label class="form-check-label text-white fw-bold m-0" for="inlineRadio2">M1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="m2" value="m2">
                                    <label class="form-check-label text-white fw-bold m-0" for="inlineRadio3">M2</label>
                                </div>
                            </div>
                        </div>

                        <!--                                                                                                        Récupération de l'id dans un input invisible -->
                        <input type="text" class="form-control d-none" id="id_evt">

                        <div class="form-floating mx-3 mt-3">
                            <input type="date" class="form-control" id="date" placeholder="Date de l'événement *">
                            <label for="date">Date de l'événement *</label>
                        </div>
                        <div id="select_m0" class="form-floating mx-3 mt-3 d-none">
                            <select class="form-select type_m" id="type_m0" aria-label="Type d'événement *" disabled>
                            </select>
                            <label for="type_m0">Type *</label>
                        </div>
                        <div id="select_m1" class="form-floating mx-3 mt-3">
                            <select class="form-select type_m" id="type_m1" aria-label="Type d'événement *" disabled>
                                <option selected value="">Séléctionner un type d'événement *</option>
                                <option value="Info coll PLM">Info coll PLM</option>
                                <option value="Info coll exterieure">Info coll exterieure</option>
                                <option value="Info coll par un partenaire">Info coll par un partenaire</option>
                                <option value="Webinaire pros">Webinaire pros</option>
                                <option value="Sensibilisation pros">Sensibilisation pros</option>
                                <option value="Evt thématique">Evt thématique</option>
                                <option value="Autre">Autre</option>
                            </select>
                            <label for="type_m1">Type *</label>
                        </div>
                        <div id="select_m2" class="form-floating mx-3 mt-3 d-none">
                            <select class="form-select type_m" id="type_m2" aria-label="Type d'événement *" disabled>
                                <option selected value="">Séléctionner un type d'événement *</option>
                                <option value="Atelier d'anglais">Atelier d'anglais</option>
                                <option value="Atelier Europe">Atelier Europe</option>
                                <option value="Atelier Interculturalité">Atelier Interculturalité</option>
                                <option value="At. obj d'apprentissage">At. obj d'apprentissage</option>
                                <option value="At. retour à chaud">At. retour à chaud</option>
                                <option value="2ème atelier retour">2ème atelier retour</option>
                                <option value="Atelier préparation YE">Atelier préparation YE</option>
                                <option value="At. connaissance du groupe">At. connaissance du groupe</option>
                                <option value="At. achat des billets">At. achat des billets</option>
                                <option value="Atelier valorisation">Atelier valorisation</option>
                            </select>
                            <label for="type_m2">Type *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="ville" aria-label="Ville">
                            </select>
                            <label for="ville">Ville *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <input type="text" class="form-control" id="intitule" placeholder="Intitulé">
                            <label for="intitule">Intitulé</label>
                        </div>
                    </div>
                </div>
                <!--                                                                                                              Contact -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div id="orga_evt">
                            <div class="row pt-3">
                                <div class="col-12 col-sm-6">
                                    <h2>Organisation</h2>
                                </div>
                                <div class="col-12 col-sm-5 d-flex justify-content-end mt-1">
                                    <div class="form-check form-switch">
                                      <input class="form-check-input" type="checkbox" id="visio">
                                      <label class="form-check-label text-warning fw-bold" for="visio">En visio</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-floating mx-3 mt-4">
                                <input type="text" class="form-control" id="organise" placeholder="Organisé par...">
                                <label for="organise">Organisé par...</label>
                            </div>
                        </div>
                        <div id="projet_evt" class="d-none">
                            <div class="row pt-3">
                                <div class="col-12 col-sm-6">
                                    <h2>Projet</h2>
                                </div>
                                <div class="col-12 col-sm-5 d-flex justify-content-end mt-1">
                                    <div class="form-check form-switch">
                                      <input class="form-check-input" type="checkbox" id="visio">
                                      <label class="form-check-label text-warning fw-bold" for="visio">En visio</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-floating mx-3 mt-4">
                                <select class="form-select" id="projet" aria-label="Séléctionner un projet *">
                                </select>
                                <label for="projet">Projet *</label>
                            </div>
                        </div>
                        <div class="d-flex pt-4 mt-1">
                            <h2 class="pt-1">Intervenant.e.s</h2>
                            <i id="new_inter" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_int" data-toggle="tooltip" data-placement="top" title="Ajouter / Modifier un-e intervenant-e PLM"></i>
                        </div>
                        <div id="inter" class="mx-3 mt-2 mb-4" style="overflow-y:scroll; overflow-x:hidden; height:180px;">
                        </div>
                    </div>
                </div>
                <!--                                                                                                              Coordonnées -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <h2 class="pt-3">Participation</h2>
                        <div class="form-floating mx-3 mt-4">
                            <input type="text" class="form-control" id="nb_jeunes" placeholder="Nombre de jeunes *">
                            <label for="nb_jeunes">Nombre de jeunes *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <input type="text" class="form-control" id="nb_pros" placeholder="Nombre de professionels *">
                            <label for="nb_pros">Nombre de professionels *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:100px;"></textarea>
                            <label for="commentaires">Commentaires</label>
                        </div>
                        <div id="btn_evt_create" class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
                            <button type="button" id="evt_create" class="btn btn-primary btn-bleu m-3">&nbsp;Enregistrer&nbsp;<br>la fiche</button>
                        </div>
                        <div id="btn_evt_update" class="form-group d-flex justify-content-center mx-3 mt-1 pt-1 d-none">
                            <button type="button" id="evt_update" class="btn btn-warning m-3">&nbsp;Modifier&nbsp;<br>la fiche</button>
                            <button type="button" id="evt_delete" class="btn btn-danger m-3">Supprimer <br>la fiche</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

<!--                                                                             Tableau -->
<div id="div_tableau" class="container">
<div class="row justify-content-center mt-4">
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="d-none" scope="col" style="width:130px">#</th>
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

<!--                                                                             Tableau Pro -->
<div id="div_tableau_pro" class="container d-none">
<div class="row justify-content-center mt-5">
    <table class="table table-striped">
        <thead>
            <tr>
                <th class="d-none" scope="col" style="width:130px">#</th>
                <th scope="col" style="width:130px">Prénom</th>
                <th scope="col" style="width:130px">Nom</th>
                <th scope="col" style="width:130px">Structure</th>
                <th scope="col" style="width:130px">Ville</th>
            </tr>
        </thead>
        <tbody id="tableau_pro">
        </tbody>
    </table>
</div>
</div>

<!--                                                                             ! ! ! - - M O D A L S  I N T E R V E N A N T - - ! ! ! -->

<!--                                                                                                               Modal pour choisir ajouter / modifier un-e intervenant-e -->
<div class="modal fade" id="modal_int" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter ou modifier/supprimer un-e intervenant-e PLM</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
          Souhaitez-vous ajouter ou modifier/supprimer un-e intervenant-e PLM ?
      </div>
      <div class="modal-footer">
          <button id="btn_int_create" type="button" class="btn btn-primary btn-bleu close-modal" data-bs-toggle="modal" data-bs-target="#modal_int_create">Ajouter</button>
          <button id="btn_int_update" type="button" class="btn btn-warning close-modal" data-bs-toggle="modal" data-bs-target="#modal_int_update">Modifier</button>
      </div>
    </div>
  </div>
</div>

<!---                                                                                                              Modal pour ajouter un-e intervenant-e -->
<div class="modal fade" id="modal_int_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajouter un-e intervenant-e PLM</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_int_create">
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="create_prenom_int" placeholder="Prénom *">
                        <label for="create_prenom_int">Prénom *</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="create_nom_int" placeholder="Nom *">
                        <label for="create_nom_int">Nom *</label>
                    </div>
                    <div class="form-check form-switch mx-3 mt-3">
                        <input class="form-check-input" type="checkbox" id="create_actif" checked>
                        <label class="form-check-label fw-bold" for="create_actif">actif</label>
                    </div>
                    <div class="form-check form-switch mx-3 mt-3">
                        <input class="form-check-input" type="checkbox" id="create_volontaire">
                        <label class="form-check-label fw-bold" for="create_volontaire">volontaire</label>
                    </div>
                    <div class="form-check form-switch mx-3 mt-3">
                        <input class="form-check-input" type="checkbox" id="create_ref">
                        <label class="form-check-label fw-bold" for="create_ref">référent-e</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="int_create" type="button" class="btn btn-primary btn-bleu">Ajouter</button>
            </div>
        </div>
    </div>
</div>

<!---                                                                                                              Modal pour modifier un intervenant-e -->
<div class="modal fade" id="modal_int_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modifier ou supprimer un-e intervenant-e</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_int_update">
                    <div class="form-floating mx-3 mt-4">
                        <select class="form-select" id="select_nom_int" aria-label="Nom de l'intervenant-e">
                        </select>
                        <label for="select_nom_int">Séléctionner le nom de l'intervenant-e à modifier</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="update_prenom_int" placeholder="Prenom de l'intervenant-e">
                        <label for="update_prenom_int">Modifier le prenom de l'intervenant-e</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="update_nom_int" placeholder="Nom de l'intervenant-e">
                        <label for="update_nom_int">Modifier le nom de l'intervenant-e</label>
                    </div>
                    <div class="form-check form-switch mx-3 mt-3">
                        <input class="form-check-input" type="checkbox" id="update_actif">
                        <label class="form-check-label fw-bold" for="update_actif">actif</label>
                    </div>
                    <div class="form-check form-switch mx-3 mt-3">
                        <input class="form-check-input" type="checkbox" id="update_volontaire">
                        <label class="form-check-label fw-bold" for="update_volontaire">volontaire</label>
                    </div>
                    <div class="form-check form-switch mx-3 mt-3">
                        <input class="form-check-input" type="checkbox" id="update_ref">
                        <label class="form-check-label fw-bold" for="update_ref">référent-e</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="int_update" type="button" class="btn btn-warning">Modifier</button>
                <button id="int_delete" type="button" class="btn btn-danger">Supprimer</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/ajax_villeQpv.js"></script>
<script src="js/ajax_evt.js"></script>
<script src="js/evt.js"></script>
<script src="js/int.js"></script>
<script src="js/ajax_int.js"></script>
<script src="js/ajax_prj.js"></script>
<script src="js/functions.js"></script>

</body>
</html>
