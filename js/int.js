$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LES BOUTONS "AJOUTER" OU "MODIFIER" UNE INTERVENANT-E
    $('.close-modal').click(function(){
        // --------------------------------------------------------------------- Fermeture du modal sur lequel on vient de cliquer
        $('#modal_int').modal('hide')
    })
    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CREATION D'INTERVENANT-E
    $("#btn_int_create").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire dans le modal Create_update
        document.getElementById("form_int_create").reset();
    })

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE MISE A JOUR D'INTERVENANT-E
    $("#btn_int_update").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire dans le modal int_Create
        document.getElementById("form_int_update").reset();
        //---------------------------------------------------------------------- Réinitialisation et remplissage de la liste des noms d'intervenant dans le modal de modification d'intervenant
        ajaxListIntUp("#select_nom_int");
    })

// ------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON AJOUTER UN INTERVENANT DANS LE MODAL DE CREATION
    $('#int_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeurs saisies par l'utilisateur
        const prenom = $('#create_prenom_int').val();
        const nom = $('#create_nom_int').val();
        const prenom_nom = `${prenom} ${nom}`;
        let actif =  $("#create_actif").is(':checked');
        if(actif)actif=1;else{actif=0};
        let volontaire =  $("#create_volontaire").is(':checked');
        if(volontaire)volontaire=1;else{volontaire=0};

        // -------------------------------------------------------------------- Vérification si la longueur est ok pour la BDD puis vérif si le nom existe déjà dans la BDD et si non envoie des infos
        if(vLen("Prénom de l'intervenant",prenom,100) && vLen("Nom de l'intervenant",nom,100)) int_Create(prenom_nom, prenom, nom, actif, volontaire);
    })

    // --------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CHANGE LORS DE LA SELECTION D'UN INTERVENANT DANS LE MODAL DE MODIFICATION
    $('#select_nom_int').change(function(){
        const id = $('#select_nom_int').val();
        if(id) int_Change(id);
    })

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN INTERVENANT
    $('#int_update').click(function(){
        const id = $('#select_nom_int').val();
        const prenom = $('#update_prenom_int').val();
        const nom = $('#update_nom_int').val();
        const prenom_nom = `${prenom} ${nom}`;
        let actif =  $("#update_actif").is(':checked');
        if(actif)actif=1;else{actif=0};
        let volontaire =  $("#update_volontaire").is(':checked');
        if(volontaire)volontaire=1;else{volontaire=0};
        if(!id) alert("Aucun intervenant-e n'a été séléctionné-e");
        // -------------------------------------------------------------------- Vérification si la longueur est ok pour la BDD et si oui envoie des infos
        else {if(vLen("Prénom de l'intervenant",prenom,100) && vLen("Nom de l'intervenant",nom,100)) int_Update(id, prenom, nom, actif, volontaire);}
    })
    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN INTERVENANT
    $('#int_delete').click(function(){
        const id = $('#select_nom_int').val();
        if(!id) alert("Aucun intervenant-e n'a été séléctionné-e")
        // --------------------------------------------------------------------- Envoies de l'id à supprimer vers la BDD & Vérification de la suppression
        else {int_Delete(id);}
    })
});
