// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste des partenaires */
const ajaxListPart = (liste, id_part) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_part:"part"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un partenaire</option>")
            $(liste).append(displayList(response));
            if(id_part)$(liste).val(id_part);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const part_Create = (nom, contact, tel, mail, commentaires) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom du partenaire existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_part:nom},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Il existe déjà un partenaire qui porte ce nom dans la base de données.");
            else {
                $.ajax({
                    url: 'php/part.php',
                    dataType: 'JSON',
                    data : {nom:nom, contact:contact, tel:tel, mail:mail, commentaires:commentaires},
                    complete: function(){
                        alert("Le partenaire a bien été ajouté à la base de données.");
                        ajaxListPart("#partenaire");
                        $('#modal_part_create').modal('hide');
                    }
                });
            }
        }
    });
}
// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

/* ---------------------------------------------------------------------------- Changement dans le menu SELECT du modal update */
const part_Change = (id) => {
    $.ajax({
        url: 'php/part_Get.php',
        dataType: 'JSON',
        data : {id:id},
        success: function(response){
            const contact = response[0].contact;
            const tel = response[0].tel;
            const mail = response[0].mail;
            const commentaires = response[0].commentaires;
            $("#update_contact_part").val(contact);
            $("#update_tel_part").val(tel);
            $("#update_mail_part").val(mail);
            $("#update_comm_part").val(commentaires);
        }
    });
}

const part_Update = (id, nom, contact, tel, mail, commentaires) => {
    $.ajax({
        url: 'php/part.php',
        dataType: 'JSON',
        data : {id:id, nom:nom, contact:contact, tel:tel, mail:mail, commentaires:commentaires},
        complete: function(){
            alert("le partenaire a bien été modifié.");
            $('#modal_part_update').modal('hide');
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const part_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/part.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function() {
            //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_part:id},
                success: function(response){
                    const exist = parseInt(response[0].exist);
                    if(exist === 1) alert("Suppression impossible : des projets sont encore reliés à ce partenaire dans la base de données.");
                    else {
                        alert("le partenaire a bien été supprimé de la base de données.");
                        $('#modal_part_update').modal('hide');
                    }
                }
            });
        }
    });
}
