$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !
    stat_Reset();

    //-------------------------------------------------------------------------- EVENEMENT CLICK USR LE BOUTON AFFICHER LES STATS
    $("#btn_stats").click(function(){
        const annee = $("#annee").val();
        const mission = $("#mission").val();
        const contrat_ville = $("#contrat_ville").val();

        if(!mission) {
            alert("La séléction d'une mission est obligatoire.")
        } else {
            $("#div_genre").html('<h2 class="marine" style="padding-left:2.5em;">Genre</h2><canvas id="genre"></canvas>');
            ajaxStat("genre", 0, annee, mission, contrat_ville);

            $("#div_niveau").html('<h2 class="marine">Niveau de qualification</h2><canvas id="niveau"></canvas>');
            ajaxStat("niveau", 0, annee, mission, contrat_ville);

            $("#div_qpv").html('<h2 class="marine">Quartier QPV</h2><canvas id="qpv"></canvas>');
            ajaxStat("qpv", 0, annee, mission, contrat_ville);

            $("#div_statut").html('<h2 class="marine ps-4">Statut Emploi</h2><canvas id="statut"></canvas>');
            ajaxStat("statut", 0, annee, mission, contrat_ville);
        }
    });

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LES BOUTONS CSV
    $("#csv_jeune").click(function(){
        window.location = 'php/export_jeune.php';
    });
    $("#csv_evt").click(function(){
        window.location = 'php/export_evt.php';
    });
    $("#csv_pro").click(function(){
        window.location = 'php/export_pro.php';
    });
});

const stat_Reset = () => {
    ajaxListAnnee();
    ajaxListContratVille();
    $("#mission").html('<option selected value="">Séléctionner une mission</option><option value="0">Mission 0</option><option value="0-1">Mission 0 et 1</option><option value="1">Mission 1</option><option value="2">Mission 2</option>');

    ajaxStat("genre", 0, "", "0-1", "");
    ajaxStat("niveau", 0, "", "0-1", "");
    ajaxStat("qpv", 0, "", "0-1", "");
    ajaxStat("statut", 0, "", "0-1", "");
}
