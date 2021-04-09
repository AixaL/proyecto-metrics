<template>
    <div class="">
        <div class="relative inline-block text-left">
            <div class="h-15 self-center ">
                <button v-on:click="visible=true"  type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none " id="options-menu" aria-expanded="true" aria-haspopup="true">
                <div class="w-9 mr-3 ">
                      <img :src="imgAgencia" alt="">
                </div>
                <div class="flex flex-wrap content-center self-center ">
                    <p>{{nombreAgencia}}</p>
                </div>
                <svg class="mr-1 ml-2 h-5 w-5 self-center " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </button>
            </div>

            <div v-if="visible" v-on:mouseleave="visible=false" class=" origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div v-on:click="clickProyecto(agencia)" v-for="agencia in projects" :key="agencia.id"  class="py-1 flex flex-row p-2 pt-2 pb-2 hover:bg-gray-100" role="none">
                    <div class="w-9 ml-2 flex flex-start ">
                        <img :src=" agencia.image" alt="">
                    </div>
                    <div class="flex">
                         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{{agencia.name}}</a>
                    </div>
                </div>
                <!-- <div class="py-1 flex flex-row p-2 pt-2 pb-2 hover:bg-gray-100" role="none">
                    <div class="w-9 ml-2 flex flex-start ">
                        <img src="@/assets/images/BMW.png" alt="">
                    </div>
                    <div class="flex">
                         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Toyota</a>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
// import { useStore} from 'vuex'
// import {onMounted} from 'vue'
  export default {
        name: 'Home',
        components:[],
        data: ()=> ({
                visible: false,
                nombreAgencia:'Volvo',
                imgAgencia:'https://pbs.twimg.com/profile_images/1353905413557776384/1xd7nron_400x400.jpg',
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
                        image:'https://i.pinimg.com/originals/13/ab/5f/13ab5fe6c536ff7125432ece35b8b217.png'
                    },
                }
            }),
        methods: {

             clickProyecto(agen){
                
                // store.commit('setStripoKey', agen.key)
                this.nombreAgencia=agen.name
                this.imgAgencia=agen.image
                this.visible=false
                this.$store.commit('setStripoKey', agen.key)
                this.$store.commit('setAgenciaName', agen.name)
                this.$store.dispatch('getMailings')
                this.$store.dispatch('getAgen')
                // console.log(agen.key)
                // ...Vuex.mapMutations([])
            },
            
        },
        computed:{
            
        }
        // setup() {
        //     const store = useStore()
        // }
      
  }

</script>
