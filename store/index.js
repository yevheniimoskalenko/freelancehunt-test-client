export const state = () => ({ error: null, posts: null })
export const getters = {
  getPosts: (state) => state.posts,
}
export const mutations = {
  setError(state, payload) {
    state.error = payload
  },
  setPosts(state, payload) {
    state.posts = payload
  },
}
export const actions = {
  async getList({ commit }) {
    try {
      const posts = await this.$axios.$get('/api/rss')
      commit('setPosts', posts)
    } catch (e) {
      commit('setError', e)
      throw e
    }
  },
}
