<?php

session_start();

require('php/config.php');

// Si les champs sont bien remplis
if (isset($_POST['user']) && isset($_POST['mdp'])){
	$user = mysqli_real_escape_string($con, $_POST['user']);
	$mdp = mysqli_real_escape_string($con, $_POST['mdp']);
    $query = "SELECT * FROM `v_int` WHERE `user`='$user'";
	$result = mysqli_query($con,$query) or die(mysql_error());

	// Si le résultat de la requète contient 1 ligne
	if (mysqli_num_rows($result) == 1) {
		$user_result = mysqli_fetch_assoc($result);

		// Si le mot de passe est le même que le mot de passe hacher
		if (password_verify($mdp, $user_result['mdp'])) {
				// Création du jeton de session
				$_SESSION['user'] = $user_result['user'];
				$_SESSION['initiales'] = $user_result['initiales'];
				header('location: jeune.php');
		}	else {
			$message = "Identifiant ou mot de passe incorrect.";
		}
	} else {
		$message = "Identifiant ou mot de passe incorrect.";
	}
}
?>

<!doctype html>
<html lang="fr">
<head>
    <title>Parcours Le Monde</title>
    <meta charset="utf-8">
	<meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <form id="form_id" action="" method="post" name="login">
        <div class="mx-auto my-5" style="width:30em">
            <img src="img/logo_id.png" class="img-fluid" alt="">
        </div>
        <div class="row justify-content-center ">
            <div class="bg-marine m-3 pt-4 pb- rounded rounded-3" style="width:30em">
                <h2>Identification</h2>
                <div class="form-floating mx-3 mt-4">
                    <input type="text" name="user" class="form-control" id="user" placeholder="Utilisateur">
                    <label for="user">Utilisateur <span class="rose-bold">*</span></label>
                </div>
                <div class="form-floating mx-3 mt-3">
                        <input type="password" name="mdp" class="form-control" id="mdp" placeholder="Mot de passe">
                        <label for="mdp">Mot de passe <span class="rose-bold">*</span></label>
                </div>
                <div class="form-group d-flex justify-content-center mx-3 m-4">
                    <button type="submit" name="submit" class="btn btn-lg btn-warning">Se connecter</button>
                </div>
                <?php if (! empty($message)) { ?>
                    <p class="text-center rose"><?php echo $message; ?></p>
                <?php } ?>
            </div>
        </div>
    </form>

</body>
