<script setup>
import Sidebar from '@/components/sidebar-component.vue'
import Navbar from '@/components/navbar-component.vue'

</script>

<template>
  <div class="flex ">
   <Sidebar/>
   <div class="flex flex-col flex-1 ml-0 p-2 min-h-0 sm:ml-64">
    <Navbar/>
  </div>
  </div>


</template>

<style scoped="">

</style>
