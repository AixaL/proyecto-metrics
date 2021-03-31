import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    mailings:[],
    moduleS: false,
    moduleC:false,
    nameCamp:'',
    results:0,
    mail:'',
    nameMail:'',
    search: '',
    agenciaActual:'',
    agenciaName:'Volvo',
    StripoKey:'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjVkMzJmYWU5LTcyOGUtNGFmNy05MGU2LTM4MWI5OWI1MWE3YVwiLFwicHJvamVjdElkXCI6Mjc4NTcwfSJ9.ICQ9jJGnLRLI85QWCsMC-CzSt7XpN1grWcmaq_Zo6d0'
  },
  mutations: {
    setMailings(state, payload){
      state.mailings= payload
      state.results= payload.length
    },
    setStripoKey(state, key){
      state.StripoKey = key
    },
    setAgenciaName(state, name){
      state.agenciaName = name
    },
    setMail(state, mailS){
      state.mail = mailS
    },
    setCreateCamp(state, datos){
      // console.log(datos.agencia, datos.titulo)
      state.agenciaActual=datos.agencia
      state.nameMail=state.mail.name
      state.nameCamp=datos.titulo
    }
  },
  actions: {

   async getMailings({commit}){
    let formData = new FormData();

    formData.append('cmd', 'get_emails');
    formData.append('stripojwt',  this.state.StripoKey);
     
     try {
         await axios.post('http://localhost:8080/adp/metrics/gateway.php',
          formData
        )
        .then(response => response.data.response.data)
        .then(items => {
          console.log(items); 
          commit('setMailings', items)
        })
     } catch (error) {
       console.log(error)
     }
    
    },
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
