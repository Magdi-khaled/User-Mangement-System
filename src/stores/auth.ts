import { defineStore } from "pinia";
import type { AuthState } from "../types/auth";
import { users } from "../composables/useUsers";
import { isAuthenticated, getUserRole } from "../composables/useAuth";

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: isAuthenticated(),
    role: getUserRole(),
    user: { email: null, password: null },
  }),
  getters: {
    isLoggedIn(state): boolean {
      return state.isAuthenticated;
    },
    getUser(state) {
      return state.user;
    },
    getRole(state) {
      return state.role;
    },
  },
  actions: {
    async login(email: string, password: string) {
      try {
        const existUser = await users.find(
          (user) => email == user.email && password == user.password
        );

        if (existUser) {
          localStorage.setItem("token", email);
          localStorage.setItem("role", existUser.role);
          this.isAuthenticated = isAuthenticated();
          this.role = getUserRole();
          this.user = { email, password };
        } else {
          console.log("Email or Password Wrong...");
        }
      } catch (err) {
        console.error("Login Error");
      }
    },
    async logout() {
      try {
        await localStorage.clear();
        this.isAuthenticated = false;
        this.role = null;
        this.user = { email: null, password: null };
      } catch (err) {
        console.error("Logout Error");
      }
    },
  },
});
