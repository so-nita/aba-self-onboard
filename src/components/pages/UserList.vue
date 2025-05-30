<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '../../store/useUserStore';

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers()
})
</script>

<template>

  <div class="container">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr class="bg-gray-100 font-semibold text-sm" >
          <th class="px-6 py-4" scope="col"> # </th>
          <th class="px-6 py-4" scope="col"> Username </th>
          <th class="px-6 py-4" scope="col"> Email </th>
          <th class="px-6 py-4" scope="col"> Phone </th>
          <th class="px-6 py-4" scope="col"> Website </th>
          <th class="px-6 py-4" scope="col"> Company Name </th>
        </tr>
      </thead>
      <!-- On loading data -->
      <tbody v-if="userStore.loading" >
        <tr >
          <td colspan="6" class="px-6 py-4 text-center">Loading...</td>
        </tr>
      </tbody>

      <!-- On listing all data -->
      <tbody
        v-if="!userStore.loading && !userStore.error"
        class="px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <tr v-for="user in userStore.users">
          <td class="px-6 py-4" > {{ user.id }} </td>
          <td class="px-6 py-4" > {{ user.username }} </td>
          <td class="px-6 py-4" > {{ user.email }} </td>
          <td class="px-6 py-4" > {{ user.phone }} </td>
          <td class="px-6 py-4" > {{ user.website }} </td>
          <td class="px-6 py-4" > {{ user.company.name }} </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
