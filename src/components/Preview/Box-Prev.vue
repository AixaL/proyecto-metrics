<template>
    <div ref="previo" class="grid grid-cols-4  bg-white p-3 gap-3">
            <div class="col-span-2 ">
                <p class="text-left text-lg font-bold text-black">{{mail.name}}</p>
            </div>
             <div class="flex justify-center items-center">
               
            </div>
            <div class="flex justify-end items-center justify-items-end">
                <a :href="mail.editorUrl" target="_blank">
                <button class="btn-edit-arch">
                        <p class="float-left text-xs">Editar en Stripo</p>
                        <svg class="w-4 h-4 float-left ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                </button>
                </a>
            </div>
            <!-- <div class="flex justify-center items-center">
                <button class="btn-edit-arch"> <p class="float-left text-xs ">Archivar </p> <svg class="w-4 h-4 float-left ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg></button>
            </div> -->
            <div class="col-span-4 h-1 border-b-2 border-gray-100"></div>

            <div class="col-span-4">
                <p class="text-left text-xs mb-2">Titulo de la Campaña</p>
                <form class="relative ">
                <input v-model="$store.state.tituloCamp" class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-600 border border-gray-200 rounded-md py-2 pl-4 h-10" type="text" aria-label="Título" :placeholder="mail.name"  />
            </form>
            </div>
            <div class="col-span-2" >
                <p class="text-left text-xs mb-2">Agencia</p>
                <select @change="onChange(agenciaActual)" class="flex text-left cursor-pointer  w-full rounded-md border border-gray-200 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none " v-model="agenciaActual" name="Seleccionar agencia" placeholder="Seleccionar agencia" id="agencia" v-bind="$attrs">
                <option selected >Seleccionar agencia</option>
                <option class="p-2 cursor-pointer font-semibold h-40 hover:bg-gray-100 hover:text-blue-600 border-b-2 border-gray-100" v-for="agencia in agencias_Array" :value="agencia" :key="agencia.id">{{agencia.cliente}}</option>
                </select>
            </div>
            <!-- <div class="col-span-2" >
                 <v-select :options="agencias_Array" label="cliente">
                     <template v-slot:option="option" >
                        {{ option.cliente }}
                    </template>
                 </v-select>
            </div> -->
            <!-- <div class="col-span-2">
                <button v-on:click="getAgen()" type="button" class="flex text-left  w-full rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none " id="options-menu" aria-expanded="true" aria-haspopup="true">          
              <div class=" flex justify-start w-10/12 "><p class="justify-start text-gray-700">{{agenciaActual}}</p>
              </div>
              <div class=" flex justify-end w-2-12">
                  <svg class="mr-1 ml-8 h-5 w-5 flex justify-end justify-self-end place-content-end justify-items-end place-self-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
                </button>
            </div>
             -->
            <div v-if="disableCrear==false" class="col-span-2 flex h-10">
                <p class="text-left text-xs mb-2"></p>
                <button v-on:click="CreateCamp" class="buttonCreate mt-10">Crear Campaña</button>
            </div>
            <div v-if="disableCrear==true" class="col-span-2 flex h-10">
                
                <button  class="buttonCreate bg-gray-400 hover:bg-gray-400 mt-10">Crear Campaña</button>
            </div>
            <!-- <div v-if="visible" v-on:mouseleave="visible=false" class=" col-span-2 -mt-4 overflow-y-auto h-40">
                     <div class="bg-white z-10 w-full shadow-md text-left">
                        <ul v-for="agencia in agen" v-bind:key="agencia.id">
                            <li v-on:click="SelectAgenciaA(agencia)" class="p-2 cursor-pointer font-semibold hover:bg-gray-100 hover:text-blue-600 border-b-2 border-gray-100">{{agencia.cliente}}</li>
                        </ul>
                    </div>
            </div> -->
            <div class="hidden col-span-2"></div>
            <div class="col-span-4 border-gray-100 border-b-2"></div>
            <div class="col-span-4">
                <div class="grid grid-cols-4">
                    <div v-on:click="preview=true; links=false; images=false" class=" cursor-pointer text-center text-md flex items-center justify-start">
                            <p class="text-xs">Vista previa</p>
                    </div>
                    <!-- <div v-on:click="preview=false; links=true; images=false"  class="cursor-pointer text-center text-md flex items-center h-7 justify-center border-b-2 border-gray-100" :class="{tabSelected:links}">
                            <p class="">Verificación de Links</p>    
                    </div>
                    <div v-on:click="preview=false; links=false; images=true" class=" cursor-pointer  text-center text-md flex items-center h-7 justify-center w-60  border-b-2 border-gray-100" :class="{tabSelected:images}">
                            <p class="">Verificación de Imagenes</p>
                       
                    </div> -->
                    <!-- <div class="float-right border-b-2 border-gray-100 w-2"></div> -->
                </div>
               
            </div>

            <div class="col-span-4 w-full mt-2" v-if="preview">
                <div class="grid grid-cols-4 h-7  flex justify-center">
                    <div class=" flex justify-start">
                        <button  v-on:click="mobile=!mobile, desktop=!desktop" :class="{Selected:desktop}" class=" bg-gray-100 w-10 h-10 flex justify-center items-center rounded-sm  hover:text-white hover:bg-blue-600 focus:border-0  focus:border-transparent focus:outline-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></button>
                        <button v-on:click="mobile=!mobile, desktop=!desktop" :class="{Selected:mobile}" class="ml-2 text-gray-500 bg-gray-100 w-10 h-10 flex justify-center items-center rounded-sm hover:text-white hover:bg-blue-600 focus:border-0 focus:outline-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></button>
                    </div>
                    <div class="justify-self-start">
                         <button  v-on:click="newLink" class="btn-edit-arch h-full -ml-20">Actualizar 
                              <svg class="w-4 h-4 float-left ml-2 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                         </button>
                       
                    </div>
                     <div class="col-span-2 text-left text-md justify-self-end">
                        <button   v-on:click="print()" class="btn-edit-arch h-full">Captura <svg class="w-4 h-4 float-left ml-2 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></button>
                    </div>
                    <!-- <div class=" text-left text-md justify-self-end">
                        <button v-on:click="verMail" class="btn-edit-arch h-full">Ver mail <svg class="w-4 h-4 float-left ml-2 self-center"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></button>
                    </div> -->
                </div>
                <div class="col-span-4 mt-6">
                    <div class="grid grid-cols-4 flex justify-center ">
                         <div  class="col-span-4 border-2 border-gray-200 rounded-md w-full min-h-screen h-screen  flex justify-self-center" style="height: 800px" :class="{PrevMobile:mobile}" >
                
                        <!-- <img class="w-80 h-80 flex self-center items-center" :class="{loading:cargando}" src="https://cdn.dribbble.com/users/108183/screenshots/4543219/loader_backinout.gif" alt=""> -->
                            <iframe id="frame" frameborder="0" width="100%" height="100%" class="" :srcdoc="$store.state.html"  v-on:loaded="cargando=true" crossorigin="anonymous" ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <ImagesVer v-if="images"/> -->
            <!-- <LinksVer v-if="links"/> -->
    </div>
   
