<template>
  <div class="main__seasons">
    <div class="row">
      <h2 class="aemet__title">Municipios de España</h2>
    </div>
    <div
      v-if="seasons.length !== 0"
      class="row">
      <div
        v-for="(season, index) in seasons"
        :key="index"
        class="col-12 col-md-4 q-pa-sm">
        <Card
          :id="season.indicativo"
          :title="season.nombre"
          :province="season.provincia"
        />
      </div>
    </div>
    <div
      v-else
      class="aemet__load q-gutter-md justify-center row">
      <q-spinner
        color="primary"
        size="6em"
        :thickness="2"
      />
    </div>
  </div>
</template>

<script src="./seasons" ></script>
<style src="./seasons.scss" scoped lang="scss"></style>