<script setup lang="ts">

  import { Separator } from '../../ui/separator';
  import { Button } from '../../../components/ui/button';
  import { PlusCircle, HomeIcon } from 'lucide-vue-next';

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from './../../../components/ui/dialog';

  import { Input } from './../../../components/ui/input';
  import PaymentCard from './../../../components/ui/payment-card/PaymentCard.vue';
  import { images } from '../../../assets';
  import ModalMerchantCredentialConfig from '@/components/ui/modal/ModalMerchantCredentialConfig.vue'

  // defineProps<{
  //   user: {
  //     username: string,
  //     role: string
  //     avatar: string
  //   }
  // }>();

  const user = {
    username: 'Thida',
    role: 'admin',
    avatar: images.user_profile
  }
  interface Currency {
    id: number,
    name: string,
  }

  // const currencies = ref<Currency[]>([
  //   { id: 1, name: 'USD' },
  //   { id: 2, name: 'Riel' },
  //   { id: 3, name: 'Baht' },
  // ]);

  const redirectToExternalSite = () => {
    window.location.href = "https://merchant.payway.com.kh/self-register/";
  };

</script>

<template>
  <Dialog>
    <div class="container px-5 bg-transparent pt-2">
      <div class="flex items-center justify-between">
        <!-- Left -->
        <div class="flex items-center w-2/3 pt-2">
          <Input type="text" placeholder="Search project or client" class="w-80" />
        </div>

        <DialogTrigger as-child>
        <!-- Middle -->
          <div class="flex justify-end items-center space-x-2 w-1/6 ">
            <Button
              @click="redirectToExternalSite"
              variant="outline"
              class="font-inter text-white bg-primary hover:bg-primary-hover h-10 rounded-md"
            >
              <PlusCircle class="text-lg"/>
              <span style="font-size: 12px">Add Project</span>
            </Button>
          </div>
        </DialogTrigger>

        </div>
      </div>
    <Separator />

    <div class="container px-5 mt-6">
      <PaymentCard></PaymentCard>

      <!--   Currency   -->
<!--  <Card class="w-[350px] mt-3 py-2 shadow-sm rounded-md bg-white">
        <CardContent >
          <CardTitle class="my-2"> Currency </CardTitle>
          <div class="flex flex-wrap justify-start space-x-5">
            <RadioGroup
              v-if="currencies.length > 0"
              v-for="currency in currencies"
              :key="currency.id"
              default-value="comfortable"
              :orientation="'vertical'"
            >
              <div class="space-x-2">
                <RadioGroupItem
                  :id="currency.id.toString()"
                  :value="currency.name"
                  class="text-xl text-main-color"

                />
                <Label for="{{currency.id}}"> {{ currency.name }} </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>-->
    </div>

  <!--  Dialog Content  -->
<!--    <DialogContent class="lg:w-2/3 sm:w-[425px] bg-primary text-white p-0 gap-0">
      <DialogHeader class="border-b border-gray-200 text-white pb-2 px-6 py-4 mt-2">

        <div class="flex items-center gap-2">
          <HomeIcon class="w-6 h-6" />  &lt;!&ndash; Adjust size as needed &ndash;&gt;
          <DialogTitle class="font-inter tracking-wide ">ABA PayWay Configuration</DialogTitle>
        </div>
        <DialogDescription class="pl-8 font-roboto font-light">
          complete all the fields below the form
        </DialogDescription>

      </DialogHeader>

      <div class="grid gap-4 bg-white py-4 pt-9 pb-10 px-7" >
        <div class="grid grid-cols-4 items-center gap-4 pb-2" >
          <Label class="text-gray" style="font-size: 15px"> Merchant ID : </Label>
          <Input v-model="user.username" class="col-span-3 text-black" placeholder="e.g: Merchantidname" required/>
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
&lt;!&ndash;    <PlusIcon /> &ndash;&gt;
          Save
        </Button>
      </DialogFooter>

    </DialogContent>-->
<!--    <ModalPayWayConfig />-->

<!--    <ModalConfigSucess />-->
    <ModalMerchantCredentialConfig />
  <!--    -->
  </Dialog>

</template>

<style scoped>

</style>
