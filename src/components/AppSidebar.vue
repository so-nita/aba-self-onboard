<!-- AppSidebar.vue-->
<script setup lang="ts">
import type { SidebarProps } from '../components/ui/sidebar';
import NavbarMain from '../components/NavbarMain.vue'
import NavUser from '../components/NavUser.vue';
import { routers }  from '../routers/Routers';

import {
  Sidebar,
  // SidebarMenuItem,
  SidebarContent,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '../components/ui/sidebar';
import { UserIcon } from 'lucide-vue-next'
import { images } from '../assets';


const data = {
 user: {
   name: "Sonita",
   email: "dev@gmail.com",
   avatar: images.user_profile
 }
};

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
});

// const isActiveButton = ref<boolean>(false);
// const toggleActive = () => {
//   isActiveButton.value = !isActiveButton.value;
// }
</script>

<template>
  <Sidebar v-bind="props" >
    <!-- <SidebarHeader class="bg-dark">-->
    <SidebarHeader class="bg-light dark:bg-dark">
      <SidebarMenuButton
        size="lg"
        class="data-[state=open]:bg-light  hover:bg-light-hover dark:data-[state=open]:bg-dark rounded-none transition-none"
      >
        <div class="flex aspect-square size-7 items-center justify-center rounded-lg  bg-primary cursor-pointer ">
          <component :is="UserIcon" class="size-5 text-white" />
        </div>
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-inter font-semibold text-dark dark:text-white"> On Board App </span>
          <span class="truncate text-xs text-secondary dark:text-zinc-300"> Integration App </span>
        </div>
      </SidebarMenuButton>
    </SidebarHeader>

    <SidebarContent class="bg-light dark:bg-dark">
<!--  <NavMain :items="routers.navMain" :extra-menu="routers.extra" :activeItem="activeItem" @update:active-item="setActiveItem" />-->
      <NavbarMain :items="routers.navMain" :extra-menu="routers.extra"/>
<!--      <ExtraSection :extraMenu="routers.extra" />-->
    </SidebarContent>

<!--    <SidebarFooter class="bg-dark ">
      <NavUser :user="routers.user" class=" text-light hover:bg-primary " />
    </SidebarFooter>-->

    <SidebarFooter class="bg-light dark:bg-dark">
      <NavUser :user="data.user" />
    </SidebarFooter>

    <SidebarRail />
  </Sidebar>
</template>
