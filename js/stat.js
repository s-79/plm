$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel
    $("#menu_stat").toggleClass("nav-link-toggle");

    stat_Reset();

    //-------------------------------------------------------------------------- EVENEMENT CLICK USR LE BOUTON AFFICHER LES STATS
    $("#btn_stats").click(function(){
        const annee = $("#annee").val();
        const mission = $("#mission").val();
        const contrat_ville = $("#contrat_ville").val();

        if(!mission) {
            alert("La séléction d'une mission est obligatoire.")
        } else {
            $("#div_genre").html('<h2 class="marine">Genre</h2><canvas id="genre"></canvas>');
            ajaxStat("genre", 100, annee, mission, contrat_ville);

            $("#div_niveau").html('<h2 class="marine">Niveau de qualification</h2><canvas id="niveau"></canvas>');
            ajaxStat("niveau", 40, annee, mission, contrat_ville);

            $("#div_qpv").html('<h2 class="marine">Quartier QPV</h2><canvas id="qpv"></canvas>');
            ajaxStat("qpv", 100, annee, mission, contrat_ville);

            $("#div_statut").html('<h2 class="marine">Statut Emploi</h2><canvas id="statut"></canvas>');
            ajaxStat("statut", 20, annee, mission, contrat_ville);
        }
    });
});

const stat_Reset = () => {
    ajaxListAnnee();
    ajaxListContratVille();
    $("#mission").html('<option selected value="">Séléctionner une mission</option><option value="0">Mission 0</option><option value="0-1">Mission 0 et 1</option><option value="1">Mission 1</option><option value="2">Mission 2</option>');

    ajaxStat("genre", 100, "", "0-1", "");
    ajaxStat("niveau", 60, "", "0-1", "");
    ajaxStat("qpv", 100, "", "0-1", "");
    ajaxStat("statut", 20, "", "0-1", "");
}
