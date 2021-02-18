<?php
include("header.php"); ?>

<div class="container-fluid" style="margin-top:8em;">
<!--                                                                            L I S T E S  S E L E C T -->
    <div class="row d-flex justify-content-center mb-5">
        <div class="col-12 col-lg-2 my-4 mx-1 text-center">
            <select class="form-select" aria-label="Default select example" id="annee">
            </select>
        </div>
        <div class="col-12 col-lg-2 my-4 mx-1 text-center">
            <select class="form-select" aria-label="Default select example" id="mission">
                <option selected value="">Séléctionner une mission</option>
                <option value="0">Mission 0</option>
                <option value="0-1">Mission 0 et 1</option>
                <option value="1">Mission 1</option>
                <option value="2">Mission 2</option>
            </select>
        </div>
        <div class="col-12 col-lg-2 my-4 mx-1 text-center">
            <select class="form-select" aria-label="Default select example" id="contrat_ville">
            </select>
        </div>
        <div class="col-2 col-lg-2 my-4 mx-1 text-center">
            <button type="button" id="btn_stats" class="btn btn-primary bg-bleu btn-bleu marine">Afficher les statistiques</button>
        </div>
    </div>
<!--                                                                            C H A R T S -->
    <div class="row px-5" style="margin-top:5em;">
        <div id="div_genre" class="col-3">
            <h2 class="marine mb-4" style="padding-left:5.3em;">Genre</h2>
            <canvas id="genre"></canvas>
        </div>
        <div id="div_niveau" class="col-3">
            <h2 class="marine mb-4">Niveau de qualification</h2>
            <canvas id="niveau"></canvas>
        </div>
        <div id="div_qpv" class="col-3">
            <h2 class="marine mb-4" style="padding-left:3em;">Quartier QPV</h2>
            <canvas id="qpv"></canvas>
        </div>
        <div id="div_statut" class="col-3">
            <h2 class="marine mb-4 ps-4">Statut Emploi</h2>
            <canvas id="statut"></canvas>
        </div>
    </div>
<!--                                                                            F I L E S -->
    <div class="row px-5" style="margin-top:7em;">
        <div class="col-4 d-flex justify-content-end">
            <button id="csv_jeune" type="button" class="btn btn-outline-primary">CSV Jeune</button>
        </div>
        <div class="col-4 d-flex justify-content-center">
            <button id="csv_evt" type="button" class="btn btn-outline-primary">CSV Évenement</button>
        </div>
        <div class="col-4 d-flex justify-content-start">
            <button id="csv_prj" type="button" class="btn btn-outline-primary">CSV Projet</button>
        </div>
    </div>

</div>

<!--                                                                            M O D A L-->

<div class="modal fade" id="modal_stat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Aucune donnée disponible</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                Cette combinaison de choix ne contient pas de donnée.<br><br>Les listes et les graphiques ont été réinitialisés.
            </div>
        </div>
    </div>
</div>

<!--                                                                                                               Scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>
<script src="js/ajax_stat.js"></script>
<script src="js/stat.js"></script>
<script src="js/functions.js"></script>

</body>
</html>
