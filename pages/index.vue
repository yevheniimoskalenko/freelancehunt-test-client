<template>
  <div class="container">
    <el-table :data="posts" style="width: 100%">
      <el-table-column prop="title" label="title"> </el-table-column>
      <el-table-column label="categories">
        <template slot-scope="scope">{{
          scope.row.categories.join(', ')
        }}</template>
      </el-table-column>
      <el-table-column label="title">
        <template slot-scope="scope">{{
          scope.row.title.match(/\d+[(₴|₽)]/g)
        }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  filters: {
    price(str) {
      return str
    },
  },
  data() {
    return {}
  },
  async fetch({ store }) {
    await store.dispatch('getList')
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts
    },
  },
}
</script>
