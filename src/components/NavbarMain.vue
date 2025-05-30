<script setup lang="ts">
  import {
    SidebarGroup,
    SidebarMenu,
    SidebarGroupLabel,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton
  } from '../components/ui/sidebar';

  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from '../components/ui/collapsible';

  import { ChevronRight, LucideIcon } from 'lucide-vue-next';
  import { ref, defineProps, watchEffect } from 'vue';

  const props = defineProps<{
    items: {
      title: string,
      url: string,
      icon: LucideIcon,
      isActive?: boolean,
      items?: {
        title: string
        url: string
      }[],
    }[],
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
  }>();

  // Reactive variable to track the active item
  const activeItem = ref<string | null>(null);

  // Initialize activeItem based on isActive property
  watchEffect(()=>{
    // console.log(props.extraMenu);
    const defaultActive = props.items.find(i => i.isActive);
    activeItem.value = defaultActive ? defaultActive.url : null;
  })

  const setActiveItem = (url: string) => {
    activeItem.value = url; // Only one item will be active at a time
  };

</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel class="text-slate-600 dark:text-light"> Platform </SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
        v-for="item in items"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <SidebarMenuItem :to="item.url">
          <CollapsibleTrigger as-child>

            <SidebarMenuButton
              class="py-5 text-slate-800 dark:text-light hover:bg-primary focus:bg-primary "
              :class="{
                'bg-primary text-light dark:bg-light dark:text-secondary': activeItem == item.url,
                'hover:bg-light-hover dark:hover:bg-light-hover dark:hover:text-secondary': true,
              }"
              @click="setActiveItem(item.url)"
            >
              <component :is="item.icon" v-if="item.icon" />
              <!-- Route to Component -->
              <RouterLink :to="item.url" class="flex-1">{{ item.title }}</RouterLink>

            </SidebarMenuButton>

          </CollapsibleTrigger>

        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>

  <!-- Extra Section -->
  <SidebarGroup class="group-data-[collapsible=icon]:hidden">
    <SidebarGroupLabel class="text-slate-600 dark:text-light"> Extra Section </SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
        v-for="item in extraMenu"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <SidebarMenuItem :to="item.url" class=" transition-none ">
          <CollapsibleTrigger as-child>
            <SidebarMenuButton
              class="py-5 text-slate-800 dark:text-light hover:bg-primary focus:bg-primary"
              :class="{
                'bg-primary text-light dark:bg-light dark:text-secondary': activeItem == item.url,
                // 'hover:bg-light-hover dark:hover:bg-light dark:hover:text-white': true,
                'hover:bg-light-hover focus:bg-primary dark:hover:bg-light dark:hover:text-white ': true,
              }"
              @click="setActiveItem(item.url)"
            >
              <component :is="item.icon" v-if="item.icon" />
              <!-- Route to Component -->
              <RouterLink :to="item.url" class="flex-1">{{ item.title }}</RouterLink>

              <!-- Show ChevronRight only when item.items is not empty -->
              <ChevronRight
                v-if="item.items && item.items.length > 0"
                class="ml-auto group-data-[state=open]/collapsible:rotate-90"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <!--  Sub item in Extra menu  -->
          <CollapsibleContent
            v-if="item.items && item.items.length > 0"
            v-for="subItem in item.items" :key="subItem.title">
            <SidebarMenuSub class="pr-0 w-52">
              <SidebarMenuSubItem>
                <SidebarMenuSubButton
                  as-child
                  class="text-slate-800 dark:text-light hover:bg-primary focus:bg-primary py-5   px-1 "
                  :class="
                    {
                      // 'bg-primary' : activeItem === subItem.path,
                      // 'hover:bg-primary': true
                      'bg-primary text-light hover:text-light dark:bg-light dark:text-secondary': activeItem == subItem.path,
                      'hover:bg-light-hover dark:hover:bg-light dark:hover:text-white' : true
                    }  "
                  @click="setActiveItem(subItem.path)"
                >
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
<!-- End Extra Section-->
</template>

<style scoped>

</style>
