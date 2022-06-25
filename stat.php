<?php
include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 5em !important;">
        <div class="row search_bar">
            <div class="col-12 col-sm-6 col-lg-3 py-4 pr-1 pl-3 text-center">
                <select class="form-select" aria-label="Default select example" id="annee">
                </select>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="mission">
                    <option selected value="">Séléctionner une mission</option>
                    <option value="0">Mission 0</option>
                    <option value="0-1">Mission 0 et 1</option>
                    <option value="1">Mission 1</option>
                    <option value="2">Mission 2</option>
                </select>
            </div>
            <div class="col-12 col-lg-3 py-4 px-1 text-center">
                <select class="form-select" aria-label="Default select example" id="contrat_ville">
                </select>
            </div>
            <div class="col-12 col-lg-3 py-4 px-1 text-center">
                <button type="button" id="btn_stats" class="btn btn-primary btn-bleu">Afficher les statistiques</button>
            </div>
        </div>
    </div>
<!--                                                                            C H A R T S -->
    <div class="d-flex justify-content-center mt-4">
        <div class="row charts">
            <div id="div_genre" class="col-12 col-xl-6 mb-5">
                <h2 class="marine mb-4">Genre</h2>
                <canvas id="genre"></canvas>
            </div>
            <div id="div_niveau" class="col-12 col-xl-6 mb-5">
                <h2 class="marine mb-4">Niveau de qualification</h2>
                <canvas id="niveau"></canvas>
            </div>
            <div id="div_qpv" class="col-12 col-xl-6 mb-5">
                <h2 class="marine mb-4">Quartier QPV</h2>
                <canvas id="qpv"></canvas>
            </div>
            <div id="div_statut" class="col-12 col-xl-6 mb-5">
                <h2 class="marine mb-4">Statut Emploi</h2>
                <canvas id="statut"></canvas>
            </div>
        </div>
    </div>
<!--                                                                            F I L E S -->
    <div style="max-width:80%" class="mx-auto mt-3 mb-5">
        <div class="row">
            <div class="col-3 d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="jeune">
                    <button id="csv_jeune" type="submit" class="btn btn-outline-primary">CSV Jeune</button>
                </form>
            </div>
            <div class="col-3 d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="evt">
                    <button id="csv_evt" type="submit" class="btn btn-outline-primary">CSV Évenement</button>
                </form>
            </div>
            <div class="col-3 d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="prj">
                    <button id="csv_prj" type="submit" class="btn btn-outline-primary">CSV Projet</button>
                </form>
            </div>
            <div class="col-3 d-flex justify-content-around">
                <form action="php/export.php" method="post">
                    <!--                                                            Récupération de la valeur dans un input invisible -->
                    <input type="text" class="form-control d-none" name="view" value="pro">
                    <button id="csv_pro" type="submit" class="btn btn-outline-primary">CSV Pro</button>
                </form>
            </div>
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
                Cette combinaison de choix ne contient pas de donnée.<br><br>Les listes et les graphiques ont été réinitialisés.<br>
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
