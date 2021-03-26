<template>
    <div class="fixed z-50 w-screen h-screen bg-opacity-70 bg-gray-400 flex justify-center items-center">
        <div class="w-80 h-80 bg-white flex justify-center shadow-md rounded-md p-5">
            <div class="grid grid-col-6">
                <div>
                    <p class="text-xs text-left">{{$store.state.agenciaActual}}</p>
                </div>
                <div>
                    <h3 class="relative text-lg font-bold text-left">Se creará la campaña "{{$store.state.nameMail}}"</h3>
                </div>
                    
                <div>
                    <p class="text-sm text-left">Por favor escribe el titulo de la campaña para confirmar.</p>
                </div>
                <div >
                    <input class="text-sm text-left w-full text-black bg-gray-200 h-9 p-2 focus:outline-none" type="text" placeholder="Título de la campaña">
                </div>
                <div class="grid grid-col-2 grid-flow-col gap-4">
                    <div>
                         <button class="buttonCreate buttonGoStripo" ><a :href="$store.state.mail.editorUrl" target="_blank">Confirmar </a></button>
                    </div>
                    <div>
                        <button class="buttonCancel" v-on:click="$store.state.moduleC=false">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>