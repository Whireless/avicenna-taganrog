<script>
import intro from './index/intro.vue';
import services from './index/services.vue';
import trust from './index/trust.vue';
import specialists from './index/specialists.vue';

export default {
  components: {
    intro,
    services,
    trust,
    specialists,
  },
}
</script>

<template>
  <main>
    <intro></intro>
    <services></services>
    <trust></trust>
    <specialists></specialists>
  </main>
</template>
