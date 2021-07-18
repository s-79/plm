<?php
include "config.php";

$select =  mysqli_real_escape_string($con, $_POST['select']);
$annee =  mysqli_real_escape_string($con, $_POST['annee']);
$mission =  mysqli_real_escape_string($con, $_POST['mission']);
$contrat_ville =  mysqli_real_escape_string($con, $_POST['contrat_ville']);

if ($mission == "0-1") {
    $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `annee` = '$annee' AND (`mission` = 0 OR `mission` = 1) AND `contrat_ville` = '$contrat_ville' GROUP BY `$select` DESC;";

    if (!$contrat_ville) {
    $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `annee` = '$annee' AND (`mission` = 0 OR `mission` = 1) GROUP BY `$select` DESC;";

        if (!$annee) {
            $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE (`mission` = 0 OR `mission` = 1) GROUP BY `$select` DESC;";
        }

    } elseif (!$annee) {
        $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE (`mission` = 0 OR `mission` = 1) AND `contrat_ville` = '$contrat_ville' GROUP BY `$select` DESC;";
    }

// DISTINCT car dans la vue, les id apparaissent plusieurs fois
} elseif ($mission == "2") {
    $query = "SELECT DISTINCT `$select`, COUNT(*) count FROM `v_stat2` WHERE `annee` = '$annee' AND `contrat_ville` = '$contrat_ville' GROUP BY `$select` DESC;";

    if (!$contrat_ville) {
    $query = "SELECT DISTINCT `$select`, COUNT(*) count FROM `v_stat2` WHERE `annee` = '$annee' GROUP BY `$select` DESC;";

        if (!$annee) {
            $query = "SELECT DISTINCT `$select`, COUNT(*) count FROM `v_stat2` GROUP BY `$select` DESC;";
        }

    } elseif (!$annee) {
        $query = "SELECT DISTINCT `$select`, COUNT(*) count FROM `v_stat2` WHERE `contrat_ville` = '$contrat_ville' GROUP BY `$select` DESC;";
    }

} else {
    $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `annee` = '$annee' AND `mission` = '$mission' AND `contrat_ville` = '$contrat_ville' GROUP BY `$select` DESC;";

    if (!$contrat_ville) {
    $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `annee` = '$annee' AND `mission` = '$mission' GROUP BY `$select` DESC;";

        if (!$annee) {
            $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `mission` = '$mission' GROUP BY `$select` DESC;";
        }

    } elseif (!$annee) {
        $query = "SELECT `$select`, COUNT(*) count FROM `v_stat` WHERE `mission` = '$mission' AND `contrat_ville` = '$contrat_ville' GROUP BY `$select` DESC;";
    }

}

if ($stmt = $con->prepare($query)) {
    $stmt->execute();
    $stmt->bind_result($genre, $count);

    $labels = array();
    $data = array();

    while ($stmt->fetch()) {
        $labels[] = $genre;
        $data[] = $count;
    }
        $stmt->close();
}

$datasets = array (
    'data'=> $data,
    'backgroundColor'=> [
        'rgba(25, 30, 54, 1)',
        'rgba(101, 178, 222, 1)',
        'rgba(218, 51, 80, 1)',
        'rgba(240, 173, 78, 1)',
        'rgba(200, 184, 162, 1)'
    ]
);

$data = array('labels'=>$labels, 'datasets'=> array($datasets));

if($data) echo json_encode($data);
