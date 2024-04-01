<script>
import intro from './index/intro.vue';
import services from './index/services.vue';
import trust from './index/trust.vue';
import worktime from './index/worktime.vue';


export default {
  components: {
    intro,
    services,
    trust,
    worktime,
  },
}
</script>

<template>
  <main>
    <intro></intro>
    <services></services>
    <trust></trust>
    <worktime></worktime>
  </main>
</template>
