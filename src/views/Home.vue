<template>
<div class="bg-gray-300">
  <ModuleS v-if="$store.state.moduleS"/>
  <ModuleC v-if="$store.state.moduleC"/>
  <Nav/>
  <div class='grid grid-cols-12 bg-gray-100 p-5'>
    <div class="pr-2 mt-20 col-span-5">
       <BoxTabs />  
    </div>
    <div class="pl-2 mt-20 col-span-7">
      <div v-if="this.$store.state.disablePrev" class=" h-full bg-gray-300 opacity-50 absolute z-10 " style="width:56%; height:1130px"></div>
      <BoxPrev/>
    </div>
  </div>
</div>
 
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav/Nav.vue'
import BoxTabs from '@/components/Mailings/Box-Tabs.vue'
import BoxPrev from '@/components/Preview/Box-Prev.vue'
import ModuleS from '@/components/Modules/moduleStripo.vue'
import ModuleC from '@/components/Modules/moduleCreate.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    BoxTabs,
    BoxPrev,
    ModuleS,
    ModuleC
  }
}
</script>
