<!-- File: App.vue -->
<script setup lang="ts">
import AppSidebar from './components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';

import AppContent from './components/ui/AppContent.vue';

</script>

<template >
  <SidebarProvider class="bg-white">
    <AppSidebar />

    <!-- <RouterView />-->

    <AppContent class="mt-0"/>

  </SidebarProvider>
</template>




