<template>
<div class="bg-gray-300">
  <ModuleS v-if="$store.state.moduleS"/>
  <ModuleC v-if="$store.state.moduleC"/>
  <Nav />
  <PrecheckLinks  v-if="$store.state.previewLinks"/>
  <div class='grid grid-cols-12 bg-gray-100 p-5'>
    <!-- <div class="col-span-12 bg-white h-20 mt-11"></div> -->
    <!-- mt-20 -->
    <div class="pr-2 col-span-5 mt-20">
       <BoxTabs v-if="$store.state.previewLinks==false" />  
       <LinksVer v-if="$store.state.previewLinks" class="-mt-20"/>
    </div>
    <div class="pl-2 col-span-7 mt-20" >
      <div v-if="this.$store.state.disablePrev" class=" h-full bg-gray-300 opacity-50 absolute z-10 " style="width:56%; height:1130px"></div>
      <div v-if="false" class=" h-full bg-gray-300 opacity-50 absolute z-10 " style="width:56%; height:1130px"></div>
      <BoxPrev v-if="$store.state.previewLinks==false"/>
      <ImagesVer v-if="$store.state.previewLinks" class="-mt-20"/>
    </div>
  </div>
</div>
 
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav/Nav.vue'
import PrecheckLinks from '@/components/Nav/PrecheckLinks.vue'
import BoxTabs from '@/components/Mailings/Box-Tabs.vue'
import BoxPrev from '@/components/Preview/Box-Prev.vue'
import ModuleS from '@/components/Modules/moduleStripo.vue'
import ModuleC from '@/components/Modules/moduleCreate.vue'
import LinksVer from '@/components/Preview/LinksVer.vue'
import ImagesVer from '@/components/Preview/ImagesVer.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    BoxTabs,
    BoxPrev,
    ModuleS,
    ModuleC,
    LinksVer,
    ImagesVer,
    PrecheckLinks
  }
}
</script>
<style >
html {
  scroll-behavior: smooth;
}
  
</style>
