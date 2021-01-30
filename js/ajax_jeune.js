/* ----------------------------------------------------------------------------- ! ! ! - - J E U N E  :  P O P U L A T E - - ! ! ! */

/* ---------------------------------------------------------------------------- Remplissage de la liste NPV - Récup données & append */
const ajaxListNpv = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_npv:"v_npv"},
        success: function(response){
            $(liste).append(displayList(response));
        }
    });
}

/* ----------------------------------------------------------------------------- ! ! ! - - J E U N E  :  C R E A T E - - ! ! ! */

const jeune_Create = (npv, adherent, genre, nom, prenom, ddn, id_evt, email, tel, facebook, skype, insta, urgence, adresse,
id_ville, qpv, id_qpv, id_orga, nom_ref, tel_ref, email_ref, formation, niveau, diplome, niveau_anglais, langues,
statut, pe, rsa, gj) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom du jeune existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_jeune:npv},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Il existe déjà un jeune qui porte ce nom et qui habite cette ville dans la base de données.");
            else {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                $.ajax({
                    url: 'php/jeune.php',
                    dataType: 'JSON',
                    data : {adherent:adherent, genre:genre, prenom:prenom, nom:nom, ddn:ddn, id_evt:id_evt,
                        email:email, tel:tel, facebook:facebook, skype:skype, insta:insta, urgence:urgence,
                        adresse:adresse, id_ville:id_ville, qpv:qpv, id_qpv:id_qpv, id_orga:id_orga, nom_ref:nom_ref, tel_ref:tel_ref, email_ref:email_ref,
                        formation:formation, niveau:niveau, diplome:diplome, niveau_anglais:niveau_anglais, langues:langues,
                        statut:statut, pe:pe, rsa:rsa, gj:gj},
                    complete: function(){
                        alert(`La fiche de ${npv} a bien été ajoutée à la base de données.`);
                        // ----------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page jeune (fonction dans jeune_Create)
                        jeune_Reset();
                    }
                });
            }
        }
    });
}

/* ----------------------------------------------------------------------------- ! ! ! - - J E U N E  :  U P D A T E - - ! ! ! */

const jeune_Update = (npv, id, adherent, genre, nom, prenom, ddn, id_evt, email, tel, facebook, skype, insta, urgence, adresse,
id_ville, qpv, id_qpv, id_orga, nom_ref, tel_ref, email_ref, formation, niveau, diplome, niveau_anglais, langues,
statut, pe, rsa, gj) => {
    //------------------------------------------------------------------------- Envoie des infos vers la BDD
    $.ajax({
        url: 'php/jeune.php',
        dataType: 'JSON',
        data : {id:id, adherent:adherent, genre:genre, prenom:prenom, nom:nom, ddn:ddn, id_evt:id_evt,
            email:email, tel:tel, facebook:facebook, skype:skype, insta:insta, urgence:urgence,
            adresse:adresse, id_ville:id_ville, qpv:qpv, id_qpv:id_qpv, id_orga:id_orga, nom_ref:nom_ref, tel_ref:tel_ref, email_ref:email_ref,
            formation:formation, niveau:niveau, diplome:diplome, niveau_anglais:niveau_anglais, langues:langues,
            statut:statut, pe:pe, rsa:rsa, gj:gj},
        complete: function(){
            alert(`La fiche de ${npv} a bien été modifiée.`);
            // ----------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page jeune (fonction dans jeune_Create)
            jeune_Reset();
        }
    });
}

/* ---------------------------------------------------------------------------- JEUNE : SUPPRESSION */
const jeune_Delete = (id, npv) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/jeune.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function() {
            //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_jeune:id},
                success: function(response){
                    const exist = parseInt(response[0].exist);
                    if(exist === 1) alert("Suppression impossible. Un accompagnement est encore en cours avec ce jeune.");
                    else {
                        alert(`La fiche de ${npv} a bien été supprimée de la base de données.`);
                        // ----------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page jeune (fonction dans jeune_Create)
                        jeune_Reset();
                    }
                }
            });
        }
    });
}
