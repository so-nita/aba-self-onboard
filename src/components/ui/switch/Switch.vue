<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

// Define props and emits for the switch component
const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SwitchRootEmits>()

// Filter out class from props to avoid passing it down
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

// Forward props and emits
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <SwitchRoot
      v-bind="forwarded"
      :class="cn(
        'relative w-11 h-6 rounded-full transition-colors peer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700',
        props.class
      )"
    >
      <SwitchThumb
        :class="cn(
          'pointer-events-none absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-full rtl:data-[state=checked]:-translate-x-full border border-gray-300 dark:border-gray-600'
        )"
      >
        <slot name="thumb" />
      </SwitchThumb>
    </SwitchRoot>
<!--    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only">-->
<!--      <slot>Toggle me</slot>-->
<!--    </span>-->
  </label>
</template>
