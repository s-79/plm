<div id="accompagnement" class="d-flex justify-content-center mt-2 d-none">
    <div class="accomp">
        <!--                                                                                                              Select Statut accompagnement-->
        <div class="form-group row mx-auto border-bottom border-top border-2 pt-4 mt-3 pb-4 mb-3">
            <div class="d-flex col-12 col-xl-6 mt-3">
                <h2 class="rose" id="acc_npv"></h2>
                <i id="acc_projet" class="ps-3 fas fa-plane-departure marine pointeur" style="font-size:1.5em;" data-toggle="tooltip" data-placement="top" title="Afficher les projets du jeune"></i>
            </div>
            <div class="col-12 col-sm-4 col-xl-2 my-1">
                <div class="form-floating">
                    <select id="acc" class="form-select" aria-label="Statut d'accomp.">
                        <option selected value="">Statut</option>
                        <option value="Non démarré">Non démarré</option>
                        <option value="Appel / Conseil orientation">Appel / Conseil orientation</option>
                        <option value="Premier rdv">Premier rdv</option>
                        <option value="Construction du projet">Construction du projet</option>
                        <option value="Préparation au départ">Préparation au départ</option>
                        <option value="À l'étranger">À l'étranger</option>
                        <option value="Accompagnement retour">Accompagnement retour</option>
                        <option value="Suivi terminé">Suivi terminé</option>
                        <option value="Abandon">Abandon</option>
                        <option value="Suspendu">Suspendu</option>
                    </select>
                    <label for="acc">Statut</label>
                </div>
            </div>
            <div class="col-12 col-sm-4 col-xl-2 my-1">
                <div class="form-floating">
                    <select id="mob" class="form-select"  aria-label="Mobilité pressentie">
                        <option selected value="">Mobilité</option>
                        <option value="Échange de jeune">Échange de jeune</option>
                        <option value="Volontariat court terme">Volontariat court terme</option>
                        <option value="Volontariat long terme">Volontariat long terme</option>
                        <option value="Chantiers Internationaux">Chantiers Internationaux</option>
                        <option value="Service Civique à l’international">Service Civique à l’international</option>
                        <option value="Au pair">Au pair</option>
                        <option value="Stage">Stage</option>
                        <option value="PVT">PVT</option>
                        <option value="Emploi">Emploi</option>
                        <option value="Wwoofing">Wwoofing</option>
                        <option value="HelpX, Workaway">HelpX, Workaway</option>
                    </select>
                    <label for="mob">Mobilité</label>
                </div>
            </div>
            <div class="col-12 col-sm-4 col-xl-2 my-1">
                <div class="form-floating">
                    <select class="form-select" id="ref" aria-label="Référent.e">
                    </select>
                    <label for="ref">Référent.e</label>
                </div>
            </div>
        </div>

        <?php
            if ($_SESSION['ref'] == 1) include("fiche_profil.php");
            else {echo('<div class="mb-5"></div>');}
        ?>

        <!--                                                                                                              Projets-->
        <div id="divProjet" class="d-none">
            <h2 class="marine">Projets &nbsp;<i id="new_prj" class="fas fa-plus-circle fa-lg marine pointeur" data-bs-toggle="modal" data-bs-target="#modal_prj_create" data-toggle="tooltip" data-placement="top" title="Ajouter/Supprimer un projet"></i></h2>
            <table class="table mb-5">
                <thead>
                    <tr>
                        <th class="d-none" scope="col">#</th>
                        <th scope="col" style="width:400px">Type</th>
                        <th scope="col" style="width:550px">Intitulé</th>
                        <th scope="col">Pays</th>
                        <th scope="col">Départ</th>
                        <th scope="col">Retour</th>
                    </tr>
                </thead>
                <tbody id="tab_prj">
                </tbody>
            </table>
        </div>

        <div id="divTable">
            <!--                                                                                                              Sensibilisations -->
            <h2>Sensibilisations &nbsp;<i id="new_evt" class="fas fa-plus-circle fa-lg bleu pointeur" data-bs-toggle="modal" data-bs-target="#modal_evt_create" data-toggle="tooltip" data-placement="top" title="Ajouter une sensibilisation"></i></h2>
            <table class="table table-striped mt-2 mb-5">
                <thead>
                    <tr>
                        <th class="d-none" scope="col">#</th>
                        <th scope="col" style="width:150px">Date</th>
                        <th scope="col" style="width:250px">Type</th>
                        <th scope="col">Commentaire individuel</th>
                        <th scope="col" style="width:175px">Ville</th>
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
                        <th scope="col">Commentaire individuel</th>
                        <!-- <th scope="col">Intervenant</th> -->
                        <th scope="col" style="width:175px">Durée</th>
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
</div>
