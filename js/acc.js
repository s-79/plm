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

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR L'ICONE PROJET'
    $("#acc_projet").click(function(){
        $("#divProjet").toggleClass("d-none");
        // $("#divAcc").toggleClass("d-none");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UNE ASSOCIATION ENTRE JEUNE ET SENSIBILISATION
    $("#new_evt").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_evt_create").reset();
        const id = $("#npv_res").val();
        /* --------------------------------------------------------------------- Remplissage de la liste des sensibilisation à associer */
        $("#evt_create").html("<option selected value=''>Séléctionner la sensibilisation à ajouter</option>");
        acc_List_Evt("#evt_create");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UNE ASSOCIATION ENTRE JEUNE ET ATELIER COLLECTIF
    $("#new_evt2").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_evt2_create").reset();
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
        let init_type = "<option selected value=''>Séléctionner le type de rendez-vous</option>"
        for (type of types) {init_type += `<option value="${type}">${type}</option>`;};
        $("#create_type_rdv").html(init_type);
        //---------------------------------------------------------------------- Réinitialisation du menu durées
        let durees = ["- de 10 min", "- de 30 min", "- d'1 heure"];
        let init_duree = "<option selected value=''>Séléctionner la durée du rendez-vous</option>"
        for (duree of durees) {init_duree += `<option value="${duree}">${duree}</option>`;}
        $("#create_duree_rdv").html(init_duree);
        //---------------------------------------------------------------------- Réinitialisation de la liste des intervenant-e-s
        $("#create_int_rdv").html("<option selected value=''>Séléctionner l'intervenant-e</option>");
        ajaxListIntUp("#create_int_rdv");
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AFFICHER ACCOMPAGNEMENT"
    $("#btn_accomp").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id du jeune séléctionné
        const id = $("#npv_res").val();
        $("#id").val(id);
        //---------------------------------------------------------------------- (fonction en dessous) Lancement de la fonction GET définies en dessous
        acc_Get(id);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER AU SUIVI" DANS LE MODAL DE CREATION EVT
    $("#btn_evt_create").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_evt = $("#evt_create").val();
        const commentaire = $("#create_comm_evt").val();
        //---------------------------------------------------------------------- Création de l'association entre le jeune et l'evt
        if(vLen("Commentaire",commentaire,255)) acc_Create_Evt(id_jeune, id_evt, commentaire, "evt");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER AU SUIVI" DANS LE MODAL DE CREATION EVT2
    $("#btn_evt2_create").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_evt2 = $("#evt2_create").val();
        const commentaire = $("#create_comm_evt2").val();
        //---------------------------------------------------------------------- Création de l'association entre le jeune et l'evt
        if(vLen("Commentaire",commentaire,255)) acc_Create_Evt(id_jeune, id_evt2, commentaire, "evt2");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER AU SUIVI" DANS LE MODAL DE CREATION EVT2
    $("#btn_rdv_create").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_int = $("#create_int_rdv").val();
        const dat = $("#create_date_rdv").val();
        const type = $("#create_type_rdv").val();
        let visio =  $("#create_visio_rdv").is(':checked');
        if(visio)visio=1;else{visio=0};
        const duree = $("#create_duree_rdv").val();
        const intitule = uuid();
        const commentaires = $("#create_comm_rdv").val();
        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!id_int || !dat || !type || !duree) alert("Les champs Intervenant-e, Date, Type et Durée sont obligatoires.");
        //---------------------------------------------------------------------- Création de l'association entre le jeune et l'evt
        else {
            if(vLen("Commentaires",commentaires,255)) rdv_Create (id_jeune, id_int, dat, type, visio, duree, intitule, commentaires);
        };
    });

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CHANGE DANS LE MENU "STATUT DE L'ACCOMPAGNEMENT"
    $("#acc").change(function(){
        const id = $("#npv_res").val();
        const statut = $("#acc").val();
        // --------------------------------------------------------------------- Mise à jour du statut d'accompagnement
        jeune_Update_Acc(id, statut);
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "MODIFIER LE COMMENTAIRE" DANS LE MODAL EVT M0 ET 1
    $("#btn_evt_update").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_evt = $("#update_id_evt").val();
        const commentaire = $("#update_comm_evt").val();
        //---------------------------------------------------------------------- Création de l'association entre le jeune et l'evt
        if(vLen("Commentaire",commentaire,255)) acc_Update_Evt(id_jeune, id_evt, commentaire, "evt");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "MODIFIER LE COMMENTAIRE" DANS LE MODAL EVT M2
    $("#btn_evt2_update").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_evt2 = $("#update_id_evt2").val();
        const commentaire = $("#update_comm_evt2").val();
        //---------------------------------------------------------------------- Création de l'association entre le jeune et l'evt2
        if(vLen("Commentaire",commentaire,255)) acc_Update_Evt(id_jeune, id_evt2, commentaire, "evt2");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "MODIFIER" DANS LE MODAL RDV
    $("#btn_rdv_update").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_rdv = $("#update_id_rdv").val();
        const id_int = $("#update_int_rdv").val();
        const dat = $("#update_date_rdv").val();
        const type = $("#update_type_rdv").val();
        let visio =  $("#update_visio_rdv").is(':checked');
        if(visio)visio=1;else{visio=0};
        const duree = $("#update_duree_rdv").val();
        const commentaires = $("#update_comm_rdv").val();
        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!id_int || !dat || !type || !duree) alert("Les champs Intervenant-e, Date, Type et Durée sont obligatoires.");
        else {
            //---------------------------------------------------------------------- Création de l'association entre le jeune et le rendez-vous
            if(vLen("Commentaires",commentaires,255)) rdv_Update(id_jeune, id_rdv, id_int, dat, type, visio, duree, commentaires);
        };
    });

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E-- !!!

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "SUPPRIMER DU SUIVI" DANS LE MODAL DE MODIFICATION EVT 0 ET 1
    $('#btn_evt_delete').click(function(){
        const id_jeune = $("#id").val();
        const id_evt = $("#update_id_evt").val();
        //---------------------------------------------------------------------- Suppression de l'association entre le jeune et l'evt
        acc_Delete_Evt(id_jeune, id_evt, "evt");
    })

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "SUPPRIMER DU SUIVI" DANS LE MODAL DES ATELIERS COLLECTIFS
    $('#btn_evt2_delete').click(function(){
        const id_jeune = $("#id").val();
        const id_evt2 = $("#update_id_evt2").val();
        //---------------------------------------------------------------------- Suppression de l'association entre le jeune et l'atelier collectif
        acc_Delete_Evt(id_jeune, id_evt2, "evt2");
    })

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "SUPPRIMER DU SUIVI" DANS LE MODAL DES RDV
    $('#btn_rdv_delete').click(function(){
        const id_jeune = $("#id").val();
        const id_rdv = $("#update_id_rdv").val();
        //---------------------------------------------------------------------- Suppression de l'association entre le jeune et le rdv
        acc_Delete_Rdv(id_jeune, id_rdv);
    })
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
        //---------------------------------------------------------------------- Réinitialisation des tableaux
        $("#tab_evt").html("");
        $("#tab_evt2").html("");
        $("#tab_rdv").html("");
        //---------------------------------------------------------------------- Récupération du statut du jeune
        jeune_Get_Acc(id);
        //---------------------------------------------------------------------- TABLEAU M0, M1 : Récupération des sensibilisation (mission 0 et 1) du jeune et remplissage du tableau
        jeune_Get_Evt(id);
        //---------------------------------------------------------------------- TABLEAU M2 : RRécupération des ateliers collectifs (mission 2) du jeune et remplissage du tableau
        jeune_Get_Evt2(id);
        //---------------------------------------------------------------------- TABLEAU M3 : RRécupération des RDV (mission 3) du jeune et remplissage du tableau
        jeune_Get_Rdv(id);
    }
};
