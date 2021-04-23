<template>
    <div v-if="$store.state.previewLinks" class="w-full bg-white h-20 mt-14 relative float-left p-4">
        <div class="grid grid-cols-7 gap-4 p-2">
        <div class="col-span-2 text-left ">
            <p class="text-sm">Titulo de la campaña</p>
            <p class="text-md font-semibold">{{$store.state.tituloCamp}}</p>
        </div>
        <div class="col-span-3 flex items-center justify-center">
            <p class="text-md font-semibold text-green-500" v-if="$store.state.numError==0">Ha pasado la prueba de Verificación de links</p>
            <p class="text-md font-semibold text-red-500" v-else>* No ha pasado la prueba de Verificación de links</p>
        </div>
        <div v-if="$store.state.moduleC==false && cargando==true " class="col-span-2 flex items-center border-gray-100 border-2 overflow-hidden -mt-4 rounded-md">
            <!-- <img class="w-18 h-16 flex self-center items-center float-left -mt-2"  src="https://cdn.dribbble.com/users/71309/screenshots/2499001/indeterminate_loader_blur2.gif" alt=""> -->
            <img class="w-24 h-16 flex self-center items-center float-left "  src="https://cdn.dribbble.com/users/108183/screenshots/4543219/loader_backinout.gif" alt="">
            <p class="text-md font-semibold text-blue-600 float-left"> * Creando la campaña</p>
            
        </div>
        <div v-if="cargando==false" class="flex justify-end">
            <button v-on:click="regresar" class="buttonCreate bg-blue-700 w-40 hover:bg-blue-500"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Regresar</button>
            </div>
        <div v-if="cargando==false" class="flex">
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
            cargando:false,
            
        }
    },
    methods: {
        regresar(){
            this.$store.state.previewLinks=false
            this.$store.state.cargando2=true
        },
        CrearCampana(){
            this.$store.dispatch('CreateSave')
            this.cargando=true
            
        }
    },
}
</script>