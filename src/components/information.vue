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

.<style lang="scss">
.information {
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

.information__title {
  color: $darkblue;
  width: max-content;
  margin: 0 auto;
}

.information__subtitle {
  width: max-content;
  margin: 0 auto;
  margin-top: 25px;

  @media (min-width: $desktop) {
    margin-top: 40px;
  }
}

.information__list {
  text-align: justify;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  list-style: none;
  margin-top: 20px;
  padding-left: 10px;
  border-left: 2px solid $blue;

  @media (min-width: $desktop) {
    margin-top: 25px;
  }
}

.information__description {
  margin-top: 10px;
}
</style>