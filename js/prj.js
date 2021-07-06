$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

    // ------------------------------------------------------------------------- Mise en valeur du menu actuel
    $("#menu_prj").toggleClass("nav-link-toggle");

    //-------------------------------------------------------------------------- Récupérarion et suppression d'un éventuel id de projet stocké (si l'utilisateur a cliqué sur une lige du tableau dans acc)
    let id_prj_storage = sessionStorage.getItem("id_prj");
    sessionStorage.removeItem('id_prj');
    //-------------------------------------------------------------------------- (fonction à la fin) Si il y un id, on lance la fonction Get
    if(id_prj_storage) prj_Get(id_prj_storage);

    //-------------------------------------------------------------------------- Outil de recherche d'évenements
    $("#prj_search").keyup(function(){
        let search = $("#prj_search").val();
        if(search) {
            prj_Search(search);
        } else {
            //------------------------------------------------------------------ Réinitialisation du champs de recherche des projets
            ajaxListPrj("#prj_res");
        }
    });
    //-------------------------------------------------------------------------- Remplissage du champs de recherche de projets
    ajaxListPrj("#prj_res");
    //-------------------------------------------------------------------------- Remplissage de la liste des pays
    ajaxListPays("#pays");
    //-------------------------------------------------------------------------- Remplissage de la liste des partenaires
    ajaxListPart("#partenaire");

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Inversement des tableaux
        $("#div_agenda").addClass("d-none");
        $("#div_tableau, #form_prj").removeClass("d-none");
        //---------------------------------------------------------------------- Récupération de l'id du projet séléctionné
        const id_prj = $("#prj_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos du projet séléctionné
        prj_Get(id_prj);
    });

    // ------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !
    $("#type").change(function(){
        //---------------------------------------------------------------------- Récupération du type séléctionné
        const type = $("#type").val();
        if (type === "Échange de jeunes") {
            $("#youth_leader")[0].disabled = false;
            $("#pays_part")[0].disabled = false;
        } else {
            $("#youth_leader")[0].disabled = true;
            $("#pays_part")[0].disabled = true;
        }
    });

    $("#pays").change(function(){
        //---------------------------------------------------------------------- Récupération de l'id du pays séléctionné
        const id_pays = $("#pays").val();
        //---------------------------------------------------------------------- Récupération du nom du pays
        pays_Change(id_pays);
    });

    $("#periode").click(function(){
        //---------------------------------------------------------------------- Inversement des tableaux
        $("#div_agenda").toggleClass("d-none");
        $("#div_tableau, #form_prj").toggleClass("d-none");
        //---------------------------------------------------------------------- Vidage puis remplissage du tableau avec dates des projets à venir
        ajaxPrjAgenda("#agenda");
    });



    // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) DE CREATION D'UN NOUVEAU PROJET
    $("#new_prj").click(function(){
        // --------------------------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page projet (fonction ci-dessous)
        prj_Reset();
    });

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
    $('#prj_create').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const type = $("#type").val();
        const intitule = $("#intitule").val();
        const id_part = $("#partenaire").val();
        const id_pays = $("#pays").val();
        const pays = $("#nom_pays_none").val();
        const ville = $("#ville").val();
        const debut = $("#debut").val();
        const fin = $("#fin").val();
        const duree = $("#duree").val();
        const them = $("#them").val();
        const commentaires = $("#commentaires").val();
        const youth_leader = $("#youth_leader").val();
        const nb_participants = $("#nb_part").val();
        const pays_participants = $("#pays_part").val();
        const nom_prj = `${intitule} - ${pays} - ${debut.slice(2,7)} => ${fin.slice(2,7)}`;

        // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
        if(!type || !intitule || !id_part || !id_pays || !debut || !fin) {
            alert("Les champs Type, Intitulé, Partenaire et Pays ainsi que le début et la fin de la période sont obligatoires.");
        } else {
            // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
            if(vLen("Intitulé",intitule,100) && vLen("Ville",ville,100) && vLen("Thématique",them,255) && vLen("Commentaire",commentaires,255) && vLen("Youth Leader",youth_leader,50) && vLen("Pays Participants",pays_participants,255)) {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                prj_Create(nom_prj, type, intitule, id_part, id_pays, ville, debut, fin, duree, them, commentaires, youth_leader, nb_participants, pays_participants);
            }
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN projet
    $('#prj_update').click(function(){
        // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
        const id = $('#id_prj').val();
        const type = $("#type").val();
        const intitule = $("#intitule").val();
        const id_part = $("#partenaire").val();
        const id_pays = $("#pays").val();
        const ville = $("#ville").val();
        const debut = $("#debut").val();
        const fin = $("#fin").val();
        const duree = $("#duree").val();
        const them = $("#them").val();
        const commentaires = $("#commentaires").val();
        const youth_leader = $("#youth_leader").val();
        const nb_participants = $("#nb_part").val();
        const pays_participants = $("#pays_part").val();

        // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
        if(vLen("Intitulé",intitule,100) && vLen("Ville",ville,100) && vLen("Thématique",them,255) && vLen("Commentaire",commentaires,255) && vLen("Youth Leader",youth_leader,50) && vLen("Pays Participants",pays_participants,255)) {
            prj_Update(id, type, intitule, id_part, id_pays, ville, debut, fin, duree, them, commentaires, youth_leader, nb_participants, pays_participants);
        }
    })

    // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN ORGANISME
    $('#prj_delete').click(function(){
        const id = $('#id_prj').val();
        prj_Delete(id);
    })
});
//
// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const prj_Get = (id_prj) => {
    if(!id_prj) alert("Aucun projet n'a été séléctionné")
    else {
        //---------------------------------------------------------------------- Affichage du projet séléctionné lorsqu'on à vient de la page jeune en cliquant dans le tableau
        ajaxListPrj("#prj_res", id_prj);
        //---------------------------------------------------------------------- Reinitialisation des champs
        $("#youth_leader")[0].disabled = true;
        // $("#nb_part")[0].disabled = true;
        $("#pays_part")[0].disabled = true;
        // $("#partenaire").html("");
        // $("#pays").html("");
        //---------------------------------------------------------------------- Récupération des données du projet
        ajaxPrjGet(id_prj);
        //---------------------------------------------------------------------- Vidage puis remplissage du tableau avec les noms des jeunes qui ont participé à l'projet
        $("#tableau").html("");
        ajaxPrjJeune(id_prj, "#tableau");
        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_prj_create").addClass("d-none");
        $("#btn_prj_update").removeClass("d-none");
    }
}

// ----------------------------------------------------------------------------- FONCTION RESET

//------------------------------------------------------------------------------ Fonction de réinitialisation de la page projet
const prj_Reset = () => {
    //-------------------------------------------------------------------------- Réinitialisation du formulaire
    document.getElementById("form_prj").reset();
    //-------------------------------------------------------------------------- Remplissage du champs de recherche de projets
    ajaxListPrj("#prj_res");
    //-------------------------------------------------------------------------- Remplissage de la liste des pays
    ajaxListPays("#pays");
    //-------------------------------------------------------------------------- Remplissage de la liste des partenaires
    ajaxListPart("#partenaire");
    //-------------------------------------------------------------------------- Réinitialisation du tableau de jeunes
    $("#tableau").html("");
    //-------------------------------------------------------------------------- Inversement des boutons en bas de page
    $("#btn_prj_update").addClass("d-none");
    $("#btn_prj_create").removeClass("d-none");
}
