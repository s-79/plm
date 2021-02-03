//----------------------------------------------------------------------------- ! ! ! - - G E T - - ! ! !
const jeune_Get_Acc = (id) => {
    $.ajax({
        url: 'php/acc_Get.php',
        dataType: 'JSON',
        data : {id_acc:id},
        success: function(response){
            // ----------------------------------------------------------------- Récupération des données
            const acc = response[0].acc;
            // ----------------------------------------------------------------- Remplissage du statut d'accompagnement champs
            $("#acc").val(acc);
        }
    });
}

const jeune_Update_Acc = (id, statut) => {
    //-------------------------------------------------------------------------- Envoie des infos vers la BDD
    $.ajax({
        url: 'php/acc.php',
        dataType: 'JSON',
        data : {id_acc:id, statut:statut},
        complete: function(){
            $("#acc_check").removeClass('d-none');
            // ----------------------------------------------------------------- Fonction à la fin
            setTimeout(acc_Check, 2000);
        }
    });
}

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
                // ------------------------------------------------------------- Mise en forme des données
                res += `<tr><th class="d-none" scope="row">${id}</th><td>${dat}</td><td>${type}</td><td>${nom_ville}</td></tr>`;
            }
            // ----------------------------------------------------------------- Remplissage du tableau de sensibilisation M0 / M1
            $("#tab_evt").html(res);
        }
    });
}

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
                // ------------------------------------------------------------- Mise en forme des données
                res += `<tr><th class="d-none" scope="row">${id}</th><td>${dat}</td><td>${type}</td></tr>`;
            }
            // ----------------------------------------------------------------- Remplissage du tableau de sensibilisation M2
            $("#tab_evt2").html(res);
        }
    });
}

// ----------------------------------------------------------------------------- ! ! ! - - F O N C T I O N S - - ! ! !
const acc_Check = () => {
    $("#acc_check").addClass('d-none');
}
