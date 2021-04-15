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
    agenciasMarca:'',
    linkPrev:'',
    imageScreen:'',
    NoResults: false,
    search: 'AC',
    agenciaActual:'',
    agenciaName:'Volvo',
    StripoKey:'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjVkMzJmYWU5LTcyOGUtNGFmNy05MGU2LTM4MWI5OWI1MWE3YVwiLFwicHJvamVjdElkXCI6Mjc4NTcwfSJ9.ICQ9jJGnLRLI85QWCsMC-CzSt7XpN1grWcmaq_Zo6d0'
  },
  mutations: {
    setMailings(state, payload){
      state.mailings= payload
      state.results= payload.length
      if(state.results<1){
        state.NoResults=true
      }else{
        state.NoResults=false
      }
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
    },
    setAgencias(state, data){
      state.agenciasMarca=data
    },
    setScreenshot(state, data){
      console.log(data.data.url)
      state.imageScreen=data.data.url
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

    async getAgen({commit}){
      try {
        axios.post("http://localhost:8080/cs/api/mailing/getAgencias",{
          marca: this.state.agenciaName
        }).then(response => response.data.response.response)
        .then(items =>{
          console.log(items)
          commit('setAgencias', items)
        })
         
      } catch (error) {
        console.log(error)
      }
    },
    async getScreenshot({commit}){
      console.log(this.state.linkPrev)
      let link ='https://api.apiflash.com/v1/urltoimage'
      var data = new FormData()
      data.append('access_key','98f86209b17d4575995a79dd19889cec')
      data.append('url',this.state.linkPrev)
      data.append('response_type','json')
      data.append('full_page','true')
      console.log(link)
      axios.post(link, data)
      // axios.get(`http://api.screenshotlayer.com/api/capture?access_key=1c78bc418a5144015bf68bc5c01121e7&url=https://www.google.com/sky/`)
      .then(function(response){
        // console.log(JSON.stringify(response));
        console.log(response)
        
        // var a = document.createElement("a"); //Create <a>
        // a.href = JSON.stringify(response.data)//Image Base64 Goes here
        // a.download = "Image.png"; //File name Here
        // a.click();
        commit('setScreenshot', response)
      })
    }
  },
  modules: {
  }
})
