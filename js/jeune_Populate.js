$(function(){
    //-------------------------------------------------------------------------- Toolitips au survol des boutons +
    $('[data-toggle="tooltip"]').tooltip()
    
    //-------------------------------------------------------------------------- Outil de recherche de jeunes
    $("#npv").keyup(function(){
    	let search = $("#npv").val();
        if(search) {
            $.ajax({
            url: 'php/jeune_Populate.php',
            dataType: 'JSON',
            data : {vue:'v_npv', texte:search},
            success: function(response){
                $("#npv_res").html(displayList(response));
                }
            });
        } else {
            //------------------------------------------------------------------ Remplissage du champs de recherche de jeunes
            $("#npv_res").html("<option selected value=''>Séléctionner un jeune</option>");
            ajaxListNpv("#npv_res");
        }
    });

    //-------------------------------------------------------------------------- Remplissage du champs de recherche de jeunes
    ajaxListNpv("#npv_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    ajaxListVille("#ville");
});
