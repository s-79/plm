<?php

session_start();

require('php/config.php');

// Si les champs sont bien remplis
if (isset($_POST['user']) && isset($_POST['mdp'])){
	$user = mysqli_real_escape_string($con, $_POST['user']);
	$mdp = mysqli_real_escape_string($con, $_POST['mdp']);
    $query = "CALL connex('$user')";
	$result = mysqli_query($con,$query) or die(mysql_error());

	// Si le résultat de la requète contient 1 ligne
	if (mysqli_num_rows($result) == 1) {
		$user_result = mysqli_fetch_assoc($result);

		// Si l'utilisateur est admin
		if ($user_result['admin'] == 1) {

			// Si le mot de passe est le même que le mot de passe hacher
			if (password_verify($mdp, $user_result['mdp'])) {
					// Création du jeton de session
					$_SESSION['user'] = $user_result['user'];
					$_SESSION['initiales'] = $user_result['initiales'];
					header('location: evt.php');
			}	else {
				$message = "Identifiant ou mot de passe incorrect.";
			}
		} else {
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
	<link rel="shortcut icon" href="img/favicon.ico">
	<link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <script src="scripts/bootstrap.bundle.min.js"></script>
    <script src="scripts/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="scripts/fontawesome.min.css">
    <link rel="stylesheet" href="scripts/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="container-fluid">
		<div class="mx-auto my-4 pb-4" style="max-width:30em;">
			<img src="img/logo_id.png" class="img-fluid" alt="logo PLM">
		</div>
		<div class="bg-marine p-3 pt-4 rounded rounded-3 mx-auto" style="max-width:30em;">
			<h2>Identification</h2>
			<form action="" method="post" name="login">
				<div class="form-floating mx-3 mt-4">
					<input type="text" name="user" class="form-control" placeholder="Utilisateur">
					<label for="user">Utilisateur <span class="rose-bold">*</span></label>
				</div>
				<div class="form-floating mx-3 mt-3">
						<input type="password" name="mdp" class="form-control" placeholder="Mot de passe">
						<label for="mdp">Mot de passe <span class="rose-bold">*</span></label>
				</div>
				<div class="form-group d-flex justify-content-center pt-3 m-3">
					<button type="submit" name="submit" class="btn btn-lg btn-warning">Se connecter</button>
				</div>
				<?php if (! empty($message)) { ?>
					<p class="text-center rose"><?php echo $message; ?></p>
				<?php } ?>
			</form>
		</div>
	</div>
</body>
