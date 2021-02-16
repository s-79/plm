// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste pro pour l'outil de recherche de la page pro */
const ajaxListPro = (liste, id_pro) => {
    $.ajax({
        url: 'php/populate.php',
        dataType: 'JSON',
        data : {v_pro:"v_pro"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un.e professionel.le</option>")
            $(liste).append(displayList(response));
            if(id_pro) {
                sleep(50).then(() => {
                    $(liste).val(id_pro);
                });
            }
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des evt pro */
const ajaxListEvtPro = (liste, id_pro) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_pro_list_evt:"v_pro_list_evt"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un événement *</option>")
            $(liste).append(displayList(response));
            if(id_pro)$(liste).val(id_pro);
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche de pro */
const pro_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {texte_pro:search},
    success: function(response){
        $("#pro_res").html(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !
const ajaxProGet = (id_pro) => {
    $.ajax({
        url: 'php/pro_Get.php',
        dataType: 'JSON',
        data : {id:id_pro},
        success: function(response){
            const id = response[0].id;
            const prenom = response[0].prenom;
            const nom = response[0].nom;
            const fonction = response[0].fonction;
            const id_evt = response[0].id_evt;
            const mailing = response[0].mailing;
            const mail = response[0].mail;
            const tel = response[0].tel;
            const commentaires = response[0].commentaires;
            const id_orga = response[0].id_orga;
            const type_orga = response[0].type_orga;
            const id_ville = response[0].id_ville;

            $("#pro_res").val(id);
            $("#id_pro").val(id);
            $("#prenom").val(prenom);
            $("#nom").val(nom);
            $("#fonction").val(fonction);
            ajaxListEvtPro("#sensibilisation", id_evt);
            $("#mailing").prop('checked', false);
            if (mailing === "1") $("#mailing").prop('checked', true);
            $("#email").val(mail);
            $("#tel").val(tel);
            $("#commentaires").val(commentaires);
            $("#type_orga").val(type_orga);
            type_Change(type_orga, id_orga);
            ajaxListVille("#ville", id_ville);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !
const pro_Create = (nom_pro, prenom, nom, fonction, id_evt, mailing, mail, tel, commentaires, id_orga, id_ville) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom de l'organisme existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_pro:nom_pro},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Il existe déjà un professionel avec ce prénom, dans cette structure et dans cette ville.");
            else {
                $.ajax({
                    url: 'php/pro.php',
                    dataType: 'JSON',
                    data : {prenom:prenom, nom:nom, fonction:fonction, id_evt:id_evt, mailing:mailing, mail:mail, tel:tel, commentaires:commentaires, id_orga:id_orga, id_ville:id_ville},
                    complete: function(){
                        alert("Le professionel a bien été ajouté à la base de données.");
                        //------------------------------------------------------ Réinitialisation de la pages des pros
                        pro_Reset();
                    }
                });
            }
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const pro_Update = (id, prenom, nom, fonction, id_evt, mailing, mail, tel, commentaires, id_orga, id_ville) => {
    $.ajax({
        url: 'php/pro.php',
        dataType: 'JSON',
        data : {id:id, prenom:prenom, nom:nom, fonction:fonction, id_evt:id_evt, mailing:mailing, mail:mail, tel:tel, commentaires:commentaires, id_orga:id_orga, id_ville:id_ville},
        complete: function(){
            alert("Les infos du professionel ont bien été modifiées.");
            //----------------------------------------------------------------- Réinitialisation de la pages des pros
            pro_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const pro_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/pro.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function() {
            //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_pro:id},
                success: function(response){
                    const exist = parseInt(response[0].exist);
                    if(exist === 1) alert("Suppression impossible : Ce professionel est relié à des événements dans la BDD.");
                    else {
                        alert("Le pro a bien été supprimé de la base de données.");
                        //------------------------------------------------------ Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction dans orga.js)
                        pro_Reset();
                    }
                }
            });
        }
    });
}
