<template>
    <div>
    
        <div class=" mailings-box border-b-0" :id="mailS.emailId"  v-on:click="Vermailing(mailS)">
            <div class="w-full text-gray-700 font-semibold text-md z-0 ">
                <h4 v-on:click="verMail"  class="float-left">{{name}}</h4>
                <button v-on:click="visible=true, $store.state.linkPrev=mailS.previewUrl" class="btn-mailings"><svg class="w-4 h-4 self-center place-self-center justify-self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></button>
            </div>
            <div class="w-full mt-1 text-gray-500 text-sm z-0 ">
                <p class="w-10/12 float-left">{{newTime}}</p>
                <p class="w-2/12 float-left text-xs text-gray-400 text-right">#{{id}}</p>
            </div>
            <div v-if="visible" v-on:mouseleave="visible=false" class="menu-mailings" style="margin-left:75%" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <ul class="w-full">
                    <li class="li-edit-arch"><a :href="editStripo" target="_blank">Editar en stripo <svg class="w-4 h-4 float-right ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></a></li>
                    <!-- <li class="li-edit-arch">Archivar <svg class="w-4 h-4 float-left ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg></li> -->
                </ul>
            </div>
        </div>
    </div> 
</template>

<script>
// import {useStore} from 'vuex'
export default {
    props:{
        time:{
            type: String,
        },
        name:{
            type: String,
        },
        id:{
            type: Number
        },
        editStripo:{
            type: String
        },
        mailS:{
            type: Object
        }
    },
    data() {
        return {
            visible: false,
            bgc: 'bg-white',
            isActive:false
        }
    },
    // } ['time','name'],
    computed:{
        
    },
    methods: {
         editS(){
           
                 this.$store.state.moduleS=true
            },
            Vermailing(mail){
        //    console.log(mail)
                if(document.getElementById(this.$store.state.idSelected)){
                    document.getElementById(this.$store.state.idSelected).classList.remove("border-l-4", "border-blue-600", "bg-gray-100")
                }
                
                    

                this.$store.commit('setMail', mail)
                    let datos={
                                idCliente:0,
                            }  
                    console.log(document.getElementById(mail.emailId))
                    document.getElementById(mail.emailId).classList.add("border-l-4", "border-blue-600", "bg-gray-100")
                    this.$store.state.idSelected=mail.emailId
                    this.$store.dispatch('getHtml', datos)
                    this.$store.state.html=''
                    this.$store.state.disablePrev=false

                    sessionStorage.setItem('mailing',JSON.stringify(mail));
            }
       
    },
     mounted() {             
         console.log('mounted!')       
         if(document.getElementById(this.$store.state.idSelected)) {
            document.getElementById(this.$store.state.idSelected).classList.add("border-l-4", "border-blue-600", "bg-gray-100")
         }
      },   
    setup(props) {
        // console.log(props)
        // const store = useStore()
        // document.getElementById(store.state.idSelected).classList.add("border-l-4", "border-blue-600", "bg-gray-100")
        let newTime= props.time.split("T",1).join('')

        var fecha = new Date(newTime);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        

        newTime = fecha.toLocaleDateString("es-ES", options)
        return({newTime})
    }
    // data: {
    
    // }
}
</script>

<style>
</style>