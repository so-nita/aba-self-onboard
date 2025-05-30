<script lang="ts">
export const description
  = 'A login page with two columns. The first column has the login form with email and password. There\'s a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.'
export const iframeHeight = '800px'
export const containerClass = 'w-full h-full p-4 lg:p-0'
</script>

<script setup lang="ts">
  import { Button } from '../../../components/ui/button';
  import { Input } from '../../../components/ui/input';
  import { Label } from '../../../components/ui/label';

  import auth_image from '../../../assets/images/auth-mobile-login.svg';
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="hidden bg-muted lg:block">
      <img
        :src="auth_image"
        alt="Image"
        width="1920"
        height="1080"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      >
    </div>
    <div class="flex items-center justify-center py-12 sm:py-14">
      <div class="mx-auto grid w-[350px] gap-6 sm:gap-3">
<!--  Image    -->
        <div class="hidden lg:hidden md:hidden sm:block m-auto ">
          <img
            :src="auth_image"
            alt="Image"
            class="h-60 w-72 object-cover dark:brightness-[0.2] dark:grayscale "
          >
        </div>
<!--    End Image    -->
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">
            Login
          </h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password"> Password </Label>

<!--          <RouterLink to="/login" class="ml-auto inline-block text-sm underline hover:text-main-color "> Forgot your password? </RouterLink>-->
            </div>
            <Input id="password" type="password" required />
            <RouterLink to="/login" class="ml-auto inline-block text-sm underline hover:text-main-color "> Forgot your password? </RouterLink>

          </div>

          <Button type="submit" class="w-full text-white bg-primary hover:bg-green-500 transition-transform duration-75">
            Login
          </Button>

          <Button variant="outline" class="w-full" >
            Login with Google
          </Button>
        </div>

        <div class="mt-4 text-center text-sm text-gray-400 hover:text-gray-800 ">
          Don't have an account?

          <RouterLink to="https://router.vuejs.org/en/essentials/navigation.html" class="underline"> Register </RouterLink>
<!--          <RouterLink to="/register" class="underline"></RouterLink>-->
        </div>
      </div>
    </div>
  </div>
</template>
