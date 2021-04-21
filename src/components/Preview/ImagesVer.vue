<template>
            <div class="col-span-4 w-full bg-white p-4">
                <div class="grid grid-cols-4 gap-2">
                    <div class="text-left col-span-4">
                         <p class="font-semibold">Verificación de imagenes</p>
                    </div>

                    <div class="col-span-4 pb-2">
                          <div class="w-full">
                               <table class="table-auto w-full text-left border-separate divide-y-4" cellspacing="10">
                                   <thead>
                                       <tr class="text-left text-sm">
                                           <th>x / s</th>
                                           <th>Imagen</th>
                                           <th>Alt</th>
                                           <th>Url</th>
                                       </tr>
                                   </thead>
                                   <tbody class="divide-y">
                                       <tr v-for="image of images_arr" :key="image.id" class="pb-4 pt-4">
                                           <td class="w-1/12"> 
                                               
                                                <svg v-if="image.status==200 " class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                                <svg v-else class="w-4 h-4 text-red-800 float-left " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> 
                                           </td>
                                           <td class="w-1/6">
                                               <img class="w-18 h-10" :src="image.src">
                                           </td>
                                           <td class="w-1/6" >
                                                <div v-if="image.alt!=''" class="w-full h-full rounded-md p-1 border-2 border-green-700">
                                                        <p class="text-xs break-all">{{image.alt}}</p>
                                                </div>
                                                <div v-else class="w-full h-full rounded-md p-1 border-2 border-red-700">
                                                        <p class="text-xs break-all text-red-800">* Sin Alt</p>
                                                </div>
                                            </td>
                                           <td class="w-2/6">
                                               <div v-if="image.status==200" class="w-full h-full rounded-md p-1 border-2 border-green-700"><p class="text-xs break-all">{{image.src}}</p>
                                               </div>
                                               <div v-else class="w-full h-full rounded-md p-1 border-2 border-red-700"><p class="text-xs break-all">{{image.src}}</p>
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
        const images_arr = computed(() => store.state.images)
        // console.log(links_arr)
        console.log(images_arr)
         return { images_arr}
    }
}
</script>