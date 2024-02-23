<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { specialistsList } = useGlobalStore();
      return {
        specialistsList,
      }
    },
  }
</script>

<template>
  <section class="specialists">
    <div class="container">
      <h2 class="specialists__title">Специалисты</h2>
      <p class="specialists__description">Помогают просто и безболезненно, с предоставлением всего спектра стоматологических услуг</p>
      <ul class="specialists__specialist-list">
        <li class="specialists__specialist-item" v-for="specialist in specialistsList" :key="specialist">
          <h3 class="specialists__specialist-name">{{ specialist.name }}</h3>
          <p class="specialists__specialist-description">{{ specialist.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
