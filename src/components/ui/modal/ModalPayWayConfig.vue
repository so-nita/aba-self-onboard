<script setup lang="ts">

  import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle
  } from '../dialog';
  import { HomeIcon } from 'lucide-vue-next';
  import { Button } from '../button';
  import { Label } from '../label';
  import { Input } from '../input';

  // interface user {
  //   username: string;
  //   password: string;
  // }
</script>

<template>
  <DialogContent class="lg:w-2/3 sm:w-[425px] bg-primary text-white p-0 gap-0">
    <DialogHeader class="border-b border-gray-200 text-white pb-2 px-6 py-4 mt-2">

      <div class="flex items-center gap-2">
        <HomeIcon class="w-6 h-6" />  <!-- Adjust size as needed -->
        <DialogTitle class="font-inter tracking-wide ">ABA PayWay Configuration</DialogTitle>
      </div>
      <DialogDescription class="pl-8 font-roboto font-light">
        complete all the fields below the form
      </DialogDescription>

    </DialogHeader>

    <div class="grid gap-4 bg-white py-4 pt-9 pb-10 px-7" >
      <div class="grid grid-cols-4 items-center gap-4 pb-2" >
        <Label class="text-gray" style="font-size: 15px"> Merchant ID : </Label>
        <Input class="col-span-3 text-black" placeholder="e.g: Merchantidname" required/>
      </div>

      <div class="grid grid-cols-4 items-center gap-4 pb-2">
        <Label class="text-gray" style="font-size: 15px"> API Key :</Label>
        <Input id="client-name" class="col-span-3 text-black" placeholder="e.g: f38cdeba-b993-4005-b16c-525b124c7d35 " style="font-size: 14px" required/>
      </div>

      <div class="grid grid-cols-4 items-center gap-4">
        <Label class="text-gray" style="font-size: 15px"> Public RSC :</Label>
        <Input id="client-name" class="col-span-3 text-black " placeholder="e.g: MIGfMA0GCSqGSIb3DQEBAQUAA4GNDRGSDGA" style="font-size: 14px" required/>
      </div>
    </div>

    <DialogFooter class="bg-white p-6 pt-4 pb-9">
      <Button type="submit" class="bg-primary hover:bg-primary-hover text-white px-5 cursor-pointer transition-all duration-200">
        <!--    <PlusIcon /> -->
        Save
      </Button>
    </DialogFooter>

  </DialogContent>

</template>

<style scoped>

</style>
