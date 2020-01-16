<template>
  <div class="main__season">
    <div class="column">
      <h2 class="aemet__title">Datos Climatológicos</h2>
      <h1 v-if="seasons.length !== 0" class="aemet__subTitle">{{ season[0].nombre }}</h1>
    </div>
    <div
      v-if="seasons.length !== 0"
      class="row">
      <div
        v-for="(season, index) in seasons"
        :key="index"
        class="col-12 col-md-4 q-pa-sm">
        <Table
          :data="season"
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

<script src="./season" ></script>
<style src="./season.scss" scoped lang="scss"></style>