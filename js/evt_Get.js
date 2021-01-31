$(function(){
    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        const id_evt = $("#evt_res").val();
        //---------------------------------------------------------------------- Récupération de l'id du jeune séléctionné
        if(!id_evt) alert("Aucun événement n'a été séléctionné")
        else {
            //------------------------------------------------------------------ Remplissage du tableau avec les noms des jeunes qui ont participé à l'événement
            $("#tableau").html("");
            ajaxEvtJeune(id_evt, "#tableau");

            //------------------------------------------------------------------ Remplissage de la liste de tous intervenants et décochage des cases
            ajaxListInter("#inter");
            //------------------------------------------------------------------ Récupération des intervants liés à cet événement
            ajaxEvtInter(id_evt);
            //---------------------------------------------------------------------- Reinitialisation des champs
            $("#type")[0].disabled = false;
            $("#ville").html("");
            //---------------------------------------------------------------------- Inversement des boutons en bas de page
            // $("#btn_jeune_create").addClass("d-none");
            // $("#btn_jeune_update").removeClass("d-none");

            $.ajax({
                url: 'php/evt_Get.php',
                dataType: 'JSON',
                data : {id:id_evt},
                success: function(response){
                    // --------------------------------------------------------- Récupération des données
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
                    const nb_pro = response[0].nb_pro;
                    const commentaire = response[0].commentaire;

                    // --------------------------------------------------------- Remplissage des champs
                    $("#id").val(id);
                    $("#m0, #m1, #m2").prop('checked', false);
                    if (mission === "0") $("#m0").prop('checked', true);
                    if (mission === "1") $("#m1").prop('checked', true);
                    if (mission === "2") $("#m2").prop('checked', true);
                    $("#date").val(dat);
                    if(type === "Sensibilisation Mission 0") $("#type")[0].disabled = true;
                    $("#type").prepend(`<option selected value="${type}">${type}</option>`);
                    $("#intitule").val(intitule);
                    $("#visio").prop('checked', false);
                    if (visio === "1") $("#visio").prop('checked', true);
                    $("#ville").prepend(`<option selected value="${id_ville}">${ville}</option>`);
                    $("#organisateurs").val(organise);
                    $("#nb_jeunes").val(nb_jeunes);
                    $("#nb_pro").val(nb_pro);
                    $("#commentaires").val(commentaire);
                }
            });
        }
        //---------------------------------------------------------------------- Remplissage de la liste des villes
        ajaxListVille("#ville");
    });
});
