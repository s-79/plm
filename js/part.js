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
        $("#select_nom_part").html("<option selected value=''>Séléctionner le partenaire à modifier</option>");
        ajaxListPart("#select_nom_part");
    })

    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

    // ------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON AJOUTER UN PARTENAIRE DANS LE MODAL DE CREATION
    // $('#part_create').click(function(){
    //     // --------------------------------------------------------------------- Récupération des valeurs saisies par l'utilisateur
    //     const nom = $('#create_nom_part').val();
    //     const type = $('#create_type_part').val();
    //
    //     if(!type)alert("Merci de séléctionner un type de partenaire")
    //     else {
    //         // ----------------------------------------------------------------- Vérification si la longueur ets ok pour la BDD puis vérif si le nom existe déjà dans la BDD et si non envoie des infos
    //         if(vLen("Nom du partenaire",nom,100))part_Create(nom, type);
    //     }
    // })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CHANGE LORS DE LA SELECTION D'UN PARTENAIRE DANS LE MODAL DE MODIFICATION
    $('#select_nom_part').change(function(){
        const id = $('#select_nom_part').val();
        if(id) part_Change(id);
    })

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN PARTENAIRE
    $('#part_update').click(function(){
        const id = $('#select_nom_part').val();
        const type = $('#update_type_part').val();
        const nom = $('#update_nom_part').val();
        if(!id) alert("Aucun partenaire n'a été séléctionné");
        else {
            if(!type) alert("Aucun type de partenaire n'a été séléctionné");
            // ------------------------------------------------------------- Envoies des données à modifier vers la BDD après vérif de la longueur du nom
            else {
                if(vLen("Nom du partenaire",nom,100)) part_Update(id, nom, type);
            }
        }
    })
    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN PARTENAIRE
    $('#part_delete').click(function(){
        const id = $('#select_nom_part').val();
        if(!id) alert("Aucun partenaire n'a été séléctionné")
        // --------------------------------------------------------------------- Envoies de l'id à supprimer vers la BDD & Vérification de la suppression
        else {part_Delete(id);}
    })
});

// ---------------------------------------------------------------------------- ! ! ! - - R E S E T (F U N C T I O N)- - ! ! !

//------------------------------------------------------------------------------ Fonction de réinitialisation de la liste des types et noms de partenaire sur la page jeune
const part_Reset = () => {
    let types = ["Mission Locale", "Réseau IJ (BIJ, PIJ, CIDJ)", "Club de prévention", "Pôle Emploi", "Centre Paris Anim ou EPJ (Paris)", "Internet", "Bouche à oreilles / ami", "École de la deuxième chance", "Membre de la Plateforme (Concordia, SJ, …)", "Autres structures socio-éducatives", "Etat et collectivités (DDCS…)", "Foyer de jeunes travailleurs", "Autres"];
    let init = "<option selected value='0'>Séléctionner le type de partenaire</option>"
    for (type of types) {init += `<option value="${type}">${type}</option>`;}
    $("#type_part").html(init);
    $("#nom_part").html("<option selected value='0'>Séléctionner le nom du partenaire</option>");
    $("#nom_part")[0].disabled = true;
};
