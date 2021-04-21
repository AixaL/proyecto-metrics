import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    mailings:[],
    moduleS: false,
    moduleC:false,
    disablePrev: true,
    tituloCamp:'',
    results:0,
    mail:'',
    nameMail:'',
    html:'',
    agenciasMarca:'',
    linkPrev:'',
    step1:'',
    imageScreen:'',
    idCliente:'',
    linkCampana:'',
    links:'',
    images:'',
    urlLinks:'',
    nombreLinks:'',
    NoResults: false,
    previewLinks:false,
    search: 'AC',
    agenciaActual:'',
    numError:0,
    cargando:true,
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
      setTimeout(function(){ 

        state.cargando =false
       
    }, 2000);
    },
    setStripoKey(state, key){
      state.StripoKey = key
    },
    setAgenciaName(state, name){
      state.agenciaName = name
      state.tituloCamp=''
      this.setAgencias
      state.cargando=true
    },
    setMail(state, mailS){
      console.log(mailS)
      state.mail = mailS
      state.tituloCamp= mailS.name
     
    },
    setCreateCamp(state, datos){
      // console.log(datos.agencia, datos.titulo)
      state.agenciaActual=datos.agencia
      state.nameMail=state.mail.name
    },
    setAgencias(state, data){
      state.agenciasMarca=data
    },
    setScreenshot(state, data){
      console.log(data.data.url)
      state.imageScreen=data.data.url
    },
    setHtml(state,data){
      console.log(data.data.response.html)
      state.html=data.data.response.html
    },
    setLinkCampana(state, data){
      state.linkCampana= data.response.campaign_link
      console.log(data.response.campaign_link)
    },
    setLinks(state, data){
      state.links=data.response.precheck.links
      state.images=data.response.precheck.images

      let images= data.response.precheck.images
      let links=data.response.precheck.links


      // setTimeout(function(){ 
        images.forEach(element => {
            if(element.status==0 && element.status>303){
                state.numError += 1
            }
            if(element.alt==''){
                state.numError += 1
            }
        });

        // var nombreLinks = Array()
        // var urlLinks = Array()

        links.forEach(element => {
            // nombreLinks.push(element.label)
            // urlLinks.push(element.url)
            if(element.status==0 && element.status>303){
                state.numError += 1
            }
            if(element.url==''){
                state.numError += 1
            }
        });

        // this.state.nombreLinks= nombreLinks
        // this.state.urlLinks= urlLinks

        console.log(state.numError)

      // }, 7000);
      
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
      await axios.post(link, data)
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
    },
    async getHtml({commit},datos){
      var data = new FormData()
      this.state.idCliente=datos.idCliente
      data.append('IdCliente', datos.idCliente)
      data.append('emailid',this.state.mail.emailId)
      data.append('stripojwt',this.state.StripoKey)
      let link='https://www.adpdev.com/cs/api/mailing/varsPreviewStripo'
      await axios.post(link,data).then(function(response){
        console.log(response)
  
        commit('setHtml', response)
      })
    },
    async getLinksVer({commit}){
      var data = new FormData()
      // data.append('IdCliente', '12' )
      // data.append('emailid','2007841')
      // data.append('stripojwt', 'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjVkMzJmYWU5LTcyOGUtNGFmNy05MGU2LTM4MWI5OWI1MWE3YVwiLFwicHJvamVjdElkXCI6Mjc4NTcwfSJ9.ICQ9jJGnLRLI85QWCsMC-CzSt7XpN1grWcmaq_Zo6d0')
      data.append('IdCliente', this.state.idCliente )
      data.append('emailid',this.state.mail.emailId )
      data.append('stripojwt', this.state.StripoKey )
      let link='https://www.adpdev.com/cs/api/mailing/preCampaignCheck'
      await axios.post(link,data).then(function(response){
        console.log(response)
  
        commit('setLinks', response.data)
      })
    },
    async CreateSave({dispatch,state}){
      
      var data = new FormData()
      // var nombreL =this.state.nombreLinks
      // var urls = this.state.urlLinks 
      
      data.append('IdCliente', this.state.idCliente )
      data.append('emailid',this.state.mail.emailId )
      data.append('stripojwt', this.state.StripoKey )
      data.append('nombreCampana', this.state.tituloCamp)
      let link='https://www.adpdev.com/cs/api/mailing/createStripoCampaign'
      await axios.post(link,data).then(function(response){
        console.log(response)
        let step1= response.data.response.step1

        state.step1= step1
        console.log(step1)

        dispatch('SaveMatic')


  
        // commit('setLinks', response.data)
      })

    },
    async SaveMatic({commit}){

      var links= this.state.links
      // var data = new FormData()
          
      // let link='http://localhost:8080/adp/metrics/includes/saveMatic.php?testing=true'
      
      var nombreLinks = Array()
      var urlLinks = Array()

      links.forEach(element => {
            nombreLinks.push(element.label)
            urlLinks.push(element.url)
      });

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/adp/metrics/includes/saveMatic.php?testing=true');
      xhr.setRequestHeader('Content-Type', 'aplication/json')
      xhr.send(JSON.stringify({
        testing:true,
        step1: this.state.step1,
        nombreLinks: nombreLinks,
        urlLinks: urlLinks
      }))
      xhr.onload = function(){
        var data= JSON.parse(this.responseText)
        console.log(data)

        commit('setLinkCampana', data)
      }




      // data.append('testing',true)
      // data.append('step1', step )
      // data.append('nombreLinks',nombreLinks )
      // data.append('urlLinks',urlLinks )


      // await axios.post(link,data).then(function(response){
      //   console.log(response)
      
      //   // commit('setLinkCampana')
           
      // })

    }
  },
  modules: {
  }
})
