/* ---------------------------------------------------------------------------- Remplissage de la liste Sensibilisation - Récup données & append */
const ajaxListSensi = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_sensi:"v_sensi"},
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                if(parseInt(id) === 0) {
                    const nom = "Non renseigné"
                    res += `<option value="${id}">${nom}</option>`;
                } else {
                    const nom = response[i].nom.substr(2);
                    res += `<option value="${id}">${nom}</option>`;
                }
            }
            $(liste).append(res);
        }
    });
}
