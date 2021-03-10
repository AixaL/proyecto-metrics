<template>
    <div>
        <div class="grid grid-cols-9">
            <div class="col-span-2 bg-white text-blue-600 font-semibold text-sm rounded-t-sm h-9 border-t-2 border-blue-600 flex p-2 text-center align-middle content-center justify-center items-center"><svg class="w-5 h-5 float-left mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Mailings</div>
            <div class="bg-gray-200 col-span-2 text-blue-600 font-semibold text-sm rounded-t-sm h-9 flex p-2 text-center align-middle content-center justify-center items-center"><svg class="w-5 h-5 float-left mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Campañas</div>
            <div class="col-span-4"></div>
        </div>
        <div class="bg-white w-full">
            <div class="p-3">
                <div class="grid grid-cols-4 bg-gray-100 text-xs p-2">
                    <div class=" text-gray-600 text-left self-center font-semibold justify-center "><p class="float-left mr-2 self-center">Ordenar por</p><svg class="flex w-4 h-4 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div>
                    <div></div>
                    <div></div>
                    <div class="text-gray-500 text-right text-xs self-center">Resultados: 40</div>
                </div>
            </div>
            <div >
                <div class="grid grid-rows-2 border-b-2 text-left border-gray-100 p-3">
                    <div class="w-full text-gray-600 font-semibold">
                        <h4 class="float-left">BAIC MONTERREY - Promociones - Febrero 2021</h4>
                        <button class="float-right bg-gray-100 rounded-md w-8 flex justify-center"><svg class="w-4 h-4 self-center place-self-center justify-self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></button>
                    </div>
                    <div class="w-full mt-1 text-gray-500 text-sm">
                        <p class="float-left mr-2">Plantilla General V.0.1</p>
                        <p>08/02/2021</p>
                    </div>
                </div>   
                <div class="grid grid-rows-2 border-b-2 text-left border-gray-200 p-3">
                    <div class="w-full text-gray-600 font-semibold">
                        <h4 class="float-left">BAIC MONTERREY - Promociones - Febrero 2021</h4>
                        <button class="float-right bg-gray-100 rounded-md w-8 flex justify-center"><svg class="w-4 h-4 self-center place-self-center justify-self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></button>
                    </div>
                    <div class="w-full mt-1 text-gray-500 text-sm">
                        <p class="float-left mr-2">Plantilla General V.0.1</p>
                        <p>08/02/2021</p>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>
<script>
import { useStore} from 'vuex'
import {onMounted} from 'vue'
export default {
    name: 'App',
    components:{},
    setup() {
        const store = useStore()
        onMounted(() => {
            store.dispatch('getMailings')
        
        })
    }
}
</script>