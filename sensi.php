<?php
include("header.php"); ?>

<div class="container-fluid">
<div class="row justify-content-center mt-5" style="margin-top: 5em !important;">
    <!--                                                                                                              Zone de recherche -->
    <div class="col-12 col-lg-2 my-4 mx-1 text-center">
        <input type="text" class="form-control" id="dtv" placeholder="Saisir la date, le type ou la ville">
        <label for="dtv" class="d-none">Saisir la date, le type ou la ville</label>

    </div>
    <!--                                                                                                              Résultat de recherche -->
    <div class="col-12 col-lg-2 my-4 mx-1 text-center">
        <select class="form-select" aria-label="Default select example" id="dtv_res">
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
        <div class="form-floating mx-3 mt-3">
            <input type="date" class="form-control" id="date" placeholder="Date de l'événement *">
            <label for="date">Date de l'événement *</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="ville" aria-label="Ville">
                <option selected value="">Séléctionnez une ville *</option>
            </select>
            <label for="ville">Ville</label>
        </div>

        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="type" aria-label="Type d'événement *">
                <option selected value="">Séléctionner un type d'événement *</option>
                <option value="Infocol dans les locaux">Infocol dans les locaux</option>
                <option value="Infocol en visio">Infocol en visio</option>
                <option value="Infocol exterieur">Infocol exterieur</option>
                <option value="Webinaire pro">Webinaire pro</option>
                <option value="Evt thématique">Evt thématique</option>
                <option value="Sensibilisation">Sensibilisation</option>
            </select>
            <label for="type">Type *</label>
        </div>
        <div class="form-floating mx-3 mt-3 mb-4">
            <input type="text" class="form-control" id="intitule" placeholder="Intitulé">
            <label for="intitule">Intitulé</label>
        </div>
    </div>
    <!--                                                                                                              Intervenant-e-s -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Organisation</h2>
        <div class="form-floating mx-3 mt-4">
            <input type="text" class="form-control" id="organisateurs" placeholder="Organisé par...">
            <label for="organisateurs">Organisé par...</label>
        </div>
        <div class="row pt-4">
            <div class="col-8">
                <h2>Intervenant-e-s PLM</h2>
            </div>
            <div class="col-1 p-0 m-0">
                <i id="new_sensi" class="fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Ajouter / Modifier un-e intervenant-e PLM"></i>
            </div>
        </div>
        <div id="" class="mx-3 mt-2" style="overflow-y:scroll; overflow-x:hidden; height:150px;">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="int1">
                <label class="form-check-label text-white" for="int1">Margot DAY</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="int2">
                <label class="form-check-label text-white" for="int2">Solène MARCHAND</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="int3">
                <label class="form-check-label text-white" for="int3">Élise BAUBAU</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="int4">
                <label class="form-check-label text-white" for="int4">Lisa Viola ROSSI</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="int4">
                <label class="form-check-label text-white" for="int4">Manon MOSTI</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="int4">
                <label class="form-check-label text-white" for="int4">Tanaïs BELLEROSE</label>
            </div>
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
            <textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:90px;">
            </textarea>
            <label for="commentaires">Commentaires</label>
        </div>
        <div class="d-flex justify-content-center">
            <button type="button" id="jeune_update" class="btn btn-primary bg-bleu btn-bleu marine m-3">Créer l'événement</button>
        </div>
    </div>
</div>
</form>

<!--                                                                                                               Scripts -->
<script src="js/ajax_villeQpv.js"></script>
<script src="js/ajax_sensi.js"></script>
<script src="js/sensi.js"></script>
<script src="js/functions.js"></script>

</body>
</html>
