import { defineStore } from 'pinia';
import axios from 'axios';
import api from './api';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string
  },
}[];

type State = {
  users: User[];
  isLoading: boolean;
  success: boolean;
}

export const useUserStore = defineStore("user",{
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchUsers(){
      this.loading = true;
      this.error = null;
      try {
        const response = await api.get('users');

        console.log(response.data);
        this.users = response.data;

      }catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false;
      }
    },

    async updateUser(user: User) {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.put(`users/${user.id}`, user);
        console.log(response.data);

        // Find and update the user in the store
        if (response.data.success) {
          const index = this.users.findIndex(user => user.id === user.id);
          if (index !== -1) {
            this.users[index] = response.data; // Update only the modified user
          }
        }
        this.users = response.data;
      }catch (error) {
        console.error(error);
      }finally {
        this.loading = false;
      }
    }
  },
});
