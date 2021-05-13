export const state = () => ({ error: null, posts: null, post: null })
export const getters = {
  getPosts: (state) => state.posts,
  getPost: (state) => state.post,
}
export const mutations = {
  setError(state, payload) {
    state.error = payload
  },
  setPosts(state, payload) {
    state.posts = payload
  },
  setPost(state, payload) {
    state.post = payload
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
  async fetchId({ commit, getters }, id) {
    if (getters.getPosts === null) {
      const post = await this.$axios.$get(`/api/fetchId/${id}`)
      commit('setPost', post)
    } else {
      commit('setPost', getters.getPosts[id])
    }
  },
}
