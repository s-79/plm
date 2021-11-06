// ---------------------------------------------------------------------------- !!! - - C H A R T - - !!!
const ajaxStat = (select, layout, annee, mission, contrat_ville) => {
    $.ajax({
        type: 'POST',
        url: 'php/stat.php',
        data : {select:select, annee:annee, mission:mission, contrat_ville:contrat_ville},
        datatype: 'json',
        success: function (result) {
            // Est-ce que result contient au moins 1 chiffre de data ?
            const donnees = JSON.parse(result).datasets[0].data[0];
            if(!donnees) {
                stat_Reset();
                $('#modal_stat').modal('show');
            } else {
                const ctx = document.getElementById(select).getContext("2d");
                const myChart = new Chart(ctx,
                {
                    type: 'doughnut',
                    data: JSON.parse(result),
                    options: {
                        // title: {
                        //     display: true,
                        //     text: strUpFirst(select),
                        //     fontFamily:'DejaVu Sans',
                        //     fontSize:20,
                        //     fontColor:'#191E36',
                        //     fontStyle:'bold'
                        // },
                        // responsive: true,
                        legend: {
                            position: "right",
                            align: "start",
                            labels: {
                                boxWidth: 10
                            }
                        },
                        animation: {
                            duration: 2000
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: layout,
                                top: 0,
                                bottom: 0
                            }
                        },
                        plugins: {
                            // Nécéssite le plugin-datalabels en script dans stat.php
                            datalabels: {
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                        sum += data;
                                    });
                                    // 2 chiffres après la virgule
                                    // let percentage = (value*100 / sum).toFixed(2)+"%";
                                    let percentage = (value*100 / sum).toFixed(0)+"%";
                                    return percentage;
                                },
                                color: '#fff',
                            }
                        }
                    }
                })
            }
        }
    })
}

// ---------------------------------------------------------------------------- !!! - - P O P U L A T E - - !!!
const ajaxListAnnee = () => {
    $.ajax({
        url: 'php/stat_Get.php',
        dataType: 'JSON',
        data : {annee:"annee"},
        success: function(response){
            $("#annee").html("<option selected value=''>Séléctionner une année</option>")
            let res = "";
            const len = response.length;
            for (let i = 0; i < len; i++) {
                const annee = response[i].annee;
                res += `<option value="${annee}">${annee}</option>`;
            }
            $("#annee").append(res);
        }
    });
}

const ajaxListContratVille = () => {
    $.ajax({
        url: 'php/stat_Get.php',
        dataType: 'JSON',
        data : {contrat_ville:"contrat_ville"},
        success: function(response){
            $("#contrat_ville").html("<option selected value=''>Séléctionner un contrat de ville</option>")
            let res = "";
            const len = response.length;
            for (let i = 0; i < len; i++) {
                const contrat_ville = response[i].contrat_ville;
                res += `<option value="${contrat_ville}">${contrat_ville}</option>`;
            }
            $("#contrat_ville").append(res);
        }
    });
}
