<template>
    <div class="fixed z-50 w-screen h-screen bg-opacity-70 bg-gray-400 flex justify-center items-center">
        <div class="w-72 h-60 bg-white flex justify-center shadow-md rounded-md p-2">
            <div class="grid grid-col-6">
                <div>
                    <p class="text-xs text-left">{{$store.state.agenciaActual}}</p>
                </div>
                <div>
                    <h3 class="relative text-lg font-bold text-left">Se ha creado la campaña <br> "{{$store.state.tituloCamp}}"</h3>
                </div>
                <div class="grid grid-col-2 grid-flow-col gap-2">
                    <div>
                        <button class="buttonCreate bg-blue-600 hover:bg-blue-600" v-on:click="$store.state.previewLinks=false; this.$store.state.moduleC=false"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>Nueva Campaña</button>
                    </div>
                    <div>
                         <button class="buttonCreate" ><a :src="$store.state.linkCampana"></a>Ver la campaña</button>
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