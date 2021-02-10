// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

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
/* ----------------------------------------------------------------------------- Outil de recherche de jeune */
const jeune_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {texte:search},
    success: function(response){
        $("#npv_res").html(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !
const jeune_Get = (id) => {
    $.ajax({
        url: 'php/jeune_Get.php',
        dataType: 'JSON',
        data : {id:id},
        success: function(response){
            const id = response[0].id;
            const adherent = response[0].adherent;
            const genre = response[0].genre;
            const nom = response[0].nom;
            const prenom = response[0].prenom;
            const ddn = response[0].ddn;
            const id_evt = response[0].id_evt;
            if(parseInt(id_evt) !== 0) nom_evt = response[0].nom_evt.substr(2);
            else{nom_evt = "Non renseigné"};
            const email = response[0].email;
            const tel = response[0].tel;
            const facebook = response[0].facebook;
            const skype = response[0].skype;
            const insta = response[0].insta;
            const urgence = response[0].urgence;
            const adresse = response[0].adresse;
            const id_ville = response[0].id_ville;
            const ville = response[0].ville;
            const nom_ville = response[0].nom_ville;
            const contrat_ville = response[0].contrat_ville;
            const qpv = response[0].qpv;
            const id_qpv = response[0].id_qpv;
            if(parseInt(id_qpv) !== 0) nom_qpv = response[0].nom_qpv;
            else{nom_qpv = "Non renseigné"};
            const prij = response[0].prij;
            const type_orga = response[0].type_orga;
            const id_orga = response[0].id_orga;
            if(parseInt(id_orga) !== 0) nom_orga = response[0].nom_orga;
            else{nom_orga = "Non renseigné"};
            const nom_ref = response[0].nom_ref;
            const tel_ref = response[0].tel_ref;
            const email_ref = response[0].email_ref;
            const formation = response[0].formation;
            const niveau = response[0].niveau;
            const diplome = response[0].diplome;
            const niveau_anglais = response[0].niveau_anglais;
            const langues = response[0].langues;
            const statut = response[0].statut;
            const pe = response[0].pe;
            const rsa = response[0].rsa;
            const gj = response[0].gj;

            $("#id").val(id);
            $("#genre").val(genre);
            $("#adherent").prop('checked', false);
            if (adherent === "1") $("#adherent").prop('checked', true);
            $("#nom").val(nom);
            $("#prenom").val(prenom);
            $("#ddn").val(ddn);
            $("#sensibilisation").prepend(`<option selected value="${id_evt}">${nom_evt}</option>`);
            $("#email").val(email);
            $("#tel").val(tel);
            $("#facebook").val(facebook);
            $("#skype").val(skype);
            $("#insta").val(insta);
            $("#urgence").val(urgence);
            $("#adresse").val(adresse);
            $("#ville").prepend(`<option selected value="${id_ville}">${ville}</option>`);
            $("#nom_ville_none").val(nom_ville);
            $("#contrat_ville").val(contrat_ville);
            $("#qpv").val(qpv);
            if(qpv === "Oui") $("#qpv")[0].disabled = false;
            $("#nom_qpv").prepend(`<option selected value="${id_qpv}">${nom_qpv}</option>`);
            if(parseInt(id_qpv) !== 0) $("#nom_qpv")[0].disabled = true;
            $("#prij").prop('checked', false);
            if (prij === "1") $("#prij").prop('checked', true);
            $("#type_orga").val(type_orga);
            $("#nom_orga").prepend(`<option selected value="${id_orga}">${nom_orga}</option>`);
            if(parseInt(id_orga) !== 0) $("#nom_orga")[0].disabled = false;
            $("#nom_ref").val(nom_ref);
            $("#tel_ref").val(tel_ref);
            $("#email_ref").val(email_ref);
            $("#formation").val(formation);
            $("#niveau").val(niveau);
            $("#diplome").val(diplome);
            $("#niveau_anglais").val(niveau_anglais);
            $("#langues").val(langues);
            $("#statut").val(statut);
            $("#pe").val(pe);
            $("#rsa").val(rsa);
            $("#gj").val(gj);
        }
    });
}
// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! ! */

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
                $.ajax({
                    url: 'php/jeune.php',
                    dataType: 'JSON',
                    data : {adherent:adherent, genre:genre, prenom:prenom, nom:nom, ddn:ddn, id_evt:id_evt,
                        email:email, tel:tel, facebook:facebook, skype:skype, insta:insta, urgence:urgence,
                        adresse:adresse, id_ville:id_ville, qpv:qpv, id_qpv:id_qpv, id_orga:id_orga, nom_ref:nom_ref, tel_ref:tel_ref, email_ref:email_ref,
                        formation:formation, niveau:niveau, diplome:diplome, niveau_anglais:niveau_anglais, langues:langues,
                        statut:statut, pe:pe, rsa:rsa, gj:gj},
                    complete: function(){

                        //------------------------------------------------------ Récupération de l'id de la fiche jeune créé et rattachement à la sensibilisation
                        jeune_Get_Id(npv, id_evt);

                        alert(`La fiche de ${npv} a bien été ajoutée à la base de données.`);
                        // ----------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page jeune (fonction dans jeune_Create)
                        jeune_Reset();
                    }
                });
            }
        }
    });
}

//----------------------------------------------------------------------------- Récupération de l'id de la fiche jeune créé et rattachement à la sensibilisation
const jeune_Get_Id = (npv, id_evt) => {
    $.ajax({
        url: "php/jeune_Get.php",
        dataType: 'JSON',
        data : {npv:npv},
        success: function(response){
            const id_jeune = response[0].id;
            acc_Create_Evt(id_jeune, id_evt, "");
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const jeune_Update = (npv, id, adherent, genre, nom, prenom, ddn, id_evt, email, tel, facebook, skype, insta, urgence, adresse,
id_ville, qpv, id_qpv, id_orga, nom_ref, tel_ref, email_ref, formation, niveau, diplome, niveau_anglais, langues,
statut, pe, rsa, gj) => {
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
            // ----------------------------------------------------------------- Réinitialisation du formulaire et des listes select dynamiques sur la page jeune (fonction dans jeune_Create)
            jeune_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !

const jeune_Delete = (id, npv) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/jeune.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function() {
            //----------------------------------------------------------------- Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_jeune:id},
                success: function(response){
                    const exist = parseInt(response[0].exist);
                    if(exist === 1) alert("Suppression impossible. Des rdv ou événements sont attachés à ce jeune dans la base de données.");
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
