<script setup lang="ts">

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
  useSidebar
} from '../components/ui/sidebar'

import {
  Folder,
  Forward,
  type LucideIcon,
  MoreHorizontal,
  Trash2,
  ChevronRight,
} from 'lucide-vue-next'
import { DropdownMenuArrow } from 'reka-ui'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible'

defineProps<{
  extraMenu: {
    title: string
    url: string
    icon: string,
    isActive?: boolean,
    items: {
      title: string,
      path: string,
      icon: string,
    }[],
  }[],
  activeItem: string | null
}>();

const { isMobile } = useSidebar();

import { ref,defineProps, defineEmits } from 'vue';
// Reactive variable to track the active item
const activeItem = ref<string | null>(null);

const emit = defineEmits(['update:activeItem']);

const setActiveItem = (url: string) => {
  activeItem.value = url; // Only one item will be active at a time
};

</script>
<template>
  <SidebarGroup class="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel class="text-light"> Extra Section </SidebarGroupLabel>

    <SidebarMenu>
      <Collapsible
        v-for="item in extraMenu"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <SidebarMenuItem :to="item.url">
          <CollapsibleTrigger as-child>
            <SidebarMenuButton
              class="py-3 text-light transition-all duration-200"
              :class="{
                'bg-primary': activeItem == item.url,
                'hover:bg-secondary': true
              }"
              @click="setActiveItem(item.url)"
            >
              <component :is="item.icon" v-if="item.icon" />
              <!--  <span class="">{{ item.name }} </span> -->
              <!-- Route to Component -->
              <RouterLink :to="item.url" class="flex-1">{{ item.title }}</RouterLink>

              <!-- Show ChevronRight only when item.items is not empty -->
              <ChevronRight
                v-if="item.items && item.items.length > 0"
                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <!--          -->
          <CollapsibleContent
            v-if="item.items && item.items.length > 0"
            v-for="subItem in item.items" :key="subItem.title">
            <SidebarMenuSub>
              <SidebarMenuSubItem >
                <SidebarMenuSubButton
                  as-child
                  class="text-light hover:bg-secondary "
                  :class=" { 'bg-primary' : item.isActive, 'hover:bg-secondary': true }  "
                >
<!--                  <a :href="subItem.path">-->
<!--                    <span>{{ subItem.name }}</span>-->
<!--                  </a>-->
                  <!-- Route to Component -->
                  <RouterLink :to="subItem.path" class="flex-1">{{ subItem.title }}</RouterLink>

                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>

        </SidebarMenuItem>
<!--      -->
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>
</template>
