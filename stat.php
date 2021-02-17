<?php
include("header.php"); ?>

<div class="container-fluid" style="margin-top:8em;">

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

    <div class="row px-5" style="margin-top:5em;">
        <div id="div_genre" class="col-3">
            <h2 class="marine" style="padding-left:2.5em;">Genre</h2>
            <canvas id="genre"></canvas>
        </div>
        <div id="div_niveau" class="col-3">
            <h2 class="marine">Niveau de qualification</h2>
            <canvas id="niveau"></canvas>
        </div>
        <div id="div_qpv" class="col-3">
            <h2 class="marine">Quartier QPV</h2>
            <canvas id="qpv"></canvas>
        </div>
        <div id="div_statut" class="col-3">
            <h2 class="marine ps-4">Statut Emploi</h2>
            <canvas id="statut"></canvas>
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
