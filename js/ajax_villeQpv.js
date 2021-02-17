// ----------------------------------------------------------------------------- ! ! ! - - P O P U L A T E - - ! ! !

/* ---------------------------------------------------------------------------- Remplissage de la liste Ville - Récup données & append */
const ajaxListVille = (liste, id_ville) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_ville:"v_ville"},
        success: function(response){
            $(liste).html("<option selected value=''>Séléctionner la ville *</option>");
            $(liste).append(displayList(response));
            if(id_ville)$(liste).val(id_ville);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - C H A N G E - - ! ! !

/* ----------------------------------------------------------------------------- Changement dans le menu SELECT */
const contrat_ville_Change = (id_ville) => {
    $.ajax({
        url: "php/jeune_Get.php",
        dataType: 'JSON',
        data : {id_ville_contrat:id_ville},
        success: function(response){
            const contrat_ville = response[0].contrat_ville;
            const nom_ville = response[0].nom_ville;
            $("#contrat_ville").val(contrat_ville);
            $("#nom_ville_none").val(nom_ville);
        }
    });
}

//------------------------------------------------------------------------------ La ville possède-t-elle des quartiers QPV ?
const qpv_Exist = (id_ville, qpv) => {
    $.ajax({
        url: "php/exist.php",
        dataType: 'JSON',
        data : {id_ville_qpv:id_ville},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) {
                if(qpv) $("#qpv").val(qpv);
                $("#qpv")[0].disabled = false;
            } else {
                $("#qpv").val("Non");
                $("#qpv")[0].disabled = true;
            }
        }
    });
}

/* ----------------------------------------------------------------------------- QPV : Changement dans le menu SELECT */
const qpv_Change = (id_ville, qpv, id_qpv) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {id_ville:id_ville},
        success: function(response){
            // 0 car besoin de remonter un SMALLINT
            $("#nom_qpv").html("<option selected value='0'>Séléctionner le quartier QPV</option>");
            $("#prij").prop('checked', false);
            if(qpv === "Oui" || qpv === "Limite") {
                $("#nom_qpv")[0].disabled = false;
                $("#nom_qpv").append(displayList(response));
                if(id_qpv) $("#nom_qpv").val(id_qpv);
            }
            else {$("#nom_qpv")[0].disabled = true;}
        }
    });
}

const qpv_Prij = (id) => {
    $.ajax({
        //---------------------------------------------------------------------- Le QPV est-il en PRIJ ?
        url: "php/exist.php",
        dataType: 'JSON',
        data : {id_qpv_prij:id},
        success: function(response){
            const exist = parseInt(response[0].exist);
            if(exist === 1) $("#prij").prop('checked', true);
            else {$("#prij").prop('checked', false);}
        }
    });
}
