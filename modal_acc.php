<!---                                                                                                              Modal pour associer un projet au suivi d'un jeune -->

<div class="modal fade" id="modal_prj_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ajouter un projet au suivi du jeune</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_prj_create">
                    <div class="form-floating mx-3 mt-4">
                        <select class="form-select" id="prj_create" aria-label="projet">
                        </select>
                        <label for="prj_create">Projet à ajouter</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="date" class="form-control" id="create_depart_prj" placeholder="Départ prévu">
                        <label for="create_depart_prj">Départ prévu</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="date" class="form-control" id="create_retour_prj" placeholder="Retour prévu">
                        <label for="create_retour_prj">Retour prévu</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btn_prj_create" type="button" class="btn btn-primary btn-bleu">Ajouter au suivi</button>
            </div>
        </div>
    </div>
</div>

<!---                                                                                                              Modal pour disocier ou modifier un projet -->
<div class="modal fade" id="modal_prj_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modifier les dates ou supprimer le&nbsp;projet du suivi du jeune</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_prj_update">
                    <!--                                                                                                        Récupération de l'id_prj dans un input invisible -->
                    <input type="text" class="form-control d-none" id="update_id_prj">
                    <div class="form-floating mx-3 mt-4">
                            <input type="text" class="form-control" id="update_nom_prj" placeholder="Projet à modifier" disabled>
                            <label for="update_nom_prj">Projet à modifier</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="date" class="form-control" id="update_depart_prj" placeholder="Départ prévu">
                        <label for="update_depart_prj">Départ prévu</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="date" class="form-control" id="update_retour_prj" placeholder="Retour prévu">
                        <label for="update_retour_prj">Retour prévu</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btn_prj_update" type="button" class="btn btn-warning">Modifier les dates</button>
                <button id="btn_prj_delete" type="button" class="btn btn-danger">Supprimer du suivi</button>
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
                        </select>
                        <label for="evt_create">Sensibilisation à ajouter</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <textarea class="form-control" placeholder="Commentaires individuels" id="create_comm_evt" style="height:125px;"></textarea>
                        <label for="create_comm_evt">Commentaires individuels</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btn_evt_create" type="button" class="btn btn-primary btn-bleu">Ajouter au suivi</button>
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
                        </select>
                        <label for="evt2_create">Atelier à ajouter</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <textarea class="form-control" placeholder="Commentaires individuels" id="create_comm_evt2" style="height:125px;"></textarea>
                        <label for="create_comm_evt2">Commentaires individuels</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="btn_evt2_create" type="button" class="btn btn-primary btn-bleu">Ajouter au suivi</button>
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
              <div class="form-check form-switch mx-3 d-flex justify-content-end ">
                <input class="form-check-input" type="checkbox" id="create_visio_rdv">
                <label class="form-check-label fw-bold" for="create_visio_rdv">En visio</label>
              </div>
              <!-- <div class="form-floating mx-3 mt-4">
                  <select class="form-select" id="create_int_rdv" aria-label="Intervenant">
                  </select>
                  <label for="create_int_rdv">Séléctionner l'intervenant-e</label>
              </div> -->
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
                  <option value="< 10 min">< 10 min</option>
                  <option value="10 à 30 min">10 à 30 min</option>
                  <option value="30 min à 1h">30 min à 1h</option>
                  <option value="> à 1h">> 1h</option>
              </select>
              <label for="create_duree_rdv">Durée du rendez-vous</label>
          </div>
          <div class="form-floating mx-3 mt-3">
              <textarea class="form-control" placeholder="Commentaires" id="create_comm_rdv" style="height:125px;"></textarea>
              <label for="create_comm_rdv">Commentaires</label>
          </div>
          <div class="form-floating mx-3 mt-3">
              <textarea class="form-control" placeholder="Besoins / À faire" id="create_besoins_rdv" style="height:125px;"></textarea>
              <label for="create_besoins_rdv">Besoins / À faire</label>
          </div>
      </form>
      </div>
      <div class="modal-footer">
          <button id="btn_rdv_create" type="button" class="btn btn-primary btn-bleu">Ajouter</button>
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
              <div class="form-check form-switch mx-3 d-flex justify-content-end ">
                <input class="form-check-input" type="checkbox" id="update_visio_rdv">
                <label class="form-check-label fw-bold" for="update_visio_rdv">En visio</label>
              </div>
              <div class="form-floating mx-3 mt-4">
                      <input type="text" class="form-control" id="update_nom_rdv" placeholder="Rendez-vous à modifier" disabled>
                      <label for="update_nom_rdv">Rendez-vous à modifier</label>
              </div>
          <!-- <div class="form-floating mx-3 mt-4">
              <select class="form-select" id="update_int_rdv" aria-label="Intervenant">
              </select>
              <label for="update_int_rdv">Séléctionner l'intervenant-e</label>
          </div> -->
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
                  <option value="< 10 min">< 10 min</option>
                  <option value="10 à 30 min">10 à 30 min</option>
                  <option value="30 min à 1h">30 min à 1h</option>
                  <option value="> à 1h">> 1h</option>
              </select>
              <label for="update_duree_rdv">Durée du rendez-vous</label>
          </div>
          <div class="form-floating mx-3 mt-3">
              <textarea class="form-control" placeholder="Commentaires" id="update_comm_rdv" style="height:125px;"></textarea>
              <label for="update_comm_rdv">Commentaires</label>
          </div>
          <div class="form-floating mx-3 mt-3">
              <textarea class="form-control" placeholder="Besoins / À faire" id="create_besoins_rdv" style="height:125px;"></textarea>
              <label for="create_besoins_rdv">Besoins / À faire</label>
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
