<!-- File AppContent.vue -->
<script setup lang="ts">

  import { SidebarInset, SidebarTrigger } from './sidebar';
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    // BreadcrumbPage,
    BreadcrumbSeparator,
  } from '../ui/breadcrumb';

  import { Separator } from '../ui/separator';
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import { images } from '../../assets';
  import ThemeToggle from '../ThemeToggle.vue';


  // Get current route
  const route = useRoute();

  // Compute breadcrumb title dynamically from the route
  const currentRouteName = computed(() => route.meta?.breadcrumb || route.name || 'Not Found');

  const user = {
    username: 'Admin',
    role: 'admin',
    avatar: images.logo
  };

</script>

<template>
  <SidebarInset>
<!--  Header  -->
<!--    <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12" >-->
    <header class="bg-white dark:bg-dark  flex h-14 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-gray-200 shadow-md">
      <div class="flex items-center gap-2 px-4">
        <SidebarTrigger class="text-secondary hover:text-slate-100 dark:text-white dark:hover:text-primary" />

        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumb class="dark:text-white hover:text-gray-100">
          <BreadcrumbList>
            <BreadcrumbItem class="hidden md:block ">
              <BreadcrumbLink href="" >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator class="hidden md:block" />
            <BreadcrumbItem>
            <!-- Current Route Name -->
<!--          <BreadcrumbPage> {{ currentRouteName }} </BreadcrumbPage>-->
              <BreadcrumbLink href="#" >
                {{ currentRouteName }}
              </BreadcrumbLink>

            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <!-- Right-> User Profile  -->
<!--      <div class="flex justify-center items-center space-x-2 w-1/5">-->
      <div class="flex justify-end items-center space-x-2 w-1/5">
<!--        <div class="flex flex-col pr-2">-->
<!--          <ThemeToggle />-->
<!--        </div>-->

<!--        &lt;!&ndash; Avatar &ndash;&gt;-->
<!--        <Avatar>-->
<!--          <AvatarImage src="" :alt="user.username" />-->
<!--          <AvatarFallback class="rounded-lg">-->
<!--&lt;!&ndash;            <UserCircleIcon class="w-6 h-6 text-gray-500" />&ndash;&gt;-->
<!--&lt;!&ndash;            <img :src="UserProfileImage" :alt="user.username">&ndash;&gt;-->
<!--            <img src="../../assets/images/user-profile.jpeg" :alt="user.username" />-->
<!--          </AvatarFallback>-->
<!--        </Avatar>-->
<!--        &lt;!&ndash; Username &ndash;&gt;-->
<!--        <div class="flex flex-col py-2">-->
<!--          <span class="font-inter text-lg text-slate-700 dark:text-dark-primary">{{ user.username }}</span>-->
<!--          <small class="font-roboto text-xs text-slate-500 dark:text-slate-200">{{ user.role }}</small>-->
<!--        </div>-->

        <div class="flex flex-col pr-3">
          <ThemeToggle />
        </div>

      </div>
      <!--  End Profile    -->
    </header>

    <!--  Content Here  -->
    <!--    <Dashboard />-->
    <router-view></router-view>

  </SidebarInset>
</template>

<style scoped>

</style>
