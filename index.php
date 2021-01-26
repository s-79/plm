<?php
include("header.php"); ?>

<div class="container-fluid">
<div class="row justify-content-center mt-5" style="margin-top: 5em !important;">
    <!--                                                                                                              Zone de recherche -->
    <div class="col-12 col-lg-2 my-4 mx-1 text-center">
        <input type="text" class="form-control" id="npv" placeholder="Saisir le nom et le prénom">
        <label for="npv" class="d-none">Saisir le nom et le prénom</label>

    </div>
    <!--                                                                                                              Résultat de recherche -->
    <div class="col-12 col-lg-2 my-4 mx-1 text-center">
        <select class="form-select" aria-label="Default select example" id="npv_res">
          <option selected value="">Séléctionner un jeune</option>
        </select>
    </div>
    <!--                                                                                                              Bouton afficher les infos-->
    <div class="col-5 col-lg-2 my-4 mx-1 text-center">
        <button type="button" id="infos" class="btn btn-primary bg-bleu btn-bleu marine">Afficher les informations</button>
    </div>

    <!--                                                                                                              Bouton afficher l'accompagnement-->
    <div class="col-5 col-lg-2 my-4 mx-1 text-center">
        <button type="button" id="accomp" class="btn btn-warning">Afficher accompagnement</button>
    </div>
</div>

<form id="form_jeune">
<div class="row justify-content-center ">
    <!--                                                                                                              État Civil-->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <div class="row pt-4">
            <div class="col-4">
                <h2>État civil</h2>
            </div>
            <div class="col-1 p-0 m-0">
                <i id="new_jeune" class="fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Créer un nouveau profil"></i>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <label class="form-check-label text-white" for="adherent">
                    Adhérent
                </label>&nbsp;&nbsp;
                <input class="form-check-input" type="checkbox" value="" id="adherent">
            </div>
        </div>

        <div class="form-floating mx-3 mt-4">
            <select class="form-select" id="genre" aria-label="Genre *">
                <option selected>Séléctionner un genre</option>
                <option value="Femme">Femme</option>
                <option value="Homme">Homme</option>
                <option value="Autre">Autre</option>
            </select>
            <label for="genre">Genre *</label>
        </div>
        <!--                                                                                                        Récupération de l'id dans un input invisible -->
        <input type="text" class="form-control d-none" id="id">

        <div class="form-floating mx-3 mt-3">
                <input type="text" class="form-control" id="nom" placeholder="Nom *">
                <label for="nom">Nom <span class="rose-bold">*</span></label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="prenom" placeholder="Prénom *">
            <label for="prenom">Prénom <span class="rose-bold">*</span></label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="date" class="form-control" id="ddn" placeholder="Date de naissance">
            <label for="ddn">Date de naissance</label>
        </div>
        <h2 class="pt-4">Sensibilisation</h2>
        <div class="form-floating mx-3 mt-4">
            <select class="form-select" id="sensiblisation" aria-label="Sensibilisation">
                <option selected>Ajouter une sensibilisation</option>
                <option>Sensibilisation 1</option>
                <option>Sensibilisation 2</option>
                <option>Sensibilisation 3</option>
                <option>Sensibilisation 4</option>
            </select>
            <label for="sensiblisation">Sensibilisation</label>
        </div>
    </div>
    <!--                                                                                                              Contact -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Contact</h2>
        <div class="form-floating mx-3 mt-4">
            <input type="email" class="form-control" id="email" placeholder="Email">
            <label for="email">Email</label>
        </div>

        <div class="form-floating mx-3 mt-3">
            <input type="tel" class="form-control" id="tel" placeholder="Téléphone">
            <label for="tel">Téléphone</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="facebook" placeholder="Facebook">
            <label for="facebook">Facebook</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="skype" placeholder="Skype">
            <label for="skype">Skype</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="insta" placeholder="Instagram">
            <label for="instagram">Instagram</label>
        </div>
        <div class="form-floating mx-3 mt-3 mb-4">
            <textarea class="form-control" placeholder="Contact en cas d'urgence" id="urgence"></textarea>
            <label for="urgence">Contact en cas d'urgence</label>
        </div>
    </div>
    <!--                                                                                                              Coordonnées -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Coordonnées</h2>
        <div class="form-floating mx-3 mt-4">
            <input type="text" class="form-control" id="adresse" placeholder="Adresse">
            <label for="adresse">Adresse</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="ville" aria-label="Ville">
                <option selected>Séléctionnez la ville</option>
            </select>
            <label for="ville">Ville</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="contrat_ville" placeholder="Contrat de Ville" disabled>
            <label for="contrat_ville">Contrat de Ville</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="qpv" aria-label="QPV" disabled>
                <option selected>QPV</option>
                <option>Oui</option>
                <option>Non</option>
                <option>Limite</option>
            </select>
            <label for="qpv">QPV</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="nom_qpv" aria-label="Quartier QPV" disabled>
                <option selected>Séléctionner le quartier QPV</option>

            </select>
            <label for="nom_qpv">Quartier QPV</label>
        </div>
        <div class="form-group row mx-0 mt-4">
            <label class="form-check-label col-2 text-white" for="prij">
                PRIJ
            </label>
            <div class="col-1">
                <input class="form-check-input" type="checkbox" value="" id="prij" disabled>
            </div>
            <div class="col-8 d-flex justify-content-end">
                <a href="https://sig.ville.gouv.fr/" target="_blank">Site Internet SIG Ville</a>
            </div>
        </div>
    </div>
