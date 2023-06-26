<script>
import AppFooter from './components/AppFooter.vue';
import MainPage from './views/MainPage.vue';
import ActorsPage from './views/ActorsPage.vue';
import PerformancePage from './views/PerformancePage.vue';
import PersonalPage from './views/PersonalPage.vue';
import {RouterView} from 'vue-router';
import router from './router';

export default {
  components: {
    MainPage,
    AppFooter,
    ActorsPage,
    PerformancePage,
    PersonalPage,
    RouterView,
    router,
  }
}

</script>

<template>
  <router-view></router-view>
  <!-- <personal-page></personal-page> -->
  <!-- <main-page></main-page> -->
  <!-- <performance-page></performance-page> -->
  <!-- <actors-page></actors-page> -->
  <app-footer></app-footer>
</template>

<style >
 
</style>
