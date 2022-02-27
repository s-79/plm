// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste de toutes les sensibilisation (mission 0 et 1) - permet d'ajouter une association dans le modal Mission 0 et 1 */
const acc_List_Evt = (liste, id_evt) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_acc_list_evt:"v_acc_list_evt"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner la sensibilisation *</option>")
            let res = "";
            const len = response.length;
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                let nom = "";
                if(parseInt(id) === 1) nom = "Avant 2021";
                else {
                    nom = response[i].nom.substr(2);
                }
                res += `<option value="${id}">${nom}</option>`;
            }
            $(liste).append(res);
            if(id_evt)$(liste).val(id_evt);
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste de toutes les missions 2 - permet d'ajouter une association dans le modal Mission 2 */
const acc_List_Evt2 = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_acc_list_evt2:"v_acc_list_evt2"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner l'atelier collectif</option>")
            $(liste).append(displayList(response, 1));
        }
    });
}

//----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

//----------------------------------------------------------------------------- Récupération du statut et du nom/prenom/ville du jeune
const jeune_Get_Acc = (id) => {
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_acc:id},
        success: function(response){
            const npv = response[0].npv;
            const acc = response[0].acc;
            const mob = response[0].mob;
            const id_ref = response[0].id_ref;
            if(parseInt(id_ref) !== 0) ref = response[0].ref;
            else{ref = "Non renseigné"};
            $("#acc_npv").html(npv);
            $("#acc").val(acc);
            $("#mob").val(mob);
            ajaxListRef("#ref", id_ref);
        }
    });
}

//------------------------------------------------------------------------------ !!! REMPLISSAGE DES TABLEAUX !!!

//------------------------------------------------------------------------------ TABLEAU DES PROJETS - Récupération des projets du jeune et remplissage du tableau
const jeune_Get_Prj = (id) => {
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_jeune_prj:id},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const type = response[i].type;
                const intitule = response[i].intitule;
                const pays = response[i].pays;
                let depart = response[i].depart;
                if(!depart)depart="";
                let retour = response[i].retour;
                if(!retour)retour="";
                res += `<tr class="pointeur"><th class="d-none" scope="row">${id}</th><td onclick="id_prj_storage(${id})">${type}</td><td onclick="id_prj_storage(${id})">${intitule}</td><td onclick="id_prj_storage(${id})">${pays}</td><td onclick="prj_Get(${id})" data-bs-toggle="modal" data-bs-target="#modal_prj_update">${depart}</td><td onclick="prj_Get(${id})" data-bs-toggle="modal" data-bs-target="#modal_prj_update">${retour}</td></tr>`;
            }
            // ----------------------------------------------------------------- Remplissage du tableau de sensibilisation M0 / M1
            $("#tab_prj").html(res);
        }
    });
}

//------------------------------------------------------------------------------ TABLEAU M0 et M1 - Récupération des sensibilisation (mission 0 et 1) du jeune et remplissage du tableau
const jeune_Get_Evt = (id) => {
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id:id},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                let dat = response[i].dat;
                if (dat=="2099-12-31") dat = "Avant 2021";
                const type = response[i].type;
                const nom_ville = response[i].nom_ville;
                let commentaire = response[i].commentaire;
                if(!commentaire)commentaire="";
                res += `<tr class="pointeur"><th class="d-none" scope="row">${id}</th><td onclick="id_evt_storage(${id})">${dat}</td><td onclick="id_evt_storage(${id})">${type}</td><td onclick="evt_Get(${id},'evt')" data-bs-toggle="modal" data-bs-target="#modal_evt_update"><pre style='font-size:1em;'>${commentaire}</pre></td><td onclick="id_evt_storage(${id})">${nom_ville}</td></tr>`;
            }
            // ----------------------------------------------------------------- Remplissage du tableau de sensibilisation M0 / M1
            $("#tab_evt").html(res);
        }
    });
}

