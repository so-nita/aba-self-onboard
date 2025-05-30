// import { createStore } from 'vue';
// import { defineStore } from 'pinia';
// import axios from 'axios';
//
// export default createStore({
//   state: {
//     users: [],
//   },
//   getters: {
//     getUser: (state) => state.users,
//   },
//   actions: {
//     async fetchUsers({ commit }) {
//       try {
//         var data = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//
//         console.log(data);
//         commit("SET_USERS", data.data);
//
//       }catch (error) {
//         console.error(error);
//       }
//     }
//   }
// })
