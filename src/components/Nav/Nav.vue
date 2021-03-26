<template>
  <div class="w-full bg-white fixed shadow-sm z-40">
  <div class="max-w-12xl mx-auto ">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10 ">
      <div class="flex justify-start lg:flex-none ">
        <a href="#">
          <img class="h-8 w-auto sm:h-10" src="https://www.adpdev.com/adp/tareas/logos/adp.jpg?v=0.1" alt="">
        </a>
      </div>
      <div class="flex justify-start ">
      <nav class="grid grid-cols-3 gap-4">
        <selectAgen/>
        <div class="col-span-2 self-center h-15">
             <form class="relative ">
                <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input v-model="search" @keyup="searchBar" class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 h-14" type="text" aria-label="Buscar por Campaña, titulo o plantilla" placeholder="Buscar por campaña, titulo o plantilla" />
            </form>
        </div>
      </nav>
      </div>
    </div>
  </div>
</div>
</template>

<script>
 import SelectAgen from '@/components/Nav/SelectAgen.vue'
  export default {
    name: 'Nav',
    components: {
    SelectAgen
    },
    data: ()=>({
        search:'',
    }),
    methods: {
      searchBar(){
       console.log(this.search)
      }
    },
  }
</script>