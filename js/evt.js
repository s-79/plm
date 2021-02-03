$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

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

    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    // ------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LES BOUTONS RADIOS DES MISSIONS
    $("#m2").click(function() {
        $("#orga_evt").addClass("d-none");
        $("#projet_evt").removeClass("d-none");
        $("#ville")[0].disabled = true;
        $("#nb_pros")[0].disabled = true;
        $("#select_m0, #select_m1").addClass("d-none");
        $("#select_m2").removeClass("d-none");
        // --------------------------------------------------------------------- Réinitialisation de la liste type m2
        let types_m2 = ["Atelier d'anglais", "Atelier Europe", "Atelier Interculturalité", "At. obj d'apprentissage", "At. retour à chaud", "2ème atelier retour", "Permanence"];
        let init = "<option selected value=''>Séléctionner le type d'événement</option>"
        for (type of types_m2) {init += `<option value="${type}">${type}</option>`;}
        $("#type_m2").html(init);
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
        // --------------------------------------------------------------------- Réinitialisation de la liste type m1
        let types_m1 = ["Info coll PLM", "Info coll exterieure", "Webinaire pros", "Sensibilisation pros", "Evt thématique"];
        let init = "<option selected value=''>Séléctionner le type d'événement</option>"
        for (type of types_m1) {init += `<option value="${type}">${type}</option>`;}
        $("#type_m1").html(init);
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
        const id_evt = $("#evt_res").val();
        //---------------------------------------------------------------------- Récupération de l'id du jeune séléctionné
        if(!id_evt) alert("Aucun événement n'a été séléctionné")
        else {
            //------------------------------------------------------------------ Reinitialisation des champs
            $("#type_m1")[0].disabled = false;
            $("#type_m2")[0].disabled = false;
            $("#ville").html("");
            //------------------------------------------------------------------ Récupération des données de l'événement
            ajaxEvtGet(id_evt);
            //------------------------------------------------------------------ Vidage puis remplissage du tableau avec les noms des jeunes qui ont participé à l'événement
            $("#tableau").html("");
            ajaxEvtJeune(id_evt, "#tableau");
            //------------------------------------------------------------------ Réinitialisation de la liste de tous intervenants et décochage des cases
            ajaxListInter("#inter");
            //------------------------------------------------------------------ Récupération des intervants liés à cet événement
            ajaxEvtInter(id_evt);
            //------------------------------------------------------------------ Inversement des boutons en bas de page
            $("#btn_evt_create").addClass("d-none");
            $("#btn_evt_update").removeClass("d-none");
        }
        //---------------------------------------------------------------------- Remplissage de la liste des villes
        ajaxListVille("#ville");
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
        let visio =  $("#visio").is(':checked');
        if(visio)visio=1;else{visio=0};
        const intitule = $("#intitule").val();
        const id_projet = $("#projet").val();
        const organise = $("#organise").val();
        const nb_jeunes = $("#nb_jeunes").val();
        const nb_pros = $("#nb_pros").val();
        const commentaires = $("#commentaires").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!mission || !dat || !type || !id_ville || (!nb_jeunes && !nb_pros)) {
            alert("Les champs Mission, Date, Type et Ville ainsi que le nombre de jeunes ou de pros sont obligatoires.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,100)) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                evt_Create(mission, dat, id_ville, type, visio, intitule, id_projet, organise, nb_jeunes, nb_pros, commentaires);
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
        const id_projet = $("#projet").val();
        const organise = $("#organise").val();
        const nb_jeunes = $("#nb_jeunes").val();
        const nb_pros = $("#nb_pros").val();
        const commentaires = $("#commentaires").val();

        if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,100)) {
            evt_Update(id, mission, dat, id_ville, type, visio, intitule, id_projet, organise, nb_jeunes, nb_pros, commentaires);
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN ORGANISME
    $('#evt_delete').click(function(){
        const id = $('#id_evt').val();
        evt_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - R E S E T (F U N C T I O N)- - ! ! !

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page événement
const evt_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation du formulaire
    document.getElementById("form_evt").reset();
    $("#type_m1")[0].disabled = true;
    $("#type_m2")[0].disabled = true;
    //-------------------------------------------------------------------------- Remplissage de la liste des intervenants
    ajaxListInter("#inter");
    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    $("#ville").html("<option selected value=''>Séléctionner la ville</option>");
    ajaxListVille("#ville");
    //-------------------------------------------------------------------------- Réinitialisation du champs de recherche des événements
    $("#evt_res").html("<option selected value='0'>Séléctionner un événement</option>");
    ajaxListEvt("#evt_res");
    //-------------------------------------------------------------------------- Réinitialisation du tableau de jeunes
    $("#tableau").html("");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_evt_update").addClass("d-none");
    $("#btn_evt_create").removeClass("d-none");
}
