import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

Vue.config.devtools = true

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async submitForm (_, request) {
        console.log(request)
    
        let response = await axios.post('https://api.hsforms.com/submissions/v3/integration/submit/9399633/485ae6c6-4b11-4add-8aa8-14816d962183', request).catch(error => {
            console.log(error)
        })
        return response.data
    }
  },
  modules: {
  }
})

// import Vuex from 'vuex'
// import Vue from 'vue'

// Vue.use(Vuex)
// Vue.config.devtools = true

// export default new Vuex.Store({
//     state: {
//         testing: null
//     },
//     mutations: {
//         //
//     },
//     actions: {
//         
//     },
//     modules: {
//         //
//     }
// })
