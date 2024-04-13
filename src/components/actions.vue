<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { actionsList } = useGlobalStore();
      return {
        actionsList,
      }
    },
  }
</script>

<template>
  <section class="actions">
    <div class="container">
      <h2 class="actions__title">Акции</h2>
      <p class="actions__description">Тут вы можете узнать про акции проводимые нашей клиникой</p>
      <ul class="actions__list">
        <li class="actions__item" v-for="action in actionsList" :key="action">
          <h3 class="actions__subtitle">{{ action.name }}</h3>
          <p class="actions__info">{{ action.description }}</p>
          <span class="actions__percent">{{ action.percent }}</span>
          <span class="actions__time">{{action.time}}</span>
        </li>
      </ul>
      <p class="actions__details">Подробности акций и точные сроки уточняйте у администратора.</p>
    </div>
  </section>
</template>
