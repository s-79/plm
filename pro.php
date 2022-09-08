<?php
include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 3.5em !important;">
        <div class="row search_bar">
            <!--                                                                                                              Zone de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="pro_search" placeholder="Saisir le prénom, l'organisme ou la ville">
                <label for="pro_search" class="d-none">Saisir le prénom, l'organisme ou la ville</label>
            </div>
            <!--                                                                                                              Résultat de recherche -->
            <div class="col-12 col-sm-4 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="pro_res">
                </select>
            </div>
            <!--                                                                                                              Bouton afficher les infos-->
            <div class="col-12 col-sm-4 py-4 px-1 text-center">
                <button type="button" id="infos" class="btn btn-primary btn-bleu">Afficher les informations</button>
            </div>
        </div>
    </div>

    <form id="form_pro">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              État Civil-->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div class="d-flex pt-3">
                            <h2>État civil</h2>
                            <i id="new_pro" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Créer un nouveau pro"></i>
                        </div>
                        <!--                                                                                                        Récupération de l'id dans un input invisible -->
                        <input type="text" class="form-control d-none" id="id_pro">
                        <div class="form-floating mx-3 mt-3">
                            <input type="text" class="form-control" id="prenom" placeholder="Prénom *">
                            <label for="prenom">Prénom <span class="rose-bold">*</span></label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                                <input type="text" class="form-control" id="nom" placeholder="Nom *">
                                <label for="nom">Nom <span class="rose-bold">*</span></label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                                <input type="text" class="form-control" id="fonction" placeholder="Fonction">
                                <label for="fonction">Fonction</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <select class="form-select" id="sensibilisation" aria-label="Sensibilisation *">
                            </select>
                            <label for="sensibilisation">Sensibilisation *</label>
                        </div>
                    </div>
                </div>
                <!--                                                                                                              Contact -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div class="row pt-3">
                            <div class="col-4">
                                <h2>Contact</h2>
                            </div>
                            <div class="col-8 d-flex justify-content-end mt-1 pe-4">
                                <div class="form-check form-switch">
                                  <input class="form-check-input" type="checkbox" id="mailing">
                                  <label class="form-check-label text-warning fw-bold" for="mailing">Mailing List</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-floating mx-3 mt-4">
                            <input type="email" class="form-control" id="email" placeholder="Email">
                            <label for="email">Email <span class="rose-bold">*</span></label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <input type="tel" class="form-control" id="tel" placeholder="Téléphone">
                            <label for="tel">Téléphone <span class="rose-bold">*</span></label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <textarea class="form-control" placeholder="Commentaires" id="commentaires" style="height:125px;"></textarea>
                            <label for="commentaires">Commentaires</label>
                        </div>
                    </div>
                </div>
                <!--                                                                                                              Coordonnées -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <h2 class="pt-3">Structure</h2>
                        <div class="form-floating mx-3 mt-4">
                            <select class="form-select" id="type_orga" aria-label="Type d'organisme *">
                                <option selected value="">Séléctionner le type d'organisme *</option>
                                <option value="Mission Locale">Mission Locale</option>
                                <option value="Réseau IJ (BIJ, PIJ, CIDJ)">Réseau IJ (BIJ, PIJ, CIDJ)</option>
                                <option value="Club de prévention">Club de prévention</option>
                                <option value="Pôle Emploi">Pôle Emploi</option>
                                <option value="Centre Paris Anim ou EPJ (Paris)">Centre Paris Anim ou EPJ (Paris)</option>
                                <option value="Internet">Internet</option>
                                <option value="Bouche à oreilles / ami">Bouche à oreilles / ami</option>
                                <option value="École de la deuxième chance">École de la deuxième chance</option>
                                <option value="Membre de la Plateforme (Concordia, SJ, …)">Membre de la Plateforme (Concordia, SJ, …)</option>
                                <option value="Autres structures socio-éducatives">Autres structures socio-éducatives</option>
                                <option value="Etat et collectivités (DDCS…)">Etat et collectivités (DDCS…)</option>
                                <option value="Foyer de jeunes travailleurs">Foyer de jeunes travailleurs</option>
                                <option value="Autres">Autres</option>
                            </select>
                            <label for="type_orga">Type d'organisme *</label>
                        </div>
                        <div class="row mx-1 mt-3">
                            <div class="form-floating col-10">
                                <select class="form-select" id="nom_orga" aria-label="Nom de l'organisme *" disabled>
                                    <option selected value="0">Séléctionner le nom de l'organisme *</option>
                                </select>
                                <label for="nom_orga">Nom de l'organisme *</label>
                            </div>
                            <div class="col-2 my-auto">
                                <i id="new_orga" class="fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_orga" data-toggle="tooltip" data-placement="top" title="Ajouter / modifier un organisme"></i>
                            </div>
                        </div>
                        <!--                                                                    Div invisible pour récup nom_ville -->
                        <div class="form-floating mx-3 mt-3 d-none">
                            <input type="text" class="form-control" id="nom_orga_none">
                            <label for="nom_orga_none"></label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="ville" aria-label="Ville *">
                            </select>
                            <label for="ville">Ville *</label>
                        </div>
                        <!--                                                                    Div invisible pour récup nom_ville -->
                        <div class="form-floating mx-3 mt-3 d-none">
                            <input type="text" class="form-control" id="nom_ville_none">
                            <label for="nom_ville_none"></label>
                        </div>
                        <div id="btn_pro_create" class="form-group d-flex justify-content-center pt-1 mx-3 mt-1">
                            <button type="button" id="pro_create" class="btn btn-primary btn-bleu m-3">&nbsp;Enregistrer&nbsp;<br>la fiche</button>
                        </div>
                        <div id="btn_pro_update" class="form-group d-flex justify-content-center pt-1 mx-3 mt-1 d-none">
                            <button type="button" id="pro_update" class="btn btn-warning m-3">&nbsp;Modifier&nbsp;<br>la fiche</button>
                            <button type="button" id="pro_delete" class="btn btn-danger m-3">Supprimer <br>la fiche</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

<?php include("modal_orga.php"); ?>

<!--                                                                                                               Scripts -->
<script src="js/ajax_villeQpv.js"></script>
<script src="js/ajax_pro.js"></script>
<script src="js/pro.js"></script>
<script src="js/ajax_orga.js"></script>
<script src="js/orga.js"></script>
<script src="js/functions.js"></script>

</body>
</html>
