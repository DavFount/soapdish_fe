import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { api } from '@/api/index.js';
import { setup } from '@/api/interceptors.js';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')));
  const returnUrl = ref(null);

  async function login(email, password) {
    const response = await axios.post(
      'https://api.thesoapdish.app/v1/login',
      { email, password },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`Response: ${response}`);
    // try {
    //   const user = await api.post('login', { email, password });
    //   console.log(`User: ${user}`);
    //   user.value = user.data;
    //   localStorage.setItem('user', JSON.stringify(user.data));
    //   this.$route.push(this.returnUrl || '/');
    // } catch (error) {
    //   console.log(error.message);
    // }
  }

  async function register(firstName, lastName, email, password) {
    try {
      await api.post('register', {
        email: email,
        password: password,
        details: {
          firstName: firstName,
          lastName: lastName
        }
      });
      this.$router.push('/');
    } catch (error) {
      throw error.response.data.msg;
    }
  }

  async function verify(token) {
    try {
      const user = await api.get('verify/?token=' + token);
      user.value = user.data.user;
      localStorage.setItem('user', JSON.stringify(user.data.user));
      this.$router.push('/');
    } catch (error) {
      throw error.response.data.msg;
    }
  }

  async function logout() {
    this.$router.push('/login');
    user.value = null;
    localStorage.removeItem('user');
  }

  async function refreshToken() {
    try {
      const accessToken = await api.post('refresh', {
        refreshToken: user.value.refreshToken
      });
      user.value.accessToken = accessToken.data;
    } catch (error) {
      throw error.response.data.msg;
    }
  }

  async function resendVerification(email) {
    try {
      await api.post('resend', { email });
    } catch (error) {
      throw error.response.data.msg;
    }
  }

  async function resetPassword(token) {
    // Reset users password
  }

  return {
    user,
    returnUrl,
    login,
    register,
    verify,
    logout,
    refreshToken,
    resendVerification,
    resetPassword
  };
});

setup(useAuthStore);
