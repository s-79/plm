<?php

include "config.php";

$return_arr = array();

$query = "SELECT * FROM `v_jeune`";
$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
    $adherent = $row['adherent'];
    $genre = $row['genre'];
    $prenom = $row['prenom'];
    $nom = $row['nom'];
    $ddn = $row['ddn'];
    $adresse = $row['adresse'];
    $nom_ville = $row['nom_ville'];

    $return_arr[] = array(
        "id" => $id,
        "adherent" => $adherent,
        "genre" => $genre,
        "prenom" => $prenom,
        "nom" => $nom,
        "ddn" => $ddn,
        "adresse" => $adresse,
        "nom_ville" => $nom_ville
    );
}

// ---------------------------------------------------------------------------- Create Csv
$filename = "csv/jeune.csv";
$fp = fopen($filename, 'w');

foreach ($return_arr as $fields) {
    fputcsv($fp, $fields);
}

fclose($fp);


// ---------------------------------------------------------------------------- Create Zip
$zip = new ZipArchive();
$filenameZip = "csv/jeune.zip";

if ($zip->open($filenameZip, ZipArchive::CREATE)!==TRUE) {
    exit("cannot open <$filenameZip>\n");
}
$zip->setPassword('MySecretPassword');
$zip->addFile($filename);
$zip->setEncryptionName($filename, ZipArchive::EM_AES_256);
$zip->close();

// $filenameZip = "csv/jeune.zip";
// $zip = new ZipArchive();
// if ($zip->open($filenameZip, ZipArchive::CREATE) === TRUE) {
//     // $zip->setPassword('MySecretPassword');
//     $zip->addFile($filename);
//     // $zip->setEncryptionName("jeune.csv", ZipArchive::EM_AES_256);
//     $zip->close();
//     echo "Ok\n";
// } else {echo "KO\n";}

// ----------------------------------------------------------------------------  Download CSV
// header("Content-Description: File Transfer");
// header("Content-Disposition: attachment; filename=".$filename);
// header("Content-Type: application/csv; ");
// readfile($filename);

// ----------------------------------------------------------------------------  Download CSV
header('Content-Type: application/zip');
header('Content-Disposition: attachment; filename="'.basename($filenameZip).'"');
header('Content-Length: ' . filesize($filenameZip));

flush();
readfile($filenameZip);
// ----------------------------------------------------------------------------- Delete file
unlink($filenameZip);

// ----------------------------------------------------------------------------  Reset CSV
file_put_contents($filename, '');


exit();
