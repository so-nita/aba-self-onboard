<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
// import { PanelLeft } from 'lucide-vue-next'
import { useSidebar } from './utils'
import { MenuIcon } from "lucide-vue-next";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    class="sm:ml-0 hover:bg-primary hover:text-white "
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-8 w-8', props.class)"
    @click="toggleSidebar"
  >
<!--    <PanelLeft />-->
    <MenuIcon style="width: 23px; height: 22px;" />

    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
