$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id de pro stocké (si l'utilisateur a cliqué sur une ligne du tableau dans evt)
    let id_pro_storage = sessionStorage.getItem("id_pro");
    sessionStorage.removeItem('id_pro');
    //-------------------------------------------------------------------------- (fonction à la fin) Si il y un id, on lance la fonction Get
    if(id_pro_storage) pro_Get(id_pro_storage);

    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#pro_search").keyup(function(){
        let search = $("#pro_search").val();
        if(search) {
            pro_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des pros
            ajaxListpro("#pro_res");
        }
    });
    //-------------------------------------------------------------------------- Remplissage du champs de recherche de pros
    ajaxListPro("#pro_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des sensibilisations pro
    ajaxListEvtPro("#sensibilisation");

    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    ajaxListVille("#ville");


// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id du pro séléctionné
        const id_pro = $("#pro_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos du pro séléctionné
        pro_Get(id_pro);
    });

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CHANGE SUR LE SELECT VILLE
    $("#ville").change(function(){
        //---------------------------------------------------------------------- Récupération de l'id de la ville séléctionnée
        const id_ville = $("#ville").val();
        //---------------------------------------------------------------------- Récupération du nom de la ville dans la div nom_ville_none
        contrat_ville_Change(id_ville);
    });


// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) DE CREATION D'UN NOUVEAU pro
    $("#new_pro").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page pro (fonction ci-dessous)
        pro_Reset();
    });

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE PRO
    $('#pro_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const prenom = $("#prenom").val();
        const nom = $("#nom").val();
        const fonction = $("#fonction").val();
        const id_evt = $("#sensibilisation").val();
        let mailing =  $("#mailing").is(':checked');
        if(mailing)mailing=1;else{mailing=0};
        const mail = $("#email").val();
        const tel = $("#tel").val();
        const commentaires = $("#commentaires").val();
        const id_orga = $("#nom_orga").val();
        const nom_orga = $("#nom_orga_none").val();
        const id_ville = $("#ville").val();
        const nom_ville = $("#nom_ville_none").val();
        const nom_pro = `${prenom} - ${nom_orga} - ${nom_ville}`;

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!prenom || !nom || !id_evt || !id_orga || !id_ville || (!mail && !tel)) {
            alert("Les champs Prénom, Nom, Sensibilisation, Nom de l'organisme et Ville ainsi que Tel ou Mail sont obligatoires.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Prénom",prenom,100) && vLen("Nom",nom,100) && vLen("Fonction",fonction,100) && vLen("Email",mail,100) && vLen("Téléphone",tel,100) && vLen("Commentaires",commentaires,255)) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                pro_Create(nom_pro, prenom, nom, fonction, id_evt, mailing, mail, tel, commentaires, id_orga, id_ville);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN pro
    $('#pro_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $('#id_pro').val();
        const prenom = $("#prenom").val();
        const nom = $("#nom").val();
        const fonction = $("#fonction").val();
        const id_evt = $("#sensibilisation").val();
        let mailing =  $("#mailing").is(':checked');
        if(mailing)mailing=1;else{mailing=0};
        const mail = $("#email").val();
        const tel = $("#tel").val();
        const commentaires = $("#commentaires").val();
        const id_orga = $("#nom_orga").val();
        const nom_orga = $("#nom_orga_none").val();
        const id_ville = $("#ville").val();
        const nom_ville = $("#nom_ville_none").val();

        // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
        if(vLen("Prénom",prenom,100) && vLen("Nom",nom,100) && vLen("Fonction",fonction,100) && vLen("Email",mail,100) && vLen("Téléphone",tel,100) && vLen("Commentaires",commentaires,255)) {
            pro_Update(id, prenom, nom, fonction, id_evt, mailing, mail, tel, commentaires, id_orga, id_ville);
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN ORGANISME
    $('#pro_delete').click(function(){
        const id = $('#id_pro').val();
        pro_Delete(id);
    })
});

// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const pro_Get = (id_pro) => {
    if(!id_pro) alert("Aucun.e professionel.le n'a été séléctionné.e")
    else {
        //---------------------------------------------------------------------- Affichage du pro séléctionné lorsqu'on à vient de la page jeune en cliquant dans le tableau
        ajaxListPro("#pro_res", id_pro);
        //---------------------------------------------------------------------- Récupération des données du pro
        ajaxProGet(id_pro);
        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_pro_create").addClass("d-none");
        $("#btn_pro_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page pro
const pro_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation du formulaire
    document.getElementById("form_pro").reset();
//------------------------------------------------------------------------------ Désactivation du champs nom_orga
    $("#nom_orga")[0].disabled = true;
    //-------------------------------------------------------------------------- Remplissage du champs de recherche de pros
    ajaxListPro("#pro_res");
    //-------------------------------------------------------------------------- Remplissage de la liste des sensibilisations pro
    ajaxListEvtPro("#sensibilisation");
    //-------------------------------------------------------------------------- Remplissage de la liste des villes
    ajaxListVille("#ville");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_pro_update").addClass("d-none");
    $("#btn_pro_create").removeClass("d-none");
}
