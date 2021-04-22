<template>
    <div class="fixed z-50 w-screen h-screen bg-opacity-70 bg-gray-400 flex justify-center items-center">
        <div class="w-80 h-80 bg-white flex justify-center shadow-md rounded-md p-5">
            <div class="grid grid-col-3">
                
                <div>
                    <h3 class="relative text-md">Por favor selecciona un proyecto</h3>
                    <div class="mt-4">
                        <SelectAgen/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import SelectAgen from '@/components/Nav/SelectAgen.vue'
// import SelectAgen from '../Nav/SelectAgen.vue'
  export default {
    name: 'Nav',
    components: {
        SelectAgen
    },
    data: ()=>({
        search:'',
    }),
    methods: {
      
    },
  }
</script>