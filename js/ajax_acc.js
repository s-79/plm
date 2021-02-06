// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste de toutes les sensibilisation (mission 0 et 1) - permet d'ajouter une association dans le modal Mission 0 et 1 */
const acc_List_Evt = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_acc_list_evt:"v_acc_list_evt"},
        success: function(response){
            $(liste).append(displayList(response));
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
            $(liste).append(displayList(response));
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
            // ----------------------------------------------------------------- Récupération des données
            const acc = response[0].acc;
            const npv = response[0].npv;
            // ----------------------------------------------------------------- Remplissage des champs
            $("#acc").val(acc);
            $("#acc_npv").html(npv);
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
                // ------------------------------------------------------------- Récupération des données
                const id = response[i].id;
                const dat = response[i].dat;
                const type = response[i].type;
                const nom_ville = response[i].nom_ville;
                let commentaire = response[i].commentaire;
                if(!commentaire)commentaire="";
                // ------------------------------------------------------------- Mise en forme des données
                res += `<tr><th class="d-none" scope="row">${id}</th><td>${dat}</td><td style="cursor: pointer" onclick="id_evt_storage(${id})">${type}</td><td style="cursor: pointer" onclick="evt_Get(${id})" data-bs-toggle="modal" data-bs-target="#modal_evt_update">${commentaire}</td><td>${nom_ville}</td></tr>`;
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
                // ------------------------------------------------------------- Récupération des données
                const id = response[i].id;
                const dat = response[i].dat;
                const type = response[i].type;
                let commentaire = response[i].commentaire;
                if(!commentaire)commentaire="";
                // ------------------------------------------------------------- Mise en forme des données
                res += `<tr><th class="d-none" scope="row">${id}</th><td>${dat}</td><td style="cursor: pointer" onclick="id_evt_storage(${id})">${type}</td><td style="cursor: pointer" onclick="evt2_Get(${id})" data-bs-toggle="modal" data-bs-target="#modal_evt2_update">${commentaire}</td></tr>`;
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
                // ------------------------------------------------------------- Récupération des données
                const id = response[i].id;
                const dat = response[i].dat;
                const type = response[i].type;
                let duree = response[i].duree;
                if(!duree)duree="";
                let intervenant = response[i].intervenant;
                if(!intervenant)intervenant="";
                let commentaire = response[i].commentaire;
                if(!commentaire)commentaire="";
                // ------------------------------------------------------------- Mise en forme des données
                res += `<tr style="cursor: pointer" onclick="rdv_Get(${id})" data-bs-toggle="modal" data-bs-target="#modal_rdv_update"><th class="d-none" scope="row">${id}</th><td>${dat}</td><td>${type}</td><td>${commentaire}</td><td>${intervenant}</td><td>${duree}</td></tr>`;
            }
            // ----------------------------------------------------------------- Remplissage du tableau de sensibilisation M2
            $("#tab_rdv").html(res);
        }
    });
}


/* ---------------------------------------------------------------------------- Récupération des données à modifier des sensibilisation (missions 0 et 1) dans le modal de evt_update */
const evt_Get = (id_evt) => {
    const id_jeune = $("#id").val();
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_evt:id_evt, id_jeune:id_jeune},
        success: function(response){
            // ---------------------------------------------------------------- Récupération des données
            const id_evt = response[0].id_evt;
            const nom_ville = response[0].nom;
            const nom_ville_evt = response[0].nom_evt;
            const commentaire = response[0].commentaire;
            // ---------------------------------------------------------------- Remplissage des champs
            $("#update_id_evt").val(id_evt);
            $("#update_nom_evt").val(nom_ville);
            $("#update_comm_evt").val(commentaire);
        }
    });
}

/* ---------------------------------------------------------------------------- Récupération des données à modifier dans le modal des ateliers missions 2 evt2_update */
const evt2_Get = (id_evt) => {
    const id_jeune = $("#id").val();
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_evt:id_evt, id_jeune:id_jeune},
        success: function(response){
            // ---------------------------------------------------------------- Récupération des données
            const id_evt = response[0].id_evt;
            const nom_ville = response[0].nom;
            const nom_ville_evt = response[0].nom_evt;
            const commentaire = response[0].commentaire;
            // ---------------------------------------------------------------- Remplissage des champs
            $("#update_id_evt2").val(id_evt);
            $("#update_nom_evt2").val(nom_ville);
            $("#update_comm_evt2").val(commentaire);
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
            // ---------------------------------------------------------------- Récupération des données
            const nom2 = response[0].nom2;
            const dat = response[0].dat;
            const type = response[0].type;
            const intervenant = response[0].intervenant;
            const duree = response[0].duree;
            // ---------------------------------------------------------------- Remplissage des champs
            $("#update_nom_rdv").val(nom2);
            $("#update_date_rdv").val(dat);
            $("#update_type_rdv").val(type);
            $("#update_int_rdv").html(`<option selected value="${intervenant}">${intervenant}</option>`);
            ajaxListIntUp("#update_int_rdv");
            $("#update_duree_rdv").val(duree);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

//------------------------------------------------------------------------------ Création d'une association entre un jeune et un événement Mission 0 ou 1
const acc_Create_Evt = (id_jeune, id_evt, commentaire) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom du jeune existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {id_acc_jeune:id_jeune, id_acc_evt:id_evt},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Cette sensibilisation est déjà associée au jeune dans la base de données.");
            else {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                $.ajax({
                    url: 'php/acc.php',
                    dataType: 'JSON',
                    data : {id_jeune:id_jeune, id_evt:id_evt, commentaire:commentaire},
                    complete: function(){
                        $('#modal_evt_create').modal('hide')
                        alert("L'association entre le jeune et la sensibilisation a bien été éfféctuée.");
                        //------------------------------------------------------------------ TABLEAU M0, M1 : Réinitialisation du tableau des sensibilisations dans le suivi du jeune
                        const id = $("#id").val();
                        jeune_Get_Evt(id);
                    }
                });
            }
        }
    });
}

