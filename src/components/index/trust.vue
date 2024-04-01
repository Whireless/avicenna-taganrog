<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { trustList } = useGlobalStore();
      return {
        trustList,
      }
    },
  }
</script>

<template>
  <section class="trust">
    <div class="container">
      <h2 class="trust__title">Нам доверяют пациенты</h2>
      <p class="trust__intro">Сеть стоматологических клиник которой доверяют семьи, и вот почему:</p>
      <article :class="['trust__info', info.class]" v-for="info in trustList" :key="info">
        <h3 class="trust__subtitle">{{ info.title }}</h3>
        <p class="trust__description">{{ info.description }}</p>
      </article>
    </div>
  </section>
</template>
