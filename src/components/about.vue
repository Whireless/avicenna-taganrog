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
  <section class="about">
    <div class="container">
      <h2 class="about__title">О нас</h2>
      <h3 class="about__subtitle">Общая информация</h3>
      <ul class="about__list about__list--general">
        <li class="about__item" v-for="li in generalInfo" :key="li">{{ li }}</li>
      </ul>
      <h3 class="about__subtitle">Юридическая информация</h3>
      <ul class="about__list about__list--legal">
        <li class="about__item" v-for="li in legalInfo" :key="li">{{ li }}</li>
      </ul>
    </div>
  </section>
</template>
