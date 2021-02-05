$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id jeune stocké (si l'utilisateur a cliqué sur une lige du tableau dans evt)
    let id_jeune_storage = sessionStorage.getItem("id_jeune");
    sessionStorage.removeItem('id_jeune');
    if(id_jeune_storage) {
        $("#id").val(id_jeune_storage);
        //---------------------------------------------------------------------- Si il y un id, on lance la fonction Get (définie en dessous)
        acc_Get(id_jeune_storage);
        //---------------------------------------------------------------------- Changement d'interface
        $("#accompagnement").removeClass('d-none');
        $("#form_jeune").addClass('d-none');
    }

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UNE ASSOCIATION ENTRE JEUNE ET SENSIBILISATION
    $("#new_evt").click(function(){
        const id = $("#npv_res").val();
        /* --------------------------------------------------------------------- Remplissage de la liste des sensibilisation à associer */
        $("#evt_create").html("<option selected value=''>Séléctionner la sensibilisation à ajouter</option>");
        acc_List_Evt("#evt_create");
    });
    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UNE ASSOCIATION ENTRE JEUNE ET ATELIER COLLECTIF
    $("#new_evt2").click(function(){
        const id = $("#npv_res").val();
        /* --------------------------------------------------------------------- Remplissage de la liste des ateliers à associer */
        $("#evt2_create").html("<option selected value=''>Séléctionner l'atelier collectif à ajouter</option>");
        acc_List_Evt2("#evt2_create");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UN RDV QUI SERA ASSOCIER AU JEUNE
    $("#new_rdv").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_rdv_create").reset();
        //---------------------------------------------------------------------- Réinitialisation du menu type
        let types = ["1er RDV", "RDV de suivi", "Suivi", "Relance", "Enquête", "Autres"];
        let init_type = "<option selected value='0'>Séléctionner le type de rendez-vous</option>"
        for (type of types) {init_type += `<option value="${type}">${type}</option>`;};
        $("#create_type_rdv").html(init_type);
        //---------------------------------------------------------------------- Réinitialisation du menu durées
        let durees = ["- de 10 min", "- de 30 min", "- d'1 heure"];
        let init_duree = "<option selected value='0'>Séléctionner la durée du rendez-vous</option>"
        for (duree of durees) {init_duree += `<option value="${duree}">${duree}</option>`;}
        $("#create_duree_rdv").html(init_duree);
        //---------------------------------------------------------------------- Réinitialisation de la liste des intervenant-e-s
        $("#create_int_rdv").html("<option selected value=''>Séléctionner l'intervenant-e</option>");
        ajaxListIntUp("#create_int_rdv");
    });

    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AFFICHER ACCOMPAGNEMENT"
    $("#btn_accomp").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id du jeune séléctionné
        const id = $("#npv_res").val();
        $("#id").val(id);
        //---------------------------------------------------------------------- Lancement de la fonction GET définies en dessous
        acc_Get(id);
    });

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CHANGE DANS LE MENU "STATUT DE L'ACCOMPAGNEMENT"
    $("#acc").change(function(){
        const id = $("#npv_res").val();
        const statut = $("#acc").val();
        // --------------------------------------------------------------------- Mise à jour du statut d'accompagnement
        jeune_Update_Acc(id, statut);
    });
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S- - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
//------------------------------------------------------------------------------ Fonction de réinitialisation de la liste des types, des durées et des intervenants sur les pages rdv
const acc_Get = (id) => {
    if(!id) alert("Aucun jeune n'a été séléctionné")
    else {
        //---------------------------------------------------------------------- Changement d'interface
        $("#accompagnement").removeClass('d-none');
        $("#form_jeune").addClass('d-none');
        //---------------------------------------------------------------------- Récupération du statut du jeune
        jeune_Get_Acc(id);
        //---------------------------------------------------------------------- Récupération des sensibilisation (mission 0 et 1) du jeune et remplissage du tableau
        jeune_Get_Evt(id);
        //---------------------------------------------------------------------- Récupération des ateliers collectifs (mission 2) du jeune et remplissage du tableau
        jeune_Get_Evt2(id);
        //---------------------------------------------------------------------- Récupération des RDV (mission 3) du jeune et remplissage du tableau
        jeune_Get_Rdv(id);
    }
};