//------------------------------------------------------------------------------ TABLEAU M2 - Récupération des ateliers collectifs (mission 2) du jeune et remplissage du tableau
const jeune_Get_Evt2 = (id) => {
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id2:id},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const dat = response[i].dat;
                const type = response[i].type;
                let commentaire = response[i].commentaire;
                if(!commentaire)commentaire="";
                res += `<tr class="pointeur"><th class="d-none" scope="row">${id}</th><td onclick="id_evt_storage(${id})">${dat}</td><td onclick="id_evt_storage(${id})">${type}</td><td onclick="evt_Get(${id}, 'evt2')" data-bs-toggle="modal" data-bs-target="#modal_evt2_update"><pre style='font-size:1em;'>${commentaire}</pre></td></tr>`;
            }
            // ----------------------------------------------------------------- Remplissage du tableau de sensibilisation M2
            $("#tab_evt2").html(res);
        }
    });
}

//------------------------------------------------------------------------------ TABLEAU RDV - Récupération des RDV (mission 3) du jeune et remplissage du tableau
const jeune_Get_Rdv = (id) => {
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_jeune_rdv:id},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const dat = response[i].dat;
                const type = response[i].type;
                let duree = response[i].duree;
                if(!duree)duree="";
                let intervenant = response[i].intervenant;
                if(!intervenant)intervenant="";
                let commentaires = response[i].commentaires;
                if(!commentaires)commentaires="";
                res += `<tr class="pointeur" onclick="rdv_Get(${id})" data-bs-toggle="modal" data-bs-target="#modal_rdv_update"><th class="d-none" scope="row">${id}</th><td>${dat}</td><td>${type}</td><td><pre style='font-size:1em;'>${commentaires}</pre></td><td>${duree}</td></tr>`;
            }
            // ----------------------------------------------------------------- Remplissage du tableau de sensibilisation M2
            $("#tab_rdv").html(res);
        }
    });
}

//------------------------------------------------------------------------------ !!! REMPLISSAGE DES CHAMPS DANS LES POP-UP DE MODIFICATIONS !!!

/* ---------------------------------------------------------------------------- Fonction appelée en cliquant sur les lignes du tableau dans jeune_Get_Prj */
/* ---------------------------------------------------------------------------- Récupération des données à modifier pour les pop-up prj */
const prj_Get = (id_prj) => {
    const id_jeune = $("#id").val();
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_prj:id_prj, id_jeune:id_jeune},
        success: function(response){
            const id_prj = response[0].id_prj;
            const nom = response[0].nom;
            const depart = response[0].depart;
            const retour = response[0].retour;
            $("#update_id_prj").val(id_prj);
            $("#update_nom_prj").val(nom);
            $("#update_depart_prj").val(depart);
            $("#update_retour_prj").val(retour);
        }
    });
}

/* ---------------------------------------------------------------------------- Fonction appelée en cliquant sur les lignes du tableau dans jeune_Get_Evt et jeune_Get_Evt2 */
/* ---------------------------------------------------------------------------- Récupération des données à modifier pour les pop-up evt et evt2 */
const evt_Get = (id_evt, mission) => {
    const id_jeune = $("#id").val();
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_evt:id_evt, id_jeune:id_jeune},
        success: function(response){
            const id_evt = response[0].id_evt;
            const nom_evt_ville = response[0].nom;
            const commentaire = response[0].commentaire;
            const divId = `#update_id_${mission}`;
            $(divId).val(id_evt);
            const divNom = `#update_nom_${mission}`;
            $(divNom).val(nom_evt_ville);
            const divComm = `#update_comm_${mission}`;
            $(divComm).val(commentaire);
        }
    });
}

