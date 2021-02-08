$(function(){
//----------------------------------------------------------------------------- Toolitips au survol des boutons (+)
$('[data-toggle="tooltip"]').tooltip()
});

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

/* ----------------------------------------------------------------------------  Fonction de remplissage et mise en forme des listes select dynamiques avec Substr des 2 premiers caractères */
const displayListSub = response => {
    let res = "";
    const len = response.length;
    for (let i = 0; i < len; i++) {
        const id = response[i].id;
        const nom = response[i].nom.substr(2);
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

// ----------------------------------------------------------------------------- Fonction UUID
const uuid = () => {
  const s4=()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}
