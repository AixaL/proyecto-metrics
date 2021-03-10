import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    mailings:[]
  },
  mutations: {
    setMailings(state, payload){
      state.mailings= payload
      console.log(state.mailings)
    }
  },
  actions: {
   getMailings({commit}){
     try {
         axios.get('http://localhost:8080/emailgeneration/v1/templates', { headers:{'Stripo-Api-Auth': 'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjVkMzJmYWU5LTcyOGUtNGFmNy05MGU2LTM4MWI5OWI1MWE3YVwiLFwicHJvamVjdElkXCI6Mjc4NTcwfSJ9.ICQ9jJGnLRLI85QWCsMC-CzSt7XpN1grWcmaq_Zo6d0'}
          
         }
         
        )
        .then(response => response.data)
        .then(items => {
          console.log(items); 
          commit('setMailings', items)
        })
        
       
       
     } catch (error) {
       console.log(error)
     }
    
    }
  },
  modules: {
  }
})
