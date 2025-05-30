<!-- src/pages/ExceptionHandlerPages/NotFoundPage.vue -->

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="not-found ">
    <div class="content">
<!--      <img src="../../.././assets/page-not-found.png" alt="404 Image" class="error-image"  />-->
      <h1>404</h1>
      <p>Hey captain! Looks like you're heading to a wrong planet!</p>
      <button @click="goHome">Take me back to the homepage</button>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  flex-direction: column;
  background: #f9f9f9;
}

.content {
  max-width: 500px;
}

.error-image {
  width: 200px;
  margin-bottom: 20px;
}

h1 {
  font-size: 80px;
  color: #333;
}

p {
  font-size: 18px;
  color: #555;
}

button {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background: #0056b3;
}
</style>

