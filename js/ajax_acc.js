// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste de toutes les sensibilisation (mission 0 et 1) - permet d'ajouter une association dans le modal Mission 0 et 1 */
const acc_List_Evt = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_acc_list_evt:"v_acc_list_evt"},
        success: function(response){
            $(liste).append(displayListSub(response));
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
            $(liste).append(displayListSub(response));
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
            const acc = response[0].acc;
            const npv = response[0].npv;
            $("#acc").val(acc);
            $("#acc_npv").html(npv);
        }
    });
}

//------------------------------------------------------------------------------ !!! REMPLISSAGE DES TABLEAUX !!!

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
                const dat = response[i].dat;
                const type = response[i].type;
                const nom_ville = response[i].nom_ville;
                let commentaire = response[i].commentaire;
                if(!commentaire)commentaire="";
                res += `<tr><th class="d-none" scope="row">${id}</th><td>${dat}</td><td style="cursor: pointer" onclick="id_evt_storage(${id})">${type}</td><td style="cursor: pointer" onclick="evt_Get(${id},'evt')" data-bs-toggle="modal" data-bs-target="#modal_evt_update">${commentaire}</td><td>${nom_ville}</td></tr>`;
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
                res += `<tr><th class="d-none" scope="row">${id}</th><td>${dat}</td><td style="cursor: pointer" onclick="id_evt_storage(${id})">${type}</td><td style="cursor: pointer" onclick="evt_Get(${id}, 'evt2')" data-bs-toggle="modal" data-bs-target="#modal_evt2_update">${commentaire}</td></tr>`;
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
                res += `<tr style="cursor: pointer" onclick="rdv_Get(${id})" data-bs-toggle="modal" data-bs-target="#modal_rdv_update"><th class="d-none" scope="row">${id}</th><td>${dat}</td><td>${type}</td><td>${commentaires}</td><td>${intervenant}</td><td>${duree}</td></tr>`;
            }
            // ----------------------------------------------------------------- Remplissage du tableau de sensibilisation M2
            $("#tab_rdv").html(res);
        }
    });
}

//------------------------------------------------------------------------------ !!! REMPLISSAGE DES CHAMPS DANS LES POP-UP DE MODIFICATIONS !!!

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
            const intervenant = response[0].intervenant;
            const duree = response[0].duree;
            const commentaires = response[0].commentaires;
            $("#update_id_rdv").val(id);
            $("#update_nom_rdv").val(nom2);
            $("#update_date_rdv").val(dat);
            $("#update_visio_rdv").prop('checked', false);
            if (visio === "1") $("#update_visio_rdv").prop('checked', true);
            $("#update_int_rdv").html(`<option selected value="${id_intervenant}">${intervenant}</option>`);
            ajaxListIntUp("#update_int_rdv");
            $("#update_duree_rdv").val(duree);
            $("#update_comm_rdv").val(commentaires);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

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
const rdv_Create = (id_jeune, id_int, dat, type, visio, duree, intitule, commentaires) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_int:id_int, dat:dat, type:type, visio:visio, duree:duree, intitule:intitule, commentaires:commentaires},
        complete: function(){
            //------------------------------------------------------------------ Récupération de l'id de la fiche jeune créé et rattachement au rendez-vous
            $.ajax({
                url: "php/acc_Get.php",
                dataType: 'JSON',
                data : {intitule:intitule},
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
const jeune_Update_Acc = (id, statut) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_acc:id, statut:statut},
        complete: function(){
            // ----------------------------------------------------------------- Affichage d'une icone de validation pedant 2 secondes
            $("#acc_check").removeClass('d-none');
            $("#acc").addClass('d-none');
            // ----------------------------------------------------------------- Fonction en dessous
            setTimeout(acc_Check, 1000);
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
const rdv_Update = (id_jeune, id_rdv, id_int, dat, type, visio, duree, commentaires) => {
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_rdv_up:id_rdv, id_int:id_int, dat:dat, type:type, visio:visio, duree:duree, commentaires:commentaires},
        complete: function(){
            $('#modal_rdv_update').modal('hide')
            //------------------------------------------------------------------ TABLEAU RDV : Réinitialisation du tableau des ateliers collectifs dans le suivi du jeune
            const id = $("#id").val();
            jeune_Get_Rdv(id);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !

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

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- Affichge du check vert
const acc_Check = () => {
    $("#acc_check").addClass('d-none');
    $("#acc").removeClass('d-none');
}
// ----------------------------------------------------------------------------- Stockage de l'id des événements et envoie vers la page evt
const id_evt_storage = (id, location) => {
    sessionStorage.setItem('id_evt', id);
    document.location='evt.php';
}
