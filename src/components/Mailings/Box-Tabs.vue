<template>
    <div>
        <div class="grid grid-cols-9">
            <div class="tab tab-select"><svg class="w-5 h-5 float-left mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Mailings</div>
            <div class="tab"><svg class="w-5 h-5 float-left mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Campañas</div>
            <div class="col-span-4"></div>
        </div>
        <div class="bg-white w-full">
            <div class="p-3">
                <div class="grid grid-cols-4 bg-gray-100 text-xs p-2">
                    <div v-on:click="visible=true" class="cursor-pointer col-span-2  text-gray-600 text-left self-center font-semibold justify-center "><p class="float-left mr-2 self-center">{{orden}}</p><svg class="flex w-4 h-4 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
                    <div></div>
                    <div class="text-gray-500 text-right text-xs self-center">Resultados: {{}}</div>
                    <!-- mailings.data.length -->
                </div>
                <div v-if="visible" v-on:mouseleave="visible=false" class="absolute bg-gray-100 z-10 rounded-sm shadow-md">
                <ul class="text-left">
                    <li v-on:click="Ordenar('Fecha (Más reciente)', 1)" class="order-menu">Fecha (Mas reciente)</li>
                    <li v-on:click="Ordenar('Fecha (Menos reciente)', 2)" class="order-menu">Fecha (Menos reciente)</li>
                    <li v-on:click="orden='A a Z'; visible=false" class="order-menu">A a Z</li>
                    <li v-on:click="orden='Z a A'; visible=false" class="order-menu">Z a A</li>
                </ul>
            </div>
            </div>
            
            <div >
                 <MailingsBox
                    v-for="mail of mailings.data" :key="mail.emailId" :name="mail.name" :time="mail.updatedTime"
                    :id="mail.emailId"
                 /> 
            </div>
        </div>
    </div>
</template>
<script>
import { useStore} from 'vuex'
import {computed, onMounted} from 'vue'
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
            idOrden: 0
        }
    },
    methods: {
        Ordenar(texto, id){
            this.orden=texto; 
            this.visible=false;
            this.idOrden=id

        }
    },
    setup() {
        const store = useStore()
        onMounted(() => {
            store.dispatch('getMailings')
        
        })
        const mailings = computed(() => store.state.mailings)

        return {mailings}
    },
}
</script>