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

.<style lang="scss">
.actions {
  margin-top: 62px;

  @media (min-width: $tablet) {
    margin-top: 72px;
  }

  @media (min-width: $desktop) {
    margin-top: 95px;
  }

  @media (min-width: $laptop) {
    margin-top: 106px;
  }
}

.actions__title {
  color: $darkblue;
  width: max-content;
  margin: 0 auto;
}

.actions__description {
  text-align: center;
  margin-top: 25px;
}

.actions__list {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  margin-top: 30px;

  @media (min-width: $tablet) {
    row-gap: 30px;
    margin-top: 40px;
  }

  @media (min-width: $desktop) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 35px;
    margin-top: 50px;
  }
}

.actions__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  border: 1px solid $blue;
  padding: 10px 15px;
  border-radius: 20px;

  @media (min-width: $tablet) {
    row-gap: 20px;
    padding: 15px 20px;
  }

  @media (min-width: $desktop) {
    width: 460px;
    row-gap: 25px;
    padding: 20px 25px;
  }
}

.actions__subtitle {
  border: 1px solid $blue;
  padding: 4px 7px;
  border-radius: 20px;

  @media (min-width: $tablet) {
    padding: 5px 10px;
  }

  @media (min-width: $desktop) {
    padding: 7px 15px;
  }
}

.actions__info {
  text-align: justify;
}

.actions__percent {
  font-weight: bold;
  color: $blue;
  align-self: end;

  @media (min-width: $desktop) {
    margin-top: auto;
  }
}

.actions__details {
  text-align: center;
  margin-top: 25px;

  @media (min-width: $tablet) {
    width: max-content;
    margin: 35px auto 0 auto;
    padding-bottom: 5px;
    border-bottom: 1px solid $blue;
  }

  @media (min-width: $desktop) {
    margin: 45px auto 0 auto;
    padding-bottom: 7px;
  }
}
</style>