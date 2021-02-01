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
        $("#nb_pro")[0].disabled = true;
        $("#select_m0, #select_m1").addClass("d-none");
        $("#select_m2").removeClass("d-none");
        // --------------------------------------------------------------------- Réinitialisation de la liste type m2
        let types_m2 = ["Atelier d'anglais", "Atelier Europe", "Atelier Interculturalité", "At. obj d'apprentissage", "At. retour à chaud", "2ème atelier retour"];
        let init = "<option selected value=''>Séléctionner le type d'événement</option>"
        for (type of types_m2) {init += `<option value="${type}">${type}</option>`;}
        $("#type_m2").html(init);
        $("#type_m2")[0].disabled = false;
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

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
    // $('#evt_create').click(function(){
    //     // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
    //     let adherent =  $("#adherent").is(':checked');
    //     if(adherent)adherent=1;else{adherent=0};
    //     const genre = $("#genre").val();
    //     const nom = $("#nom").val().toUpperCase();
    //     const prenom = strUpFirst($("#prenom").val());
    //     const ddn = $("#ddn").val();
    //     const id_evt = $("#sensibilisation").val();
    //     const email = $("#email").val();
    //     const tel = $("#tel").val();
    //     const facebook = $("#facebook").val();
    //     const skype = $("#skype").val();
    //     const insta = $("#insta").val();
    //     const urgence = $("#urgence").val();
    //     const adresse = $("#adresse").val();
    //     const id_ville = $("#ville").val();
    //     const nom_ville = $("#nom_ville_none").val();
    //     const contrat_ville = $("#contrat_ville").val();
    //     const qpv = $("#qpv").val();
    //     const id_qpv = $("#nom_qpv").val();
    //     let prij =  $("#prij").is(':checked');
    //     if(prij)prij=1;else{prij=0};
    //     const type_orga = $("#type_orga").val();
    //     const id_orga = $("#nom_orga").val();
    //     const nom_ref = $("#nom_ref").val();
    //     const tel_ref = $("#tel_ref").val();
    //     const email_ref = $("#email_ref").val();
    //     const formation = $("#formation").val();
    //     const niveau = $("#niveau").val();
    //     const diplome = $("#diplome").val();
    //     const niveau_anglais = $("#niveau_anglais").val();
    //     const langues = $("#langues").val();
    //     const statut = $("#statut").val();
    //     const pe = $("#pe").val();
    //     const rsa = $("#rsa").val();
    //     const gj = $("#gj").val();
    //
    //     // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
    //     if(!genre || !nom || !prenom || !id_ville || (!email && !tel)) {
    //         alert("Les champs Genre, Nom, Prénom et Ville ainsi que Email ou Tel sont obligatoires.");
    //     } else {
    //         // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
    //         if(vLen("Nom",nom,100) && vLen("Prénom",prenom,100) && vLen("Email",email,100) && vLen("Téléphone",tel,50)
    //         && vLen("Facebook",facebook,100) && vLen("Skype",skype,100) && vLen("Instagram",insta,100) && vLen("Urgence",urgence,100)
    //         && vLen("Adresse",adresse,100) && vLen("Nom du référent",nom_ref,100) && vLen("Téléphone du référent",tel_ref,50)
    //         && vLen("Email du référent",email_ref,100) && vLen("Formation",formation,100) && vLen("Diplôme",diplome,100)
    //         && vLen("Autres langues parlées",langues,255)) {
    //             // ------------------------------------------------------------- Vérif si l'ensemble (prenom, nom, ville) existe déjà dans la BDD
    //             const npv = `${prenom} ${nom} - ${nom_ville}`;
    //             //-------------------------------------------------------------- Envoie des infos vers la BDD
    //             jeune_Create(npv, adherent, genre, nom, prenom, ddn, id_evt, email, tel, facebook, skype, insta, urgence, adresse, id_ville, qpv, id_qpv, id_orga, nom_ref, tel_ref, email_ref, formation, niveau, diplome, niveau_anglais, langues, statut, pe, rsa, gj);
    //         }
    //     }
    // })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !
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
    $("#btn_evtcreate").removeClass("d-none");
}
