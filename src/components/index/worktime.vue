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
      <h3 class="worktime__go">Приходите лечить зубы к нам, и озарите этот мир здоровой улыбкой!</h3>
    </div>
  </section>
</template>

.<style lang="scss">
.worktime__title {
  color: $darkblue;
  width: max-content;
  margin: 0 auto;
}

.worktime__description {
  text-align: center;
  margin-top: 40px;

  @media (min-width: $tablet) {
    margin-top: 50px;
  }

  @media (min-width: $desktop) {
    margin-top: 60px;
  }
}

.worktime__time-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 30px;

  @media (min-width: $tablet) {
    row-gap: 25px;
    margin-top: 40px;
  }

  @media (min-width: $desktop) {
    row-gap: 35px;
    margin-top: 50px;
  }
}

.worktime__time-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;
  border-bottom: 1px solid $blue;

  span {
    font-weight: 500;
  }

  @media (min-width: $desktop) {
    padding-bottom: 5px;
  }
}

.worktime__go {
  text-align: center;
  margin-top: 25px;

  @media (min-width: $tablet) {
    margin-top: 35px;
  }

  @media (min-width: $desktop) {
    margin-top: 40px;
  }
}
</style>