/* ----------------------------------------------------------------------------- VILLE : Changement dans le menu SELECT */
const contrat_ville_Change = (id_ville) => {
    $.ajax({
        url: "php/ville_contrat.php",
        dataType: 'JSON',
        data : {id_ville:id_ville},
        success: function(response){
            const contrat_ville = response[0].contrat_ville;
            const nom_ville = response[0].nom_ville;
            $("#contrat_ville").val(contrat_ville);
            $("#nom_ville_none").val(nom_ville);
        }
    });
}

//------------------------------------------------------------------------------ La ville possède-t-elle des quartiers QPV ?
const qpv_Exist = (id) => {
    $.ajax({
        url: "php/exist.php",
        dataType: 'JSON',
        data : {id_ville_qpv:id},
        success: function(response){
            const statut = parseInt(response[0].statut);
            if(statut === 1) {
                $("#qpv")[0].disabled = false;
                $("#nom_qpv")[0].disabled = true;
            } else {
                $("#qpv").val("Non");
                $("#qpv")[0].disabled = true;
                $("#nom_qpv")[0].disabled = true;
            }
        }
    });
}

/* ----------------------------------------------------------------------------- QPV : Changement dans le menu SELECT */
const qpv_Change = (id_ville) => {
    $.ajax({
        url: "php/jeune_Populate.php",
        dataType: 'JSON',
        data : {id_ville:id_ville},
        success: function(response){
            $("#nom_qpv")[0].disabled = false;
            $("#nom_qpv").append(displayList(response));
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
            const statut = parseInt(response[0].statut);
            if(statut === 1) {
                $("#prij").prop('checked', true);
            } else {
                $("#prij").prop('checked', false);
            }
        }
    });
}