/* ---------------------------------------------------------------------------- Récupération des données à modifier dans le modal de rdv_update */
const rdv_Get = (id) => {
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_rdv:id},
        success: function(response){
            const nom2 = response[0].nom2;
            const dat = response[0].dat;
            const type = response[0].type;
            const visio = response[0].visio;
            const id_intervenant = response[0].id_intervenant;
            const duree = response[0].duree;
            const commentaires = response[0].commentaires;
            $("#update_id_rdv").val(id);
            $("#update_nom_rdv").val(nom2);
            $("#update_date_rdv").val(dat);
            $("#update_type_rdv").val(type);
            $("#update_visio_rdv").prop('checked', false);
            if (visio === "1") $("#update_visio_rdv").prop('checked', true);
            $("#update_duree_rdv").val(duree);
            $("#update_comm_rdv").val(commentaires);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

//------------------------------------------------------------------------------ Fiche profil : Création ou récupération
const acc_Create_Profil = (id_jeune) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le jeune a-t-il déjà une fiche profil ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {id_profil_jeune:id_jeune},
        success: function(response){
            const exist = parseInt(response[0].exist);
            //-----------------------------------------------------------------  Si oui, récupération de la fiche.
            if(exist === 1) {
                $.ajax({
                    url: 'php/acc_Get.php',
                    dataType: 'JSON',
                    data : {id_profil_jeune:id_jeune},
                    success: function(response){
                        const parcours = response[0].parcours;
                        const exp_pro = response[0].exp_pro;
                        const prj_pro = response[0].prj_pro;
                        const loisirs = response[0].loisirs;
                        const volontariat = response[0].volontariat;
                        const voyages = response[0].voyages;
                        const motivations = response[0].motivations;
                        const prj_mob = response[0].prj_mob;
                        const freins = response[0].freins;
                        const apports = response[0].apports;
                        const attentes = response[0].attentes;
                        const conditions_vie = response[0].conditions_vie;
                        const ressources = response[0].ressources;
                        const docs_adm = response[0].docs_adm;
                        const medical = response[0].medical;

                        $("#parcours").val(parcours);
                        $("#exp_pro").val(exp_pro);
                        $("#prj_pro").val(prj_pro);
                        $("#loisirs").val(loisirs);
                        $("#volontariat").val(volontariat);
                        $("#voyages").val(voyages);
                        $("#motivations").val(motivations);
                        $("#prj_mob").val(prj_mob);
                        $("#freins").val(freins);
                        $("#apports").val(apports);
                        $("#attentes").val(attentes);
                        $("#conditions_vie").val(conditions_vie);
                        $("#ressources").val(ressources);
                        $("#docs_adm").val(docs_adm);
                        $("#medical").val(medical);

                        $("#divTable, #divFiche_Profil").toggleClass("d-none");
                    }
                });
            //-----------------------------------------------------------------  Si non, création d'une fiche vierge.
            } else {
                $.ajax({
                    url: 'php/acc.php',
                    dataType: 'JSON',
                    data : {id_profil_jeune:id_jeune},
                    complete: function(){
                        $("#divTable, #divFiche_Profil").toggleClass("d-none");
                    }
                });
            }
        }
    });
}

//------------------------------------------------------------------------------ Création d'une association entre un jeune et un événement Mission 0 ou 1
const acc_Create_Prj = (id_jeune, id_prj, depart, retour) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : L'association existe-t-elle déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {id_acc_jeune:id_jeune, id_acc_prj:id_prj},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Ce projet est déjà associé au jeune dans la base de données.");
            else {
                $.ajax({
                    url: 'php/acc.php',
                    dataType: 'JSON',
                    data : {id_jeune:id_jeune, id_prj:id_prj, depart:depart, retour:retour},
                    complete: function(){
                        $("#modal_prj_create").modal('hide')
                        //------------------------------------------------------ TABLEAU PROJETS : Réinitialisation du tableau des projets dans le suivi du jeune
                        jeune_Get_Prj(id_jeune);
                    }
                });
            }
        }
    });
}

