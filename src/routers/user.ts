import { defineStore } from 'pinia';
import { meta } from 'eslint-plugin-vue'
import axios from 'axios'

type user = {
  id: string
  fullName: string
  isActive: boolean
  totalSpending: number
}

type State = {
  users: user[],
  isRequestLoading: boolean
}

type users = user[];

export default Userdata = defineStore('user', {
  // state: Returns an object with the initial state
  state: (): State => ({
    customers = [],
    isRequestLoading: false,
  }),
  // getters: Compute derived state based on the current state
  getters: {
    state : {
      return: {
        // loading: true,

      }
    }
  },
  // actions: Methods that can change the state and contain business logic
  // crud operations here
  actions: {
    async fetchUsers() {
      this.isRequestLoading = true;

      const response = await axios.get("https://fakestoreapi.com/products");

      response.data.map((product:ProductTypes) => {
        this.users.push(product)
      });
      this.isRequestLoading = false;
    },

    async updateUser() {
      this.isRequestLoading = true;

      const response = await axios.put("https://fakestoreapi.com/products");

      response.data.map((user:user) => {
        this.users.put(user);
      });

      this.isRequestLoading = false;
    }
  }
});

if(import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));

}
