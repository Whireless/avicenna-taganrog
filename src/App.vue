<script>
  import mainHeader from './components/main-header.vue';
  import mainFooter from './components/main-footer.vue';

  export default {
    components: {
      mainHeader,
      mainFooter,
    },
  }
</script>

<template>
  <main-header></main-header>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <main-footer></main-footer>
</template>
