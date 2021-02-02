<template>
  <div class="">
      <div class="column is-2-mobile has-background-primary app_left">
      </div>
      <b-modal has-modal-card class="card-connexion"
        v-model="activeModal">
        <div>
          <figure class="image is-96x96 positionLogo">
            <img class="is-rounded" src="../assets/images/default_img.png"/>
          </figure>
        </div>
        <div class="card border-card">
          <div class="card-content">
            <h1 class="has-text-centered pa-10">Bienvenue</h1>
            <b-field class="position" label="Nom:" custom-class="labelpos">
              <b-input custom-class="inputpos"></b-input>
            </b-field>
            <b-field class="position" label="Prénom:" custom-class="labelpos">
              <b-input custom-class="inputpos"></b-input>
            </b-field>
            <b-field class="position" label="Téléphone:" custom-class="labelpos">
              <b-input custom-class="inputpos"></b-input>
            </b-field>
            <b-field class="position" label="Table N°:" custom-class="labelpos">
              <b-input custom-class="inputpos"></b-input>
            </b-field>
          </div>
          <div class="card-footer">
            <b-button class="mx-auto " type="is-transparent">
              Connexion
            </b-button>
          </div>
        </div>
      </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeModal: true,
  }),
};
</script>

<style>
.modal .animation-content {
  position: relative;
}
</style>
