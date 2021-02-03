/* ---------------------------------------------------------------------------- Remplissage de la liste Événement - Récup données & append */
const ajaxListEvt = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_evt:"v_evt"},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                if(parseInt(id) === 0) {
                    const nom = "Non renseigné"
                    res += `<option value="${id}">${nom}</option>`;
                } else {
                    const nom = response[i].nom.substr(2);
                    res += `<option value="${id}">${nom}</option>`;
                }
            }
            $(liste).append(res);
        }
    });
}
/* ---------------------------------------------------------------------------- Outil de recherche d'événement */
const evt_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {texte_evt:search},
    success: function(response){
        $("#evt_res").html(displayList(response));
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des intervenants - Récup données & append */
const ajaxListInter = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_int:"v_int"},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                res += `<div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="int${id}">
                <label class="form-check-label text-white" for="int${id}">${nom}</label>
                </div>`;
                const intId = `int${id}`;
                $(intId).prop('checked', false);
            }
            $(liste).html(res);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !

const ajaxEvtGet = (id_evt) => {
    $.ajax({
        url: 'php/evt_Get.php',
        dataType: 'JSON',
        data : {id:id_evt},
        success: function(response){
            // ----------------------------------------------------------------- Récupération des données
            const id = response[0].id;
            const mission = response[0].mission;
            const dat = response[0].dat;
            const id_ville = response[0].id_ville;
            const ville = response[0].ville;
            const type = response[0].type;
            const intitule = response[0].intitule;
            const visio = response[0].visio;
            const id_projet = response[0].id_projet;
            let nom_projet = "";
            // if(parseInt(id_projet) !== 0) nom_projet = response[0].nom_projet;
            // else{nom_projet = "Non renseigné"};
            const organise = response[0].organise;
            const nb_jeunes = response[0].nb_jeunes;
            const nb_pros = response[0].nb_pros;
            const commentaires = response[0].commentaires;

            // ----------------------------------------------------------------- Remplissage des champs
            $("#id_evt").val(id);
            $("#m0, #m1, #m2").prop('checked', false);
            if (mission === "0") {
                $("#m0").prop('checked', true);
                $("#select_m1, #select_m2").addClass("d-none");
                $("#select_m0").removeClass("d-none");
                $("#type_m0").html(`<option value="${type}">${type}</option>`);
            }
            if (mission === "1") {
                $("#m1").prop('checked', true);
                $("#select_m0, #select_m2").addClass("d-none");
                $("#select_m1").removeClass("d-none");
                // ------------------------------------------------------------- Réinitialisation de la liste type m1
                let types_m1 = ["Info coll PLM", "Info coll exterieure", "Webinaire pros", "Sensibilisation pros", "Evt thématique"];
                let init = "";
                for (type_m1 of types_m1) {init += `<option value="${type_m1}">${type_m1}</option>`;}
                $("#type_m1").html(init);
                $("#type_m1").val(type);
            }
            if (mission === "2") {
                $("#m2").prop('checked', true);
                $("#select_m0, #select_m1").addClass("d-none");
                $("#select_m2").removeClass("d-none");
                // ------------------------------------------------------------- Réinitialisation de la liste type m2
                let types_m2 = ["Atelier d'anglais", "Atelier Europe", "Atelier Interculturalité", "At. obj d'apprentissage", "At. retour à chaud", "2ème atelier retour"];
                let init = "";
                for (type_m2 of types_m2) {init += `<option value="${type_m2}">${type_m2}</option>`;}
                $("#type_m2").html(init);
                $("#type_m2").val(type);
            }
            $("#date").val(dat);
            // $("#type_m2").prepend(`<option selected value="${type}">${type}</option>`);
            $("#intitule").val(intitule);
            $("#visio").prop('checked', false);
            if (visio === "1") $("#visio").prop('checked', true);
            $("#ville").prepend(`<option selected value="${id_ville}">${ville}</option>`);
            $("#organise").val(organise);
            $("#nb_jeunes").val(nb_jeunes);
            $("#nb_pros").val(nb_pros);
            $("#commentaires").val(commentaires);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des jeunes en fonction de l'id de l'événement
const ajaxEvtJeune = (id_evt, liste) => {
    $.ajax({
        url: "php/evt_Get.php",
        dataType: 'JSON',
        data : {id_evt:id_evt},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const prenom = response[i].prenom;
                const nom = response[i].nom;
                const nom_ville = response[i].nom_ville;
                const acc = response[i].acc;
                res += `<tr><th scope="row">${id}</th><td>${prenom}</td><td>${nom}</td><td>${nom_ville}</td><td>${acc}</td></tr>`;
            }
            $(liste).append(res);
        }
    });
}

//----------------------------------------------------------------------------- Récupération des intervenants par l'id de l'événement
const ajaxEvtInter = (id_evt, liste) => {
    $.ajax({
        url: "php/evt_Get.php",
        dataType: 'JSON',
        data : {id_evt_int:id_evt},
        success: function(response){
            const len = response.length;
            for (let i = 0; i < len; i++) {
                let id = "#int"
                id += response[i].id;
                $(id).prop('checked', true);
            }
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const evt_Create = (mission, dat, id_ville, type, visio, intitule, id_projet, organise, nb_jeunes, nb_pros, commentaires) => {
    $.ajax({
        url: 'php/evt.php',
        dataType: 'JSON',
        data : {mission:mission, dat:dat, id_ville:id_ville, type:type, visio:visio, intitule:intitule, id_projet:id_projet, organise:organise, nb_jeunes:nb_jeunes, nb_pros:nb_pros, commentaires:commentaires},
        complete: function(){
            alert("L'événement a bien été ajouté à la base de données.");
            //------------------------------------------------------ Réinitialisation de la pages des événements
            evt_Reset();
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const evt_Update = (id, mission, dat, id_ville, type, visio, intitule, id_projet, organise, nb_jeunes, nb_pros, commentaires) => {
    //-------------------------------------------------------------------------- Envoie des infos vers la BDD
    $.ajax({
        url: 'php/evt.php',
        dataType: 'JSON',
        data : {id:id, mission:mission, dat:dat, id_ville:id_ville, type:type, visio:visio, intitule:intitule, id_projet:id_projet, organise:organise, nb_jeunes:nb_jeunes, nb_pros:nb_pros, commentaires:commentaires},
        complete: function(){
            alert("L'événement a bien été modifié.");
            //------------------------------------------------------ Réinitialisation de la pages des événements
            evt_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const evt_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/evt.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function() {
            //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_evt:id},
                success: function(response){
                    const exist = parseInt(response[0].exist);
                    if(exist === 1) alert("Suppression impossible : l'évenement est encore relié à des jeunes ou des intervenants dans la BDD.");
                    else {
                        alert("L'événement a bien été supprimé de la base de données.");
                        //------------------------------------------------------ Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction dans orga.js)
                        evt_Reset();
                    }
                }
            });
        }
    });
}
