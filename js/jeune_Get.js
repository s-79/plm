$(function(){
    //-------------------------------------------------------------------------- ÉVENEMENT CLICK SUR LE BOUTONS AFFICHER LES INFORMATIONS
    $("#infos").click(function(){
        $("#ville").html("");
        $("#nom_qpv").html("");
        $("#nom_orga").html("");

        //---------------------------------------------------------------------- Récupération de l'id du jeune séléctionné
        const id = $("#npv_res").val();
        if(!id) {
            alert("Aucun jeune n'a été séléctionné")
        } else {
            $.ajax({
                url: 'php/jeune_Get.php',
                dataType: 'JSON',
                data : {id:id},
                success: function(response){
                    // --------------------------------------------------------- Récupération des données
                    const id = response[0].id;
                    const adherent = response[0].adherent;
                    const genre = response[0].genre;
                    const nom = response[0].nom;
                    const prenom = response[0].prenom;
                    const ddn = response[0].ddn;
                    const email = response[0].email;
                    const tel = response[0].tel;
                    const facebook = response[0].facebook;
                    const skype = response[0].skype;
                    const insta = response[0].insta;
                    const urgence = response[0].urgence;
                    const adresse = response[0].adresse;
                    const id_ville = response[0].id_ville;
                    const nom_ville = response[0].ville;
                    const contrat_ville = response[0].contrat_ville;
                    const qpv = response[0].qpv;
                    const id_qpv = response[0].id_qpv;
                    const nom_qpv = response[0].nom_qpv;
                    const prij = response[0].prij;
                    const type_orga = response[0].type_orga;
                    const id_orga = response[0].id_orga;
                    const nom_orga = response[0].nom_orga;
                    const nom_ref = response[0].nom_ref;
                    const tel_ref = response[0].tel_ref;
                    const email_ref = response[0].email_ref;
                    const formation = response[0].formation;
                    const niveau = response[0].niveau;
                    const diplome = response[0].diplome;
                    const niveau_anglais = response[0].niveau_anglais;
                    const langues = response[0].langues;
                    const statut = response[0].statut;
                    const pe = response[0].pe;
                    const rsa = response[0].rsa;
                    const gj = response[0].gj;

                    // --------------------------------------------------------- Remplissage des champs
                    $("#id").val(id);
                    $("#genre").val(genre);
                    $("#adherent").prop('checked', false);
                    if (adherent === "1") $("#adherent").prop('checked', true);
                    $("#nom").val(nom);
                    $("#prenom").val(prenom);
                    $("#ddn").val(ddn);
                    $("#email").val(email);
                    $("#tel").val(tel);
                    $("#facebook").val(facebook);
                    $("#skype").val(skype);
                    $("#insta").val(insta);
                    $("#urgence").val(urgence);
                    $("#adresse").val(adresse);
                    $("#ville").prepend(`<option selected value="${id_ville}">${nom_ville}</option>`);
                    $("#contrat_ville").val(contrat_ville);
                    $("#qpv").val(qpv);
                    $("#nom_qpv").prepend(`<option selected value="${id_qpv}">${nom_qpv}</option>`);
                    $("#prij").prop('checked', false);
                    if (prij === "1") $("#prij").prop('checked', true);
                    $("#type_orga").val(type_orga);
                    $("#nom_orga").prepend(`<option selected value="${id_orga}">${nom_orga}</option>`);
                    $("#nom_ref").val(nom_ref);
                    $("#tel_ref").val(tel_ref);
                    $("#email_ref").val(email_ref);
                    $("#formation").val(formation);
                    $("#niveau").val(niveau);
                    $("#diplome").val(diplome);
                    $("#niveau_anglais").val(niveau_anglais);
                    $("#langues").val(langues);
                    $("#statut").val(statut);
                    $("#pe").val(pe);
                    $("#rsa").val(rsa);
                    $("#gj").val(gj);
                }
            });
        }

        //-------------------------------------------------------------------------- Remplissage de la liste des villes
        ajaxListVille("#ville");

        //-------------------------------------------------------------------------- Remplissage de la liste des noms d'organisme
        ajaxListOrga("#nom_orga");
    });
});