//------------------------------------------------------------------------------ Création d'une association entre un jeune et un événement Mission 0 ou 1
const acc_Create_Evt2 = (id_jeune, id_evt2, commentaire) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom du jeune existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {id_acc_jeune:id_jeune, id_acc_evt:id_evt2},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Cet atelier collectif est déjà associée au jeune dans la base de données.");
            else {
                //-------------------------------------------------------------- Envoie des infos vers la BDD
                $.ajax({
                    url: 'php/acc.php',
                    dataType: 'JSON',
                    data : {id_jeune:id_jeune, id_evt:id_evt2, commentaire:commentaire},
                    complete: function(){
                        $('#modal_evt2_create').modal('hide')
                        alert("L'association entre le jeune et l'atelier collectif a bien été éfféctuée.");
                        //------------------------------------------------------------------ TABLEAU M2 : Réinitialisation du tableau des ateliers collectifs dans le suivi du jeune
                        const id = $("#id").val();
                        jeune_Get_Evt2(id);
                    }
                });
            }
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

// ----------------------------------------------------------------------------- Mise à jour du statut du jeune
const jeune_Update_Acc = (id, statut) => {
    //-------------------------------------------------------------------------- Envoie des infos vers la BDD
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_acc:id, statut:statut},
        complete: function(){
            // ----------------------------------------------------------------- Affichage d'une icone de validation pedant 2 secondes
            $("#acc_check").removeClass('d-none');
            // ----------------------------------------------------------------- Fonction en dessous
            setTimeout(acc_Check, 2000);
        }
    });
}

//------------------------------------------------------------------------------ Modification du commentaire dans l'association entre un jeune et un événement Mission 0 ou 1
const acc_Update_Evt = (id_jeune, id_evt, commentaire) => {
    //-------------------------------------------------------------------------- Envoie des infos vers la BDD
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_evt_up:id_evt, commentaire:commentaire},
        complete: function(){
            $('#modal_evt_update').modal('hide')
            //------------------------------------------------------------------ TABLEAU M0, M1 : Réinitialisation du tableau des sensibilisations dans le suivi du jeune
            const id = $("#id").val();
            jeune_Get_Evt(id);
        }
    });
}

//------------------------------------------------------------------------------ Modification du commentaire dans l'association entre un jeune et un événement Mission 2
const acc_Update_Evt2 = (id_jeune, id_evt2, commentaire) => {
    //-------------------------------------------------------------------------- Envoie des infos vers la BDD
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_evt_up:id_evt2, commentaire:commentaire},
        complete: function(){
            $('#modal_evt2_update').modal('hide')
            //------------------------------------------------------------------ TABLEAU M2 : Réinitialisation du tableau des ateliers collectifs dans le suivi du jeune
            const id = $("#id").val();
            jeune_Get_Evt2(id);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !

const acc_Delete_Evt = (id_jeune, id_evt) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/acc.php",
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_evt_del:id_evt},
        complete: function() {
            $('#modal_evt_update').modal('hide')
            //------------------------------------------------------------------ TABLEAU M0, M1 : Réinitialisation du tableau des sensibilisations dans le suivi du jeune
            const id = $("#id").val();
            jeune_Get_Evt(id);
        }
    });
}

const acc_Delete_Evt2 = (id_jeune, id_evt2) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/acc.php",
        dataType: 'JSON',
        data : {id_jeune:id_jeune, id_evt_del:id_evt2},
        complete: function() {
            $('#modal_evt2_update').modal('hide')
            //------------------------------------------------------------------ TABLEAU M0, M1 : Réinitialisation du tableau des sensibilisations dans le suivi du jeune
            const id = $("#id").val();
            jeune_Get_Evt2(id);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- Affichge du check vert
const acc_Check = () => {
    $("#acc_check").addClass('d-none');
}
// ----------------------------------------------------------------------------- Stockage de l'id des événements et envoie vers la page evt
const id_evt_storage = (id, location) => {
    sessionStorage.setItem('id_evt', id);
    document.location='evt.php';
}
