import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},  // You can initialize it as null or an empty object
  }),

  getters: {
    getUser: (state) => {
      return state.user;  // Return the user data from the state
    },
  },

  actions: {
    setUser(userData: Object) {
      this.user = userData;
    },
  },
  persist: true,
});
