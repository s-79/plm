$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !
    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#evt_search").keyup(function(){
        let search = $("#evt_search").val();
        if(search) {
            $.ajax({
            url: 'php/populate.php',
            dataType: 'JSON',
            data : {texte_evt:search},
            success: function(response){
                $("#evt_res").html(displayList(response));
                }
            });
        } else {
            //------------------------------------------------------------------ Remplissage du champs de recherche des événements
            $("#evt_res").html("<option selected value='0'>Séléctionner un événement</option>");
            ajaxListEvt("#evt_res");
        }
    });
    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListEvt("#evt_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    ajaxListVille("#ville");

    //-------------------------------------------------------------------------- Remplissage de la liste des intervenants
    ajaxListInter("#inter");


    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    // ------------------------------------------------------------------------- Événement clique sur les boutons radios des missions
    $("#m2").click(function() {
        $("#orga_evt").addClass("d-none");
        $("#projet_evt").removeClass("d-none");
        $("#ville")[0].disabled = true;
        $("#nb_pro")[0].disabled = true;
        $("#select_m0, #select_m1").addClass("d-none");
        $("#select_m2").removeClass("d-none");
    });
    $("#m0,#m1").click(function() {
        $("#projet_evt").addClass("d-none");
        $("#orga_evt").removeClass("d-none");
        $("#ville")[0].disabled = false;
        $("#nb_pro")[0].disabled = false;
    });
    $("#m0").click(function() {
        $("#select_m1, #select_m2").addClass("d-none");
        $("#select_m0").removeClass("d-none");
        $("#sensi_m0").val("Sensibilisation Mission 0")
        $("#sensi_m0")[0].disabled = true;
    });
    $("#m1").click(function() {
        $("#select_m0, #select_m2").addClass("d-none");
        $("#select_m1").removeClass("d-none");
    });


    // ------------------------------------------------------------------------- Événement change sur le menu type
    $("#type").change(function() {
        const type = $("#type").val();
        if(type === "Info coll PLM" || type === "Webinaire pro") {
            $("#ville")[0].disabled = true;
        } else {
            $("#ville")[0].disabled = false;
        }
    });


    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !


// ------------------------------------------------------------------------- ! ! ! - - R E S E T (F U N C T I O N)- - ! ! !
});
