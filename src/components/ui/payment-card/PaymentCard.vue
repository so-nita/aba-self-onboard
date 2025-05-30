<script setup lang="ts">

  import {
    Card,
    CardContent,
    // CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '../../ui/card';

  import { Label } from '../../ui/label';
  import { Switch } from '../../ui/switch';
  import { images } from '../../../assets';
  import { computed, ref } from 'vue';

//  Code
  const isEnablePayment = ref<boolean>(false);
  const isConnectPayment = ref<boolean>(false);

  // const setEnablePayment = (value: boolean): void => {
  //   if (isEnablePayment.value) {
  //     isConnectPayment.value = false;
  //   }else {
  //     isConnectPayment.value = true;
  //   }
  // }

  // Computed property to determine if the switch should be enabled
  const isSwitchEnabled = computed(()=> {
    isEnablePayment.value && isConnectPayment.value;
  })

  const isSwitchConnect = computed(()=> {
    isEnablePayment.value && isConnectPayment.value;
  })

</script>

<template>
  <Card class="w-[570px] bg-white rounded-md all">
    <CardHeader class="border-b border-gray-100 p-4 ">
    <!-- <CardTitle class=""> Enable Online Payment </CardTitle>-->
    <div class="flex items-center justify-between mx-3">
      <div class="font-inter font-bold text-primary ">Enable Online Payment</div>
      <div class="flex items-center space-x-2">
        <Label class="font-inter text-secondary" htmlFor="airplane-mode" >Enable</Label>
<!--        <Switch class="border border-gray-100 shadow-2xl"/>-->

        <!-- Switch with v-model -->
        <Switch id="enablePayment" v-model="isEnablePayment" />
      </div>
    </div>

    </CardHeader>
    <CardContent class="pt-4 pb-0">
      <CardTitle class="font-inter text-secondary font-semibold tracking-wide text-2xl"> Your Payment Method </CardTitle>
      <div class="grid grid-cols-2 mt-4 ">
        <div class="border border-gray-100 h-36 rounded-s-lg flex items-center pl-4">
<!--          <img class="w-12 h-12 rounded-lg object-cover" src="https://devithuotkeo.com/static/image/portfolio/khqr/khqr-5.png" alt="ABA KHQR" />-->
          <img class="w-12 h-12 rounded-lg object-cover" :src="images.aba_kr_qr" alt="ABA KHQR" />
          <div class="ml-2">
            <p class="text-xl font-inter font-semibold text-primary"> ABA KHQR </p>
            <small class="font-inter font-light text-gray" style="font-size: 11px">  Scan to pay with any banking app</small>
          </div>
        </div>

        <div class="border border-gray-100 h-36 rounded-e-lg flex items-center px-5 justify-end" >
          <div class="flex items-center space-x-2">
            <Label class="font-inter text-secondary" htmlFor="airplane-mode" >Disconnect</Label>
            <!--  <Switch class=" border border-gray-100 shadow-2xl"/>  -->
            <!--  Switch  -->

            <Switch id="disconnectPayment" v-model="isConnectPayment" />
            <!--            -->
          </div>
        </div>


      </div>
      <div class="px-4 font-light font-inter pt-2 tracking-wide text-gray">
        <small class="text-sm ">Link your ABA account for central fund settlement and accept</small>
        <small class="text-sm "> payments from customers of any KHQR member bank</small>
      </div>
    </CardContent>

    <CardFooter class="">

    </CardFooter>

  </Card>
</template>

<style scoped>

</style>
