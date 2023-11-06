<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-24">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-32 w-auto" src="@/assets/images/LogoText_Vert.png" alt="Your Company" />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100"
      >
        Sign in to your account
      </h2>
    </div>

    <p class="mt-3 text-center text-sm text-gray-500">
      Not a member?
      <RouterLink to="/register" class="font-semibold leading-6 text-blue-600 hover:text-blue-500">
        Register Today!
      </RouterLink>
    </p>

    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleSubmit" method="POST">
        <fieldset>
          <legend class="sr-only">Sign in</legend>
          <div>
            <InputField id="email" type="email" label="Email address" v-model="email" required />
          </div>

          <div class="mt-3">
            <InputField
              id="password"
              type="password"
              label="Password"
              v-model="password"
              required
            />
          </div>

          <div class="mt-5">
            <SubmitButton :isDisabled="isDisabled">Sign in</SubmitButton>
          </div>
        </fieldset>
      </form>
      <!-- <p class="mt-10 text-center text-sm text-gray-500">
        Trouble signing in?
        <RouterLink to="/reset" class="font-semibold leading-6 text-blue-600 hover:text-blue-500">
          Click here to reset your password!
        </RouterLink>
      </p> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useToast } from 'vue-toastification';
import { useAuthStore } from '@/stores/auth';
import InputField from '@/components/Forms/InputField.vue';
import SubmitButton from '@/components/Forms/SubmitButton.vue';

const toast = useToast();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');

const isDisabled = computed(() => !email.value || !password.value);

const handleSubmit = () => {
  if (!email.value || !password.value) {
    toast.error('Please fill in all fields');
    return;
  }

  authStore
    .login(email.value, password.value)
    .then(() => {
      toast.success('Login successful!');
    })
    .catch((error) => {
      toast.error(error.message);
    });
};
</script>

<style lang="scss" scoped></style>
