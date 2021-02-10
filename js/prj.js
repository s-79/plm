$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

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
            $("#prj_res").html("<option selected value='0'>Séléctionner un projet</option>");
            ajaxListPrj("#prj_res");
        }
    });

    //-------------------------------------------------------------------------- Remplissage du champs de recherche d'projets
    ajaxListPrj("#prj_res");

    //-------------------------------------------------------------------------- Remplissage de la liste des pays
    ajaxListPays("#pays");

    //-------------------------------------------------------------------------- Remplissage de la liste des partenaires
    ajaxListPart("#partenaire");

    // ------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        //---------------------------------------------------------------------- Récupération de l'id du projet séléctionné
        const id_prj = $("#prj_res").val();
        //---------------------------------------------------------------------- (fonction à la fin) Récupération des infos du projet séléctionné
        prj_Get(id_prj);
    });
//
//     // ------------------------------------------------------------------------- ! ! ! - - C R E A T E -- !!!
//
//
//     //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) DE CREATION D'UN NOUVEL projet
//     $("#new_prj").click(function(){
//         // --------------------------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page projet (fonction ci-dessous)
//         prj_Reset();
//     });
//
//     //------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON "ENREGISTRER LA FICHE" DANS LA PAGE JEUNE
//     $('#prj_create').click(function(){
//         // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
//         let mission = "";
//         let type = "";
//         for (let i = 0; i < 3; i++) {
//             let m = `#m${i}`;
//             if($(m).is(':checked')) {
//                 mission = i;
//                 let t = `#type_m${i}`;
//                 type = $(t).val();
//             }
//         }
//         const dat = $("#date").val();
//         const id_ville = $("#ville").val();
//         contrat_ville_Change(id_ville);
//         let visio =  $("#visio").is(':checked');
//         if(visio)visio=1;else{visio=0};
//         const intitule = $("#intitule").val();
//         const id_projet = $("#projet").val();
//         const organise = $("#organise").val();
//         const nb_jeunes = $("#nb_jeunes").val();
//         const nb_pros = $("#nb_pros").val();
//         const commentaires = $("#commentaires").val();
//
//         // --------------------------------------------------------------------- Les champs obligatoires sont-ils vides ?
//         if(isNaN(mission) || !dat || !type || !id_ville || (!nb_jeunes && !nb_pros)) {
//             alert("Les champs Mission, Date, Type et Ville ainsi que le nombre de jeunes ou de pros sont obligatoires.");
//         } else {
//             // ----------------------------------------------------------------- La longueur des champs est-elles bien inférieur à celle attendue dans la BDD ?
//             if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,100)) {
//
//                 //-------------------------------------------------------------- Envoie des infos vers la BDD
//                 prj_Create(mission, dat, id_ville, type, visio, intitule, id_projet, organise, nb_jeunes, nb_pros, commentaires);
//
//             }
//         }
//     })
//
//     // ------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
//
//     //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON MODIFIER UN projet
//     $('#prj_update').click(function(){
//         // --------------------------------------------------------------------- Récupération des valeus saisies par l'utilisateur
//         const id = $('#id_prj').val();
//         let mission = "";
//         let type = "";
//         for (let i = 0; i < 3; i++) {
//             let m = `#m${i}`;
//             if($(m).is(':checked')) {
//                 mission = i;
//                 let t = `#type_m${i}`;
//                 type = $(t).val();
//             }
//         }
//         const dat = $("#date").val();
//         const id_ville = $("#ville").val();
//         let visio =  $("#visio").is(':checked');
//         if(visio)visio=1;else{visio=0};
//         const intitule = $("#intitule").val();
//         const id_projet = $("#projet").val();
//         const organise = $("#organise").val();
//         const nb_jeunes = $("#nb_jeunes").val();
//         const nb_pros = $("#nb_pros").val();
//         const commentaires = $("#commentaires").val();
//
//         if(vLen("Intitulé",intitule,100) && vLen("Organisé par...",organise,100) && vLen("Commentaire",commentaires,100)) {
//             prj_Update(id, mission, dat, id_ville, type, visio, intitule, id_projet, organise, nb_jeunes, nb_pros, commentaires);
//         }
//     })
//
//     // ------------------------------------------------------------------------- ! ! ! - - D E L E T E- - ! ! !
//
//     //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON SUPPRIMER UN ORGANISME
//     $('#prj_delete').click(function(){
//         const id = $('#id_prj').val();
//         prj_Delete(id);
//     })
});
//
// ----------------------------------------------------------------------------- ! ! ! - - F U N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- FONCTION GET
const prj_Get = (id_prj) => {
    if(!id_prj) alert("Aucun projet n'a été séléctionné")
    else {
        //---------------------------------------------------------------------- Reinitialisation des champs
        $("#youth_leader")[0].disabled = true;
        $("#nb_part")[0].disabled = true;
        $("#pays_part")[0].disabled = true;
        $("#partenaire").html("");
        $("#pays").html("");
        //---------------------------------------------------------------------- Récupération des données du projet
        ajaxPrjGet(id_prj);
        //---------------------------------------------------------------------- Vidage puis remplissage du tableau avec les noms des jeunes qui ont participé à l'projet
        // $("#tableau").html("");
        // ajaxPrjJeune(id_prj, "#tableau");
        //---------------------------------------------------------------------- Inversement des boutons en bas de page
        $("#btn_prj_create").addClass("d-none");
        $("#btn_prj_update").removeClass("d-none");
    }
}
//
// // ----------------------------------------------------------------------------- FONCTION RESET
//
// //------------------------------------------------------------------------------ Fonction de réinitialisation de la page projet
// const prj_Reset = () => {
//     //-------------------------------------------------------------------------- Réinitialisation du formulaire
//     document.getElementById("form_prj").reset();
//     $("#type_m1")[0].disabled = true;
//     $("#type_m2")[0].disabled = true;
//     //-------------------------------------------------------------------------- Remplissage de la liste des intervenants
//     ajaxListInter("#inter");
//     //-------------------------------------------------------------------------- Remplissage de la liste des villes
//     $("#ville").html("<option selected value='0'>Séléctionner la ville</option>");
//     ajaxListVille("#ville");
//     //-------------------------------------------------------------------------- Réinitialisation du champs de recherche des projets
//     $("#prj_res").html("<option selected value=''>Séléctionner un projet</option>");
//     ajaxListprj("#prj_res");
//     //-------------------------------------------------------------------------- Réinitialisation du tableau de jeunes
//     $("#tableau").html("");
//     //-------------------------------------------------------------------------- Inversement des boutons en bas de page
//     $("#btn_prj_update").addClass("d-none");
//     $("#btn_prj_create").removeClass("d-none");
// }
