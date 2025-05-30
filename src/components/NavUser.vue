<script setup lang="ts">
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from './ui/avatar';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from './ui/dropdown-menu';
  import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from './ui/sidebar';

  import {
    BadgeCheck,
    ChevronsUpDown,
    LogOut,
    Bell,
    CreditCard,
    Sparkles,
  } from 'lucide-vue-next';

  const props = defineProps<{
    user: {
      name: string
      email: string
      avatar: string
    }
  }>();
  const { isMobile } = useSidebar();

</script>

<template>
  <SidebarMenu class="bg-light dark:bg-dark dark:text-light" >
    <SidebarMenuItem>
      <DropdownMenu >
        <DropdownMenuTrigger as-child >
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-light-hover data-[state=close]:bg-light-hover hover:bg-light
                   dark:data-[state=open]:bg-primary dark:hover:bg-primary-hover dark:text-white"
          >
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage :src="user.avatar" :alt="user.name" />
              <AvatarFallback class="rounded-lg">
                CN
              </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight ">
              <span class="truncate font-semibold">{{ user.name }}</span>
              <span class="truncate text-xs">{{ user.email }}</span>
            </div>
            <ChevronsUpDown class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white dark:bg-dark-secondary"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage :src="user.avatar" :alt="user.name" />
                <AvatarFallback class="rounded-lg">
                  CN
                </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="font-inter font-semibold ">{{ user.name }}</span>
                <span class="truncate text-xs">{{ user.email }}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <!--       <DropdownMenuSeparator />
                 <DropdownMenuGroup>
                   <DropdownMenuItem>
                     <Sparkles />
                     Upgrade to Pro
                   </DropdownMenuItem>
                 </DropdownMenuGroup>-->
<!--          <DropdownMenuSeparator />-->
<!--          <DropdownMenuGroup>-->
<!--            <DropdownMenuItem>-->
<!--              <BadgeCheck />-->
<!--              Account-->
<!--            </DropdownMenuItem>-->
<!--            <DropdownMenuItem>-->
<!--              <CreditCard />-->
<!--              Billing-->
<!--            </DropdownMenuItem>-->
<!--            <DropdownMenuItem>-->
<!--              <Bell />-->
<!--              Notifications-->
<!--            </DropdownMenuItem>-->
<!--          </DropdownMenuGroup>-->

          <DropdownMenuSeparator />
          <router-link to="#" class="hover:bg-light-hover hover:text-primary dark:hover:text-primary-hover">
            <DropdownMenuItem>
              <BadgeCheck />
              Account
            </DropdownMenuItem>
          </router-link>

          <DropdownMenuSeparator />
          <router-link to="#" class="hover:bg-light-hover hover:text-primary dark:hover:text-primary-hover">
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </router-link>

        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
