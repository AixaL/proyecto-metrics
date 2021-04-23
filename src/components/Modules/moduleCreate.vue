<template>
    <div class="fixed z-50 w-screen h-screen bg-opacity-70 bg-gray-400 flex justify-center items-center">
        <div class="w-80 h-60 bg-white flex justify-center shadow-md rounded-md p-2">
            <div class="grid grid-col-6">
                <div>
                    <p class="text-xs text-left">{{$store.state.agenciaActual}}</p>
                </div>
                <div>
                    <h3 class="relative text-md  text-center">Se ha creado la campaña <br> <span class="font-bold text-lg">"{{$store.state.tituloCamp}}"</span></h3>
                    <p>Con el Id: <span class="font-semibold">{{idCampana}}</span></p>
                </div>
                <div class="grid grid-col-2 grid-flow-col gap-2 w-full">
                    <div>
                        <button class="buttonCreate bg-blue-600 hover:bg-blue-600 p-2" v-on:click="$store.state.previewLinks=false; this.$store.state.moduleC=false">Crear nueva campaña</button>
                    </div>
                    <div>
                       <a class="buttonCreate cursor-pointer p-2" v-on:click="$store.state.previewLinks=false; this.$store.state.moduleC=false" :href="$store.state.linkCampana" target="_blank" >Ver esta campaña</a>
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
            idCampana:'22'
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
    mounted() {             
         console.log()  
         let id= this.$store.state.linkCampana.split('&')[1]     
         let newId= id.split('=')[1]

         this.idCampana=newId
    },

}
</script>