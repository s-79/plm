// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste NPV - Récup données & append */
const ajaxListNpv = (liste, id) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_npv:"v_npv"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un·e jeune</option>")
            $(liste).append(displayList(response));
            if(id) $(liste).val(id);
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
            const genre = response[0].genre;
            const prenom = response[0].prenom;
            const nom = response[0].nom;
            const ddn = response[0].ddn;
            const nationalite = response[0].nationalite;
            const adherent = response[0].adherent;
            const ami = response[0].ami;
            const id_evt = response[0].id_evt;
            const email = response[0].email;
            const tel = response[0].tel;
            const facebook = response[0].facebook;
            const insta = response[0].insta;
            const urgence = response[0].urgence;
            const droits_image = response[0].droits_image;
            const rgpd = response[0].rgpd;
            const adresse = response[0].adresse;
            const id_ville = response[0].id_ville;
            const ville = response[0].ville;
            const nom_ville = response[0].nom_ville;
            const contrat_ville = response[0].contrat_ville;
            const qpv = response[0].qpv;
            const id_qpv = response[0].id_qpv;
            const prij = response[0].prij;
            const type_orga = response[0].type_orga;
            const id_orga = response[0].id_orga;
            const nom_ref = response[0].nom_ref;
            const tel_ref = response[0].tel_ref;
            const email_ref = response[0].email_ref;
            const ml = response[0].ml;
            const gj = response[0].gj;
            const formation = response[0].formation;
            const niveau = response[0].niveau;
            const diplome = response[0].diplome;
            const niveau_anglais = response[0].niveau_anglais;
            const langues = response[0].langues;
            const at_anglais = response[0].at_anglais;
            const statut = response[0].statut;
            const pe = response[0].pe;
            const rsa = response[0].rsa;
            const connu = response[0].connu;

            $("#id").val(id);
            $("#genre").val(genre);
            $("#prenom").val(prenom);
            $("#nom").val(nom);
            $("#ddn").val(ddn);
            $("#nationalite").val(nationalite);
            $("#adherent").prop('checked', false);
            if (adherent === "1") $("#adherent").prop('checked', true);
            $("#ami").prop('checked', false);
            if (ami === "1") $("#ami").prop('checked', true);
            $("#email").val(email);
            $("#tel").val(tel);
            $("#facebook").val(facebook);
            $("#insta").val(insta);
            $("#urgence").val(urgence);
            $("#droits_image").prop('checked', false);
            if (droits_image === "1") $("#droits_image").prop('checked', true);
            $("#rgpd").prop('checked', false);
            if (rgpd === "1") $("#rgpd").prop('checked', true);
            $("#adresse").val(adresse);
            ajaxListVille("#ville", id_ville);
            $("#nom_ville_none").val(nom_ville);
            $("#contrat_ville").val(contrat_ville);
            qpv_Exist(id_ville, qpv);
            qpv_Change (id_ville, qpv, id_qpv);
            $("#prij").prop('checked', false);
            if (prij === "1") $("#prij").prop('checked', true);
            $("#type_orga").val(type_orga);
            type_Change(type_orga, id_orga);
            $("#nom_ref").val(nom_ref);
            $("#tel_ref").val(tel_ref);
            $("#email_ref").val(email_ref);
            $("#ml").prop('checked', false);
            if (ml === "1") $("#ml").prop('checked', true);
            $("#gj").prop('checked', false);
            if (gj === "1") $("#gj").prop('checked', true);
            $("#formation").val(formation);
            $("#niveau").val(niveau);
            $("#diplome").val(diplome);
            $("#niveau_anglais").val(niveau_anglais);
            $("#langues").val(langues);
            $("#at_anglais").prop('checked', false);
            if (at_anglais === "1") $("#at_anglais").prop('checked', true);
            $("#statut").val(statut);
            if (pe === "1") $("#pe").prop('checked', true);
            if (rsa === "1") $("#rsa").prop('checked', true);
            acc_List_Evt("#sensibilisation", id_evt);
            $("#connu").val(connu);
        }
    });
}
// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! ! */
const jeune_Create = (npv, genre, prenom, nom, ddn, nationalite, adherent, ami, email, tel, facebook, insta, urgence, droits_image, rgpd, adresse, id_ville, qpv, id_qpv, id_orga, nom_ref, tel_ref, email_ref, ml, gj, formation, niveau, diplome, niveau_anglais, langues, at_anglais, statut, statut2, pe, rsa, id_evt, connu) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom du jeune existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_jeune:npv},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Il existe déjà un·e jeune qui porte ce nom et qui habite cette ville dans la base de données.");
            else {
                $.ajax({
                    url: 'php/jeune.php',
                    dataType: 'JSON',
                    data : {genre:genre, prenom:prenom, nom:nom, ddn:ddn, nationalite:nationalite, adherent:adherent, ami:ami,
                        email:email, tel:tel, facebook:facebook, insta:insta, urgence:urgence, droits_image:droits_image, rgpd:rgpd, adresse:adresse, id_ville:id_ville, qpv:qpv, id_qpv:id_qpv,
                        id_orga:id_orga, nom_ref:nom_ref, tel_ref:tel_ref, email_ref:email_ref, ml:ml, gj:gj,
                        formation:formation, niveau:niveau, diplome:diplome, niveau_anglais:niveau_anglais, langues:langues, at_anglais:at_anglais,
                        statut:statut, statut2:statut2, pe:pe, rsa:rsa, id_evt:id_evt, connu:connu},
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

const jeune_Update = (npv, id, genre, prenom, nom, ddn, nationalite, adherent, ami,
    email, tel, facebook, insta, urgence, droits_image, rgpd, adresse, id_ville, qpv, id_qpv,
    id_orga, nom_ref, tel_ref, email_ref, ml, gj,
    formation, niveau, diplome, niveau_anglais, langues, at_anglais,
    statut, statut2, pe, rsa, id_evt, connu) => {
    $.ajax({
        url: 'php/jeune.php',
        dataType: 'JSON',
        data : {id:id, genre:genre, prenom:prenom, nom:nom, ddn:ddn, nationalite:nationalite, adherent:adherent, ami:ami,
            email:email, tel:tel, facebook:facebook, insta:insta, urgence:urgence, droits_image:droits_image, rgpd:rgpd, adresse:adresse, id_ville:id_ville, qpv:qpv, id_qpv:id_qpv,
            id_orga:id_orga, nom_ref:nom_ref, tel_ref:tel_ref, email_ref:email_ref, ml:ml, gj:gj,
            formation:formation, niveau:niveau, diplome:diplome, niveau_anglais:niveau_anglais, langues:langues, at_anglais:at_anglais,
            statut:statut, statut2:statut2, pe:pe, rsa:rsa, id_evt:id_evt, connu:connu},
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
