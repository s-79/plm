/* ---------------------------------------------------------------------------- ORGANISME : Changement dans le menu type de la page jeune */
const type_Change = (type) => {
    $.ajax({
        url: 'php/populate.php',
        dataType: 'JSON',
        data : {orga_type:type},
        success: function(response){
            const len = response.length;
            // ----------------------------------------------------------------- S'il n'y a pas d'organisme attécha à ce type d'organisme, on grose la case nom et on affiche le modal
            if(len === 0) {
                $("#nom_orga")[0].disabled = true;
                $('#modal_orga').modal('show');
                // ------------------------------------------------------------- Ajouter au modal la div qui dit qu'il n'y a pas d'orga de ce type
                $("#txt_modal_orga").removeClass("d-none");
                $("#txt_modal_orga").addClass("d-block");
            } else {
                $("#nom_orga").append(displayList(response));
                $("#nom_orga")[0].disabled = false;
            }
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste Orga - Récup données & append */
const ajaxListOrga = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_orga:"v_orga"},
        success: function(response){
            $(liste).append(displayList(response));
        }
    });
}

/* ----------------------------------------------------------------------------- ORGANISME : CRÉATION */
const orga_Create = (nom, type) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom de l'organisme existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_orga:nom},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) {
                alert("Création impossible : Il existe déjà un organisme qui porte ce nom dans la base de données.");
            } else {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                $.ajax({
                    url: 'php/orga.php',
                    dataType: 'JSON',
                    data : {nom:nom, type:type},
                    complete: function(){
                        alert("L'organisme a bien été ajouté à la base de données.");
                        //------------------------------------------------------ Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction ci-dessous)
                        typeOrga_Reset();
                        //------------------------------------------------------ Fermeture du modal
                        $('#modal_orga_create').modal('hide');
                    }
                });
            }
        }
    });
}

/* ---------------------------------------------------------------------------- ORGANISME : MODIFICATION */

/* ---------------------------------------------------------------------------- ORGANISME : Changement dans le menu SELECT du menu update */
const orga_Change = (id) => {
    $.ajax({
        url: 'php/orga_Get.php',
        dataType: 'JSON',
        data : {id:id},
        success: function(response){
            // ---------------------------------------------------------------- Récupération des données
            const type_orga = response[0].type_orga;
            const id_orga = response[0].id_orga;
            const nom_orga = response[0].nom_orga;
            // ---------------------------------------------------------------- Remplissage des champs
            $("#update_type_orga").val(type_orga);
            $("#update_nom_orga").val(nom_orga);
        }
    });
}

const orga_Update = (id, nom, type) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom de l'organisme existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_orga:nom},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) {
                alert("Modification impossible : Il existe déjà un organisme qui porte ce nom dans la base de données.");
            } else {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                $.ajax({
                    url: 'php/orga.php',
                    dataType: 'JSON',
                    data : {id:id, nom:nom, type:type},
                    complete: function(){
                        alert("L'organisme a bien été modifié.");
                        //------------------------------------------------------ Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction ci-dessous)
                        typeOrga_Reset();
                        //------------------------------------------------------ Fermeture du modal
                        $('#modal_orga_update').modal('hide');
                    }
                });
            }
        }
    });
}

/* ---------------------------------------------------------------------------- ORGANISME : SUPPRESSION */
const orga_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/orga.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function() {
            //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_orga:id},
                success: function(response){
                    const exist = parseInt(response[0].exist);
                    if(exist === 0) {
                        alert("L'organisme a bien été supprimé de la base de données.");
                        //------------------------------------------------------ Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction ci-dessous)
                        typeOrga_Reset();
                        //------------------------------------------------------ Fermeture du modal
                        $('#modal_orga_update').modal('hide');
                    } else {
                        alert("Suppression impossible : des jeunes sont encore reliés à cet organisme dans la base de données.");
                    }
                }
            });
        }
    });
}

//------------------------------------------------------------------------------ Fonction de réinitialisation de la liste des types et noms d'organisme sur la page jeune
const typeOrga_Reset = () => {
    let types = ["Mission Locale", "Réseau IJ (BIJ, PIJ, CIDJ)", "Club de prévention", "Pôle Emploi", "Centre Paris Anim ou EPJ (Paris)", "Internet", "Bouche à oreilles / ami", "École de la deuxième chance", "Membre de la Plateforme (Concordia, SJ, …)", "Autres structures socio-éducatives", "Etat et collectivités (DDCS…)", "Foyer de jeunes travailleurs", "Autres"];
    let init = "<option selected value='0'>Séléctionner le type d'organisme</option>"
    for (type of types) {init += `<option value="${type}">${type}</option>`;}
    $("#type_orga").html(init);
    $("#nom_orga").html("<option selected value='0'>Séléctionner le nom de l'organisme</option>");
    $("#nom_orga")[0].disabled = true;
};
