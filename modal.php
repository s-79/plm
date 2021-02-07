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
                  <option selected value="">Séléctionner l'organisme à modifier</option>
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
</div>

<!--                                                                             ! ! ! - - S E N S I B I L I S A T I O N S - - ! ! ! -->

<!---                                                                                                              Modal pour associer une sensibilisation -->

<div class="modal fade" id="modal_evt_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajouter une sensibilisation au suivi du jeune</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_evt_create">
                    <div class="form-floating mx-3 mt-4">
                        <select class="form-select" id="evt_create" aria-label="Sensibilisation">
                            <option selected value="">Séléctionner la sensibilisation à ajouter</option>
                        </select>
                        <label for="update_int_rdv">Sensibilisation à ajouter</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <textarea class="form-control" placeholder="Commentaires individuels" id="create_comm_evt" style="height:125px;"></textarea>
                        <label for="create_comm_evt">Commentaires individuels</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btn_evt_create" type="button" class="btn btn-primary">Ajouter au suivi</button>
            </div>
        </div>
    </div>
</div>

<!---                                                                                                              Modal pour disocier ou modifier une sensibilisation -->
<div class="modal fade" id="modal_evt_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modifier le commentaire ou supprimer la&nbsp;sensibilisation du suivi du jeune</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_evt_update">
                    <!--                                                                                                        Récupération de l'id_evt dans un input invisible -->
                    <input type="text" class="form-control d-none" id="update_id_evt">
                    <div class="form-floating mx-3 mt-4">
                            <input type="text" class="form-control" id="update_nom_evt" placeholder="Sensibilisation à modifier" disabled>
                            <label for="update_nom_evt">Sensibilisation à modifier</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <textarea class="form-control" placeholder="Commentaires individuels" id="update_comm_evt" style="height:125px;"></textarea>
                        <label for="create_comm_evt">Commentaires individuels à modifier</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btn_evt_update" type="button" class="btn btn-warning">Modifier le commentaire</button>
                <button id="btn_evt_delete" type="button" class="btn btn-danger">Supprimer du suivi</button>
            </div>
        </div>
    </div>
</div>


<!--                                                                             ! ! ! - - A T E L I E R S  C O L L E C T I F S - - ! ! ! -->

<!---                                                                                                              Modal pour associer un atelier -->

<div class="modal fade" id="modal_evt2_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajouter un atelier collectif au suivi du jeune</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_evt2_create">
                    <div class="form-floating mx-3 mt-4">
                        <select class="form-select" id="evt2_create" aria-label="Atelier">
                            <option selected value="">Séléctionner l'atelier collectif à ajouter</option>
                        </select>
                        <label for="update_int_rdv">Atelier à ajouter</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <textarea class="form-control" placeholder="Commentaires individuels" id="create_comm_evt2" style="height:125px;"></textarea>
                        <label for="create_comm_evt2">Commentaires individuels</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btn_evt2_create" type="button" class="btn btn-primary">Ajouter au suivi</button>
            </div>
        </div>
    </div>
</div>

<!---                                                                                                              Modal pour disocier ou modifier une atelier -->
<div class="modal fade" id="modal_evt2_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modifier le commentaire ou supprimer l'atelier collectif du suivi du jeune</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_evt2_update">
                    <!--                                                                                                        Récupération de l'id_evt2 dans un input invisible -->
                    <input type="text" class="form-control d-none" id="update_id_evt2">
                    <div class="form-floating mx-3 mt-4">
                            <input type="text" class="form-control" id="update_nom_evt2" placeholder="Atelier collectif à modifier" disabled>
                            <label for="update_nom_evt2">Atelier collectif à modifier</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <textarea class="form-control" placeholder="Commentaires individuels" id="update_comm_evt2" style="height:125px;"></textarea>
                        <label for="create_comm_evt2">Commentaires individuels à modifier</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btn_evt2_update" type="button" class="btn btn-warning">Modifier le commentaire</button>
                <button id="btn_evt2_delete" type="button" class="btn btn-danger">Supprimer du suivi</button>
            </div>
        </div>
    </div>
</div>


<!--                                                                             ! ! ! - - R E N D E Z - V O U S  I N D I V I D U E L S - - ! ! ! -->

