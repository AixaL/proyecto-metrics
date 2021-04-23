<template>
    <div class="fixed z-50 w-screen h-screen bg-opacity-70 bg-gray-400 flex justify-center items-center">
        <div class="w-80 h-80 bg-white flex justify-center shadow-md rounded-md p-5">
            <div class="grid grid-col-4">
                <div class="col-span-4 mt-6 h-4">
                    <h3 class="relative text-md font-semibold">Por favor selecciona un proyecto</h3> 
                </div>
                <div class="col-span-4 -mt-12">
                     <div class="grid grid-cols-2 gap-4">
                          <div v-on:click="clickProyecto(agencia)" v-for="agencia in projects" :key="agencia.id"  class="py-1 flex flex-row p-2 pt-2 pb-2 hover:bg-gray-100 shadow-md rounded-md border-2 border-gray-100" role="none">
                            <div class="w-9 ml-2 flex flex-start ">
                                <img :src=" agencia.image" alt="">
                            </div>
                            <div class="flex">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{{agencia.name}}</a>
                            </div>
                        </div>
                     </div>
                       
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
// import SelectAgen from '@/components/Nav/SelectAgen.vue'
// import SelectAgen from '../Nav/SelectAgen.vue'
  export default {
    name: 'Nav',
    components: {
        // SelectAgen
    },
    data: ()=>({
        search:'',
        projects:{
                    Volvo:{
                        id:1,
                        name:'Volvo',
                        key:'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjVkMzJmYWU5LTcyOGUtNGFmNy05MGU2LTM4MWI5OWI1MWE3YVwiLFwicHJvamVjdElkXCI6Mjc4NTcwfSJ9.ICQ9jJGnLRLI85QWCsMC-CzSt7XpN1grWcmaq_Zo6d0',
                        image:'https://pbs.twimg.com/profile_images/1353905413557776384/1xd7nron_400x400.jpg'
                    },
                    Mazda:{
                        id:2,
                        name:'Mazda',
                        key:'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjljOTU2ODE4LTY2NTktNGQ0OC05NWUwLTYyYjZjMWQ4MWE3YVwiLFwicHJvamVjdElkXCI6MzkwMDY4fSJ9.ggN0hbcPhOFNK1TTByqTUweXXelwcDUSi-jWjBzUB28',
                        image:'https://www.focus2move.com/wp-content/uploads/2016/08/mazda-black-vector-logo-400x400-1.png'
                    },
                    BMW:{
                        id:3,
                        name:'BMW',
                        key:'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjU4ZDFlYmQ0LTE0OWMtNDc0Yy05MmY0LWQzMmRjZmI5MWFiMVwiLFwicHJvamVjdElkXCI6NDA1MTY0fSJ9.rJOPEVI1aGCO8eH8oXCnf_Au9uqhVN437iLB8flcWyg',
                        image:'https://cdn.worldvectorlogo.com/logos/logo-bmw-2020.svg'
                    },
                    Audi:{
                        id:4,
                        name:'Audi',
                        key:'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjhlNGVhZmI5LTA3NGMtNGJiMy1hYWNkLWQ2NDI3Y2QwMWQ2OFwiLFwicHJvamVjdElkXCI6NDA2MDAxfSJ9.hoX6DBGq7DKL0UC5jlONUGH0o3QiO6gNz1QGWjzaIqU',
                        image:'https://i.pinimg.com/originals/6c/92/49/6c92492ade0a6883809b9ea3ad429770.png'
                        // image:'http://assets.stickpng.com/images/580b585b2edbce24c47b2c18.png'
                    },
                }
    }),
    methods: {
        clickProyecto(agen){
                
                this.agenciaa=agen
                // store.commit('setStripoKey', agen.key)
                this.nombreAgencia=agen.name
                this.imgAgencia=agen.image
                this.visible=false
                this.$store.commit('setStripoKey', agen.key)
                this.$store.commit('setAgenciaName', agen.name)
                this.$store.dispatch('getMailings')
                this.$store.dispatch('getAgen')
                this.$store.state.mail=''
                this.$store.state.linkPrev=''
                this.$store.state.moduleS=false
                this.$store.state.html=''

                sessionStorage.setItem('agenciaKey',agen.key );
                sessionStorage.setItem('agenciaName',agen.name);

                // console.log(agen.key)
                // ...Vuex.mapMutations([])
            },
    },
    setup() {
        
    }
  }
</script>