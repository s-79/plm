$(function(){
    // ------------------------------------------------------------------------- ! ! ! - - R E I N I T I A L I S A T I O N   D U   F O R M U L A I R E -- !!!

    //-------------------------------------------------------------------------- EVENEMENT CLICK SUR LE BOUTON (+) DE CREATION D'UN NOUVEAU JEUNE
    $("#new_jeune").click(function(){
        //---------------------------------------------------------------------- Réinitialisation du formulaire
        document.getElementById("form_jeune").reset();
        //---------------------------------------------------------------------- Remplissage de la liste des villes
        $("#ville").html("<option selected value=''>Séléctionner la ville</option>");
        ajaxListVille("#ville");

        //---------------------------------------------------------------------- Remplissage de la liste des noms d'organisme
        $("#nom_orga").html("<option selected value=''>Séléctionner le nom de l'organisme</option>");
        ajaxListOrga("#nom_orga");
    });
});