</div>
<!--                                                                                                              2ème ligne -->
<div class="row justify-content-center">
<!--                                                                                                              Organisme référent -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Organisme référent</h2>
        <div class="form-floating mx-3 mt-4">
            <select class="form-select" id="type_orga" aria-label="Type d'organisme">
                <option selected>Séléctionner le type d'organisme</option>
                <option>Mission Locale</option>
                <option>Réseau IJ (BIJ, PIJ, CIDJ)</option>
                <option>Club de prévention</option>
                <option>Pôle Emploi</option>
                <option>Centre Paris Anim ou EPJ (Paris)</option>
                <option>Internet</option>
                <option>Bouche à oreilles / ami</option>
                <option>École de la deuxième chance</option>
                <option>Membre de la Plateforme (Concordia, SJ, …)</option>
                <option>Autres structures socio-éducatives</option>
                <option>Etat et collectivités (DDCS…)</option>
                <option>Foyer de jeunes travailleurs</option>
            </select>
            <label for="type_orga">Type d'organisme</label>
        </div>
        <div class="row mx-1 mt-3">
            <div class="form-floating col-10">
                <select class="form-select" id="nom_orga" aria-label="Nom de l'organisme" disabled>
                    <option selected>Séléctionner le nom de l'organisme</option>
                </select>
                <label for="nom_orga">Nom de l'organisme</label>
            </div>
            <div class="col-2 my-auto">
                <i id="new_orga" class="fas fa-plus-circle fa-2x text-white pointeur" data-bs-toggle="modal" data-bs-target="#modal_orga" data-toggle="tooltip" data-placement="top" title="Ajouter / modifier un organisme"></i>
            </div>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="nom_ref" placeholder="Nom du référent">
            <label for="nom_ref">Nom du référent</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="tel_ref" placeholder="Téléphone du référent">
            <label for="tel_ref">Téléphone du référent</label>
        </div>
        <div class="form-floating mx-3 mt-3 mb-4">
            <input type="email" class="form-control" id="email_ref" placeholder="Email du référent<">
            <label for="email_ref">Email du référent</label>
        </div>
    </div>
<!--                                                                                                                              Formation  -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Formation</h2>
        <div class="form-floating mx-3 mt-4">
            <input type="text" class="form-control" id="formation" placeholder="Intitulé de la dernière formation">
            <label for="formation">Intitulé de la dernière formation</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="niveau" aria-label="Niveau scolaire">
                <option selected>Séléctionner le niveau scolaire</option>
                <option>Sans qualification</option>
                <option>3 (CAP, BEP)</option>
                <option>4 (Bac)</option>
                <option>5 (Bac+2)</option>
                <option>6 (Bac+3/+4)</option>
                <option>7 (Bac+5)</option>
            </select>
            <label for="niveau">Niveau scolaire</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="diplome" placeholder="Dernier diplôme acquis">
            <label for="diplome">Dernier diplôme acquis</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="niveau_anglais" aria-label="Niveau d'anglais">
                <option selected>Séléctionner le niveau d'anglais</option>
                <option>A1</option>
                <option>A2</option>
                <option>B1</option>
                <option>B2</option>
                <option>C1</option>
                <option>C2</option>
            </select>
            <label for="niveau_anglais">Niveau d'anglais</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <input type="text" class="form-control" id="langues" placeholder="Autre langue parlée">
            <label for="langues">Autres langues parlées</label>
        </div>
    </div>
<!--                                                                                                               Situation professionelle -->
    <div class="col-12 col-lg-3 bg-marine m-3 rounded rounded-3">
        <h2 class="pt-4">Situation professionelle</h2>
        <div class="form-floating mx-3 mt-4">
            <select class="form-select" id="statut" aria-label="Statut emploi">
                <option selected>Séléctionner le statut emploi</option>
                <option>Demandeur d'emploi de moins d'un an</option>
                <option>Demandeur d'emploi de plus d'un an</option>
                <option>En CDD</option>
                <option>En intérim</option>
                <option>En CDI</option>
                <option>Etudiant</option>
                <option>Service civique</option>
                <option>En formation</option>
                <option>Autre</option>
            </select>
            <label for="statut">Statut emploi</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="pe" aria-label="Inscription Pôle Emploi">
                <option selected>Inscription Pôle Emploi</option>
                <option>Oui</option>
                <option>Non</option>
            </select>
            <label for="pe">Inscription Pôle Emploi</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="rsa" aria-label="Allocataire RSA">
                <option selected>Allocataire RSA</option>
                <option>Oui</option>
                <option>Non</option>
            </select>
            <label for="rsa">Allocataire RSA</label>
        </div>
        <div class="form-floating mx-3 mt-3">
            <select class="form-select" id="gj" aria-label="Garantie Jeune">
                <option selected>Garantie Jeune</option>
                <option>Oui</option>
                <option>Non</option>
            </select>
            <label for="gj">Garantie Jeune</label>
        </div>
        <div class="form-group d-flex justify-content-center mx-3 mt-1 mb-1">
            <button type="button" id="modif" class="btn btn-primary bg-bleu btn-bleu marine m-3">&nbsp;Enregistrer&nbsp;<br>la fiche</button>
            <button type="button" id="acc" class="btn btn-warning m-3">Démarrer<br>accomp.</button>
            <button type="button" id="suppr" class="btn btn-danger m-3">Supprimer <br>la fiche</button>
        </div>
    </div>
