/* ----------------------------------------------------------------------------  Fonction de remplissage et mise en forme des listes select dynamiques */
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

/* ----------------------------------------------------------------------------- Mettre la 1ère lettre en majuscule */
const strUpFirst = a => {
    return (a+'').charAt(0).toUpperCase()+a.substr(1);
}

// ----------------------------------------------------------------------------- Fonction de vérification de la longueur du champ présentation
const vLen = (nom, champ, nbCar) => {
	if(champ.length <= nbCar) etat=true;
    else {
        alert(`La taille du champ ${nom} ne doit pas dépasser les ${nbCar} caractères.`);
        etat=false;
    }
return etat;
}

// ----------------------------------------------------------------------------- ! ! !  - - R È G L E S  D E  V E R I F I C A T I O N - - ! ! !

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
