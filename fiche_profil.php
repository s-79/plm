<div class="d-flex justify-content-end mb-2 marine fw-bold">
    <span id="fiche_profil" class="pointeur">Fiche Profil<i class="ps-3 fas fa-file-alt marine" style="font-size:1.5em;" data-toggle="tooltip" data-placement="top" title="Afficher la fiche profil projets du jeune"></i></span>
</div>

<div id="divFiche_Profil" class="d-none">
    <form id="form_fiche_profil">
        <div class="d-flex justify-content-center">
            <div class="row formulaires">
                <!--                                                                                                              État Civil-->
                <div class="col-12 col-lg-6">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div class="d-flex justify-content-start pt-3">
                            <h2>Scolaire & Pro</h2>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Parcours Scolaire" id="parcours" style="height:135px;"></textarea>
                            <label for="parcours">Parcours Scolaire</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Expériences professionnelles" id="exp_pro" style="height:135px;"></textarea>
                            <label for="exp_pro">Expériences professionnelles</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <textarea class="form-control" placeholder="Projet professionnel" id="prj_pro" style="height:135px;"></textarea>
                            <label for="prj_pro">Projet professionnel</label>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div class="d-flex justify-content-start pt-3">
                            <h2>Extra-pro / transversal</h2>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Loisirs / Centres d’intérêts" id="loisirs" style="height:135px;"></textarea>
                            <label for="loisirs">Loisirs / Centres d’intérêts</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Bénévolat / Volontariat" id="volontariat" style="height:135px;"></textarea>
                            <label for="volontariat">Bénévolat / Volontariat</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <textarea class="form-control" placeholder="Voyages" id="voyages" style="height:135px;"></textarea>
                            <label for="voyages">Voyages</label>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div class="d-flex justify-content-start pt-3">
                            <h2>Projet de mobilité</h2>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Objectifs et motivations" id="motivations" style="height:100px;"></textarea>
                            <label for="motivations">Objectifs et motivations</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Idée d'un projet, durée du séjour, disponibilités" id="prj_mob" style="height:100px;"></textarea>
                            <label for="prj_mob">Idée d'un projet, durée du séjour, disponibilités</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Freins au départ" id="freins" style="height:100px;"></textarea>
                            <label for="freins">Freins au départ</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Apport(s) pour la suite du projet professionnel et/ou personnel" id="apports" style="height:100px;"></textarea>
                            <label for="apports">Apport(s) pour la suite du projet professionnel et/ou personnel</label>
                        </div>
                        <div class="form-floating mx-3 mt-3 mb-4">
                            <textarea class="form-control" placeholder="Attentes et besoins dans l’accompagnement" id="attentes" style="height:100px;"></textarea>
                            <label for="attentes">Attentes et besoins dans l’accompagnement</label>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="bg-marine m-3 py-2 px-3 rounded rounded-3 div_marine">
                        <div class="d-flex justify-content-start pt-3">
                            <h2>Situation actuelle</h2>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Lieu, conditions de vie quotidienne et familial" id="conditions_vie" style="height:110px;"></textarea>
                            <label for="conditions_vie">Lieu, conditions de vie quotidienne et familial</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Situation financière / Ressources" id="ressources" style="height:110px;"></textarea>
                            <label for="ressources">Situation financière / Ressources</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Documents administratifs" id="docs_adm" style="height:110px;"></textarea>
                            <label for="docs_adm">Documents administratifs</label>
                        </div>
                        <div class="form-floating mx-3 mt-3">
                            <textarea class="form-control" placeholder="Médical (suivi de traitement, allergies, suivi psy, etc..)" id="medical" style="height:110px;"></textarea>
                            <label for="medical">Médical (suivi de traitement, allergies, suivi psy, etc..)</label>
                        </div>
                        <div id="btn_evt_create" class="form-group d-flex justify-content-center mx-3 mt-1 pt-1">
                            <button type="button" id="evt_create" class="btn btn-primary btn-bleu m-3">&nbsp;Enregistrer&nbsp;<br>la fiche</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </form>
</div>
