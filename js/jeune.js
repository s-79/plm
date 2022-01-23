$(function(){

    // ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel
    $("#menu_jeune").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Outil de recherche de jeunes
    $("#npv").keyup(function(){
        let search = $("#npv").val();
        if(search) {
            jeune_Search(search);
        } else {
            //------------------------------------------------------------------ Remplissage du champs de recherche de jeunes
            $("#npv_res").html("<option selected value=''>Séléctionner un jeune</option>");
            ajaxListNpv("#npv_res");
        }
    });

    //-------------------------------------------------------------------------- Remplissage du champs de recherche de jeunes
    acc_List_Evt("#sensibilisation");

    //-------------------------------------------------------------------------- Remplissage de la liste des sensibilisations
    ajaxListNpv("#npv_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    ajaxListVille("#ville");


    // ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#btn_infos").click(function(){
        $("#sensibilisation").html("");
        $("#ville").html("");
        $("#nom_ville_none").html("");
        $("#nom_qpv").html("");
        $("#nom_orga").html("");
        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_jeune_create").addClass("d-none");
        $("#btn_jeune_update").removeClass("d-none");

        //---------------------------------------------------------------------- Récupération de l'id du jeune séléctionné
        const id = $("#npv_res").val();
        if(!id) alert("Aucun jeune n'a été séléctionné")
        //---------------------------------------------------------------------- Récupération des données du jeune
        else {
            //------------------------------------------------------------------ Changement d'interface
            $("#form_jeune").removeClass('d-none');
            $("#accompagnement").addClass('d-none');

            //------------------------------------------------------------------ Récupération des données du jeune
            jeune_Get(id);
        }
    });

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!


    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) DE CREATION D'UN NOUVEAU JEUNE
    $("#new_jeune").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page jeune (fonction ci-dessous)
        jeune_Reset();
    });

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
    $('#jeune_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const genre = $("#genre").val();
        const prenom = strUpFirst($("#prenom").val());
        const nom = $("#nom").val().toUpperCase();
        const ddn = $("#ddn").val();
        const nationalite = $("#nationalite").val();
        let adherent =  $("#adherent").is(':checked');
        if(adherent)adherent=1;else{adherent=0};
        let ami =  $("#ami").is(':checked');
        if(ami)ami=1;else{ami=0};
        const email = $("#email").val();
        const tel = $("#tel").val();
        const facebook = $("#facebook").val();
        const insta = $("#insta").val();
        const urgence = $("#urgence").val();
        let droits_image =  $("#droits_image").is(':checked');
        if(droits_image)droits_image=1;else{droits_image=0};
        let rgpd =  $("#rgpd").is(':checked');
        if(rgpd)rgpd=1;else{rgpd=0};
        const adresse = $("#adresse").val();
        const id_ville = $("#ville").val();
        const nom_ville = $("#nom_ville_none").val();
        const contrat_ville = $("#contrat_ville").val();
        const qpv = $("#qpv").val();
        const id_qpv = $("#nom_qpv").val();
        let prij =  $("#prij").is(':checked');
        if(prij)prij=1;else{prij=0};
        const type_orga = $("#type_orga").val();
        const id_orga = $("#nom_orga").val();
        const nom_ref = $("#nom_ref").val();
        const tel_ref = $("#tel_ref").val();
        const email_ref = $("#email_ref").val();
        let ml =  $("#ml").is(':checked');
        if(ml)ml=1;else{ml=0};
        let gj =  $("#gj").is(':checked');
        if(gj)gj=1;else{gj=0};
        const formation = $("#formation").val();
        const niveau = $("#niveau").val();
        const diplome = $("#diplome").val();
        const niveau_anglais = $("#niveau_anglais").val();
        const langues = $("#langues").val();
        let at_anglais =  $("#at_anglais").is(':checked');
        if(at_anglais)at_anglais=1;else{at_anglais=0};

        const statut = $("#statut").val();
        let statut2 = "";
        if(statut === ("DE de moins d'un an" || "DE de plus d'un an")) statut2 = "Demandeur d'emploi";
        if(statut === ("En CDD" || "En CDI" || "En intérim")) statut2 = "En emploi";
        if(statut === "Etudiant") statut2 = "Etudiant";
        if(statut === "Service civique") statut2 = "Service civique";
        if(statut === "En formation") statut2 = "En formation";
        if(statut === "Autre") statut2 = "Autre";

        const pe = $("#pe").val();
        const rsa = $("#rsa").val();
        const id_evt = $("#sensibilisation").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!genre || !prenom || !nom || !id_ville || !id_evt || (!email && !tel)) {
            alert("Les champs Genre, Nom, Prénom, Sensibilisation et Ville ainsi que Email ou Tel sont obligatoires.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,100) && vLen("Prénom",prenom,100) && vLen("Email",email,100) && vLen("Téléphone",tel,50)
            && vLen("Facebook",facebook,100) && vLen("Instagram",insta,100) && vLen("Urgence",urgence,100)
            && vLen("Adresse",adresse,100) && vLen("Nom du référent",nom_ref,100) && vLen("Téléphone du référent",tel_ref,50)
            && vLen("Email du référent",email_ref,100) && vLen("Formation",formation,100) && vLen("Diplôme",diplome,100)
            && vLen("Autres langues parlées",langues,255)) {
                // ------------------------------------------------------------- Vérif si l'ensemble (prenom, nom, ville) existe déjà dans la BDD
                const npv = `${prenom} ${nom} - ${nom_ville}`;
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                jeune_Create(npv, genre, prenom, nom, ddn, nationalite, adherent, ami, email, tel, facebook, insta, urgence, droits_image, rgpd, adresse, id_ville, qpv, id_qpv, id_orga, nom_ref, tel_ref, email_ref, ml, gj, formation, niveau, diplome, niveau_anglais, langues, at_anglais, statut, statut2, pe, rsa, id_evt);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E-- !!!

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
    $('#jeune_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#id").val();
        const genre = $("#genre").val();
        const prenom = strUpFirst($("#prenom").val());
        const nom = $("#nom").val().toUpperCase();
        const ddn = $("#ddn").val();
        const nationalite = $("#nationalite").val();
        let adherent =  $("#adherent").is(':checked');
        if(adherent)adherent=1;else{adherent=0};
        let ami =  $("#ami").is(':checked');
        if(ami)ami=1;else{ami=0};
        const email = $("#email").val();
        const tel = $("#tel").val();
        const facebook = $("#facebook").val();
        const insta = $("#insta").val();
        const urgence = $("#urgence").val();
        let droits_image =  $("#droits_image").is(':checked');
        if(droits_image)droits_image=1;else{droits_image=0};
        let rgpd =  $("#rgpd").is(':checked');
        if(rgpd)rgpd=1;else{rgpd=0};
        const adresse = $("#adresse").val();
        const id_ville = $("#ville").val();
        const nom_ville = $("#nom_ville_none").val();
        const contrat_ville = $("#contrat_ville").val();
        const qpv = $("#qpv").val();
        const id_qpv = $("#nom_qpv").val();
        let prij =  $("#prij").is(':checked');
        if(prij)prij=1;else{prij=0};
        const type_orga = $("#type_orga").val();
        const id_orga = $("#nom_orga").val();
        const nom_ref = $("#nom_ref").val();
        const tel_ref = $("#tel_ref").val();
        const email_ref = $("#email_ref").val();
        let ml =  $("#ml").is(':checked');
        if(ml)ml=1;else{ml=0};
        let gj =  $("#gj").is(':checked');
        if(gj)gj=1;else{gj=0};
        const formation = $("#formation").val();
        const niveau = $("#niveau").val();
        const diplome = $("#diplome").val();
        const niveau_anglais = $("#niveau_anglais").val();
        const langues = $("#langues").val();
        let at_anglais =  $("#at_anglais").is(':checked');
        if(at_anglais)at_anglais=1;else{at_anglais=0};

        const statut = $("#statut").val();
        let statut2 = "";
        if(statut === ("DE de moins d'un an" || "DE de plus d'un an")) statut2 = "Demandeur d'emploi";
        if(statut === ("En CDD" || "En CDI" || "En intérim")) statut2 = "En emploi";
        if(statut === "Etudiant") statut2 = "Etudiant";
        if(statut === "Service civique") statut2 = "Service civique";
        if(statut === "En formation") statut2 = "En formation";
        if(statut === "Autre") statut2 = "Autre";

        alert(statut);
        alert(statut2);

        const pe = $("#pe").val();
        const rsa = $("#rsa").val();
        const id_evt = $("#sensibilisation").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!genre || !prenom || !nom || !id_ville || (!email && !tel)) {
            alert("Les champs Genre, Nom, Prénom et Ville ainsi que Email ou Tel sont obligatoires.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,100) && vLen("Prénom",prenom,100) && vLen("Email",email,100) && vLen("Téléphone",tel,50)
            && vLen("Facebook",facebook,100) && vLen("Instagram",insta,100) && vLen("Urgence",urgence,100)
            && vLen("Adresse",adresse,100) && vLen("Nom du référent",nom_ref,100) && vLen("Téléphone du référent",tel_ref,50)
            && vLen("Email du référent",email_ref,100) && vLen("Formation",formation,100) && vLen("Diplôme",diplome,100)
            && vLen("Autres langues parlées",langues,255)) {
                // ------------------------------------------------------------- Vérif si l'ensemble (prenom, nom, ville) existe déjà dans la BDD
                const npv = `${prenom} ${nom} - ${nom_ville}`;
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                jeune_Update(npv, id, genre, prenom, nom, ddn, nationalite, adherent, ami, email, tel, facebook, insta, urgence, droits_image, rgpd, adresse, id_ville, qpv, id_qpv, id_orga, nom_ref, tel_ref, email_ref, ml, gj, formation, niveau, diplome, niveau_anglais, langues, at_anglais, statut, statut2, pe, rsa, id_evt);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E-- !!!

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "SUPPRIMER LA FICHE" DANS LA PAGE JEUNE
    $('#jeune_delete').click(function(){
        const id = $("#id").val();
        const nom = $("#nom").val().toUpperCase();
        const prenom = strUpFirst($("#prenom").val());
        const nom_ville = $("#nom_ville_none").val();
        const npv = `${prenom} ${nom} - ${nom_ville}`;
        jeune_Delete(id, npv);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - R E S E T (F U N C T I O N)- - ! ! !

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page jeune
const jeune_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation du formulaire
    document.getElementById("form_jeune").reset();
    //-------------------------------------------------------------------------- Remplissage de la liste des sensibilisations
    $("#sensibilisation").html("<option selected value=''>Ajouter une sensibilisation</option>");
    acc_List_Evt("#sensibilisation");
    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    $("#ville").html("<option selected value=''>Séléctionner la ville</option>");
    ajaxListVille("#ville");
    $("#qpv")[0].disabled = true;
    $("#nom_qpv")[0].disabled = true;
    //-------------------------------------------------------------------------- Remplissage du champs de recherche de jeunes
    $("#npv_res").html("<option selected value=''>Séléctionner un jeune</option>");
    ajaxListNpv("#npv_res");
    //-------------------------------------------------------------------------- Reinitialisation des premières lignes
    $("#nom_qpv").html("<option selected value='0'>Séléctionner le quartier QPV</option>");
    $("#nom_orga").html("<option selected value='0'>Séléctionner le nom de l'organisme</option>");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_jeune_update").addClass("d-none");
    $("#btn_jeune_create").removeClass("d-none");
}
