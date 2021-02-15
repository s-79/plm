// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste projet pour l'outil de recherche de la page prj */
const ajaxListPrj = (liste, id_projet) => {
    $.ajax({
        url: 'php/populate.php',
        dataType: 'JSON',
        data : {v_prj:"v_prj"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un projet</option>")
            $(liste).append(displayList(response));
            if(id_projet) {
                sleep(50).then(() => {
                    $(liste).val(id_projet);
                });
            }
        }
    });
}

/* ---------------------------------------------------------------------------- Outil de recherche de projet */
const prj_Search = (search) => {
    $.ajax({
    url: 'php/populate.php',
    dataType: 'JSON',
    data : {texte_prj:search},
    success: function(response){
        $("#prj_res").html(displayList(response));
        }
    });
}

/* ---------------------------------------------------------------------------- Remplissage de la liste des Pays */
const ajaxListPays = (liste, id_pays) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_pays:"pays"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner un pays</option>")
            $(liste).append(displayList(response));
            if(id_pays)$(liste).val(id_pays);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

/* ----------------------------------------------------------------------------- Changement dans le menu SELECT */
const pays_Change = (id_pays) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {id_pays:id_pays},
        success: function(response){
            const pays = response[0].nom;
            $("#nom_pays_none").val(pays);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !
const ajaxPrjGet = (id_prj) => {
    $.ajax({
        url: 'php/prj_Get.php',
        dataType: 'JSON',
        data : {id:id_prj},
        success: function(response){
            const id = response[0].id;
            const type = response[0].type;
            const intitule = response[0].intitule;
            const id_part = response[0].id_part;
            const id_pays = response[0].id_pays;
            const ville = response[0].ville;
            const debut = response[0].debut;
            const fin = response[0].fin;
            const duree = response[0].duree;
            const them = response[0].them;
            const commentaires = response[0].commentaires;
            const youth_leader = response[0].youth_leader;
            const nb_participants = response[0].nb_participants;
            const pays_participants = response[0].pays_participants;

            //---------------------------------------------------------------------- Inversement des tableaux si on vient du calendrier
            $("#div_agenda").addClass("d-none");
            $("#div_tableau, #form_prj").removeClass("d-none");
            $("#prj_res").val(id);

            $("#id_prj").val(id);
            $("#type").val(type);
            if (type === "Échange de jeunes") {
                $("#youth_leader")[0].disabled = false;
                $("#nb_part")[0].disabled = false;
                $("#pays_part")[0].disabled = false;
            }
            $("#intitule").val(intitule);
            ajaxListPart("#partenaire", id_part);
            ajaxListPays("#pays", id_pays);
            $("#ville").val(ville);
            $("#debut").val(debut);
            $("#fin").val(fin);
            $("#duree").val(duree);
            $("#them").val(them);
            $("#commentaires").val(commentaires);
            $("#youth_leader").val(youth_leader);
            $("#nb_part").val(nb_participants);
            $("#pays_part").val(pays_participants);
        }
    });
}

//----------------------------------------------------------------------------- Remplissage du tableau des jeunes en fonction de l'id du projet
const ajaxPrjJeune = (id_prj, liste) => {
    $.ajax({
        url: "php/prj_Get.php",
        dataType: 'JSON',
        data : {id_prj:id_prj},
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

//----------------------------------------------------------------------------- Remplissage de l'agenda
const ajaxPrjAgenda = (liste) => {
    $.ajax({
        url: 'php/prj_Get.php',
        dataType: 'JSON',
        data : {agenda:"agenda"},
        success: function(response){
            const len = response.length;
            let res = "";
            let lst_mois = {"01":"janvier", "02":"février", "03":"mars", "04":"avril", "05":"mai", "06":"juin", "07":"juillet", "08":"août", "09":"septembre", "10":"octobre", "11":"novembre", "12":"décembre"}
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const debut = response[i].debut;
                const pays = response[i].pays;
                const type = response[i].type;
                const intitule = response[i].intitule;
                const fin = response[i].fin;
                const num_mois = debut.slice(5,7);
                const mois = lst_mois[num_mois];
                if(mois) {
                    res += `<tr"><td class="text-uppercase fw-bold" colspan="4">${mois}</td></tr>`;
                    delete lst_mois[num_mois];
                }
                if(type === "Volontariat CES court terme") {
                    res += `<tr style="cursor: pointer" onclick="from_calendar(${id}, '#tableau')" class="table-warning"><th scope="row" class="d-none">${id}</th><td>${type}</td><td>${intitule}</td><td>${pays}</td><td>${debut}</td><td>${fin}</td></tr>`;
                }
                else if(type === "Volontariat CES long terme") {
                    res += `<tr style="cursor: pointer" onclick="from_calendar(${id}, '#tableau')" class="table-info"><th scope="row" class="d-none">${id}</th><td>${type}</td><td>${intitule}</td><td>${pays}</td><td>${debut}</td><td>${fin}</td></tr>`;
                }
                else if(type === "Échange de jeunes") {
                    res += `<tr style="cursor: pointer" onclick="from_calendar(${id}, '#tableau')" class="table-danger"><th scope="row" class="d-none">${id}</th><td>${type}</td><td>${intitule}</td><td>${pays}</td><td>${debut}</td><td>${fin}</td></tr>`;
                }
                else {res += `<tr style="cursor: pointer" onclick="from_calendar(${id}, '#tableau')"><th scope="row" class="d-none">${id}</th><td>${type}</td><td>${intitule}</td><td>${pays}</td><td>${debut}</td><td>${fin}</td></tr>`;}
            }
            $(liste).html(res);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C R E A T E - - ! ! !

const prj_Create = (nom_prj, type, intitule, id_part, id_pays, ville, debut, fin, duree, them, commentaires, youth_leader, nb_participants, pays_participants) => {
    $.ajax({
        //---------------------------------------------------------------------- Vérification : Le nom de l'organisme existe-t-il déjà dans la BDD ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {nom_prj:nom_prj},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) alert("Création impossible : Il existe déjà un projet avec cet intitulé, ce pays et ces dates dans la base de données.");
            else {
                $.ajax({
                    url: 'php/prj.php',
                    dataType: 'JSON',
                    data : {type:type, intitule:intitule, id_part:id_part, id_pays:id_pays, ville:ville, debut:debut, fin:fin, duree:duree, them:them, commentaires:commentaires, youth_leader:youth_leader, nb_participants:nb_participants, pays_participants:pays_participants},
                    complete: function(){
                        alert("Le projet a bien été ajouté à la base de données.");
                        //------------------------------------------------------ Réinitialisation de la pages des projets
                        prj_Reset();
                    }
                });
            }
        }
    });
}

// ---------------------------------------------------------------------------- ! ! ! - - U P D A T E - - ! ! !

const prj_Update = (id, type, intitule, id_part, id_pays, ville, debut, fin, duree, them, commentaires, youth_leader, nb_participants, pays_participants) => {
    $.ajax({
        url: 'php/prj.php',
        dataType: 'JSON',
        data : {id:id, type:type, intitule:intitule, id_part:id_part, id_pays:id_pays, ville:ville, debut:debut, fin:fin, duree:duree, them:them, commentaires:commentaires, youth_leader:youth_leader, nb_participants:nb_participants, pays_participants:pays_participants},
        complete: function(){
            alert("Le projet a bien été modifié.");
            //----------------------------------------------------------------- Réinitialisation de la pages des projets
            prj_Reset();
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - D E L E T E - - ! ! !
const prj_Delete = (id) => {
    //------------------------------------------------------------------------- Envoie de l'id vers la BDD pour suppression
    $.ajax({
        url: "php/prj.php",
        dataType: 'JSON',
        data : {id_del:id},
        complete: function() {
            //------------------------------------------------------------------ Vérification : L'ID est-il bien supprimé de la BDD ?
            $.ajax({
                url: "php/exist.php",
                dataType: 'JSON',
                data : {id_prj:id},
                success: function(response){
                    const exist = parseInt(response[0].exist);
                    if(exist === 1) alert("Suppression impossible : Le projet est relié à des jeunes ou des événements dans la BDD.");
                    else {
                        alert("Le projet a bien été supprimé de la base de données.");
                        //------------------------------------------------------ Réinitialisation de la liste des types et noms d'organisme sur la page jeune (fonction dans orga.js)
                        prj_Reset();
                    }
                }
            });
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !

const from_calendar = (id, liste) => {
    ajaxPrjGet(id);
    ajaxPrjJeune(id, liste);
}
