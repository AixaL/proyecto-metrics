<template>
    <div class="fixed z-50 w-screen h-screen bg-opacity-70 bg-gray-400 flex justify-center items-center">
        <div class="w-80 h-60 bg-white flex justify-center shadow-md rounded-md p-2">
            <div class="grid grid-col-6">
                <div>
                    <p class="text-xs text-left">{{$store.state.agenciaActual}}</p>
                </div>
                <div>
                    <h3 class="relative text-md  text-center">Se ha creado la campaña <br> <span class="font-bold text-lg">"{{$store.state.tituloCamp}}"</span></h3>
                </div>
                <div class="grid grid-col-2 grid-flow-col gap-2 w-full">
                    <div>
                        <button class="buttonCreate bg-blue-600 hover:bg-blue-600 p-2" v-on:click="$store.state.previewLinks=false; this.$store.state.moduleC=false">Nueva Campaña</button>
                    </div>
                    <div>
                       <a class="buttonCreate cursor-pointer p-2" :href="$store.state.linkCampana" target="_blank" >Ver la campaña</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            campoTitulo:'',
            error: false,
        }
    },
    methods: {
        CrearCamp(){
            if(this.campoTitulo===''|| this.campoTitulo!==this.$store.state.nameCamp){
                this.error=true
            }else{
                this.error=false
            }
        }
    },
}
</script>