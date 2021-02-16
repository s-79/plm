$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id d'événement stocké (si l'utilisateur a cliqué sur une lige du tableau dans acc)
    let id_evt_storage = sessionStorage.getItem("id_evt");
    sessionStorage.removeItem('id_evt');
    //-------------------------------------------------------------------------- (fonction à la fin) Si il y un id, on lance la fonction Get
    if(id_evt_storage) evt_Get(id_evt_storage);

    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#evt_search").keyup(function(){
        let search = $("#evt_search").val();
        if(search) {
            evt_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des événements
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

    //-------------------------------------------------------------------------- Remplissage de la liste projets
    ajaxListPrj("#projet");

    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS RADIOS DES MISSIONS
    $("#m2").click(function() {
        $("#orga_evt").addClass("d-none");
        $("#projet_evt").removeClass("d-none");
        $("#ville").val(0);
        $("#ville")[0].disabled = true;
        $("#nb_pros")[0].disabled = true;
        $("#select_m0, #select_m1").addClass("d-none");
        $("#select_m2").removeClass("d-none");
        $("#type_m2")[0].disabled = false;
    });
    $("#m0,#m1").click(function() {
        $("#projet_evt").addClass("d-none");
        $("#orga_evt").removeClass("d-none");
        $("#ville")[0].disabled = false;
        $("#nb_pros")[0].disabled = false;
    });
    $("#m0").click(function() {
        $("#select_m1, #select_m2").addClass("d-none");
        $("#select_m0").removeClass("d-none");
        $("#type_m0").html("<option value='Sensibilisation Mission 0'>Sensibilisation Mission 0</option>");
        $("#type_m0")[0].disabled = true;
    });
    $("#m1").click(function() {
        $("#select_m0, #select_m2").addClass("d-none");
        $("#select_m1").removeClass("d-none");
        $("#type_m1")[0].disabled = false;
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

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id de l'évenement séléctionné
        const id_evt = $("#evt_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos de l'événement séléctionné
        evt_Get(id_evt);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) DE CREATION D'UN NOUVEL ÉVÉNEMENT
    $("#new_evt").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page événement (fonction ci-dessous)
        evt_Reset();
    });

    //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
    $('#evt_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        let mission = "";
        let type = "";
        for (let i = 0; i < 3; i++) {
            let m = `#m${i}`;
            if($(m).is(':checked')) {
                mission = i;
                let t = `#type_m${i}`;
                type = $(t).val();
            }
        }
        const dat = $("#date").val();
        const id_ville = $("#ville").val();
        // contrat_ville_Change(id_ville);
        let visio =  $("#visio").is(':checked');
        if(visio)visio=1;else{visio=0};
        const intitule = $("#intitule").val();
        const uuid = uuid_gen();
        const id_projet = $("#projet").val();
        const organise = $("#organise").val();
        const nb_jeunes = $("#nb_jeunes").val();
        const nb_pros = $("#nb_pros").val();
        const commentaires = $("#commentaires").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(isNaN(mission) || !dat || !type || !id_ville || (!nb_jeunes && !nb_pros)) {
            alert("Les champs Mission, Date, Type et Ville ainsi que le nombre de jeunes ou de pros sont obligatoires.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,255)) {

                //-------------------------------------------------------------- Envoie des infos vers la BDD
                evt_Create(mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires);

            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN ÉVÉNEMENT
    $('#evt_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $('#id_evt').val();
        let mission = "";
        let type = "";
        for (let i = 0; i < 3; i++) {
            let m = `#m${i}`;
            if($(m).is(':checked')) {
                mission = i;
                let t = `#type_m${i}`;
                type = $(t).val();
            }
        }
        const dat = $("#date").val();
        const id_ville = $("#ville").val();
        let visio =  $("#visio").is(':checked');
        if(visio)visio=1;else{visio=0};
        const intitule = $("#intitule").val();
        const uuid = uuid_gen();
        const id_projet = $("#projet").val();
        const organise = $("#organise").val();
        const nb_jeunes = $("#nb_jeunes").val();
        const nb_pros = $("#nb_pros").val();
        const commentaires = $("#commentaires").val();

        if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,100)) {
            evt_Update(id, mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires);
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN ORGANISME
    $('#evt_delete').click(function(){
        const id = $('#id_evt').val();
        evt_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const evt_Get = (id_evt) => {
    if(!id_evt) alert("Aucun événement n'a été séléctionné")
    else {
        //---------------------------------------------------------------------- Affichage du projet séléctionné lorsqu'on à vient de la page jeune en cliquant dans le tableau
        ajaxListEvt("#evt_res", id_evt);
        //---------------------------------------------------------------------- Reinitialisation des champs
        $("#type_m1")[0].disabled = false;
        $("#type_m2")[0].disabled = false;
        // $("#ville").html("");
        //---------------------------------------------------------------------- Récupération des données de l'événement
        ajaxEvtGet(id_evt);
        //---------------------------------------------------------------------- Réinitialisation de la liste de tous intervenants et décochage des cases
        ajaxListInter("#inter");
        //---------------------------------------------------------------------- Récupération des intervants liés à cet événement
        ajaxEvtInter(id_evt);
        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_evt_create").addClass("d-none");
        $("#btn_evt_update").removeClass("d-none");
    }
    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    ajaxListVille("#ville");
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const evt_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation du formulaire
    document.getElementById("form_evt").reset();
    $("#type_m1")[0].disabled = true;
    $("#type_m2")[0].disabled = true;
    //-------------------------------------------------------------------------- Remplissage de la liste des intervenants
    ajaxListInter("#inter");
    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    ajaxListVille("#ville");
    //-------------------------------------------------------------------------- Réinitialisation du champs de recherche des événements
    ajaxListEvt("#evt_res");
    //-------------------------------------------------------------------------- Réinitialisation du tableau de jeunes
    $("#tableau").html("");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_evt_update").addClass("d-none");
    $("#btn_evt_create").removeClass("d-none");
}