//------------------------------------------------------------------------------ Création d'une association entre un jeune et un événement Mission 0 ou 1
const acc_Create_Evt = (id_jeune, id_evt, commentaire, mission) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : L'association existe-t-elle déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {id_acc_jeune:id_jeune, id_acc_evt:id_evt},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Cet événement est déjà associé au jeune dans la base de données.");
            else {
                $.ajax({
                    url: 'php/acc.php',
                    dataType: 'JSON',
                    data : {id_jeune:id_jeune, id_evt:id_evt, commentaire:commentaire},
                    complete: function(){
                        const divModal = `#modal_${mission}_create`
                        $(divModal).modal('hide')
                        //------------------------------------------------------ TABLEAU M0, M1 : Réinitialisation du tableau des sensibilisations dans le suivi du jeune
                        if(mission === "evt") jeune_Get_Evt(id_jeune);
                        //------------------------------------------------------ TABLEAU M2 : Réinitialisation du tableau des ateliers collectifs dans le suivi du jeune
                        if(mission === "evt2") jeune_Get_Evt2(id_jeune);
                        //------------------------------------------------------ TABLEAU RDV : Réinitialisation du tableau des rdv dans le suivi du jeune
                        if(mission === "rdv") jeune_Get_Rdv(id_jeune);
                    }
                });
            }
        }
    });
}

//-------------------------------------------------------------------------------R E N D E Z - V O U S

//------------------------------------------------------------------------------ Création d'un RDV individuel
const rdv_Create = (id_jeune, id_int, dat, type, visio, duree, uuid, commentaires) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_int:id_int, dat:dat, type:type, visio:visio, duree:duree, uuid:uuid, commentaires:commentaires},
        complete: function(){
            //------------------------------------------------------------------ Récupération de l'id de la fiche jeune créé et rattachement au rendez-vous
            $.ajax({
                url: "php/acc_Get.php",
                dataType: 'JSON',
                data : {uuid:uuid},
                success: function(response){
                    const id_rdv = response[0].id;
                    //---------------------------------------------------------- Création de l'association entre le jeune et le rdv
                    acc_Create_Evt(id_jeune, id_rdv, "", "rdv");
                }
            });
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

// ----------------------------------------------------------------------------- Mise à jour du statut du jeune
const jeune_Update_Acc = (id, statut, mob, id_ref) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_acc:id, statut:statut, mob:mob, id_ref:id_ref},
        complete: function(){
            // ----------------------------------------------------------------- Fonction en dessous
            setTimeout(acc_Check, 1000);
        }
    });
}

//------------------------------------------------------------------------------ Modification du commentaire dans l'association entre un jeune et un projet
const acc_Update_Prj = (id_jeune, id_prj, depart, retour) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_prj_up:id_prj, depart:depart, retour:retour},
        complete: function(){
            $("#modal_prj_update").modal('hide')
            //----------------------------------------------------------------- TABLEAU PROJETS : Réinitialisation du tableau des projets dans le suivi du jeune
            jeune_Get_Prj(id_jeune);
        }
    });
}

//------------------------------------------------------------------------------ Modification du commentaire dans l'association entre un jeune et un événement
const acc_Update_Evt = (id_jeune, id_evt, commentaire, mission) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_evt_up:id_evt, commentaire:commentaire},
        complete: function(){
            const divModal = `#modal_${mission}_update`
            $(divModal).modal('hide')
            //------------------------------------------------------------------ TABLEAU M0, M1 : Réinitialisation du tableau des sensibilisations dans le suivi du jeune
            if(mission === "evt") jeune_Get_Evt(id_jeune);
            //------------------------------------------------------------------ TABLEAU M2 : Réinitialisation du tableau des ateliers collectifs dans le suivi du jeune
            if(mission === "evt2") jeune_Get_Evt2(id_jeune);
        }
    });
}

//-------------------------------------------------------------------------------R E N D E Z - V O U S

