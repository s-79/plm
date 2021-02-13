// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Événement pour l'outil de recherche de la page evt */
const ajaxListEvt = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_evt:"v_evt"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un événement</option>");
            $(liste).append(displayList(response, 1));
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

/* ---------------------------------------------------------------------------- Remplissage de la liste des intervenants */
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
            const id = response[0].id;
            const mission = response[0].mission;
            const dat = response[0].dat;
            const id_ville = response[0].id_ville;
            const type = response[0].type;
            const intitule = response[0].intitule;
            const visio = response[0].visio;
            const id_projet = response[0].id_projet;
            const organise = response[0].organise;
            const nb_jeunes = response[0].nb_jeunes;
            const nb_pros = response[0].nb_pros;
            const commentaires = response[0].commentaires;

            $("#id_evt").val(id);
            $("#m0, #m1, #m2").prop('checked', false);

            if (mission === "0" || mission === "1") {
                $("#projet_evt").addClass("d-none");
                $("#orga_evt").removeClass("d-none");
                $("#ville")[0].disabled = false;
                $("#nb_pros")[0].disabled = false;
            }
            if (mission === "0") {
                $("#m0").prop('checked', true);
                $("#select_m1, #select_m2").addClass("d-none");
                $("#select_m0").removeClass("d-none");
                $("#type_m0").html(`<option value="${type}">${type}</option>`);
                $("#type_m0")[0].disabled = true;
            }
            if (mission === "1") {
                $("#m1").prop('checked', true);
                $("#select_m0, #select_m2").addClass("d-none");
                $("#select_m1").removeClass("d-none");
                $("#type_m1").val(type);
                $("#type_m1")[0].disabled = false;
            }
            if (mission === "2") {
                $("#m2").prop('checked', true);
                $("#orga_evt").addClass("d-none");
                $("#projet_evt").removeClass("d-none");
                //-------------------------------------------------------------------------- Remplissage de la liste projets
                ajaxListPrj("#projet", id_projet);
                $("#ville")[0].disabled = true;
                $("#nb_pros")[0].disabled = true;
                $("#select_m0, #select_m1").addClass("d-none");
                $("#select_m2").removeClass("d-none");
                $("#type_m2").val(type);
                $("#type_m2")[0].disabled = false;
            }
            $("#date").val(dat);
            $("#intitule").val(intitule);
            $("#visio").prop('checked', false);
            if (visio === "1") $("#visio").prop('checked', true);
            ajaxListVille("#ville", id_ville);
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
                res += `<tr style="cursor: pointer" onclick="id_jeune_storage(${id})"><th scope="row">${id}</th><td>${prenom}</td><td>${nom}</td><td>${nom_ville}</td><td>${acc}</td></tr>`;
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

const evt_Create = (mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires) => {
    $.ajax({
        url: 'php/evt.php',
        dataType: 'JSON',
        data : {mission:mission, dat:dat, id_ville:id_ville, type:type, visio:visio, intitule:intitule, uuid:uuid, id_projet:id_projet, organise:organise, nb_jeunes:nb_jeunes, nb_pros:nb_pros, commentaires:commentaires},
        complete: function(){
            //------------------------------------------------------------------ Récupération de l'id de l'événement créé
            //------------------------------------------------------------------ Puis récupération des intervenants et association avec l'évenemnt dans la table intervenir
            evt_Get_Id(uuid);

            alert("L'événement a bien été ajouté à la base de données.");
            //------------------------------------------------------------------ Réinitialisation de la pages des événements
            evt_Reset();
        }
    });
}

//----------------------------------------------------------------------------- Récupération de l'id de l'événement créé
const evt_Get_Id = (uuid) => {
    $.ajax({
        url: "php/evt_Get.php",
        dataType: 'JSON',
        data : {uuid:uuid},
        success: function(response){
            const id_evt = response[0].id;
            evt_Get_Inter(id_evt);
        }
    });
}

//------------------------------------------------------------------------------ Récupération des intervenants et association avec l'évenemnt dans la table intervenir
const evt_Get_Inter = (id_evt) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_int:"v_int"},
        success: function(response){
            const len = response.length;
            let checkInt = [];
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const nom = response[i].nom;
                const intId = `#int${id}`;
                let check =  $(intId).is(':checked');
                if(check) checkInt.push(id);
            }
            for(id_int of checkInt) {
                $.ajax({
                    url: 'php/evt.php',
                    dataType: 'JSON',
                    data : {id_int:id_int, id_evt:id_evt},
                });
            }
        }
    });
}


// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const evt_Update = (id, mission, dat, id_ville, type, visio, intitule, uuid, id_projet, organise, nb_jeunes, nb_pros, commentaires) => {
    $.ajax({
        url: 'php/evt.php',
        dataType: 'JSON',
        data : {id:id, mission:mission, dat:dat, id_ville:id_ville, type:type, visio:visio, intitule:intitule, uuid:uuid, id_projet:id_projet, organise:organise, nb_jeunes:nb_jeunes, nb_pros:nb_pros, commentaires:commentaires},
        complete: function(){
            //------------------------------------------------------------------ Suppression des associations entre intervenants et cet événement dans la table intervenir
            //------------------------------------------------------------------ Puis récupération des intervenants et association avec l'évenemnt dans la table intervenir
            evt_Delete_Int(id);

            alert("L'événement a bien été modifié.");
            //----------------------------------------------------------------- Réinitialisation de la pages des événements
            evt_Reset();

        }
    });
}

//----------------------------------------------------------------------------- Suppression des associations entre intervenants et cet événement dans la table intervenir
const evt_Delete_Int = (id_evt) => {
    $.ajax({
        url: "php/evt.php",
        dataType: 'JSON',
        data : {id_evt_del_int:id_evt},
        complete: function(){
            evt_Get_Inter(id_evt);
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
                    if(exist === 1) alert("Suppression impossible : l'évenement est relié à des jeunes ou des intervenants dans la BDD.");
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

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

// ----------------------------------------------------------------------------- Stockage de l'id du jeune et envoie vers la page jeune (acc)
let id_jeune_storage = (id, location) => {
    sessionStorage.setItem('id_jeune', id);
    document.location='index.php';
}
