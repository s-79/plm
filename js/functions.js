$(function(){
    //-------------------------------------------------------------------------- Toolitips au survol des boutons (+)
    $('[data-toggle="tooltip"]').tooltip();
});

const displayList = (response, sub) => {
    let res = "";
    const len = response.length;
    for (let i = 0; i < len; i++) {
        const id = response[i].id;
        let nom = "";
        if(parseInt(id) === 0) nom = "Non renseigné";
        else {
            if(sub === 1) nom = response[i].nom.substr(2);
            else {nom = response[i].nom;}
        }
        res += `<option value="${id}">${nom}</option>`;
    }
    return res;
}

/* ----------------------------------------------------------------------------- Asynchrone */
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
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
const uuid_gen = () => {
  const s4=()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}
