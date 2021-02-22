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
    <script src="scripts/bootstrap.bundle.min.js"></script>
    <script src="scripts/jquery-3.5.1.min.js"></script>
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
                    <a id="menu_jeune" class="nav-link" href="jeune.php">&nbsp;&nbsp;<i class="fas fa-child fa-lg"></i>&nbsp;JEUNES&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_pro" class="nav-link" href="pro.php">&nbsp;&nbsp;<i class="fas fa-user-tie fa-lg"></i>&nbsp;&nbsp;PRO&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_evt" class="nav-link" href="evt.php">&nbsp;&nbsp;<i class="fas fa-users fa-lg"></i>&nbsp;&nbsp;ÉVÉNEMENTS&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_prj" class="nav-link" href="prj.php">&nbsp;&nbsp;<i class="fas fa-plane-departure fa-lg"></i>&nbsp;&nbsp;PROJETS&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_stat" class="nav-link" href="stat.php">&nbsp;&nbsp;<i class="fas fa-chart-bar fa-lg"></i>&nbsp;&nbsp;STATS&nbsp;&nbsp;</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="index.php">&nbsp;<i class="fas fa-sign-out-alt fa-lg"></i>&nbsp;&nbsp;<?php echo $_SESSION['initiales'] ?>&nbsp;</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
