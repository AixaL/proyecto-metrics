<template>
    <div class="mailings-box">
        <div class="w-full text-gray-600 font-semibold text-md">
            <h4 v-on:click="verMail"  class="float-left">{{name}}</h4>
            <button class="btn-mailings"><svg class="w-4 h-4 self-center place-self-center justify-self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></button>
        </div>
        
        <div class="w-full mt-1 text-gray-500 text-sm">
            <p class="w-10/12 float-left">{{time.split("T",1).join('')}}</p>
            <p class="w-2/12 float-left text-xs text-gray-400 text-right">#{{id}}</p>
        </div>
        <div class="inset-x-0 top-0 relative mt-4 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div class="p-2 hover:bg-gray-200 hover:text-blue-700 text-sm">Editar en stripo</div>
            <div class="p-2 hover:bg-gray-200 hover:text-blue-700 text-sm">Archivar</div>
        </div>
    </div> 
</template>

<script>
export default {
    props:{
        time:{
            type: String,
        },
        name:{
            type: String,
        },
        id:{
            type: Number
        }
    },
    // } ['time','name'],
    computed:{
        
    },
    methods: {
       
    },
    // data: {
    
    // }
}
</script>