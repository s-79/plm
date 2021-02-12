$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LES BOUTONS "AJOUTER" OU "MODIFIER" UN PARTENAIRE
    $('.close-modal').click(function(){
        // --------------------------------------------------------------------- Fermeture du modal sur lequel on vient de cliquer
        $('#modal_part').modal('hide')
    })
    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CREATION de PARTENAIRE
    $("#btn_part_create").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire dans le modal Create
        document.getElementById("form_part_create").reset();
    })

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE MISE A JOUR DE PARTENAIRE
    $("#btn_part_update").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire dans le modal part_Update
        document.getElementById("form_part_update").reset();
        //---------------------------------------------------------------------- Réinitialisation et remplissage de la liste des noms de PARTENAIRE dans le modal de modification de partenaire
        ajaxListPart("#select_nom_part");
    })

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON AJOUTER UN PARTENAIRE DANS LE MODAL DE CREATION
    $('#part_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeurs saisies par l'utilisateur
        const nom = $("#create_nom_part").val();
        const contact = $("#create_contact_part").val();
        const tel = $("#create_tel_part").val();
        const mail = $("#create_mail_part").val();
        const commentaires = $("#create_comm_part").val();
        // -------------------------------------------------------------------- Vérification si les longueurs sont ok pour la BDD puis vérif si le nom existe déjà dans la BDD et si non envoie des infos
        if(vLen("Nom de la structure partenaire",nom,100) && vLen("Nom du contact",contact,100) && vLen("Téléphone",tel,100) && vLen("Email",mail,100) && vLen("Commentaires",commentaires,255)) {
            part_Create(nom, contact, tel, mail, commentaires);
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CHANGE LORS DE LA SELECTION D'UN PARTENAIRE DANS LE MODAL DE MODIFICATION
    $('#select_nom_part').change(function(){
        const id = $('#select_nom_part').val();
        if(id) part_Change(id);
    })

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN PARTENAIRE
    // $('#part_update').click(function(){
    //     const id = $('#select_nom_part').val();
    //     const type = $('#update_type_part').val();
    //     const nom = $('#update_nom_part').val();
    //     if(!id) alert("Aucun partenaire n'a été séléctionné");
    //     else {
    //         if(!type) alert("Aucun type de partenaire n'a été séléctionné");
    //         // ------------------------------------------------------------- Envoies des données à modifier vers la BDD après vérif de la longueur du nom
    //         else {
    //             if(vLen("Nom du partenaire",nom,100)) part_Update(id, nom, type);
    //         }
    //     }
    // })
    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN PARTENAIRE
    // $('#part_delete').click(function(){
    //     const id = $('#select_nom_part').val();
    //     if(!id) alert("Aucun partenaire n'a été séléctionné")
    //     // --------------------------------------------------------------------- Envoies de l'id à supprimer vers la BDD & Vérification de la suppression
    //     else {part_Delete(id);}
    // })
});
