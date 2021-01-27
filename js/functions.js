/* ---------------------------------------------------------------------------- Remplissage des listes - mise en forme */
const displayList = response => {
    let res = "";
    const len = response.length;
    for (let i = 0; i < len; i++) {
        const id = response[i].id;
        const nom = response[i].nom;
        res += `<option value="${id}">${nom}</option>`;
    }
    return res;
}

/* ---------------------------------------------------------------------------- 1ère lettre en majuscule */
const strUpFirst = a => {
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
}

// ---------------------------------------------------------------------------- FONCTIONS AJAX

/* ---------------------------------------------------------------------------- Remplissage de la liste NPV - Récup données & append */
const ajaxListNpv = (liste) => {
    $.ajax({
        url: "php/jeune_Populate.php",
        dataType: 'JSON',
        data : {v_npv:"v_npv"},
        success: function(response){
            $(liste).append(displayList(response));
        }
    });
}
/* ---------------------------------------------------------------------------- Remplissage de la liste Orga - Récup données & append */
const ajaxListOrga = (liste) => {
    $.ajax({
        url: "php/jeune_Populate.php",
        dataType: 'JSON',
        data : {v_orga:"v_orga"},
        success: function(response){
            $(liste).append(displayList(response));
        }
    });
}
/* ---------------------------------------------------------------------------- Remplissage de la liste Ville - Récup données & append */
const ajaxListVille = (liste) => {
    $.ajax({
        url: "php/jeune_Populate.php",
        dataType: 'JSON',
        data : {v_ville:"v_ville"},
        success: function(response){
            $(liste).append(displayList(response));
        }
    });
}

// ----------------------------------------------------------------------------- ! ! !  - - R È G L E S  D E  V E R I F I C A T I O N - - ! ! !

// ----------------------------------------------------------------------------- Fonction vérification de la longueur du champ présentation
const vLen = (nom, champ, nbCar) => {
	if(champ.length <= nbCar) etat=true;
    else {
        alert(`La taille du champ ${nom} ne doit pas dépasser les ${nbCar} caractères.`);
        etat=false;
    }
return etat;
}

// // ----------------------------------------------------------------------------- Fonction vérification du numéro de téléphone
// const verifTel = tel => {
// const regexTel = /^0[0-9]([ .-]?[0-9]{2}){4}$/;
//     if(regexTel.test(tel)) etat=true;
//     else {
//     alert("Le numéro de téléphone n'est pas valide.");
//     etat=false;
//     }
// return etat;
// }
//
// // ----------------------------------------------------------------------------- Fonction vérification de l'email
// function verifMail(email){
// 	if(email.length<8)
// 		 return false;
// 	var p1=email.indexOf('@');
// 	var p2 = email.indexOf('.');
// 	if(p1>=2 && p2>(p1+2))
// 	return true;
// 	else return false;
// }
