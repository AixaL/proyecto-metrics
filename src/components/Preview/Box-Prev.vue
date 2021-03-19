<template>
    <div class="grid grid-cols-4  bg-white p-3 gap-3">
            <div class="col-span-2 ">
                <p class="text-left text-sm">Plantilla General V.0.1</p>
            </div>
            <div class="flex justify-center items-center">
                <button class="btn-edit-arch"><p class="float-left text-xs">Editar en Stripo</p><svg class="w-4 h-4 float-left ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>
            </div>
            <div class="flex justify-center items-center">
                <button class="btn-edit-arch"> <p class="float-left text-xs ">Archivar </p> <svg class="w-4 h-4 float-left ml-1 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg></button>
            </div>
            <div class="col-span-4 h-1 border-b-2 border-gray-100"></div>

            <div class="col-span-4">
                <p class="text-left text-sm mb-2">Título de la campaña</p>
                <form class="relative ">
                <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-600 border border-gray-200 rounded-md py-2 pl-4 h-10" type="text" aria-label="Título" placeholder="Título" />
            </form>
            </div>
            <div class="col-span-2">
                <button type="button" class="flex text-left  w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none " id="options-menu" aria-expanded="true" aria-haspopup="true">
            
                    
              <div class=" flex justify-start w-10/12 "><p class="justify-start text-gray-700">Seleccionar agencia</p></div>
              <div class=" flex justify-end w-2-12">
                  <svg class="mr-1 ml-8 h-5 w-5 flex justify-end justify-self-end place-content-end justify-items-end place-self-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
                
                </button>
            </div>
            <div class="col-span-2 flex h-10">
                <button class="flex justify-center self-center items-center  w-full bg-green-700 h-9 rounded-md text-white text-sm focus:outline-none hover:bg-green-500">Crear Campaña</button>
            </div>
            <div class="col-span-4 border-gray-100 border-b-2"></div>

            <div class="col-span-2 text-left text-sm">
                <p>Vista previa</p>
            </div>
            <div class="col-span-2 flex justify-end pr-4">
                <button class="text-blue-600 bg-gray-100 w-7 h-7 flex justify-center items-center rounded-sm  hover:text-white hover:bg-blue-600 focus:border-0  focus:border-transparent focus:outline-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></button>
                <button class="ml-2 text-gray-500 bg-gray-100 w-7 h-7 flex justify-center items-center rounded-sm hover:text-white hover:bg-blue-600 focus:border-0 focus:outline-none"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></button>
            </div>

            <div class=" col-span-4 border-2 border-gray-300 rounded-md w-full min-h-screen" >
                <!-- <iframe class="w-full h-screen" src="https://codingpotions.com/vue-props" frameborder="0"></iframe> -->
                <iframe frameborder="0" width="100%" height="100%" class="" src="http://www.adpdev.com/adp/mx/email-metrics/ver-email.php?c=3465&swapnumber=true&utm_source=adpmx&utm_medium=email&utm_campaign=adpmx_3465&adpmetrics_u=cmxVVXZNWlBlY1Zhaw#" ></iframe>
            </div>
            
            <div class=""></div>
        
    </div>
</template>