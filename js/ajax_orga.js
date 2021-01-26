/* ---------------------------------------------------------------------------- ORGANISME : Changement dans le menu type de la page jeune */
const type_Change = (type) => {
    $.ajax({
        url: 'php/jeune_Populate.php',
        dataType: 'JSON',
        data : {orga_type:type},
        success: function(response){
            const len = response.length;
            if(len === 0) {
                $("#nom_orga")[0].disabled = true;
                $('#modal_orga').modal('show');
                // ------------------------------------------------------------- Afficher la div qui dit qu'il n'y a pas d'orga de ce type
                $("#txt_modal_orga").removeClass("d-none");
                $("#txt_modal_orga").addClass("d-block");
            } else {
                $("#nom_orga").append(displayList(response));
                $("#nom_orga")[0].disabled = false;
            }
        }
    });
}

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

/* ----------------------------------------------------------------------------- ORGANISME : CRÉATION */
const orga_Create = (nom, type) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom de l'organisme existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_orga:nom},
        success: function(response){
            const statut = parseInt(response[0].statut);
            if(statut === 1) {
                alert("Création impossible : Il existe déjà un organisme qui porte ce nom dans la base de données.");
            } else {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                $.ajax({
                    url: 'php/orga_Create.php',
                    dataType: 'JSON',
                    data : {nom:nom, type:type},
                    complete: function(response){
                        alert(response.responseText);
                        //------------------------------------------------------ Fermeture du modal
                        $('#modal_orga_create').modal('hide');
                        // //--------------------------------------------------- Remplissage de la liste des noms d'organisme
                        $("#nom_orga").html("<option selected value=''>Séléctionner le nom de l'organisme</option>");
                        ajaxListOrga("#nom_orga");
                    }
                });
            }
        }
    });
}
/* ---------------------------------------------------------------------------- ORGANISME : MODIFICATION */

const orga_Update = (id, nom, type) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom de l'organisme existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_orga:nom},
        success: function(response){
            const statut = parseInt(response[0].statut);
            if(statut === 1) {
                alert("Modification impossible : Il existe déjà un organisme qui porte ce nom dans la base de données.");
            } else {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                $.ajax({
                    url: 'php/orga_Update.php',
                    dataType: 'JSON',
                    data : {id:id, nom:nom, type:type},
                    complete: function(response){
                        alert(response.responseText);
                        //------------------------------------------------------------------ Fermeture du modal
                        $('#modal_orga_update').modal('hide');
                        //------------------------------------------------------------------ Remplissage de la liste des noms d'organisme
                        $("#nom_orga").html("<option selected value=''>Séléctionner le nom de l'organisme</option>");
                        ajaxListOrga("#nom_orga");
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
        url: "php/delete.php",
        dataType: 'JSON',
        data : {id_orga:id},
        complete: function() {
            //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_orga:id},
                success: function(response){
                    const statut = parseInt(response[0].statut);
                    if(statut === 0) {
                        alert("Suppression éffectuée.");
                        //------------------------------------------------------ Fermeture du modal
                        $('#modal_orga_update').modal('hide');
                        //------------------------------------------------------ Remplissage de la liste des noms d'organisme
                        $("#nom_orga").html("<option selected value=''>Séléctionner le nom de l'organisme</option>");
                        ajaxListOrga("#nom_orga");
                    } else {
                        alert("Suppression impossible : des jeunes sont encore reliés à cet organisme dans la base de données.");
                    }
                }
            });
        }
    });
}
