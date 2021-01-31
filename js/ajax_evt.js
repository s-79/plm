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

//----------------------------------------------------------------------------- Récupération des jeunes par l'id de l'événement
const ajaxEvtJeune = (id_evt, liste) => {
    $.ajax({
        url: "php/evt_Get_Jeune.php",
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
        url: "php/evt_Get_Inter.php",
        dataType: 'JSON',
        data : {id_evt:id_evt},
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

/* ---------------------------------------------------------------------------- Remplissage de la liste des intervenants - Récup données & append */
const ajaxListInter = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_inter:"v_inter"},
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
