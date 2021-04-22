<template>
   <div class="col-span-4 w-full  bg-white p-4">
                <div  class="grid grid-cols-4 gap-1">
                    <div class="col-span-4 text-left">
                        <p class="text-md font-semibold">Etiquetas especiales</p>
                    </div>
                    <div v-for="linkI of links_arr" :key="linkI.id">
                        <div v-if="linkI.label.includes('{')" class="w-40 mr-12">
                            <div v-if="linkI.status==200" class="w-full mt-2 border-b-2 border-green-700   h-10">
                                <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></p>
                                <p class=" p-2 text-sm font-semibold text-left w-9/12 float-left ">{{linkI.label}}</p>
                                
                            </div>
                            <div v-else class="mt-2 border-b-2 border-red-700  h-10">
                                <p class=" p-2 text-sm font-semibold text-left w-9/12 float-left ">{{linkI.label}}</p>
                                <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></p>
                            </div>
                        </div>
                        
                    </div>
                    
                    <!-- <div></div> -->
                    </div>
                    <div class="col-span-4 w-full ">
                    <div class="grid grid-cols-4 gap-2">
                        <div class="text-left col-span-4">
                            <p class="font-semibold">Verificación de links</p>
                        </div>
                        <div class="col-span-4  pb-2">
                            <div v-if="$store.state.cargando2==true" class="flex justify-center align-middle">
                                <img   class="w-80 h-80 flex self-center items-center"  src="https://cdn.dribbble.com/users/108183/screenshots/4543219/loader_backinout.gif" alt="">
                            </div>
                            <div v-if="$store.state.cargando2==false" class="w-full">
                               <table class="table-auto w-full text-left border-separate divide-y-4" cellspacing="10">
                                   <thead>
                                       <tr class="text-left text-sm">
                                           <th>x / s</th>
                                           <th>Nombre</th>
                                           <th>Url</th>
                                       </tr>
                                   </thead>
                                   <tbody class="divide-y">
                                       <tr v-for="linkI of links_arr" :key="linkI.id" class="pb-4 pt-4 ">
                                           <td class="w-1/12" v-if="!linkI.label.includes('{')"> 
                                               <svg v-if=" linkI.status!=0 && linkI.status<303" class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                               <svg v-else class="w-4 h-4 text-red-800 float-left " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> 
                                            </td>
                                    
                                           <td class="w-2/6"  v-if="!linkI.label.includes('{')">
                                                   <p class="text-xs w-28 break-all">{{linkI.label}}</p>
                                            </td>
                                           <td class="w-3/6"  v-if="!linkI.label.includes('{')">
                                               <div v-if=" linkI.status!=0 && linkI.status<303" class=" h-full w-46  rounded-md p-1 border-2 border-green-600"><p class="text-xs break-all">{{linkI.url}}</p>
                                               </div>
                                               <div v-else class="w-full h-full rounded-md p-1 border-2 border-red-600"><p class="text-xs break-all text-red-800">* Sin url</p>
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
            html:'{{html}}',
            open:'{{open}}',
            unsubscribe:'{{unsubscribe}}',
        }
    },
    setup() {
        const store = useStore()
        // store.dispatch('getLinksVer')
        const links_arr = computed(() => store.state.links)

         setTimeout(function(){ 

             store.state.cargando2 =false
            
         }, 6500);

        // let links = store.state.links
        // let images = store.state.images

        

        // const images_arr = computed(() => store.state.images)

        //  links.sort(function(a,b){
        //                 if(a.status < b.status)
        //                 return -1;
        //                 if(a.status > b.status)
        //                 return 1;
        //                 return 0;
        //             })
        // console.log(images_arr)
         return {links_arr}
    }
}
</script>