<template>
   <div class="col-span-4 w-full mt-4">
                <div class="grid grid-cols-4 gap-2">
                    <div class="col-span-4 text-left">
                        <p class="text-md font-semibold">Etiquetas especiales</p>
                    </div>
                    <div class="mt-2 border-2 border-green-700 rounded-sm">
                        <p class="bg-gray-100 p-2 font-semibold text-left w-9/12 float-left">{{html}}</p>
                        <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></p>
                    </div>
                    <div class="mt-2 border-2 border-green-700 rounded-sm">
                        <p class="bg-gray-100 p-2 font-semibold text-left w-9/12 float-left">{{open}}</p>
                        <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></p>
                    </div>
                    <div v-if="false" class="w-48 mt-2 border-2 border-green-700 rounded-sm">
                        <p class="bg-gray-100 text-sm p-2 font-semibold text-left w-9/12 float-left">{{unsubscribe}}</p>
                        <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></p>
                    </div>
                    <div class="w-48 mt-2 border-2 border-red-700 rounded-sm">
                        <p class="bg-gray-100 p-2 font-semibold text-left w-9/12 float-left">{{unsubscribe}}</p>
                        <p class="w-3/12 float-left flex align-middle h-full justify-center items-center"><svg class="w-4 h-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></p>
                    </div>
                    <div></div>
                    </div>
                    <div class="col-span-4 w-full mt-4">
                    <div class="grid grid-cols-4 gap-2">
                        <div class="text-left col-span-4">
                            <p class="font-semibold">Verificación de links</p>
                        </div>
                        <div class="col-span-4 border-b-2 border-gray-200 pb-2">
                            <div class="text-left ">
                                <p class="w-full float-left p-2 text-left flex align-middle h-full items-center">Nombre:</p>
                                <div class="bg-gray-100 p-2  w-full float-left flex items-center border-b-2 border-red-600">
                                    <svg class="w-4 h-4 text-red-800 float-left " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> 
                                    <p class="float-left ml-1 font-semibold">URL: </p>
                                    <p class="  text-left w-8/12"> https://sueciacarminerva.com/conoce-S60 </p>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-span-4 border-b-2 border-gray-200 pb-2">
                            <div class="text-left ">
                                <p class="w-full float-left p-2 text-left flex align-middle h-full items-center">Nombre:</p>
                                <div class="bg-gray-100 p-2  w-full float-left flex items-center border-b-2 border-green-600">
                                    <svg class="w-4 h-4 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    <p class="float-left ml-1 font-semibold">URL: </p>
                                    <p class="  text-left w-8/12"> https://sueciacarminerva.com/conoce-S60 </p>
                                </div>
                                
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
            html:'{{html}}',
            open:'{{open}}',
            unsubscribe:'{{unsubscribe}}',
        }
    },
}
</script>