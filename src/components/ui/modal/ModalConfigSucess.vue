<script setup lang="ts">

  import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
  } from '../dialog';
  import { HomeIcon } from 'lucide-vue-next';
  import { Button } from '../button';
  import { Label } from '../label';
  import { Input } from '../input';
  import { images } from '@/assets';

</script>

<template>
  <DialogContent class="lg:w-2/3 sm:w-[425px] bg-primary text-white p-0 gap-0">
    <DialogHeader class="border-b border-gray-200 text-white pb-2 px-6 py-4 mt-2">

      <div class="flex items-center gap-2">
        <HomeIcon class="w-6 h-6" />  <!-- Adjust size as needed -->
        <DialogTitle class="font-inter tracking-wide "> ABA PayWay Configuration </DialogTitle>
      </div>
      <DialogDescription class="pl-8 font-roboto font-light">
        complete all the fields below the form
      </DialogDescription>

    </DialogHeader>

    <div class="grid gap-4 justify-center bg-white py-4 pt-9 pb-16 px-7" >
<!--    <div class="flex items-center justify-center bg-white dark:bg-dark-secondary py-2 pt-9 pb-20 px-7 " >-->
      <!--  <img :src="images.aba_kr_qr" alt=""/>-->
      <img class="object-contain  max-h-56 m-auto" :src="images.tick_gif" alt="tick_gif"/>
      <div class="block text-black  text-center">
        <p class="font-inter text-3xl tracking-wide mb-5 font-semibold" style="margin-top: -10px"> Congratulation! </p>
        <span class="text-lg text-gray"> Your ABA merchant profile is </span><br>
        <span class="text-lg text-gray"> configured successfully. </span>
      </div>
    </div>

  </DialogContent>

</template>

<style scoped>

</style>

