<template>
  <div class="card">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
        <div class="text-subtitle2">{{ province }}</div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn :to="{ name: 'season', params: { id }}" flat>Ver datos</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script src="./card" ></script>
<style src="./card.scss" scoped lang="scss"></style>