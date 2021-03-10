<template>
    <div class="">
        <div class="relative inline-block text-left">
            <div class="h-15 self-center ">
                <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none " id="options-menu" aria-expanded="true" aria-haspopup="true">
                <div class="w-9 mr-3 ">
                      <img src="@/assets/images/volvo.png" alt="">
                </div>
                <div class="flex flex-wrap content-center self-center ">
                    <p>Volvo</p>
                </div>
                <svg class="mr-1 ml-2 h-5 w-5 self-center " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </button>
            </div>

            <div class=" origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div v-for="agencia in projects" :key="agencia.id" class="py-1 flex flex-row p-2 pt-2 pb-2 hover:bg-gray-100" role="none">
                    <div v-on:click="clickProyecto(agencia.key)" class="w-9 ml-2 flex flex-start ">
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
  export default {
        name: 'Home',
        components:[],
        data() {
            return{
                projects:{
                    Volvo:{
                        id:1,
                        name:'Volvo',
                        key:'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjU1ZjMxNDhhLTEzZTgtNDk2ZS05NWZhLTA0ZWQ0ZTE2Mjc3Y1wiLFwicHJvamVjdElkXCI6Mzk2MDk2fSJ9.GbkOOVTm0ck0YY3U2eda4vva7CLYC5tyxW1UAfmWTM0',
                        image:'http://localhost:8080/img/volvo.23aa86f4.png'
                    },
                    Mazda:{
                        id:2,
                        name:'Mazda',
                        key:'',
                        image:'http://localhost:8080/img/Mazda.7911e213.png'
                    },
                    BMW:{
                        id:3,
                        name:'BMW',
                        key:'',
                        image:'http://localhost:8080/img/BMW.ac9cc614.png'
                    },
                    Toyota:{
                        id:4,
                        name:'Toyota',
                        key:'',
                        image:'http://localhost:8080/img/toyota.bf19eb8a.png'
                    },
                }
            }
           
            // key: 'eyJhbGciOiJIUzI1NiJ9.eyJzZWN1cml0eUNvbnRleHQiOiJ7XCJhcGlLZXlcIjpcIjU1ZjMxNDhhLTEzZTgtNDk2ZS05NWZhLTA0ZWQ0ZTE2Mjc3Y1wiLFwicHJvamVjdElkXCI6Mzk2MDk2fSJ9.GbkOOVTm0ck0YY3U2eda4vva7CLYC5tyxW1UAfmWTM0'
        },
        methods: {
             clickProyecto(key){
                 
                 console.log(key)
            }
        },
      
  }

</script>
