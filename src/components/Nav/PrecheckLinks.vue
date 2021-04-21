<template>
    <div v-if="$store.state.previewLinks" class="w-full bg-white h-20 mt-14 relative float-left p-4">
        <div class="grid grid-cols-5 gap-4 p-2">
        <div class="col-span-2 text-left ">
            <p class="text-sm">Titulo de la campaña</p>
            <p class="text-md font-semibold">{{$store.state.tituloCamp}}</p>
        </div>
        <div></div>
        <div class="flex justify-end">
            <button v-on:click="regresar" class="buttonCreate bg-blue-700 w-40 hover:bg-blue-500"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Regresar</button>
            </div>
        <div class="flex">
            <button v-if="$store.state.numError == 0" class="buttonCreate" v-on:click="CrearCampana">Crear Campaña</button>
            <button v-else class="buttonCreate bg-gray-300 hover:bg-gray-500" >Crear Campaña</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        regresar(){
            this.$store.state.previewLinks=false
        },
        CrearCampana(){
            this.$store.dispatch('CreateSave')
            this.$store.state.moduleC=true
        }
    },
}
</script>