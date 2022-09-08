<?php include("header.php"); ?>

<div class="container-fluid">
    <div class="d-flex justify-content-center" style="margin-top: 1.5em !important;">
        <div class="row search_bar">
            <!--                                                                                                              Zone de recherche -->
            <div class="col-12 col-sm-6 col-lg-3 py-4 pr-1 pl-3 text-center">
                <input type="text" class="form-control" id="npv" placeholder="Saisir le nom et le prénom">
                <label for="npv" class="d-none">Saisir le nom et le prénom</label>
            </div>
            <!--                                                                                                              Résultat de recherche -->
            <div class="col-12 col-sm-6 col-lg-3 py-4 pr-3 pl-1 text-center">
                <select class="form-select" aria-label="Default select example" id="npv_res">
                </select>
            </div>
            <!--                                                                                                              Bouton afficher les infos-->
            <div class="col-6 col-lg-3 py-4 px-1 text-center">
                <button type="button" id="btn_infos" class="btn btn-primary btn-bleu">Afficher les informations</button>
            </div>
            <!--                                                                                                              Bouton afficher l'accompagnement-->
            <div class="col-6 col-lg-3 py-4 px-1 text-center">
                <button type="button" id="btn_accomp" class="btn btn-warning">Afficher accompagnement</button>
            </div>
        </div>
    </div>

