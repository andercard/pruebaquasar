<template>
  <div class="table">
    <q-card class="table__card">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Codigo</th>
            <th class="text-right">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, key, index) in data"
            :key="index">
            <td class="text-left">{{ key }}</td>
            <td class="text-right">{{ item }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script src="./table"></script>
<style src="./table.scss" scoped lang="scss"></style>