<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { worktimeList } = useGlobalStore();
      return {
        worktimeList,
      }
    },
  }
</script>

<template>
  <section class="worktime">
    <div class="container">
      <h2 class="worktime__title">График работы</h2>
      <p class="worktime__description">Наши стоматологии работают по следующему графику:</p>
      <ul class="worktime__time-list">
        <li class="worktime__time-item" v-for="li in worktimeList" :key="li">
          {{ li.day }}<span>{{ li.time }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
