<template>
  <div class="container">
    <el-input v-model="search" placeholder="search" />
    <el-table
      :data="posts"
      :default-sort="{ prop: 'price', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column prop="title" label="title"> </el-table-column>
      <el-table-column label="categories">
        <template slot-scope="scope">{{
          scope.row.categories.join(', ')
        }}</template>
      </el-table-column>
      <el-table-column label="price" sortable :sort-method="sortPrice">
        <template slot-scope="scope">
          {{ scope.row.price | price }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="goPost(scope.row.id)"
            >Detail</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  filters: {
    price(str) {
      return str === 0 ? 0 : str.join('')
    },
  },
  data() {
    return { search: '' }
  },
  async fetch({ store }) {
    await store.dispatch('getList')
  },
  computed: {
    posts() {
      // такое себе решение)
      return this.$store.getters.getPosts.filter(
        (data) =>
          !this.search ||
          data.title.toLowerCase().includes(this.search.toLowerCase()) ||
          data.description.toLowerCase().includes(this.search.toLowerCase())
      )
    },
  },
  methods: {
    sortPrice(a, b) {
      // максимальный костыль)
      return (
        a.price.toString().match(/\d+/g).join('') -
        b.price.toString().match(/\d+/g).join('')
      )
    },
    goPost(id) {
      this.$router.push(`/post/${id}`)
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 30px;
}
</style>
