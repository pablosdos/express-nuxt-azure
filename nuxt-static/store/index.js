export const state = () => ({
  dummyData: []
})

export const getters = {
  getDummyData: (state) => {
    return state.dummyData
  }
}

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { req, res }) {
    // const data = await this.$axios.$get('https://express-api.azurewebsites.net/')
    //this.$axios.setHeader('Authorization', process.env.AUTH_TOKEN, [
    //  'get'
    //])
    const data = await this.$axios.$get('https://express-api.azurewebsites.net/')

    commit('addDummyData', data)
    return data
  }
}

export const mutations = {
  addDummyData (state, data) { state.dummyData = data }
}
