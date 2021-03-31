<template>
    <div class="grid grid-cols-4  bg-white p-3 gap-3">
            <div class="col-span-2 ">
                <p class="text-left text-lg font-bold text-black">{{mail.name}}</p>
            </div>
            <div class="flex justify-center items-center">
                <button v-on:click="editS" class="btn-edit-arch">
                        <p class="float-left text-xs">Editar en Stripo</p>
                        <svg class="w-4 h-4 float-left ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                </button>
            </div>
            <div class="flex justify-center items-center">
                <button class="btn-edit-arch"> <p class="float-left text-xs ">Archivar </p> <svg class="w-4 h-4 float-left ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg></button>
            </div>
            <div class="col-span-4 h-1 border-b-2 border-gray-100"></div>

            <div class="col-span-4">
                <p class="text-left text-sm mb-2">Titulo de la Campaña</p>
                <form class="relative ">
                <input v-model="tituloCamp" class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-600 border border-gray-200 rounded-md py-2 pl-4 h-10" type="text" aria-label="Título" placeholder="Título"  />
            </form>
            </div>
            <div class="col-span-2">
                <button v-on:click="getAgen()" type="button" class="flex text-left  w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none " id="options-menu" aria-expanded="true" aria-haspopup="true">
            
                    
              <div class=" flex justify-start w-10/12 "><p class="justify-start text-gray-700">{{agenciaActual}}</p></div>
              <div class=" flex justify-end w-2-12">
                  <svg class="mr-1 ml-8 h-5 w-5 flex justify-end justify-self-end place-content-end justify-items-end place-self-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
                </button>
            </div>
            
            <div class="col-span-2 flex h-10">
                <button v-on:click="CreateCamp" class="buttonCreate">Crear Campaña</button>
            </div>
            <div v-if="visible" v-on:mouseleave="visible=false" class=" col-span-2 -mt-4 overflow-y-auto h-40">
                     <div class="bg-white z-10 w-full shadow-md text-left">
                        <ul v-for="agencia in agen" v-bind:key="agencia.id">
                            <li v-on:click="SelectAgenciaA(agencia)" class="p-2 cursor-pointer font-semibold hover:bg-gray-100 hover:text-blue-600 border-b-2 border-gray-100">{{agencia.cliente}}</li>
                        </ul>
                    </div>
            </div>
            <div class="hidden col-span-2"></div>
            <div class="col-span-4 border-gray-100 border-b-2"></div>

            <div class="text-left text-md w-4/6 flex items-center">
                <p class="font-semibold">Vista previa</p>
            </div>
            <div class="col-span-2 flex justify-start pr-4 -ml-14">
                <button v-on:click="mobile=!mobile, desktop=!desktop" :class="{Selected:desktop}" class=" bg-gray-100 w-7 h-7 flex justify-center items-center rounded-sm  hover:text-white hover:bg-blue-600 focus:border-0  focus:border-transparent focus:outline-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></button>
                <button v-on:click="mobile=!mobile, desktop=!desktop" :class="{Selected:mobile}" class="ml-2 text-gray-500 bg-gray-100 w-7 h-7 flex justify-center items-center rounded-sm hover:text-white hover:bg-blue-600 focus:border-0 focus:outline-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></button>
            </div>
            <div class=" text-left text-md justify-self-end">
                <button class="btn-edit-arch h-full">Screenshot <svg class="w-4 h-4 float-left ml-2 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></button>
            </div>

            <div class=" col-span-4 border-2 border-gray-300 rounded-md w-full min-h-screen flex justify-self-center" :class="{PrevMobile:mobile}" >
                <!-- <iframe class="w-full h-screen" src="https://codingpotions.com/vue-props" frameborder="0"></iframe> -->
                <!-- <iframe frameborder="0" width="100%" height="100%" class="" v-bind:src="mail.previewUrl" ></iframe> -->
                <iframe frameborder="0" width="100%" height="100%" class="" src="http://www.adpdev.com/adp/mx/email-metrics/ver-email.php?c=3545&swapnumber=true&utm_source=adpmx&utm_medium=email&utm_campaign=adpmx_3545&adpmetrics_u=cmxUemJINmR6MEdpdw#" ></iframe>
            </div>
            
            <div class=""></div>
        
    </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            visible: false,
            mobile: false,
            desktop: true,
            tituloCamp:'',
            agenciaActual:'Seleccionar agencia',
            agen:'',
            agencias: {
                Volvo:{
                    name:'Volvo',
                    agencia:[
                        {
                            id:0,
                            name:'Volvo 1'                        
                        },
                        {
                            id:1,
                            name:'Volvo 2'                        
                        },
                        {
                            id:2,
                            name:'Volvo 3'                        
                        },
                    ]
                },
                BMW:{
                    name:'BMW',
                    agencia:[
                        {
                            id:0,
                            name:'BMW 1'                        
                        },
                        {
                            id:1,
                            name:'BMW 2'                        
                        },
                        {
                            id:2,
                            name:'BMW 3'                        
                        },
                    ]
                },
                Audi:{
                    name:'Audi',
                    agencia:[
                        {
                            id:0,
                            name:'Audi 1'                        
                        },
                        {
                            id:1,
                            name:'Audi 2'                        
                        },
                        {
                            id:2,
                            name:'Audi 3'                        
                        },
                    ]
                },
                Mazda:{
                    name:'Mazda',
                    agencia:[
                        {
                            id:0,
                            name:'Mazda 1'                        
                        },
                        {
                            id:1,
                            name:'Mazda 2'                        
                        },
                        {
                            id:2,
                            name:'Mazda 3'                        
                        },
                    ]
                }
            }
        }
    },
    methods: {
        editS(){
            if(this.$store.state.mail==''){
                alert("Por favor Selecciona un mail")
            }else{
                 this.$store.state.moduleS=true
            }
           
        },
        SelectAgenciaA(agencia){
            this.agenciaActual=agencia.cliente
            this.visible=false
              
        },
        CreateCamp(){
            console.log(this.agenciaActual, this.tituloCamp)
            if(this.agenciaActual==''|| this.tituloCamp==''){
                alert("Completa los campos para crear la campaña")
            }else{
                this.$store.state.moduleC=true
            this.$store.commit('setCreateCamp', { agencia :this.agenciaActual, titulo: this.tituloCamp } )
            }
            
        },
        getAgen(){
            this.visible=true
            this.agenciaActual='Seleccionar agencia'
            axios.post("http://localhost:8080/cs/api/mailing/getAgencias",{
                    marca: this.$store.state.agenciaName
            }).then(response => {
                let agencias= response.data

                this.agen = agencias.response
                this.agen = this.agen.response
                console.log(this.agen.response)
                return this.agen
              
            }).catch(e => {
                console.log(e);
            })

            return this.agen
        },
      
    },
    computed: {
        ...mapState({
            mail: 'mail'
        }),
         getAgencias(){
            let agenName= this.$store.state.agenciaName;
            let agencias=this.agencias[agenName].agencia
            // console.log(agenName)
            return(agencias)
        },
        

    } 
   

}
</script>
<style>
    .PrevMobile{
        width: 58.333333%;
       
    }
    .Selected{
        --tw-bg-opacity: 1;
        background-color: rgba(37, 99, 235, var(--tw-bg-opacity)); 
        --tw-text-opacity: 1;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }
</style>