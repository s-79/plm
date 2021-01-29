$(function(){

    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !
    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#dtv").keyup(function(){
    	let search = $("#dtv").val();
        if(search) {
            $.ajax({
            url: 'php/populate.php',
            dataType: 'JSON',
            data : {vue:'v_npv', texte_dtv:search},
            success: function(response){
                $("#dtv_res").html(displayList(response));
                }
            });
        } else {
            //------------------------------------------------------------------ Remplissage du champs de recherche des événements
            $("#dtv_res").html("<option selected value='0'>Séléctionner un événement</option>");
            ajaxListSensi("#dtv_res");
        }
    });

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'événements
    ajaxListSensi("#dtv_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    ajaxListVille("#ville");
    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !


// ------------------------------------------------------------------------- ! ! ! - - R E S E T (F U N C T I O N)- - ! ! !
});
