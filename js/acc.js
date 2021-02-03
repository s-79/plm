$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !
    $("#btn_accomp").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id du jeune séléctionné
        const id = $("#npv_res").val();
        if(!id) alert("Aucun jeune n'a été séléctionné")

        else {
            //------------------------------------------------------------------ Changement d'interface
            $("#accompagnement").removeClass('d-none');
            $("#form_jeune").addClass('d-none');

            //------------------------------------------------------------------ Récupération des données du jeune
            jeune_Get_Acc(id);
            jeune_Get_Evt(id);
            jeune_Get_Evt2(id);
        }
    });

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    // ------------------------------------------------------------------------- Changement du statut d'accompagnement
    $("#acc").change(function(){
        const id = $("#npv_res").val();
        const statut = $("#acc").val();
        jeune_Update_Acc(id, statut);
    });

});
