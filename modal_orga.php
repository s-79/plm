<!--                                                                             ! ! ! - - O R G A N I S M E S - - ! ! ! -->

<!--                                                                                                               Modal pour choisir ajouter / modifier un organisme -->
<div class="modal fade" id="modal_orga" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajouter ou modifier un organisme</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <div id="txt_modal_orga" class="d-none fw-bold">
                    Ce type d'organisme ne contient pas de nom.<br><br>
                </div>
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
                            <option selected value="">Séléctionner le type d'organisme</option>
                            <option value="Mission Locale">Mission Locale</option>
                            <option value="Réseau IJ (BIJ, PIJ, CIDJ)">Réseau IJ (BIJ, PIJ, CIDJ)</option>
                            <option value="Club de prévention">Club de prévention</option>
                            <option value="Pôle Emploi">Pôle Emploi</option>
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
                        </select>
                    <label for="select_nom_orga">Séléctionner l'organisme à modifier</label>
                    </div>
                    <div class="form-floating mx-3 mt-4">
                        <select class="form-select" id="update_type_orga" aria-label="Type d'organisme">
                            <option selected value="">Séléctionner le type d'organisme</option>
                            <option value="Mission Locale">Mission Locale</option>
                            <option value="Réseau IJ (BIJ, PIJ, CIDJ)">Réseau IJ (BIJ, PIJ, CIDJ)</option>
                            <option value="Club de prévention">Club de prévention</option>
                            <option value="Pôle Emploi">Pôle Emploi</option>
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
