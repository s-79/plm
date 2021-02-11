// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !
/* ---------------------------------------------------------------------------- Remplissage de la liste Orga - Récup données & append */
const ajaxListOrga = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_orga:"v_orga"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner le nom de l'organisme</option>")
            $(liste).append(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

/* ----------------------------------------------------------------------------  Changement dans le menu type de la page jeune */
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

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const orga_Create = (nom, type) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom de l'organisme existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_orga:nom},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Il existe déjà un organisme qui porte ce nom dans la base de données.");
            else {
                $.ajax({
                    url: 'php/orga.php',
                    dataType: 'JSON',
                    data : {nom:nom, type:type},
                    complete: function(){
                        alert("L'organisme a bien été ajouté à la base de données.");
                        //------------------------------------------------------ Réinitialisation du champs nom_orga et fermeture du modal
                        orga_Reset("create");
                    }
                });
            }
        }
    });
}
// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

/* ---------------------------------------------------------------------------- Changement dans le menu SELECT du modal update */
const orga_Change = (id) => {
    $.ajax({
        url: 'php/orga_Get.php',
        dataType: 'JSON',
        data : {id:id},
        success: function(response){
            const type_orga = response[0].type_orga;
            const id_orga = response[0].id_orga;
            const nom_orga = response[0].nom_orga;
            $("#update_type_orga").val(type_orga);
            $("#update_nom_orga").val(nom_orga);
        }
    });
}

const orga_Update = (id, nom, type) => {
    $.ajax({
        url: 'php/orga.php',
        dataType: 'JSON',
        data : {id:id, nom:nom, type:type},
        complete: function(){
            alert("L'organisme a bien été modifié.");
            //------------------------------------------------------ Réinitialisation du champs nom_orga et fermeture du modal
            orga_Reset("update");
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
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
                    if(exist === 1) alert("Suppression impossible : des jeunes sont encore reliés à cet organisme dans la base de données.");
                    else {
                        alert("L'organisme a bien été supprimé de la base de données.");
                        //------------------------------------------------------ Réinitialisation du champs nom_orga et fermeture du modal
                        orga_Reset("update");
                    }
                }
            });
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - R E S E T - - ! ! !
const orga_Reset = (modal) => {
    $("#type_orga").val("");
    $("#nom_orga").html("<option selected value='0'>Séléctionner le nom de l'organisme</option>");
    $("#nom_orga")[0].disabled = true;
    const div_modal = `#modal_orga_${modal}`;
    $(div_modal).modal('hide');
}
