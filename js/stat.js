$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !
    ajaxListAnnee();
    ajaxListContratVille();

    //-------------------------------------------------------------------------- EVENEMENT CHANGE UNE ANNEE
    $("#btn_stats").click(function(){
        const annee = $("#annee").val();
        const mission = $("#mission").val();
        const contrat_ville = $("#contrat_ville").val();

        $("#div_genre").html('<h2 class="marine" style="padding-left:2.5em;">Genre</h2><canvas id="genre"></canvas>');
        ajaxStat("genre", 0, annee, mission, contrat_ville);

        $("#div_niveau").html('<h2 class="marine">Niveau de qualification</h2><canvas id="niveau"></canvas>');
        ajaxStat("niveau", 0, annee, mission, contrat_ville);

        $("#div_qpv").html('<h2 class="marine">Quartier QPV</h2><canvas id="qpv"></canvas>');
        ajaxStat("qpv", 0, annee, mission, contrat_ville);

        $("#div_statut").html('<h2 class="marine ps-4">Statut Emploi</h2><canvas id="statut"></canvas>');
        ajaxStat("statut", 0, annee, mission, contrat_ville);

    });




});
