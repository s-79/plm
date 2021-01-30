$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E-- !!!

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
    $('#jeune_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $("#id").val();
        let adherent =  $("#adherent").is(':checked');
        if(adherent)adherent=1;else{adherent=0};
        const genre = $("#genre").val();
        const nom = $("#nom").val().toUpperCase();
        const prenom = strUpFirst($("#prenom").val());
        const ddn = $("#ddn").val();
        const id_evt = $("#sensibilisation").val();
        const email = $("#email").val();
        const tel = $("#tel").val();
        const facebook = $("#facebook").val();
        const skype = $("#skype").val();
        const insta = $("#insta").val();
        const urgence = $("#urgence").val();
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
        const formation = $("#formation").val();
        const niveau = $("#niveau").val();
        const diplome = $("#diplome").val();
        const niveau_anglais = $("#niveau_anglais").val();
        const langues = $("#langues").val();
        const statut = $("#statut").val();
        const pe = $("#pe").val();
        const rsa = $("#rsa").val();
        const gj = $("#gj").val();

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!genre || !nom || !prenom || !id_ville || (!email && !tel)) {
            alert("Les champs Genre, Nom, Prénom et Ville ainsi que Email ou Tel sont obligatoires.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Nom",nom,100) && vLen("Prénom",prenom,100) && vLen("Email",email,100) && vLen("Téléphone",tel,50)
            && vLen("Facebook",facebook,100) && vLen("Skype",skype,100) && vLen("Instagram",insta,100) && vLen("Urgence",urgence,100)
            && vLen("Adresse",adresse,100) && vLen("Nom du référent",nom_ref,100) && vLen("Téléphone du référent",tel_ref,50)
            && vLen("Email du référent",email_ref,100) && vLen("Formation",formation,100) && vLen("Diplôme",diplome,100)
            && vLen("Autres langues parlées",langues,255)) {
                // ------------------------------------------------------------- Vérif si l'ensemble (prenom, nom, ville) existe déjà dans la BDD
                const npv = `${prenom} ${nom} - ${nom_ville}`;
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                jeune_Update(npv, id, adherent, genre, nom, prenom, ddn, id_evt, email, tel, facebook, skype, insta, urgence, adresse, id_ville, qpv, id_qpv, id_orga, nom_ref, tel_ref, email_ref, formation, niveau, diplome, niveau_anglais, langues, statut, pe, rsa, gj);
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
