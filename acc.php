<div id="accompagnement" class="row justify-content-center mt-4 d-none">
    <div class="col-9">
    <!--                                                                                                              Select Statut accompagnement-->
    <div class="form-group row mx-auto border-bottom border-top border-2 pt-4 mt-3 pb-4 mb-5">
        <div class="col-6 ps-0 mt-3">
            <div class="d-flex"><h2 class="rose" id="acc_npv"></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i id="acc_projet" class="fas fa-plane-departure fa-lg marine pointeur mt-1" data-toggle="tooltip" data-placement="top" title="Afficher les projets du jeune"></i></div>
        </div>
        <div class="col-2">
            <div id="acc_check" class="d-none text-center pt-2">
                <i class="fas fa-check fa-2x text-success"></i>
            </div>
            <div id="acc" class="form-floating">
                <select class="form-select" aria-label="Statut d'accomp.">
                    <option selected value="">Statut d'accomp.</option>
                    <option value="Non démarré">Non démarré</option>
                    <option value="Premier rdv">Premier rdv</option>
                    <option value="Construction du projet">Construction du projet</option>
                    <option value="Préparation au départ">Préparation au départ</option>
                    <option value="À l'étranger">À l'étranger</option>
                    <option value="Accompagnement retour">Accompagnement retour</option>
                    <option value="Suivi terminé">Suivi terminé</option>
                    <option value="Abandon">Abandon</option>
                </select>
                <label for="acc">Statut d'accomp.</label>
            </div>
        </div>
        <div class="col-2">
            <div class="form-floating">
                <select class="form-select" id="ref" aria-label="Mobilité présentie">
                    <option selected value="">Mobilité présentie</option>
                    <option value="Femme">Femme</option>
                    <option value="Homme">Homme</option>
                    <option value="Autre">Autre</option>
                </select>
                <label for="ref">Mobilité présentie</label>
            </div>
        </div>
        <div class="col-2">
            <div class="form-floating">
                <select class="form-select" id="ref" aria-label="Référent-e">
                    <option selected value="">Référent-e</option>
                    <option value="Femme">Femme</option>
                    <option value="Homme">Homme</option>
                    <option value="Autre">Autre</option>
                </select>
                <label for="ref">Référent-e</label>
            </div>
        </div>
    </div>

    <!--                                                                                                              Projets-->
    <div id="divProjet" class="d-none">
        <h2 class="marine">Projets &nbsp;<i id="new_projet" class="fas fa-plus-circle fa-lg marine pointeur" data-bs-toggle="modal" data-bs-target="#modal_projet" data-toggle="tooltip" data-placement="top" title="Ajouter/Supprimer un projet"></i></h2>
        <table class="table mb-5">
            <thead>
                <tr>
                    <th class="d-none" scope="col">#</th>
                    <th scope="col" style="width:300px">Type</th>
                    <th scope="col" style="width:250px">Intitulé</th>
                    <th scope="col">Pays</th>
                    <th scope="col">Date aller</th>
                    <th scope="col">Date retour</th>
                    <th scope="col">Statut</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="d-none" scope="row">1</th>
                    <td>WWoofing / HelpX / Workaway</td>
                    <td>Let's be in honey mood !</td>
                    <td>ROYAUME-UNI</td>
                    <td>21-02-03</td>
                    <td>21-04-03</td>
                    <td class="fw-bold text-success">En prépartion</td>
                </tr>
                <!-- <tr>
                    <th class="d-none" scope="row">2</th>
                    <td>2021-02-02</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td class="fw-bold text-warning">En cours</td>
                </tr>
                <tr>
                    <th class="d-none" scope="row">3</th>
                    <td>2021-02-02</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td class="fw-bold text-danger">Terminé</td>
                </tr> -->
            </tbody>
        </table>
    </div>

    <!--                                                                                                              Sensibilisations -->
    <h2>Sensibilisations &nbsp;<i id="new_evt" class="fas fa-plus-circle fa-lg bleu pointeur" data-bs-toggle="modal" data-bs-target="#modal_evt_create" data-toggle="tooltip" data-placement="top" title="Ajouter une sensibilisation"></i></h2>
    <table class="table table-striped mt-2 mb-5">
        <thead>
            <tr>
                <th class="d-none" scope="col">#</th>
                <th scope="col" style="width:150px">Date</th>
                <th scope="col" style="width:250px">Type</th>
                <th scope="col" style="width:600px">Commentaire individuel</th>
                <th scope="col">Ville</th>
            </tr>
        </thead>
        <tbody id="tab_evt">
        </tbody>
    </table>

    <!--                                                                                                              RDV de suivi -->
    <h2 style="margin-top:2.5em;">Rendez-vous individuels &nbsp;<i id="new_rdv" class="fas fa-plus-circle fa-lg bleu pointeur" data-bs-toggle="modal" data-bs-target="#modal_rdv_create" data-toggle="tooltip" data-placement="top" title="Ajouter ou modifier / supprimer un RDV de suivi"></i></h2>
    <table class="table table-striped mt-2 mb-5">
        <thead>
            <tr>
                <th class="d-none" scope="col">#</th>
                <th scope="col" style="width:150px">Date</th>
                <th scope="col" style="width:250px">Type</th>
                <th scope="col" style="width:600px">Commentaire individuel</th>
                <th scope="col">Intervenant</th>
                <th scope="col">Durée</th>
            </tr>
        </thead>
        <tbody id="tab_rdv">
        </tbody>
    </table>

    <!--                                                                                                              Ateliers -->
    <h2 style="margin-top:2.5em;">Ateliers collectifs&nbsp;<i id="new_evt2" class="fas fa-plus-circle fa-lg bleu pointeur" data-bs-toggle="modal" data-bs-target="#modal_evt2_create" data-toggle="tooltip" data-placement="top" title="Ajouter / supprimer un atelier collectif"></i></h2>
    <table class="table table-striped mt-2 mb-5">
        <thead>
            <tr>
                <th class="d-none" scope="col">#</th>
                <th scope="col" style="width:150px">Date</th>
                <th scope="col" style="width:250px">Type</th>
                <th scope="col" style="width:600px" colspan="2">Commentaire individuel</th>
            </tr>
        </thead>
        <tbody id="tab_evt2">
        </tbody>
    </table>
</div>
</div>
