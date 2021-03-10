<template>
<div>
  <Nav msg="Welcome to Your Vue.js App"/>
  <div class='grid grid-cols-2 bg-gray-100 p-5'>
    <div class="">
       <BoxTabs/>  
    </div>
  </div>
</div>
 
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav/Nav.vue'
import BoxTabs from '@/components/Mailings/Box-Tabs.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    BoxTabs
  }
}
</script>
