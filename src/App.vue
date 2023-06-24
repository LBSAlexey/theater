<script>
import AppFooter from './components/AppFooter.vue';
import MainPage from './views/MainPage.vue';
import ActorsPage from './views/ActorsPage.vue';
import PerformancePage from './views/PerformancePage.vue';

export default {
  components: {
    MainPage,
    AppFooter,
    ActorsPage,
    PerformancePage,
  }
}

</script>

<template>
  <main-page></main-page>
  <!-- <performance-page></performance-page> -->
  <!-- <actors-page></actors-page> -->
  <app-footer></app-footer>
</template>

<style >
 
</style>
