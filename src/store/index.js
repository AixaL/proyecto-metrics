import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    mailings:[],
    mail:'',
    search: '',
    agenciaName:'Volvo',
    StripoKey:'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjVkMzJmYWU5LTcyOGUtNGFmNy05MGU2LTM4MWI5OWI1MWE3YVwiLFwicHJvamVjdElkXCI6Mjc4NTcwfSJ9.ICQ9jJGnLRLI85QWCsMC-CzSt7XpN1grWcmaq_Zo6d0'
  },
  mutations: {
    setMailings(state, payload){
      state.mailings= payload
    },
    setStripoKey(state, key){
      state.StripoKey = key
    },
    setAgenciaName(state, name){
      state.agenciaName = name
    },
    setMail(state, mailS){
      console.log(mailS)
      state.mail = mailS
    }
  },
  actions: {

   async getMailings({commit}){
     
     try {
         await axios.get('http://localhost:8080/emailgeneration/v1/emails', { headers:{'Stripo-Api-Auth': this.state.StripoKey}  
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
    
    },

    getStripoKey({commit}, key){
        commit('setStripoKey', key)
    }
  },
  getters:{
    filterAZ: state =>{
      return state.mailings.filter(mailings => mailings.updatedTime)
    },
    // filterZA: state =>{

    // },
    // filterDateR: state =>{

    // },
    // filterDateL: state => {

    // },
    // searchBar: state => {

    // }
  },
  modules: {
  }
})
