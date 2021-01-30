/* ---------------------------------------------------------------------------- Remplissage de la liste Événement - Récup données & append */
const ajaxListEvt = (liste) => {
    $.ajax({
        url: "php/populate.php",
        dataType: 'JSON',
        data : {v_evt:"v_evt"},
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

//-------------------------------------------------------------------------- Remplissage de la liste des villes
const ajaxTestEvt = (liste) => {
    $.ajax({
        url: "php/evt_List_Jeune.php",
        dataType: 'JSON',
        success: function(response){
            const len = response.length;
            let res = "";
            for (let i = 0; i < len; i++) {
                const id = response[i].id;
                const prenom = response[i].prenom;
                const nom = response[i].nom;
                const nom_ville = response[i].nom_ville;
                const pe = response[i].pe;
                res += `<tr><th scope="row">${id}</th><td>${prenom}</td><td>${nom}</td><td>${nom_ville}</td><td>${pe}</td></tr>`;
            }
            $(liste).append(res);
        }
    });
}

// {% for index, value in members[0] %}
//     <th scope="col">{{ index }}</th>
// {% endfor %}

// {% for member in members %}
//     <tr style="cursor: pointer" onclick="document.location='/edit/{{ member.id }}'">
//         {% for value in member %}
//             <td>{{ value }}</td>
//         {% endfor %}
//     </tr>
// {% endfor %}
