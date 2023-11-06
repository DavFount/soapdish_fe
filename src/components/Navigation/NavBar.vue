<template>
  <nav
    class="fixed inset-0 z-50 h-16 bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-400 dark:border-gray-600"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <RouterLink to="/">
              <img src="@/assets/images/LogoText_NoBubs.png" alt="The SOAP Dish" class="w-40" />
            </RouterLink>
          </div>
          <div class="hidden lg:ml-6 lg:block">
            <div class="flex space-x-4">
              <NavBarItem to="/" class="">Home</NavBarItem>
            </div>
          </div>
        </div>
        <div class="flex align-middle">
          <MobileNavBarToggle :open="mobileMenu.show.value" @toggle="mobileMenu.toggle" />
          <ThemeSwitcher class="hidden lg:flex" />
          <!-- <div class="flex" v-if="$page.props.auth.user"> -->
          <!-- <SettingsDropdown /> -->
          <!-- </div> -->
          <AuthLinks />
        </div>
      </div>
    </div>
    <Transition>
      <MobileNavBar v-if="mobileMenu.show.value" @toggle="mobileMenu.toggle" />
    </Transition>
  </nav>
</template>

<script setup>
import NavBarItem from '@/Components/Navigation/NavBarItem.vue';
import ThemeSwitcher from '@/Components/Navigation/ThemeSwitcher.vue';
import MobileNavBarToggle from '@/Components/Navigation/MobileNavBarToggle.vue';
import MobileNavBar from '@/Components/Navigation/MobileNavBar.vue';
// import SettingsDropdown from "@/Components/Nav/SettingsDropdown.vue";
import AuthLinks from '@/Components/Navigation/AuthLinks.vue';
import { ref } from 'vue';

const mobileMenu = {
  show: ref(false),
  toggle: () => {
    mobileMenu.show.value = !mobileMenu.show.value;
  }
};
</script>

<style lang="scss" scoped></style>
