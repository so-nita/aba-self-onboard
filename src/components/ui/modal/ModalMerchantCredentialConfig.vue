<script setup lang="ts">

import {
  DialogContent,
  DialogHeader,
  DialogTitle
} from '../dialog';
import { Card, CardContent, CardHeader } from '../card';

// const selfRegisterLink = "https://merchant.payway.com.kh/self-register/";
</script>

<template>
  <DialogContent class="lg:w-2/3 sm:w-[400px] bg-primary text-white p-0 gap-0">
    <DialogHeader class="border-b border-gray-200 text-white pb-2 px-6 py-4 mt-2">

      <div class="flex items-center">
<!--        <HomeIcon class="w-6 h-6" />  &lt;!&ndash; Adjust size as needed &ndash;&gt;-->
        <DialogTitle class="font-inter font-medium text-lg tracking-wide m-auto"> Configure your merchant credential  </DialogTitle>
      </div>
<!--      <DialogDescription class="pl-8 font-roboto font-light">-->
<!--        complete all the fields below the form-->
<!--      </DialogDescription>-->

    </DialogHeader>

    <div class="h-[380px] grid grid-cols-2 gap-4 justify-center bg-white py-4 pt-9 pb-16 px-7" >
      <a  id="new-acc-card" href="https://merchant.payway.com.kh/self-register/" target="_blank" rel="noopener noreferrer">
        <Card class="bg-white hover:bg-light dark:bg-dark dark:hover:bg-dark-secondary rounded-lg text-center transition-colors duration-500 ease-out">
          <CardHeader class="font-inter text-[20px] font-semibold text-[#2695b8] dark:text-light pb-5">
            Register A New Merchant Profile
          </CardHeader>
          <CardContent id="card-1" class="font-inter text-[17px] text-light-gray hover:text-primary dark:text-light px-3">
            Link your personal ABA account to register for new merchant credentials and start accepting payments online.
          </CardContent>
        </Card>
      </a>

<!--      <router-link to="https://merchant.payway.com.kh/self-register/" id="exist-acc-card">-->
<!--        <Card  class="bg-white hover:bg-[#ecf9f3] dark:bg-dark dark:hover:bg-dark-secondary rounded-lg text-center transition-colors duration-500 ease-out">-->
<!--          <CardHeader class="font-inter text-[20px] font-semibold text-success dark:text-light pb-5">-->
<!--            Add An Existing Merchant Profile-->
<!--          </CardHeader>-->
<!--          <CardContent id="card-2" class="font-inter text-[17px] text-light-gray hover:text-success-hover dark:text-light px-3">-->
<!--            This option is for businesses with ABA merchant credentials. If you’ve forgotten your credentials, contact the ABA Sales team.-->
<!--          </CardContent>-->
<!--        </Card>-->
<!--      </router-link>-->
      <router-link to="#" id="exist-acc-card" >
        <Card class="bg-white hover:bg-[#ecf9f3] dark:bg-dark dark:hover:bg-dark-secondary rounded-lg text-center transition-colors duration-500 ease-out">
          <CardHeader class="font-inter text-[20px] font-semibold text-success dark:text-light pb-5">
            Add An Existing Merchant Profile
          </CardHeader>
          <CardContent id="card-2" class="font-inter text-[17px] text-light-gray hover:text-success-hover dark:text-light px-3">
            This option is for businesses with ABA merchant credentials. If you’ve forgotten your credentials, contact the ABA Sales team.
          </CardContent>
        </Card>
      </router-link>
    </div>

  </DialogContent>

</template>

<style scoped>
  #new-acc-card:hover #card-1{
    color: #00467f;
  }
  #exist-acc-card:hover #card-2{
    color: #37ae7d;
  }
</style>

