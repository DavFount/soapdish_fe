<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-24">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-32 w-auto" src="@/assets/images/LogoText_Vert.png" alt="Your Company" />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100"
      >
        Register an account
      </h2>
    </div>

    <p class="mt-3 text-center text-sm text-gray-500">
      Alread a member?
      <RouterLink to="/login" class="font-semibold leading-6 text-blue-600 hover:text-blue-500">
        Click here to sign in!
      </RouterLink>
    </p>

    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleSubmit" method="POST">
        <fieldset>
          <legend class="sr-only">Register</legend>

          <div class="inline-flex justify-between gap-3">
            <InputField
              id="firstName"
              type="text"
              label="First Name"
              v-model="firstName"
              required
            />
            <InputField id="lastName" type="text" label="Last Name" v-model="lastName" required />
          </div>

          <div class="mt-3">
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

          <div class="mt-3">
            <InputField
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              v-model="confirmPassword"
              :error="!isMatching ? 'Passwords do not match' : ''"
              required
            />
          </div>

          <div class="mt-5">
            <SubmitButton :isDisabled="isDisabled">Sign in</SubmitButton>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useToast } from 'vue-toastification';
import InputField from '@/components/Forms/InputField.vue';
import SubmitButton from '@/components/Forms/SubmitButton.vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const toast = useToast();

const isDisabled = computed(
  () => !email.value || !password.value || !firstName.value || !lastName.value || !isMatching.value
);

const isMatching = computed(() => password.value === confirmPassword.value);

const handleSubmit = () => {
  if (!email.value || !password.value || !firstName.value || !lastName.value) {
    toast.error('Please fill in all fields');
    return;
  }
  console.log('Form submitted');
};
</script>

<style lang="scss" scoped></style>
