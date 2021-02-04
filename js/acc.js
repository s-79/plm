$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LES BOUTONS "AJOUTER" OU "MODIFIER" UN RENDEZ-VOUS INDIVIDUEL
    $('.close-modal').click(function(){
        // --------------------------------------------------------------------- Fermeture du modal sur lequel on vient de cliquer
        $('#modal_rdv').modal('hide')
    })

    /* ------------------------------------------------------------------------- Remplissage de la liste des sensibilisation dans le modal sensibilisation */
    $("#new_evt").click(function(){
        const id = $("#npv_res").val();
        $("#evt_create").html("<option selected value=''>Séléctionner la sensibilisation à ajouter</option>");
        acc_List_Evt("#evt_create");
        $("#evt_delete").html("<option selected value=''>Séléctionner la sensibilisation à supprimer</option>");
        acc_Get_Evt(id,"#evt_delete");
    });
    /* ------------------------------------------------------------------------- Remplissage de la liste des ateliers dans le modal ateliers */
    $("#new_evt2").click(function(){
        const id = $("#npv_res").val();
        $("#evt2_create").html("<option selected value=''>Séléctionner l'atelier collectif à ajouter</option>");
        acc_List_Evt2("#evt2_create");
        $("#evt2_delete").html("<option selected value=''>Séléctionner l'atelier collectif à supprimer</option>");
        acc_Get_Evt2(id,"#evt2_delete");
    });
    /* ------------------------------------------------------------------------- Remplissage de la liste des rendez-vous dans le modal create RDV  */
    $("#btn_rdv_create").click(function(){
        rdv_Reset("create");
    });
    /* ------------------------------------------------------------------------- Remplissage de la liste des rendez-vous dans le modal update RDV  */
    $("#btn_rdv_update").click(function(){
        const id = $("#npv_res").val();
        $("#update_select_rdv").html("<option selected value=''>Séléctionner le rendez-vous à modifier</option>");
        acc_Get_Rdv(id,"#update_select_rdv");
        rdv_Reset("update");
    });

    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

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
            jeune_Get_Rdv(id);
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

// ------------------------------------------------------------------------- ! ! ! - - R E S E T (F U N C T I O N)- - ! ! !

//----------------------------------------------------------------------------- Fonction de réinitialisation de la liste des types, des durées et des intervenants sur les pages rdv
const rdv_Reset = (modal) => {
    //-------------------------------------------------------------------------- Réinitialisation du formulaire
    const divForm = `form_rdv_${modal}`;
    document.getElementById(divForm).reset();

    let types = ["1er RDV", "RDV de suivi", "Suivi", "Relance", "Enquête", "Autres"];
    let init_type = "<option selected value='0'>Séléctionner le type de rendez-vous</option>"
    for (type of types) {init_type += `<option value="${type}">${type}</option>`;}
    const divType = `#${modal}_type_rdv`;
    $(divType).html(init_type);

    let durees = ["- de 10 min", "- de 30 min", "- d'1 heure"];
    let init_duree = "<option selected value='0'>Séléctionner la durée du rendez-vous</option>"
    for (duree of durees) {init_duree += `<option value="${duree}">${duree}</option>`;}
    const divDuree = `#${modal}_duree_rdv`;
    $(divDuree).html(init_duree);

    const divInt = `#${modal}_int_rdv`;
    $(divInt).html("<option selected value=''>Séléctionner l'intervenant-e</option>");
    ajaxListIntUp(divInt);
};
