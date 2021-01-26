$(function(){

    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CHANGE UN TYPE D'ORGANISME
    $("#type_orga").change(function(){
        // --------------------------------------------------------------------- Affichage des noms reliés à ce type d'organisme
        $("#nom_orga").html("<option selected value=''>Séléctionner le nom de l'organisme</option>");
        type_Change($("#type_orga").val());
    });

    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LES BOUTONS "AJOUTER" OU "MODIFIER" UN ORGANISME
    $('.close-modal').click(function(){
        // --------------------------------------------------------------------- Fermeture du modal sur lequel on vient de cliquer
        $('#modal_orga').modal('hide')
    })
    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE CREATION D'ORGANISME
    $("#btn_orga_create").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_orga_create").reset();
    })

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON DE MISE A JOUR D'ORGANISME
    $("#btn_orga_update").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_orga_update").reset();
        //---------------------------------------------------------------------- Remplissage de la liste des noms d'organisme dans le modal de modification d'organisme
        $("#select_nom_orga").html("<option selected value=''>Séléctionner l'organisme à modifier</option>");
        ajaxListOrga("#select_nom_orga");
    })

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CHANGE LORS DE LA SELECTION D'UN ORGANISME DANS LE MODAL DE MODIFICATION
    $('#select_nom_orga').change(function(){
        const id = $('#select_nom_orga').val();
        if(!id) {
            alert("Merci de séléctionner un organisme à modifier")
        } else {
            orga_Change(id);
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON AJOUTER UN ORGANISME DANS LE MODAL DE CREATION
    $('#orga_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const nom = $('#create_nom_orga').val();
        const type = $('#create_type_orga').val();

        if(verifLength("nom",nom,100)){
            // ----------------------------------------------------------------- Vérification si le nom existe déjà dans la BDD et si non envoie des infos
            orga_Create(nom, type);
        }
    })


    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN ORGANISME
    $('#orga_update').click(function(){
        const id = $('#select_nom_orga').val();
        const type = $('#update_type_orga').val();
        const nom = $('#update_nom_orga').val();
        if(!id) {
            alert("Aucun organisme n'a été séléctionné")
        } else {
            // ----------------------------------------------------------------- Envoies des données à modifier vers la BDD
            orga_Update(id, nom, type);
        }
    })
    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN ORGANISME
    $('#orga_delete').click(function(){
        const id = $('#select_nom_orga').val();
        if(!id) {
            alert("Aucun organisme n'a été séléctionné")
        } else {
            // ----------------------------------------------------------------- Envoies de l'id à supprimer vers la BDD & Vérification de la suppression
            orga_Delete(id);
        }
    })
});