<!---                                                                                                              Modal pour ajouter un rendez-vous individuel -->
<div class="modal fade" id="modal_rdv_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter un rendez-vous individuel</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form id="form_rdv_create">
              <div class="form-floating mx-3 mt-4">
                  <select class="form-select" id="create_int_rdv" aria-label="Intervenant">
                      <option selected value="">Séléctionner l'intervenant-e</option>
                  </select>
                  <label for="update_int_rdv">Séléctionner l'intervenant-e</label>
              </div>
          <div class="form-floating mx-3 mt-3">
              <input type="date" class="form-control" id="create_date_rdv" placeholder="Date du rendez-vous *">
              <label for="create_date_rdv">Date du rendez-vous *</label>
          </div>
          <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="create_type_rdv" aria-label="Type de rendez-vous *">
                  <option selected value="">Séléctionner le type de rendez-vous</option>
                  <option value="1er RDV">1er RDV</option>
                  <option value="RDV de suivi">RDV de suivi</option>
                  <option value="Suivi">Suivi</option>
                  <option value="Relance">Relance</option>
                  <option value="Enquête">Enquête</option>
                  <option value="Autres">Autres</option>
              </select>
              <label for="create_type_orga">Type de rendez-vous</label>
          </div>
          <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="create_duree_rdv" aria-label="Durée du rendez-vous">
                  <option selected value="">Séléctionner la durée du rendez-vous</option>
                  <option value="moins de 10 minutes">moins de 10 minutes</option>
                  <option value="moins de 10 minutes">moins de 30 minutes</option>
                  <option value="moins de 10 minutes">moins d'une heure</option>
              </select>
              <label for="create_duree_rdv">Durée du rendez-vous</label>
          </div>
          <div class="form-floating mx-3 mt-3">
              <textarea class="form-control" placeholder="Commentaires" id="create_comm_rdv" style="height:125px;"></textarea>
              <label for="create_comm_rdv">Commentaires</label>
          </div>
      </form>
      </div>
      <div class="modal-footer">
          <button id="btn_rdv_create" type="button" class="btn btn-primary">Ajouter</button>
      </div>
    </div>
  </div>
</div>

<!---                                                                                                              Modal pour modifier un rendez-vous individuel -->
<div class="modal fade" id="modal_rdv_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modifier / Supprimer un rendez-vous</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form id="form_rdv_update">
              <!--                                                                                                        Récupération de l'id_evt dans un input invisible -->
              <input type="text" class="form-control d-none" id="update_id_rdv">
              <div class="form-floating mx-3 mt-4">
                      <input type="text" class="form-control" id="update_nom_rdv" placeholder="Rendez-vous à modifier" disabled>
                      <label for="update_nom_rdv">Rendez-vous à modifier</label>
              </div>
          <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="update_int_rdv" aria-label="Intervenant">
                  <option selected value="">Séléctionner l'intervenant-e</option>
              </select>
              <label for="update_int_rdv">Séléctionner l'intervenant-e</label>
          </div>
          <div class="form-floating mx-3 mt-3">
              <input type="date" class="form-control" id="update_date_rdv" placeholder="Date du rendez-vous *">
              <label for="update_date_rdv">Date du rendez-vous *</label>
          </div>
          <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="update_type_rdv" aria-label="Type de rendez-vous *">
                  <option selected value="">Séléctionner le type de rendez-vous</option>
                  <option value="1er RDV">1er RDV</option>
                  <option value="RDV de suivi">RDV de suivi</option>
                  <option value="Suivi">Suivi</option>
                  <option value="Relance">Relance</option>
                  <option value="Enquête">Enquête</option>
                  <option value="Autres">Autres</option>
              </select>
              <label for="update_type_orga">Type de rendez-vous</label>
          </div>
          <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="update_duree_rdv" aria-label="Durée du rendez-vous">
                  <option selected value="">Séléctionner la durée du rendez-vous</option>
                  <option value="- de 10 min">- de 10 min</option>
                  <option value="- de 30 min">- de 30 min</option>
                  <option value="- d'1 heure">- d'1 heure</option>
              </select>
              <label for="update_duree_rdv">Durée du rendez-vous</label>
          </div>
          <div class="form-floating mx-3 mt-3">
              <textarea class="form-control" placeholder="Commentaires" id="update_comm_rdv" style="height:125px;"></textarea>
              <label for="update_comm_rdv">Commentaires</label>
          </div>
      </form>
      </div>
      <div class="modal-footer">
          <button id="btn_rdv_update" type="button" class="btn btn-warning">Modifier</button>
          <button id="btn_rdv_delete" type="button" class="btn btn-danger">Supprimer</button>
      </div>
    </div>
  </div>
</div>
