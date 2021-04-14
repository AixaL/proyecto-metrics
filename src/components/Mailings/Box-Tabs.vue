<template>
    <div>
        <div class="grid grid-cols-9">
            <div class="tab tab-select"><svg class="w-5 h-5 float-left mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Mailings</div>
            <div class="tab text-gray-400"><svg class="w-5 h-5 float-left mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Campañas</div>
            <div class="col-span-4"></div>
        </div>
        <div class="bg-white w-full min-h-screen ">
            <div class="p-3">
               
                <div class="grid grid-cols-5 bg-gray-100 text-xs p-2">
                    
                    <div v-on:click="visible=true" class="cursor-pointer col-span-3  text-gray-600 text-left self-center font-semibold justify-center "><p class="float-left mr-2 self-center">{{orden}}</p><svg class="flex w-4 h-4 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
                    <!-- <div></div> -->
                    <div class="flex justify-end">
                        <svg v-on:click="refreshMailings()" class="w-4 h-4 justify-self-end place-self-end cursor-pointer hover:text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </div>  
                    <div class="text-gray-500 text-right text-xs self-center">Resultados: {{$store.state.results}}</div>
                    <!-- mailings.data.length -->
                </div>
                <div v-if="visible" v-on:mouseleave="visible=false" class="absolute bg-gray-100 z-10 rounded-sm shadow-md">
                <ul class="text-left">
                    <li v-on:click="Ordenar('Fecha (Más reciente)', 2)" class="order-menu">Fecha (Mas reciente)</li>
                    <li v-on:click="Ordenar('Fecha (Menos reciente)', 1)" class="order-menu">Fecha (Menos reciente)</li>
                    <li class="order-menu" v-on:click="Ordenar('A a Z', 3)">A a Z</li>
                    <li v-on:click="Ordenar('Z a A' ,4)" class="order-menu">Z a A</li>
                </ul>
            </div>
            </div>
            
            <div >
                <div v-if="$store.state.NoResults">
                    <h2>No hay resultados</h2>
                </div>
                 <MailingsBox
                    v-for="mail of mailings" :key="mail.emailId" :name="mail.name" :time="mail.updatedTime"
                    :id="mail.emailId" :editStripo="mail.editorUrl" :mailS="mail" 
                 /> 
            </div>
        </div>
    </div>
</template>
<script>
import { useStore} from 'vuex'
import {computed} from 'vue'
import MailingsBox from '@/components/Mailings/mailings.vue'
export default {
    name: 'App',
    components:{
        MailingsBox,
    },
    data() {
        return {
            visible: false,
            orden: 'Ordenar por',
            idOrden: 0,
        }
    },
    methods: {
        Ordenar(texto, id){
            this.orden=texto; 
            this.visible=false;
            this.idOrden=id
            // this.$store.dispatch('getMailings')
             var data= this.$store.state.mailings
            switch (id){
                case 1:
                    data.sort(function(a,b){
                        if(a.updatedTime < b.updatedTime)
                        return -1;
                        if(a.updatedTime > b.updatedTime)
                        return 1;
                        return 0;
                    })
                    this.$store.state.mailings=data
                    break;
                case 2:
                    data.sort(function(a,b){
                        if(a.updatedTime < b.updatedTime)
                        return -1;
                        if(a.updatedTime > b.updatedTime)
                        return 1;
                        return 0;
                    })
                    this.$store.state.mailings=data.reverse()
                    break;
                    
                case 3:
                      data.sort(function(a,b){
                        if(a.name.toLowerCase() < b.name.toLowerCase())
                        return -1;
                        if(a.name.toLowerCase() > b.name.toLowerCase())
                        return 1;
                        return 0;
                    })
                    this.$store.state.mailings=data
                    break;
                case 4:
                     data.sort(function(a,b){
                        if(a.name.toLowerCase() < b.name.toLowerCase())
                        return -1;
                        if(a.name.toLowerCase() > b.name.toLowerCase())
                        return 1;
                        return 0;
                    })
                   this.$store.state.mailings=data.reverse()
                    break;
            }
               

        },
        refreshMailings(){
            this.$store.dispatch('getMailings')

        }
    },
    setup() {
        const store = useStore()
        store.dispatch('getMailings')
        
        const mailings = computed(() => store.state.mailings)
        // var data=mailings.value
        console.log(store.state.search)
      
        // data.sort(function(a,b){
        //     if(a.updatedTime < b.updatedTime)
        //     return -1;
        //     if(a.updatedTime > b.updatedTime)
        //     return 1;
        //     return 0;
        // })

    
        // console.log(data.reverse())

      
        return {mailings}
        
    }
}
</script>