<?php include("acc.php"); ?>

    <form id="form_jeune">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              État Civil-->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div class="d-flex justify-content-start pt-3">
                            <h2>État civil</h2>
                            <i id="new_jeune" class="ps-3 fas fa-plus-circle fa-2x text-white pointeur" data-toggle="tooltip" data-placement="top" title="Créer un nouveau profil"></i>
                        </div>
                        <div class="form-floating mx-3 mt-4">
                            <select class="form-select" id="genre" aria-label="Genre *">
                                <option selected value="">Séléctionner un genre *</option>
                                <option value="Femme">Femme</option>
                                <option value="Homme">Homme</option>
                                <option value="Autre">Autre</option>
                            </select>
                            <label for="genre">Genre *</label>
                        </div>
                        <!--                                                                                                        Récupération de l'id dans un input invisible -->
                        <input type="text" class="form-control d-none" id="id">
                        <div class="form-floating mx-3 mt-3">
                            <input type="text" class="form-control" id="prenom" placeholder="Prénom *">
                            <label for="prenom">Prénom <span class="rose-bold">*</span></label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                                <input type="text" class="form-control" id="nom" placeholder="Nom *">
                                <label for="nom">Nom <span class="rose-bold">*</span></label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <input type="date" class="form-control" id="ddn" placeholder="Date de naissance">
                            <label for="ddn">Date de naissance</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <input type="text" class="form-control" id="nationalite" placeholder="Nationalité">
                            <label for="nationalite">Nationalité</label>
                        </div>
                        <div class="row mx-3 mt-4 ps-1 mb-4">
                            <div class="form-check col-6">
                                <label class="form-check-label text-white" for="adherent">Adhérent.e</label>
                                <input class="form-check-input" type="checkbox" value="" id="adherent">
                            </div>
                            <div class="form-check col-6">
                                <label class="form-check-label text-white" for="ami">Ambassadeur MI</label>
                                <input class="form-check-input" type="checkbox" value="" id="ami">
                            </div>
                        </div>
                    </div>
                </div>
                <!--                                                                                                              Contact -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <h2 class="pt-3">Contact</h2>
                        <div class="form-floating mx-3 mt-4">
                            <input type="email" class="form-control" id="email" placeholder="Email">
                            <label for="email">Email <span class="rose-bold">*</span></label>
                        </div>

                        <div class="form-floating mx-3 mt-3">
                            <input type="tel" class="form-control" id="tel" placeholder="Téléphone">
                            <label for="tel">Téléphone <span class="rose-bold">*</span></label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <input type="text" class="form-control" id="facebook" placeholder="Facebook">
                            <label for="facebook">Facebook</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <input type="text" class="form-control" id="insta" placeholder="Instagram">
                            <label for="instagram">Instagram</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-3">
                            <textarea class="form-control" placeholder="Contact en cas d'urgence" id="urgence"></textarea>
                            <label for="urgence">Contact en cas d'urgence</label>
                        </div>
                        <div class="row mx-3 mt-4 pt-2 ps-1 mb-4">
                            <div class="form-check col-6">
                                <label class="form-check-label text-white" for="droits_image">Droits à l'image</label>
                                <input class="form-check-input" type="checkbox" value="" id="droits_image">
                            </div>
                            <div class="form-check col-6">
                                <label class="form-check-label text-white" for="rgpd">RGPD</label>
                                <input class="form-check-input" type="checkbox" value="" id="rgpd">
                            </div>
                        </div>
                    </div>
                </div>
                <!--                                                                                                              Coordonnées -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <h2 class="pt-3">Coordonnées</h2>
                        <div class="form-floating mx-3 mt-4">
                            <input type="text" class="form-control" id="adresse" placeholder="Adresse">
                            <label for="adresse">Adresse</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="ville" aria-label="Ville">
                            </select>
                            <label for="ville">Ville</label>
                        </div>
                        <!--                                                                    Div invisible pour récup nom_ville -->
                        <div class="form-floating mx-3 mt-3 d-none">
                            <input type="text" class="form-control" id="nom_ville_none">
                            <label for="nom_ville_none"></label>
                        </div>

                        <div class="form-floating mx-3 mt-3">
                            <input type="text" class="form-control" id="contrat_ville" placeholder="Contrat de Ville" disabled>
                            <label for="contrat_ville">Contrat de Ville</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="qpv" aria-label="QPV" disabled>
                                <option selected value="">QPV</option>
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                                <option value="Limite">Limite</option>
                            </select>
                            <label for="qpv">QPV</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="nom_qpv" aria-label="Quartier QPV" disabled>
                                <option selected value="">Séléctionner le quartier QPV</option>
                            </select>
                            <label for="nom_qpv">Quartier QPV</label>
                        </div>
                        <div class="form-group row mx-0 pb-1 pt-2 mt-4 mb-4">
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
            <!--                                                                                                              Organisme référent -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <h2 class="pt-3">Organisme référent</h2>
                        <div class="form-floating mx-3 mt-4">
                            <select class="form-select" id="type_orga" aria-label="Type d'organisme">
                                <option selected value="">Séléctionner le type d'organisme</option>
                                <option value="Mission Locale">Mission Locale</option>
                                <option value="Réseau IJ (BIJ, PIJ, CIDJ)">Réseau IJ (BIJ, PIJ, CIDJ)</option>
                                <option value="Club de prévention">Club de prévention</option>
                                <option value="Pôle Emploi">Pôle Emploi</option>
                                <option value="Maison de l'emploi">Maison de l'emploi</option>
                                <option value="Centre Paris Anim ou EPJ (Paris)">Centre Paris Anim ou EPJ (Paris)</option>
                                <option value="Internet">Internet</option>
                                <option value="Bouche à oreilles / ami">Bouche à oreilles / ami</option>
                                <option value="École de la deuxième chance">École de la deuxième chance</option>
                                <option value="Membre de la Plateforme (Concordia, SJ, …)">Membre de la Plateforme (Concordia, SJ, …)</option>
                                <option value="Autres structures socio-éducatives">Autres structures socio-éducatives</option>
                                <option value="Etat et collectivités (DDCS…)">Etat et collectivités (DDCS…)</option>
                                <option value="Foyer de jeunes travailleurs">Foyer de jeunes travailleurs</option>
                                <option value="Autres">Autres</option>
                            </select>
                            <label for="type_orga">Type d'organisme</label>
                        </div>
                        <div class="row mx-1 mt-3">
                            <div class="form-floating col-10">
                                <select class="form-select" id="nom_orga" aria-label="Nom de l'organisme" disabled>
                                    <option selected value="0">Séléctionner le nom de l'organisme</option>
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
                        <div class="form-floating mx-3 mt-3">
                            <input type="email" class="form-control" id="email_ref" placeholder="Email du référent<">
                            <label for="email_ref">Email du référent</label>
                        </div>
                        <div class="row mx-3 mt-4 ps-1 mb-4">
                            <div class="form-check col-6">
                                <label class="form-check-label text-white" for="ml">Mission Locale</label>
                                <input class="form-check-input" type="checkbox" value="" id="ml">
                            </div>
                            <div class="form-check col-6">
                                <label class="form-check-label text-white" for="gj">Garantie Jeune</label>
                                <input class="form-check-input" type="checkbox" value="" id="gj">
                            </div>
                        </div>
                    </div>
                </div>
            <!--                                                                                                                              Formation  -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <h2 class="pt-3">Formation</h2>
                        <div class="form-floating mx-3 mt-4">
                            <input type="text" class="form-control" id="formation" placeholder="Intitulé de la dernière formation">
                            <label for="formation">Intitulé de la dernière formation</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="niveau" aria-label="Niveau scolaire">
                                <option selected value="">Séléctionner le niveau scolaire</option>
                                <option value="Sans qualification">Sans qualification</option>
                                <option value="3 (CAP, BEP)">3 (CAP, BEP)</option>
                                <option value="4 (Bac)">4 (Bac)</option>
                                <option value="5 (Bac+2)">5 (Bac+2)</option>
                                <option value="6 (Bac+3/+4)">6 (Bac+3/+4)</option>
                                <option value="7 (Bac+5)">7 (Bac+5)</option>
                            </select>
                            <label for="niveau">Niveau scolaire</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <input type="text" class="form-control" id="diplome" placeholder="Dernier diplôme acquis">
                            <label for="diplome">Dernier diplôme acquis</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="niveau_anglais" aria-label="Niveau d'anglais">
                                <option selected value="">Séléctionner le niveau d'anglais</option>
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                                <option value="C1">C1</option>
                                <option value="C2">C2</option>
                            </select>
                            <label for="niveau_anglais">Niveau d'anglais</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <input type="text" class="form-control" id="langues" placeholder="Autre langue parlée">
                            <label for="langues">Autres langues parlées</label>
                        </div>
                        <div class="mx-3 mt-4 ps-1 mb-4">
                            <div class="form-check">
                                <label class="form-check-label text-white" for="at_anglais">Intéréssé.e par les ateliers d'anglais</label>
                                <input class="form-check-input" type="checkbox" value="" id="at_anglais">
                            </div>
                        </div>
                    </div>
                </div>
            <!--                                                                                                               Situation professionelle -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <h2 class="pt-3">Situation professionelle</h2>
                        <div class="form-floating mx-3 mt-4">
                            <select class="form-select" id="statut" aria-label="Statut emploi">
                                <option selected value="">Séléctionner le statut emploi</option>
                                <!-- Si changement ajouter une modif dans js pour créer le statut 2 -->
                                <option value="DE de moins d'un an">DE de moins d'un an</option>
                                <option value="DE de plus d'un an">DE de plus d'un an</option>
                                <option value="En CDD">En CDD</option>
                                <option value="En intérim">En intérim</option>
                                <option value="En CDI">En CDI</option>
                                <option value="Etudiant">Etudiant</option>
                                <option value="Service civique">Service civique</option>
                                <option value="En formation">En formation</option>
                                <option value="Autre">Autre</option>
                            </select>
                            <label for="statut">Statut emploi</label>
                        </div>
                        <!-- <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="pe" aria-label="Inscription Pôle Emploi">
                                <option selected value="">Inscription Pôle Emploi</option>
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </select>
                            <label for="pe">Inscription Pôle Emploi</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="rsa" aria-label="Allocataire RSA">
                                <option selected value="">Allocataire RSA</option>
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </select>
                            <label for="rsa">Allocataire RSA</label>
                        </div> -->
                        <div class="row mx-3 mt-4 ps-1 mb-4">
                            <div class="form-check col-6">
                                <label class="form-check-label text-white" for="pe">Pôle Emploi</label>
                                <input class="form-check-input" type="checkbox" value="" id="pe">
                            </div>
                            <div class="form-check col-6">
                                <label class="form-check-label text-white" for="rsa">Allocataire RSA</label>
                                <input class="form-check-input" type="checkbox" value="" id="rsa">
                            </div>
                        </div>
                        <h2 class="mt-3 pb-1 pt-2">Sensibilisation</h2>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="sensibilisation" aria-label="Sensibilisation *">
                            </select>
                            <label for="sensibilisation">Sensibilisation *</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <select class="form-select" id="connu" aria-label="connu">
                                <option selected value="">Comment le / la jeune a connu PLM ?</option>
                                <option value="Mission locale">Mission locale</option>
                                <option value="Autre structure jeunesse locale">Autre structure jeunesse locale</option>
                                <option value="Bouche à oreille">Bouche à oreille</option>
                                <option value="Site PLM">Site PLM</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Youtube">Youtube</option>
                                <option value="Forum / Salon">Forum / Salon</option>
                                <option value="Pôle emploi">Pôle emploi</option>
                                <option value="Newsletter">Newsletter</option>
                                <option value="Autres">Autres</option>
                            </select>
                            <label for="connu">Comment le / la jeune a connu PLM ?</label>
                        </div>
                        <div id="btn_jeune_create" class="form-group d-flex justify-content-center pt-1 mt-2 mx-3">
                            <button type="button" id="jeune_create" class="btn btn-primary btn-bleu m-3">&nbsp;Enregistrer&nbsp;<br>la fiche</button>
                        </div>
                        <div id="btn_jeune_update" class="form-group d-flex justify-content-center pt-1 mt-2 mx-3 d-none">
                            <button type="button" id="jeune_update" class="btn btn-warning m-3">&nbsp;Modifier&nbsp;<br>la fiche</button>
                            <button type="button" id="jeune_delete" class="btn btn-danger m-3">Supprimer <br>la fiche</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

<?php
include("modal_orga.php");
include("modal_acc.php");
?>
<!--                                                                                                               Scripts -->
<script src="js/jeune.js"></script>
<script src="js/ajax_jeune.js"></script>
<script src="js/villeQpv.js"></script>
<script src="js/ajax_villeQpv.js"></script>
<script src="js/orga.js"></script>
<script src="js/ajax_orga.js"></script>
<script src="js/ajax_evt.js"></script>
<script src="js/functions.js"></script>
<script src="js/acc.js"></script>
<script src="js/ajax_acc.js"></script>
<script src="js/ajax_int.js"></script>
<script src="js/ajax_prj.js"></script>

</body>
</html>
