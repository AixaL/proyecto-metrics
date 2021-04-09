<template>
    <div class="fixed z-50 w-screen h-screen bg-opacity-70 bg-gray-400 flex justify-center items-center">
        <div class="w-80 h-80 bg-white flex justify-center shadow-md rounded-md p-5">
            <div class="grid grid-col-3">
                <div class="flex justify-center align-middle">
                     <h1 class="mt-8 relative text-center"><svg class="w-20 h-20 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></h1>
                </div>
                <div>
                    <h3 class="relative text-md">Este link te llevara a la pagina de Stripo</h3>
                </div>
                <div class="grid grid-col-2 grid-flow-col gap-4">
                    <div>
                         <button class="buttonCreate buttonGoStripo" ><a :href="$store.state.linkPrev" target="_blank">ir a Stripo </a></button>
                    </div>
                    <div>
                        <button class="buttonCancel" v-on:click="$store.state.moduleS=false">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>