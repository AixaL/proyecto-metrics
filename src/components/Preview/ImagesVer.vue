<template>
            <div class="col-span-4 w-full bg-white p-4 overflow-y-scroll" style="height: 75vh;">
                <div class="grid grid-cols-4 gap-2">
                    <div class="text-left col-span-4">
                         <p class="font-semibold">Verificación de imagenes</p>
                         <p v-if="$store.state.numErrorUrlmg.length>0" class="float-left text-sm text-red-600 font-semibold w-42 mr-8">*Hubo error con {{$store.state.numErrorUrlmg.length}} urls</p>
                         <p v-if="$store.state.numErrorAlt.length>0" class="float-left text-sm text-red-600 font-semibold w-42">*{{$store.state.numErrorAlt.length}} imágenes no tienen Alt </p>
                    </div>

                    <div class="col-span-4 pb-2">
                        <div v-if="$store.state.cargando2==true" class="flex justify-center align-middle">
                            <img   class="w-80 h-80 flex self-center items-center"  src="https://cdn.dribbble.com/users/108183/screenshots/4543219/loader_backinout.gif" alt="">
                        </div>
                          <div v-if="$store.state.cargando2==false" class="w-full">
                               <table class="table-auto w-full text-left border-separate divide-y-4" cellspacing="10">
                                   <thead>
                                       <tr class="text-left text-sm">
                                           <th>Status</th>
                                           <!-- <th>Imagen</th> -->
                                           <th>Alt</th>
                                           <th>Url</th>
                                       </tr>
                                   </thead>
                                   <tbody class="divide-y">
                                       <tr v-for="image of imagesError_arr" :key="image.id" class="pb-4 pt-4">
                                           <td class="w-1/12"> 
                                               
                                                <svg v-if="image.status==200 && image.alt!='' " class="w-5 h-5 text-green-800 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                                <svg v-else class="w-5 h-5 text-red-800 float-left " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> 
                                                <p class="text-xs float-left ml-2">({{image.status}})</p>
                                           </td>
                                           <!-- <td class="w-1/6">
                                               <img class="w-18 h-10" :src="image.src">
                                           </td> -->
                                           <td class="w-1/6" >
                                                <div v-if="image.alt!=''" class="w-full h-full rounded-md p-1 border-2 border-green-700">
                                                        <p class="text-xs break-all">{{image.alt}}</p>
                                                </div>
                                                <div v-else class="w-full h-full rounded-md p-1 border-2 border-red-700">
                                                        <p class="text-xs break-all text-red-800">* Sin Alt</p>
                                                </div>
                                            </td>
                                           <td class="w-2/6">
                                               <div v-if="image.status==200" class="w-full h-10 rounded-md p-1 border-2 border-green-600 overflow-hidden">
                                                   <div class="float-left w-5/6">
                                                        <p class="text-xs break-all float-left">{{image.src}} </p>
                                                   </div>
                                                   <div class="float-left w-1/6 flex justify-end align-middle h-full items-center">
                                                   <a :href="image.src" target="_blank" class="cursor-pointer hover:text-blue-600">
                                                         <svg class="w-4 h-4 cursor-pointer hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                                   </a>
                                                      
                                                   </div>

                                               </div>
                                               <div v-else class="w-full h-full rounded-md p-1 border-2 border-red-700"><p class="text-xs break-all">{{image.src}}</p>
                                               </div>
                                            </td>
                                       </tr>
                                       <tr v-for="image of imagesOk_arr" :key="image.id" class="pb-4 pt-4">
                                           <td class="w-1/12"> 
                                               
                                                <svg class="w-5 h-5 text-green-800 float-left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                                <p class="text-xs float-left ml-2">({{image.status}})</p>
                                           </td>
                                           <!-- <td class="w-1/6">
                                               <img class="w-18 h-10" :src="image.src">
                                           </td> -->
                                           <td class="w-1/6" >
                                                <div class="w-full h-full rounded-md p-1 border-2 border-green-700">
                                                        <p class="text-xs break-all">{{image.alt}}</p>
                                                </div>
                                            </td>
                                           <td class="w-2/6">
                                               <div class="w-full h-10 rounded-md p-1 border-2 border-green-600 overflow-hidden">
                                                   <div class="float-left w-5/6">
                                                        <p class="text-xs break-all float-left">{{image.src}} </p>
                                                   </div>
                                                   <div class="float-left w-1/6 flex justify-end align-middle h-full items-center">
                                                   <a :href="image.src" target="_blank" class="cursor-pointer hover:text-blue-600">
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
</template>

<script>
import { useStore} from 'vuex'
import {computed} from 'vue'
export default {
    data() {
        return {
            
        }
    },
    setup() {
        const store = useStore()
        // store.dispatch('getLinksVer')
        // const links_arr = computed(() => store.state.links)
        const imagesError_arr = computed(() => store.state.images)
        const imagesOk_arr = computed(() => store.state.imagesOk)

        

        setTimeout(function(){ 
            console.log(store.state.images)
            console.log(store.state.imagesOk)
             store.state.cargando2 =false
            
         }, 6500);
        // console.log(links_arr)
        // console.log(images_arr)
         return { imagesOk_arr, imagesError_arr}
    }
}
</script>