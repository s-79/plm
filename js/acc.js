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

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR L'ICONE PROJET
    $("#acc_projet").click(function(){
        $("#divProjet").toggleClass("d-none");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UNE ASSOCIATION ENTRE JEUNE ET SENSIBILISATION
    $("#new_prj").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_prj_create").reset();
        /* --------------------------------------------------------------------- Remplissage de la liste des sensibilisation à associer */
        ajaxListPrj("#prj_create");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UNE ASSOCIATION ENTRE JEUNE ET SENSIBILISATION
    $("#new_evt").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_evt_create").reset();
        /* --------------------------------------------------------------------- Remplissage de la liste des sensibilisation à associer */
        acc_List_Evt("#evt_create");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UNE ASSOCIATION ENTRE JEUNE ET ATELIER COLLECTIF
    $("#new_evt2").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_evt2_create").reset();
        /* --------------------------------------------------------------------- Remplissage de la liste des ateliers à associer */
        acc_List_Evt2("#evt2_create");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CRÉATION D'UN RDV QUI SERA ASSOCIER AU JEUNE
    $("#new_rdv").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_rdv_create").reset();
        //---------------------------------------------------------------------- Réinitialisation de la liste des intervenant-e-s
        // ajaxListRef("#create_int_rdv");
    });

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AFFICHER ACCOMPAGNEMENT"
    $("#btn_accomp").click(function(){
        $("#divTable").removeClass("d-none");
        $("#divFiche_Profil").addClass("d-none");
        //---------------------------------------------------------------------- Récupération de l'id du jeune séléctionné
        const id = $("#npv_res").val();
        $("#id").val(id);
        //---------------------------------------------------------------------- (fonction en dessous) Lancement de la fonction GET définies en dessous
        acc_Get(id);
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE TEXTE OU L'ICONE FICHE PROFIL
    $("#fiche_profil").click(function(){
        // --------------------------------------------------------------------- Récupération des infos pour remplir la fiche
        const id = $("#npv_res").val();
        document.getElementById("form_fiche_profil").reset();
        acc_Create_Profil(id);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER AU SUIVI" DANS LE MODAL D'ASSOCIATION DE PROJET
    $("#btn_prj_create").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_prj = $("#prj_create").val();
        const depart = $("#create_depart_prj").val();
        const retour = $("#create_retour_prj").val();
        //---------------------------------------------------------------------- Création de l'association entre le jeune et le projet
        acc_Create_Prj(id_jeune, id_prj, depart, retour);
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER AU SUIVI" DANS LE MODAL D'ASSOCIATION EVT
    $("#btn_evt_create").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_evt = $("#evt_create").val();
        const commentaire = $("#create_comm_evt").val();
        //---------------------------------------------------------------------- Création de l'association entre le jeune et l'evt
        if(vLen("Commentaire",commentaire,255)) acc_Create_Evt(id_jeune, id_evt, commentaire, "evt");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER AU SUIVI" DANS LE MODAL D'ASSOCIATION EVT2
    $("#btn_evt2_create").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_evt2 = $("#evt2_create").val();
        const commentaire = $("#create_comm_evt2").val();
        //---------------------------------------------------------------------- Création de l'association entre le jeune et l'evt2
        if(vLen("Commentaire",commentaire,255)) acc_Create_Evt(id_jeune, id_evt2, commentaire, "evt2");
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "AJOUTER AU SUIVI" DANS LE MODAL D'ASSOCIATION DE RDV
    $("#btn_rdv_create").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        let id_int = $("#ref").val();
        const dat = $("#create_date_rdv").val();
        const type = $("#create_type_rdv").val();
        let visio =  $("#create_visio_rdv").is(':checked');
        if(visio)visio=1;else{visio=0};
        const duree = $("#create_duree_rdv").val();
        const uuid = uuid_gen();
        const commentaires = $("#create_comm_rdv").val();
        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!dat || !type || !duree) alert("Les champs Date, Type et Durée sont obligatoires.");
        //---------------------------------------------------------------------- Création de l'association entre le jeune et le rdv
        else {
            if(vLen("Commentaires",commentaires,1000)) rdv_Create (id_jeune, id_int, dat, type, visio, duree, uuid, commentaires);
        };
    });

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CHANGE DANS LES MENU SELECT "STATUT DE L'ACCOMPAGNEMENT", "MOBILITÉ PRÉSENTIE" ET "RÉFÉRENT-E"
    $("#acc, #mob, #ref").change(function(){
        const id = $("#npv_res").val();
        const statut = $("#acc").val();
        const mob = $("#mob").val();
        const id_ref = $("#ref").val();
        // --------------------------------------------------------------------- Mise à jour du statut d'accompagnement
        jeune_Update_Acc(id, statut, mob, id_ref);
        $(this).addClass('text-success');
        setTimeout(acc_Check, 1500);
    });

// ---------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON ENREGISTRER LES MODIFS DANS FICHE PROFIL
    $("#btn_fiche_profil").click(function(){
        const id_jeune = $("#npv_res").val();
        const parcours = $("#parcours").val();
        const exp_pro = $("#exp_pro").val();
        const prj_pro = $("#prj_pro").val();
        const loisirs = $("#loisirs").val();
        const volontariat = $("#volontariat").val();
        const voyages = $("#voyages").val();
        const motivations = $("#motivations").val();
        const prj_mob = $("#prj_mob").val();
        const freins = $("#freins").val();
        const apports = $("#apports").val();
        const attentes = $("#attentes").val();
        const conditions_vie = $("#conditions_vie").val();
        const ressources = $("#ressources").val();
        const docs_adm = $("#docs_adm").val();
        const medical = $("#medical").val();
        // --------------------------------------------------------------------- Mise à jour de la fiche profil
        acc_Update_Profil(id_jeune, parcours, exp_pro, prj_pro, loisirs, volontariat, voyages, motivations, prj_mob, freins, apports, attentes, conditions_vie, ressources, docs_adm, medical);
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "MODIFIER LES DATES" DANS LE MODAL PROJET
    $("#btn_prj_update").click(function(){
        //---------------------------------------------------------------------- Récupération des données
        const id_jeune = $("#id").val();
        const id_prj = $("#update_id_prj").val();
        const depart = $("#update_depart_prj").val();
        const retour = $("#update_retour_prj").val();
        //---------------------------------------------------------------------- Création de l'association entre le jeune et le projet
        acc_Update_Prj(id_jeune, id_prj, depart, retour);
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
        const dat = $("#update_date_rdv").val();
        const type = $("#update_type_rdv").val();
        let visio =  $("#update_visio_rdv").is(':checked');
        if(visio)visio=1;else{visio=0};
        const duree = $("#update_duree_rdv").val();
        const commentaires = $("#update_comm_rdv").val();
        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!dat || !type || !duree) alert("Les champs Date, Type et Durée sont obligatoires.");
        else {
            //---------------------------------------------------------------------- Création de l'association entre le jeune et le rendez-vous
            if(vLen("Commentaires",commentaires,1000)) rdv_Update(id_jeune, id_rdv, dat, type, visio, duree, commentaires);
        };
    });

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E-- !!!

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "SUPPRIMER DU SUIVI" DANS LE MODAL DE MODIFICATION EVT 0 ET 1
    $('#btn_prj_delete').click(function(){
        const id_jeune = $("#id").val();
        const id_prj = $("#update_id_prj").val();
        //---------------------------------------------------------------------- Suppression de l'association entre le jeune et le projet
        acc_Delete_Prj(id_jeune, id_prj);
    })

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
        //---------------------------------------------------------------------- Affichage du jeune séléctionné lorsqu'on à vient de la page evt ou prj en cliquant dans le tableau
        ajaxListNpv("#npv_res", id);
        //---------------------------------------------------------------------- Changement d'interface
        $("#accompagnement").removeClass('d-none');
        $("#form_jeune").addClass('d-none');
        //---------------------------------------------------------------------- Récupération du statut du jeune
        jeune_Get_Acc(id);
        //---------------------------------------------------------------------- TABLEAU PROJETS : Récupération des projets du jeune et remplissage du tableau
        $("#tab_prj").html("");
        jeune_Get_Prj(id);
        //---------------------------------------------------------------------- TABLEAU M0, M1 : Récupération des sensibilisation (mission 0 et 1) du jeune et remplissage du tableau
        $("#tab_evt").html("");
        jeune_Get_Evt(id);
        //---------------------------------------------------------------------- TABLEAU M2 : RRécupération des ateliers collectifs (mission 2) du jeune et remplissage du tableau
        $("#tab_evt2").html("");
        jeune_Get_Evt2(id);
        //---------------------------------------------------------------------- TABLEAU M3 : RRécupération des RDV (mission 3) du jeune et remplissage du tableau
        $("#tab_rdv").html("");
        jeune_Get_Rdv(id);
    }
};

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- Affichge du text vert
const acc_Check = () => {
    $("#acc, #mob, #ref").removeClass('text-success');
}