//------------------------------------------------------------------------------ Modification d'un RDV individuel
const rdv_Update = (id_jeune, id_rdv, dat, type, visio, duree, commentaires) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_rdv_up:id_rdv, id_int:0, dat:dat, type:type, visio:visio, duree:duree, commentaires:commentaires},
        complete: function(){
            $('#modal_rdv_update').modal('hide')
            //------------------------------------------------------------------ TABLEAU RDV : Réinitialisation du tableau des ateliers collectifs dans le suivi du jeune
            const id = $("#id").val();
            jeune_Get_Rdv(id);
        }
    });
}

//-------------------------------------------------------------------------------F I C H E  P R O F I L

//------------------------------------------------------------------------------ Modification d'un RDV individuel
const acc_Update_Profil = (id_jeune, parcours, exp_pro, prj_pro, loisirs, volontariat, voyages, motivations, prj_mob, freins, apports, attentes, conditions_vie, ressources, docs_adm, medical) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_profil_jeune_up:id_jeune, parcours:parcours, exp_pro:exp_pro, prj_pro:prj_pro, loisirs:loisirs, volontariat:volontariat, voyages:voyages, motivations:motivations, prj_mob:prj_mob, freins:freins, apports:apports, attentes:attentes, conditions_vie:conditions_vie, ressources:ressources, docs_adm:docs_adm, medical:medical},
        complete: function(){
            alert("La fiche profil a bien été mise à jour.");
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !

const acc_Delete_Prj = (id_jeune, id_prj) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/acc.php",
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_prj_del:id_prj},
        complete: function() {
            $("#modal_prj_update").modal('hide')
            //----------------------------------------------------------------- TABLEAU PROJETS : Réinitialisation du tableau des projets dans le suivi du jeune
            jeune_Get_Prj(id_jeune);
        }
    });
}

const acc_Delete_Evt = (id_jeune, id_evt, mission) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/acc.php",
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_evt_del:id_evt},
        complete: function() {
            const divModal = `#modal_${mission}_update`
            $(divModal).modal('hide')
            const divTab = `#tab_${mission}`
            $(divTab).html("");
            //------------------------------------------------------------------ TABLEAU M0, M1 : Réinitialisation du tableau des sensibilisations dans le suivi du jeune
            if(mission === "evt") jeune_Get_Evt(id_jeune);
            //------------------------------------------------------------------ TABLEAU M2 : Réinitialisation du tableau des ateliers collectifs dans le suivi du jeune
            if(mission === "evt2") jeune_Get_Evt2(id_jeune);
        }
    });
}

//------------------------------------------------------------------------------ R E N D E Z - V O U S

//----------------------------------------------------------------------------- Suppression de l'association entre le rdv et le jeune puis suppression du rdv dans la bdd
const acc_Delete_Rdv = (id_jeune, id_rdv) => {
    $.ajax({
        url: "php/acc.php",
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_evt_del:id_rdv},
        complete: function() {
            $('#modal_rdv_update').modal('hide')
            //------------------------------------------------------------------ TABLEAU RDV : Réinitialisation du tableau des rendez-vous dans le suivi du jeune
            $("#tab_rdv").html("");
            const id = $("#id").val();
            jeune_Get_Rdv(id);
            //------------------------------------------------------------------ Suppression du rdv dans la bdd
            $.ajax({
                url: 'php/acc.php',
                dataType: 'JSON',
                data : {id_rdv_del:id_rdv}
            });
        }
    });
}

// ----------------------------------------------------------------------------- Stockage de l'id des événements et envoie vers la page evt
const id_evt_storage = (id) => {
    sessionStorage.setItem('id_evt', id);
    document.location='evt.php';
}
// ----------------------------------------------------------------------------- Stockage de l'id des projets et envoie vers la page prj
const id_prj_storage = (id) => {
    sessionStorage.setItem('id_prj', id);
    document.location='prj.php';
}
