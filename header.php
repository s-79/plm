<?php
session_start();
if (!$_SESSION['user']) {
    header('location: index.php');
    exit();
}
?>
<!doctype html>
<html lang="fr">
<head>
    <title>Parcours Le Monde</title>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="img/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <script src="scripts/bootstrap.bundle.min.js"></script>
    <script src="scripts/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="scripts/fontawesome.min.css">
    <link rel="stylesheet" href="scripts/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<nav class="navbar navbar-expand-xl navbar-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="jeune.php"> <strong id="plm" class= d-none>PLM</strong><strong class="titre">PARCOURS LE MONDE <span id="nav_titre">IDF</span></strong></a>&nbsp;
        <a id="nav_img" class="navbar-brand" href="jeune.php"><img src="img/logo.png" class="rounded rounded-3 d-flex justify-content-start" alt="Parcours Le Monde"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarsExampleDefault">
            <ul class="navbar-nav nav-pills mb-2 mb-md-0">
                <li class="nav-item mx-1">
                    <a id="menu_jeune" class="nav-link px-4" href="jeune.php"><i class="fas fa-child fa-lg pe-2"></i>JEUNES</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_pro" class="nav-link px-4" href="pro.php"><i class="fas fa-user-tie fa-lg pe-2"></i>PRO</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_evt" class="nav-link px-4" href="evt.php"><i class="fas fa-users fa-lg pe-2"></i>ÉVÉNEMENTS</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_prj" class="nav-link px-4" href="prj.php"><i class="fas fa-plane-departure fa-lg pe-2"></i>PROJETS</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_stat" class="nav-link px-4" href="stat.php"><i class="fas fa-chart-bar fa-lg pe-2"></i>STATS</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link px-4" href="index.php"><i class="fas fa-sign-out-alt fa-lg pe-2"></i><?php echo $_SESSION['initiales'] ?></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
