<template>
<div>
  <ModuleS v-if="$store.state.moduleS"/>
  <ModuleC v-if="$store.state.moduleC"/>
  <Nav/>
  <div class='grid grid-cols-9 bg-gray-100 p-5'>
    <div class="pr-2 mt-20 col-span-4">
       <BoxTabs />  
    </div>
    <div class="pl-2 mt-20 col-span-5">
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
