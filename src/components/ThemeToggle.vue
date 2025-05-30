<!--<script setup lang="ts">-->
<!--  import { watch } from "vue";-->
<!--  import { Button } from "../components/ui/button";-->
<!--  import { useColorMode } from "@vueuse/core";-->
<!--  import { MoonIcon, SunIcon } from 'lucide-vue-next';-->

<!--  // Get the current theme mode-->
<!--  const mode = useColorMode();-->

<!--  // Watch for changes and apply the mode correctly-->
<!--  watch(mode, (newMode) => {-->
<!--    console.log(mode + ' New Mode: ' + newMode);-->
<!--    document.documentElement.classList.remove("light", "dark");-->
<!--    // document.documentElement.classList.remove("dark","light" );-->
<!--    document.documentElement.classList.add(newMode);-->
<!--  });-->

<!--  const switchMode = () => {-->
<!--    mode.value = mode.value === 'light' ? 'dark' : 'light';-->
<!--    console.log(mode.value);-->
<!--  };-->
<!--</script>-->

<!--<template>-->

<!--  <Button variant="secondary" class="bg-transparent border-none hover:bg-gray-100 " @click="switchMode">-->
<!--    <MoonIcon class="h-[1.4rem] w-[1.4rem] transition-all dark:hidden  hover:text-primary-hover"/>-->
<!--    <SunIcon class="hidden h-[1.4rem] w-[1.4rem] transition-all dark:block  dark:text-white dark:hover:border-gray-800"/>-->
<!--    &lt;!&ndash; <span class="sr-only">Toggle theme</span> &ndash;&gt;-->
<!--  </Button>-->
<!--</template>-->

<script setup lang="ts">
  import { watch, onMounted } from "vue";
  import { Button } from "../components/ui/button";
  import { useColorMode } from "@vueuse/core";
  import { MoonIcon, SunIcon } from 'lucide-vue-next';

  // Get the current theme mode
  const mode = useColorMode({
    initialValue: 'light', // Force default mode to 'light'
    storageKey: 'vueuse-color-scheme', // Ensure it persists in localStorage
  });

  // Ensure "light" mode is applied on first load
  onMounted(() => {
    if (!localStorage.getItem("vueuse-color-scheme")) {
      mode.value = 'light'; // Force default to light mode
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add(mode.value);
    }
  });

  // Watch for changes and update classes
  watch(mode, (newMode) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newMode);
  });

  // Toggle between light and dark modes
  const switchMode = () => {
    mode.value = mode.value === 'light' ? 'dark' : 'light';
  };
</script>

<template>
  <Button variant="secondary" class="bg-transparent border-none hover:bg-gray-100 dark:hover:bg-primary-hover" @click="switchMode">
    <MoonIcon class="h-[1.4rem] w-[1.4rem] transition-all dark:hidden hover:text-primary-hover"/>
    <SunIcon class="hidden h-[1.4rem] w-[1.4rem] transition-all dark:block dark:text-white dark:hover:border-gray-800"/>
  </Button>
</template>

