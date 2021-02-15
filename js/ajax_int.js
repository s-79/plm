// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste des intervenants */
const ajaxListIntUp = (liste, id_int) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_intUp:"v_intUp"},
        success: function(response){
            $(liste).html("<option selected value='0'>Séléctionner le nom de l'intervenant</option>")
            $(liste).append(displayList(response));
            if(id_int)$(liste).val(id_int);
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des référents */
const ajaxListRef = (liste, id_int) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_ref:"v_ref"},
        success: function(response){
            $(liste).html("<option selected value='0'>Séléctionner le nom du / de la référent-e</option>")
            $(liste).append(displayList(response));
            if(id_int)$(liste).val(id_int);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !
const int_Create = (prenom_nom, prenom, nom, actif, volontaire, ref) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom de l'intervenant-e existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_int:prenom_nom},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Il existe déjà un-e intervenant-e ce nom dans la base de données.");
            else {
                $.ajax({
                    url: "php/int.php",
                    dataType: 'JSON',
                    data : {prenom:prenom, nom:nom, actif:actif, volontaire:volontaire, ref:ref},
                    complete: function(){
                        alert("L'intervenant-e a bien été ajouté-e à la base de données.");
                        $('#modal_int_create').modal('hide');
                        //------------------------------------------------------ Réinitialisation de la liste des intervenants sur la page evt
                        ajaxListInter("#inter");
                    }
                });
            }
        }
    });
}
// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

/* ---------------------------------------------------------------------------- Changement dans le menu SELECT du menu update */
const int_Change = (id) => {
    $.ajax({
        url: 'php/evt_Get.php',
        dataType: 'JSON',
        data : {id_int:id},
        success: function(response){
            const prenom_int = response[0].prenom_int;
            const nom_int = response[0].nom_int;
            const actif = parseInt(response[0].actif);
            const volontaire = parseInt(response[0].volontaire);
            const ref = parseInt(response[0].ref);

            $("#update_prenom_int").val(prenom_int);
            $("#update_nom_int").val(nom_int);
            $("#update_actif").prop('checked', false);
            if (actif === 1) $("#update_actif").prop('checked', true);
            $("#update_volontaire").prop('checked', false);
            if (volontaire === 1) $("#update_volontaire").prop('checked', true);
            $("#update_ref").prop('checked', false);
            if (ref === 1) $("#update_ref").prop('checked', true);
        }
    });
}

const int_Update = (id, prenom, nom, actif, volontaire, ref) => {
    $.ajax({
        url: 'php/int.php',
        dataType: 'JSON',
        data : {id:id, prenom:prenom, nom:nom, actif:actif, volontaire:volontaire, ref:ref},
        complete: function(){
            alert("Les informations de l'intervenant-e ont bien été modifiées.");
            $('#modal_int_update').modal('hide');
            //------------------------------------------------------------------ Réinitialisation de la liste des intervenants sur la page evt
            ajaxListInter("#inter");
        }
    });
}

// // ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const int_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/int.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function() {
            //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_int:id},
                success: function(response){
                    const exist = parseInt(response[0].exist);
                    if(exist === 1) alert("Suppression impossible : cet-te intervenant-e est relié-e à des événements et/ou rendez-vous dans la base de données.");
                    else {
                        alert("L'intervenant-e a bien été supprimé-e de la base de données.");
                        $('#modal_int_update').modal('hide');
                        //------------------------------------------------------ Réinitialisation de la liste des intervenants sur la page evt
                        ajaxListInter("#inter");
                    }
                }
            });
        }
    });
}
