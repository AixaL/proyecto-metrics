<template>
   <div class="col-span-4 w-full  bg-white p-4 overflow-y-scroll" style="height: 75vh">
                <div  class="grid grid-cols-4 gap-1">
                    <div class="col-span-4 text-left">
                        <p class="text-md font-semibold">Etiquetas especiales</p>
                        <p v-if="open!=true || html!=true || unsubscribe!=true" class="text-sm text-red-600 font-semibold">*Faltan etiquetas especiales</p>
                    </div>
                    <div class="col-span-4">
                        <div class="grid grid-cols-3 gap-4">
                              <div class="w-40 mr-12">
                                    <div v-if="open==true" class="w-full mt-2 border-b-2 border-green-700   h-10">
                                        <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></p>
                                        <p class=" p-2 text-sm font-semibold text-left w-9/12 float-left ">{{openText}}</p>
                                    </div>
                                    <div v-else class="mt-2 border-b-2 border-red-700  h-10">
                                         <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></p>
                                        <p class=" p-2 text-sm font-semibold text-left w-9/12 float-left ">{{openText}}</p>
                                           
                                    </div>
                                </div>
                                <div class="w-40 mr-12">
                                    <div v-if="unsubscribe==true" class="w-full mt-2 border-b-2 border-green-700   h-10">
                                        <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></p>
                                        <p class=" p-2 text-sm font-semibold text-left w-9/12 float-left ">{{unsubscribeText}}</p>
                                    </div>
                                    <div v-else class="mt-2 border-b-2 border-red-700  h-10">
                                        <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></p>
                                            <p class=" p-2 text-sm font-semibold text-left w-9/12 float-left ">{{unsubscribeText}}</p>
                                            
                                    </div>
                                </div>
                                <div  class="w-40 mr-12">
                                    <div v-if="html==true" class="w-full mt-2 border-b-2 border-green-700   h-10">
                                        <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></p>
                                        <p class=" p-2 text-sm font-semibold text-left w-9/12 float-left ">{{htmlText}}</p>
                                    </div>
                                    <div v-else class="mt-2 border-b-2 border-red-700  h-10">
                                         <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></p>
                                            <p class=" p-2 text-sm font-semibold text-left w-9/12 float-left ">{{htmlText}}</p>
                                           
                                    </div>
                                </div>    
                        </div>  
                    </div>
                    
                    <!-- <div></div> -->
                    </div>
                    <div class="col-span-4 w-full mt-5">
                    <div class="grid grid-cols-4 gap-2">
                        <div class="text-left col-span-4">
                            <p class="font-semibold">Verificación de links</p>
                            <p class="text-sm font-semibold text-red-600 mt-2" v-if="$store.state.numErrorLinks.length!=0">* Hubo error con {{$store.state.numErrorLinks.length}} urls</p>
                        </div>
                        <div class="col-span-4  pb-2">
                            <div v-if="$store.state.cargando2==true" class="flex justify-center align-middle">
                                <img   class="w-80 h-80 flex self-center items-center"  src="https://cdn.dribbble.com/users/108183/screenshots/4543219/loader_backinout.gif" alt="">
                            </div>
                            <div v-if="$store.state.cargando2==false" class="w-full">
                               <table class="table-auto w-full text-left border-separate divide-y-4" cellspacing="10">
                                   <thead>
                                       <tr class="text-left text-sm">
                                           <th>Status</th>
                                           <th>Nombre</th>
                                           <th>Url</th>
                                       </tr>
                                   </thead>
                                   <tbody class="divide-y">
                                       <tr v-for="linkE of linksE_arr" :key="linkE.id" class=" pt-4 ">
                                           <td class="w-2/12" v-if="!linkE.label.includes('{')"> 
                                               <svg class="w-4 h-4 text-red-800 float-left " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> 
                                               <p class="text-xs float-left ml-1">({{linkE.status}})</p>
                                            </td>
                                    
                                           <td class="w-2/6"  v-if="!linkE.label.includes('{')">
                                                   <p class="text-xs w-32 break-all font-semibold whitespace-nowrap overflow-hidden">{{linkE.label}}</p>
                                            </td>
                                           <td class="w-3/6"  v-if="!linkE.label.includes('{')">
                                               <div class="w-full h-full rounded-md p-1 border-2 border-red-600"><p class="text-xs break-all text-red-800">* Sin url</p>
                                               </div>
                                            </td>
                                       </tr>

                                       <tr v-for="linkI of links_arr" :key="linkI.id" class="pb-4">
                                           <td class="w-2/12" v-if="!linkI.label.includes('{')"> 
                                               <svg v-if=" linkI.status!=0 && linkI.status<303" class="w-5 h-5 text-green-800 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                            </td>
                                    
                                           <td class="w-2/6"  v-if="!linkI.label.includes('{') && linkI.status!=0 && linkI.status<303">
                                                   <p class="text-xs w-32 break-all font-semibold whitespace-nowrap overflow-hidden">{{linkI.label}}</p>
                                            </td>
                                           <td class="w-3/6"  v-if="!linkI.label.includes('{')">
                                               
                                               <div v-if=" linkI.status!=0 && linkI.status<303" class=" h-10 w-46  rounded-md p-1 border-2 border-green-600 overflow-hidden">
                                                   <div class="float-left w-3/4 flex items-center align-middle">
                                                        <p class="text-xs break-all float-left self-center">{{linkI.url}} </p>
                                                   </div>
                                                   <div  class="float-left w-1/4 flex justify-end align-middle h-full items-center">
                                                   <a :href="linkI.url" target="_blank" class="cursor-pointer hover:text-blue-600">
                                                         <svg class="w-4 h-4 cursor-pointer hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                                   </a>
                                                      
                                                   </div>
                                                  
                                               </div>
                                            </td>
                                       </tr>
                                   </tbody>
                               </table>
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import { useStore} from 'vuex'
import {computed} from 'vue'
export default {
    data() {
        return {
            html:false,
            open:false,
            unsubscribe:false,
            openText:'{{open}}',
            htmlText:'{{html}}',
            unsubscribeText:'{{unsubscribe}}',
        }
    },
    beforeUpdate() {
        let links = this.$store.state.links
        let especiales = this.$store.state.linksEspeciales

    // if(this.$store.state.cargando2 ==false){
        links.sort(function(a,b){
                        if(a.status < b.status)
                        return -1;
                        if(a.status > b.status)
                        return 1;
                        return 0;
                    })
        console.log(links)

        if(especiales.find(link => link.label === '{{open}}')){
            this.open=true
        }else{
            this.$store.state.numError+=1
        }
        if(especiales.find(link => link.label === '{{html}}')){
            this.html=true
        }else{
            this.$store.state.numError+=1
        }
        if(especiales.find(link => link.label === '{{unsubscribe}}')){
            this.unsubscribe=true
        }else{
            this.$store.state.numError+=1
        }
        console.log(especiales.find(link => link.label === '{{open}}'))
    // }
        
    },
    setup() {
        const store = useStore()
        // store.dispatch('getLinksVer')
        const links_arr = computed(() => store.state.LinksOk)
        const linksE_arr = computed(() => store.state.numErrorLinks)

         setTimeout(function(){ 

             store.state.cargando2 =false
            
         }, 6500);

        // let links = store.state.links
        // let images = store.state.images

        
         return {links_arr, linksE_arr}
    }
}
</script>