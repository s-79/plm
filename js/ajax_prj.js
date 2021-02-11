// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste projet pour l'outil de recherche de la page prj */
const ajaxListPrj = (liste) => {
    $.ajax({
        url: 'php/populate.php',
        dataType: 'JSON',
        data : {v_prj:"v_prj"},
        success: function(response){
            $(liste).html("<option selected value='0'>Séléctionner un projet</option>")
            $(liste).append(displayList(response));
            }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche de projet */
const prj_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {texte_prj:search},
    success: function(response){
        $("#prj_res").html(displayList(response));
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des Pays */
const ajaxListPays = (liste, id_pays) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_pays:"pays"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un pays</option>")
            $(liste).append(displayList(response));
            if(id_pays)$(liste).val(id_pays);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !
const ajaxPrjGet = (id_prj) => {
    $.ajax({
        url: 'php/prj_Get.php',
        dataType: 'JSON',
        data : {id:id_prj},
        success: function(response){
            const id = response[0].id;
            const type = response[0].type;
            const intitule = response[0].intitule;
            const id_part = response[0].id_part;
            const nom_part = response[0].nom_part;
            const id_pays = response[0].id_pays;
            const nom_pays = response[0].nom_pays;
            const ville = response[0].ville;
            const debut = response[0].debut;
            const fin = response[0].fin;
            const duree = response[0].duree;
            const them = response[0].them;
            const commentaires = response[0].commentaires;
            const youth_leader = response[0].youth_leader;
            const nb_participants = response[0].nb_participants;
            const pays_participants = response[0].pays_participants;

            $("#id_prj").val(id);
            $("#type").val(type);
            if (type === "Échange de jeunes") {
                $("#youth_leader")[0].disabled = false;
                $("#nb_part")[0].disabled = false;
                $("#pays_part")[0].disabled = false;
            }
            $("#intitule").val(intitule);
            ajaxListPart("#partenaire", id_part);
            ajaxListPays("#pays", id_pays);
            $("#ville").val(ville);
            $("#debut").val(debut);
            $("#fin").val(fin);
            $("#duree").val(duree);
            $("#them").val(them);
            $("#commentaires").val(commentaires);
            $("#youth_leader").val(youth_leader);
            $("#nb_part").val(nb_participants);
            $("#pays_part").val(pays_participants);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des jeunes en fonction de l'id du projet
// const ajaxprjJeune = (id_prj, liste) => {
//     $.ajax({
//         url: "php/prj_Get.php",
//         dataType: 'JSON',
//         data : {id_prj:id_prj},
//         success: function(response){
//             const len = response.length;
//             let res = "";
//             for (let i = 0; i < len; i++) {
//                 const id = response[i].id;
//                 const prenom = response[i].prenom;
//                 const nom = response[i].nom;
//                 const nom_ville = response[i].nom_ville;
//                 const acc = response[i].acc;
//                 res += `<tr style="cursor: pointer" onclick="id_jeune_storage(${id})"><th scope="row">${id}</th><td>${prenom}</td><td>${nom}</td><td>${nom_ville}</td><td>${acc}</td></tr>`;
//             }
//             $(liste).append(res);
//         }
//     });
// }

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const prj_Create = (mission, dat, id_ville, type, visio, intitule, id_projet, organise, nb_jeunes, nb_pros, commentaires) => {
    $.ajax({
        url: 'php/prj.php',
        dataType: 'JSON',
        data : {mission:mission, dat:dat, id_ville:id_ville, type:type, visio:visio, intitule:intitule, id_projet:id_projet, organise:organise, nb_jeunes:nb_jeunes, nb_pros:nb_pros, commentaires:commentaires},
        complete: function(){
            //------------------------------------------------------------------ Récupération du nom de la ville et création du nom du projet
            const nom_ville = $("#nom_ville_none").val();
            const nom_prj = `${dat} - ${type} - ${nom_ville}`;
            //------------------------------------------------------------------ Récupération de l'id du projet créé
            //------------------------------------------------------------------ Puis récupération des intervenants et association avec l'évenemnt dans la table intervenir
            prj_Get_Id(nom_prj);

            alert("L'projet a bien été ajouté à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des projets
            prj_Reset();
        }
    });
}

//----------------------------------------------------------------------------- Récupération de l'id du projet créé
// const prj_Get_Id = (nom_prj) => {
//     $.ajax({
//         url: "php/prj_Get.php",
//         dataType: 'JSON',
//         data : {nom_prj:nom_prj},
//         success: function(response){
//             const id_prj = response[0].id;
//             prj_Get_Inter(id_prj);
//         }
//     });
// }

// // ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !
//
// const prj_Update = (id, mission, dat, id_ville, type, visio, intitule, id_projet, organise, nb_jeunes, nb_pros, commentaires) => {
//     $.ajax({
//         url: 'php/prj.php',
//         dataType: 'JSON',
//         data : {id:id, mission:mission, dat:dat, id_ville:id_ville, type:type, visio:visio, intitule:intitule, id_projet:id_projet, organise:organise, nb_jeunes:nb_jeunes, nb_pros:nb_pros, commentaires:commentaires},
//         complete: function(){
//             //------------------------------------------------------------------ Suppression des associations entre intervenants et cet projet dans la table intervenir
//             //------------------------------------------------------------------ Puis récupération des intervenants et association avec l'évenemnt dans la table intervenir
//             prj_Delete_Int(id);
//
//             alert("L'projet a bien été modifié.");
//             //----------------------------------------------------------------- Réinitialisation de la pages des projets
//             prj_Reset();
//
//         }
//     });
// }
//
// //----------------------------------------------------------------------------- Suppression des associations entre intervenants et cet projet dans la table intervenir
// const prj_Delete_Int = (id_prj) => {
//     $.ajax({
//         url: "php/prj.php",
//         dataType: 'JSON',
//         data : {id_prj_del_int:id_prj},
//         complete: function(){
//             prj_Get_Inter(id_prj);
//         }
//     });
// }
//
// // ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
// const prj_Delete = (id) => {
//     //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
//     $.ajax({
//         url: "php/prj.php",
//         dataType: 'JSON',
//         data : {id_del:id},
//         complete: function() {
//             //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
//             $.ajax({
//                 url: "php/exist.php",
//                 dataType: 'JSON',
//                 data : {id_prj:id},
//                 success: function(response){
//                     const exist = parseInt(response[0].exist);
//                     if(exist === 1) alert("Suppression impossible : l'évenement est relié à des jeunes ou des intervenants dans la BDD.");
//                     else {
//                         alert("L'projet a bien été supprimé de la base de données.");
//                         //------------------------------------------------------ Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction dans orga.js)
//                         prj_Reset();
//                     }
//                 }
//             });
//         }
//     });
// }
//
// // ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !
//
// // ----------------------------------------------------------------------------- Stockage de l'id du jeune et envoie vers la page jeune (acc)
// const id_jeune_storage = (id, location) => {
//     sessionStorage.setItem('id_jeune', id);
//     document.location='index.php';
// }
