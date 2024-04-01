<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { generalInfo, legalInfo } = useGlobalStore();
      return {
        generalInfo,
        legalInfo,
      }
    },
  }
</script>

<template>
  <section class="information">
    <div class="container">
      <h2 class="information__title">Информация</h2>
      <h3 class="information__subtitle">Общая информация</h3>
      <ul class="information__list information__list--general">
        <li class="information__item" v-for="li in generalInfo" :key="li">{{ li }}</li>
      </ul>
      <h3 class="information__subtitle">Юридическая информация</h3>
      <ul class="information__list information__list--legal">
        <li class="information__item" v-for="li in legalInfo" :key="li">{{ li }}</li>
      </ul>
    </div>
  </section>
</template>