</div>
</form>

<!--                                                                                                               Modal pour choisir ajouter / modifier un organisme -->
<div class="modal fade" id="modal_orga" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter ou modifier un organisme</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
          Souhaitez-vous ajouter ou modifier/supprimer<br> un organisme référent ?
      </div>
      <div class="modal-footer">
          <button id="btn_orga_create" type="button" class="btn btn-primary close-modal" data-bs-toggle="modal" data-bs-target="#modal_orga_create">Ajouter</button>
          <button id="btn_orga_update" type="button" class="btn btn-warning close-modal" data-bs-toggle="modal" data-bs-target="#modal_orga_update">Modifier</button>
      </div>
    </div>
  </div>
</div>

<!---                                                                                                              Modal pour ajouter un organisme -->
<div class="modal fade" id="modal_orga_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter un organisme</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form id="form_orga_create">
          <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="create_type_orga" aria-label="Type d'organisme *">
                  <option selected value="">Séléctionner le type d'organisme *</option>
                  <option>Mission Locale</option>
                  <option>Réseau IJ (BIJ, PIJ, CIDJ)</option>
                  <option>Club de prévention</option>
                  <option>Pôle Emploi</option>
                  <option>Centre Paris Anim ou EPJ (Paris)</option>
                  <option>Internet</option>
                  <option>Bouche à oreilles / ami</option>
                  <option>École de la deuxième chance</option>
                  <option>Membre de la Plateforme (Concordia, SJ, …)</option>
                  <option>Autres structures socio-éducatives</option>
                  <option>Etat et collectivités (DDCS…)</option>
                  <option>Foyer de jeunes travailleurs</option>
              </select>
              <label for="create_type_orga">Type d'organisme</label>
          </div>
          <div class="form-floating mx-3 mt-3">
                  <input type="text" class="form-control" id="create_nom_orga" placeholder="Nom de l'organisme *">
                  <label for="create_nom_orga">Nom de l'organisme à ajouter</label>
          </div>
      </form>
      </div>
      <div class="modal-footer">
          <button id="orga_create" type="button" class="btn btn-primary">Ajouter</button>
      </div>
    </div>
  </div>
</div>

<!---                                                                                                              Modal pour modifier un organisme -->
<div class="modal fade" id="modal_orga_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modifier ou supprimer un organisme</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form id="form_orga_update">
          <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="select_nom_orga" aria-label="Nom de l'organisme">
                  <option selected value="">Séléctionner l'organisme à modifier</option>
              </select>
              <label for="select_nom_orga">Séléctionner l'organisme à modifier</label>
          </div>
          <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="update_type_orga" aria-label="Type d'organisme">
                  <option selected value="">Modifier le type d'organisme</option>
                  <option>Mission Locale</option>
                  <option>Réseau IJ (BIJ, PIJ, CIDJ)</option>
                  <option>Club de prévention</option>
                  <option>Pôle Emploi</option>
                  <option>Centre Paris Anim ou EPJ (Paris)</option>
                  <option>Internet</option>
                  <option>Bouche à oreilles / ami</option>
                  <option>École de la deuxième chance</option>
                  <option>Membre de la Plateforme (Concordia, SJ, …)</option>
                  <option>Autres structures socio-éducatives</option>
                  <option>Etat et collectivités (DDCS…)</option>
                  <option>Foyer de jeunes travailleurs</option>
              </select>
              <label for="update_type_orga">Modifier le type d'organisme</label>
          </div>
          <div class="form-floating mx-3 mt-3">
                  <input type="text" class="form-control" id="update_nom_orga" placeholder="Nom de l'organisme">
                  <label for="update_nom_orga">Modifier le nom de l'organisme</label>
          </div>
        </form>
      </div>
      <div class="modal-footer">
          <button id="orga_update" type="button" class="btn btn-warning">Modifier</button>
          <button id="orga_delete" type="button" class="btn btn-danger">Supprimer</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--                                                                                                               Scripts -->
<script src="js/jeune_Populate.js"></script>
<script src="js/jeune_Create.js"></script>
<script src="js/jeune_Event.js"></script>
<script src="js/jeune_Get.js"></script>
<script src="js/villeQpv.js"></script>
<script src="js/villeQpv_Ajax.js"></script>
<script src="js/orga.js"></script>
<script src="js/orga_Ajax.js"></script>
<script src="js/functions.js"></script>

</body>
</html>