</template>

<script>
import {mapState,useStore} from 'vuex'
import {computed} from 'vue'
// import imageDataURI from 'image-data-uri'
// import LinksVer from '@/components/Preview/LinksVer.vue'
// import ImagesVer from '@/components/Preview/ImagesVer.vue'
// import webshot from 'webshot'
// Object.defineProperty(prototype, '$webshot', { value: webshot });
// import html2canvas from 'html2canvas'
// import VueHtml2Canvas from 'vue-html2canvas'
// import vSelect from 'vue-select'
// import { useStore} from 'vuex'
// import axios from 'axios'
export default {
    data() {
        return {
            visible: false,
            mobile: false,
            desktop: true,
            disable: true,
            refresh: false,
            disableCrear: true,
            links:false,
            images: false,
            preview: true,
            tituloCamp:'',
            LinkPreview:'',
            info:'',
            cargando:false,
            agenciaActual:'Seleccionar agencia',
            agen:'',
        }
    },
    components: {
        // ref,
        //  vSelect,
        // LinksVer,
        // ImagesVer

     },
    methods: {
        CreateCamp(){
            console.log(this.agenciaActual, this.tituloCamp)
            if(this.$store.state.tituloCamp==''){
                this.$store.state.tituloCamp= this.mail.name
            }
            if(this.agenciaActual=='' || this.agenciaActual=='Seleccionar agencia' ){
                alert("Completa los campos para crear la campaña")
            }else{
            this.$store.state.moduleC=true
            this.$store.commit('setCreateCamp', { agencia :this.agenciaActual.cliente, titulo: this.tituloCamp } )
            }
            
        },
        newLink(){
           
            if(this.$store.state.mail==''){
                alert('Selecciona un mail')
            }else{
                var idCliente =''
                if(this.tituloCamp==''){
                    this.tituloCamp= this.mail.name
                }
                console.log(this.agenciaActual.id)
                if(this.agenciaActual == 'Seleccionar agencia' || this.agenciaActual.id=='undefined'){
                    idCliente=85
                }else{
                    idCliente=this.agenciaActual.id
                }

                    let datos={
                        idCliente:idCliente,
                    }  

                 this.$store.dispatch('getHtml', datos)
                    

                // let number =Math.floor(Math.random() * 101) + 1;
                // var link = 'https://www.adpdev.com/adp/metrics/includes/PreviewMailStripo.php?IdCliente='+idCliente+'&NombreCampana='+ this.tituloCamp + '&emailid='+ this.$store.state.mail.emailId+ '&stripojwt='+this.$store.state.StripoKey+'&random='+number
                // console.log(link)
                // this.LinkPreview= link
                this.cargando=false
                this.disable=false
                this.refresh=true
                // this.$store.state.linkPrev=link
            }
           
            // return link
    
        },
        onChange(agen){
            if(agen!='Seleccionar agencia' && this.$store.state.tituloCamp!='' && agen!="" && this.mail!=""){
                this.disableCrear=false
                this.newLink()
            }else{
                this.disableCrear=true
                 alert("Por favor Selecciona un mail")
               
            }
            
        },
        verMail(){
            var myWindow = window.open("", "_blank");
            myWindow.document.write(this.$store.state.html);
        },
         async print() {

             document.getElementById("frame").contentWindow.print()

        const el = document.getElementsByTagName('iframe')[0].contentDocument.body;
        let images = el.getElementsByTagName('img')
        console.log(images)

            // imageDataURI.encodeFromURL('https://adpuntomailing.s3-us-west-1.amazonaws.com/guids/CABINET_21cd3648697a06fd5f98e576216a4d83/images/12271617980819492.jpg')
            // // RETURNS image data URI :: 'data:image/png;base64,PNGDATAURI/'
            // .then(res => console.log(res))

    //     for(let x=0;x<images.length -1; x++){
    //         console.log(images[x])
    //         var canvas = document.createElement('CANVAS');
    //         images[x].parentNode.insertBefore(canvas,images[x])
    //         var ctx = canvas.getContext('2d');
    //         var img = document.createElement('img');
    //         console.log(canvas)

    //         img.src= images[x].src
    //         img.onload = function () {
    //         // console.log(img.height, canvas.height)
    //         // canvas.height = images[x].height;
    //         // canvas.width = images[x].width;
    //         ctx.drawImage(images[x],0,0);
    //          let base64 = ctx.toDataURL('image/png');
    //          console.log(base64)
    //         // canvas = null;
            
    //   };
    //     }

        const ell = document.getElementsByTagName('iframe')[0].contentDocument.body;

        const options = {
            type: 'dataURL',
            // allowTaint: true,
            useCORS: false, 
            logging: true,
            imageTimeout: 5000,
            // proxy: 'https://www.adpdev.com/'
            // foreignObjectRendering: true
        }
        let output = await this.$html2canvas(ell, options);
        console.log(output)
          var a = document.createElement("a"); //Create <a>
            a.href = output //Image Base64 Goes here
            a.download = "Image.png"; //File name Here
            a.click();
        
        },
        loadIframe(e){
            console.log(e)
            e.path[0].previousElementSibling.classList.add("loading")
            console.log(e.path[0].previousElementSibling)
            this.state.cargando=true
        }
    },
    computed: {
        ...mapState({
            mail: 'mail'
        }),        

    },
    setup() {
        
        const store = useStore()
        store.dispatch('getAgen')
        const agencias_Array = computed(() => store.state.agenciasMarca)

         return {agencias_Array}

    }
   

}
</script>
<style>
    .PrevMobile{
        width: 58.333333%;
       
    }
    .Selected{
        --tw-bg-opacity: 1;
        background-color: rgba(37, 99, 235, var(--tw-bg-opacity)); 
        --tw-text-opacity: 1;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }
    .tabSelected{
        --tw-border-opacity: 1;
    border-color: rgba(29, 78, 216, var(--tw-border-opacity));
        border-bottom-width: 2px;
        font-weight: 600;
          --tw-text-opacity: 1;
    color: rgba(37, 99, 235, var(--tw-text-opacity));
    }
    .loading{
        display: none;
    }
    /* .tabSelected>p{
         font-weight: 600;
    } */

</style>