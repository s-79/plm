<?php
include("header.php"); ?>

<div class="container-fluid">
<div class="row justify-content-center mt-5" style="margin-top: 5em !important;">
    <!--                                                                                                              Zone de recherche -->
    <div class="col-12 col-lg-2 my-4 mx-1 text-center">
        <input type="text" class="form-control" id="evt_search" placeholder="Saisir la date, le type ou la ville">
        <label for="dtv" class="d-none">Saisir la date, le type ou la ville</label>

    </div>
    <!--                                                                                                              Résultat de recherche -->
    <div class="col-12 col-lg-2 my-4 mx-1 text-center">
        <select class="form-select" aria-label="Default select example" id="evt_res">
          <option selected value="">Séléctionner un événement</option>
        </select>
    </div>
    <!--                                                                                                              Bouton afficher les infos-->
    <div class="col-5 col-lg-2 my-4 mx-1 text-center">
        <button type="button" id="infos" class="btn btn-primary bg-bleu btn-bleu marine">Afficher les informations</button>
    </div>
</div>

<form id="form_sensi">
<div class="row justify-content-center ">
    <!--                                                                                                              Événement-->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <div class="row pt-4">
            <div class="col-5">
                <h2>Évenement</h2>
            </div>
            <div class="col-1 p-0 m-0">
                <i id="new_sensi" class="fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Créer un nouvel événement"></i>
            </div>
        </div>
        <div class="mx-3 mt-3 row">
            <div class="col-4 p-0">
                <span class="text-warning fw-bold">MISSION * : </span>
            </div>
            <div class="col-8 d-flex justify-content-end p-0">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="m0" value="m0">
                    <label class="form-check-label text-white fw-bold" for="inlineRadio1">M0</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="m1" value="m1">
                    <label class="form-check-label text-white fw-bold" for="inlineRadio2">M1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="m2" value="m2">
                    <label class="form-check-label text-white fw-bold" for="inlineRadio3">M2</label>
                </div>
            </div>
        </div>

        <!--                                                                                                        Récupération de l'id dans un input invisible -->
        <input type="text" class="form-control d-none" id="id">

        <div class="form-floating mx-3 mt-3">
            <input type="date" class="form-control" id="date" placeholder="Date de l'événement *">
            <label for="date">Date de l'événement *</label>
        </div>
        <div id="select_m0" class="form-floating mx-3 mt-3 d-none">
            <input type="text" class="form-control" id="sensi_m0" placeholder="Sensibilisation Mission 0">
            <label for="sensi_m0">Sensibilisation Mission 0</label>
        </div>
        <div id="select_m1" class="form-floating mx-3 mt-3">
            <select class="form-select" id="type" aria-label="Type d'événement *">
                <option selected value="">Séléctionner un type d'événement *</option>
                <option value="Info coll dans les locaux">Info coll PLM</option>
                <option value="Info coll exterieur">Info coll exterieure</option>
                <option value="Webinaire pro">Webinaire pros</option>
                <option value="Sensibilisation pro">Sensibilisation pros</option>
                <option value="Evt thématique">Evt thématique</option>
            </select>
            <label for="type">Type *</label>
        </div>
        <div id="select_m2" class="form-floating mx-3 mt-3 d-none">
            <select class="form-select" id="type" aria-label="Type d'événement *">
                <option selected value="">Séléctionner un type d'événement *</option>
                <option value="Atelier d'anglais">Atelier d'anglais</option>
                <option value="Atelier Europe">Atelier Europe</option>
                <option value="Atelier Interculturalité">Atelier Interculturalité</option>
                <option value="At. obj d'apprentissage">At. obj d'apprentissage</option>
                <option value="At. retour à chaud">At. retour à chaud</option>
                <option value="2ème atelier retour">2ème atelier retour</option>
            </select>
            <label for="type">Type *</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="ville" aria-label="Ville">
                <option selected value="">Séléctionnez une ville *</option>
                <option value="0">VILLES MULTIPLES</option>
            </select>
            <label for="ville">Ville</label>
        </div>
        <div class="form-floating mx-3 mt-3 mb-4">
            <input type="text" class="form-control" id="intitule" placeholder="Intitulé">
            <label for="intitule">Intitulé</label>
        </div>
    </div>
    <!--                                                                                                              Intervenant-e-s -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <div id="orga_evt">
            <div class="row pt-4">
                <div class="col-7">
                    <h2>Organisation</h2>
                </div>
                <div class="col-4 d-flex justify-content-end mt-1">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="visio">
                      <label class="form-check-label text-warning fw-bold" for="visio">En visio</label>
                    </div>
                </div>
            </div>
            <div class="form-floating mx-3 mt-4">
                <input type="text" class="form-control" id="organisateurs" placeholder="Organisé par...">
                <label for="organisateurs">Organisé par...</label>
            </div>
        </div>
        <div id="projet_evt" class="d-none">
            <div class="row pt-4">
                <div class="col-7">
                    <h2>Projet</h2>
                </div>
                <div class="col-4 d-flex justify-content-end mt-1">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="visio">
                      <label class="form-check-label text-warning fw-bold" for="visio">En visio</label>
                    </div>
                </div>
            </div>
            <div class="form-floating mx-3 mt-4">
                <select class="form-select" id="projet" aria-label="Séléctionner un projet *">
                    <option selected value="">Séléctionner un projet *</option>
                    <option value="0">VILLES MULTIPLES</option>
                </select>
                <label for="projet">Projet *</label>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-8">
                <h2>Intervenant-e-s PLM</h2>
            </div>
            <div class="col-1 p-0 m-0">
                <i id="new_sensi" class="fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Ajouter / Modifier un-e intervenant-e PLM"></i>
            </div>
        </div>
        <div id="inter" class="mx-3 mt-2" style="overflow-y:scroll; overflow-x:hidden; height:180px;">
        </div>
    </div>
    <!--                                                                                                              Évaluation -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Évaluation</h2>
        <div class="form-floating mx-3 mt-4">
            <input type="text" class="form-control" id="nb_jeunes" placeholder="Nombre de jeunes">
            <label for="nb_jeunes">Nombre de jeunes</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="nb_pro" placeholder="Nombre de professionels">
            <label for="nb_pro">Nombre de professionels</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:125px;">
            </textarea>
            <label for="commentaires">Commentaires</label>
        </div>
        <div class="d-flex justify-content-center">
            <button type="button" id="jeune_update" class="btn btn-primary bg-bleu btn-bleu marine m-3">Créer l'événement</button>
        </div>
    </div>
</div>
</form>
<!--                                                                             Tableau -->
<div class="container">
<div class="row justify-content-center mt-5">
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Prénom</th>
                <th scope="col">Nom</th>
                <th scope="col">Ville</th>
                <th scope="col">Accompagnement</th>
            </tr>
        </thead>
        <tbody id="tableau">
            <!-- <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr> -->
        </tbody>
    </table>
</div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/ajax_villeQpv.js"></script>
<script src="js/ajax_evt.js"></script>
<script src="js/evt.js"></script>
<script src="js/evt_Get.js"></script>
<script src="js/functions.js"></script>

</body>
</html>
