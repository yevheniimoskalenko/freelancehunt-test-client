<template>
  <div class="post">
    <el-table :data="post" style="width: 100%">
      <el-table-column prop="title" label="Title"> </el-table-column>
      <el-table-column prop="description" label="Description">
      </el-table-column>
      <el-table-column prop="date" label="Date"> </el-table-column>
      <el-table-column fixed="right" label="Operations" width="120">
        <template slot-scope="scope">
          <a :href="scope.row.link">Detail</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('fetchId', params.id)
  },
  computed: {
    post() {
      return new Array(this.$store.getters.getPost)
    },
  },
}
</script>
