<script>
  import { useGlobalStore } from '../store';
  export default {
    setup() {
      const { vacanciesList, jobAdvantage } = useGlobalStore();
      return {
        vacanciesList,
        jobAdvantage,
      }
    },
  }
</script>
<template>
  <section class="vacancy">
    <div class="container">
      <h2 class="vacancy__title">Вакансии</h2>
      <p class="vacancy__description">В штат нашей клиники на текущий момент требуются:</p>
      <ul class="vacancy__list vacancy__list--vacancies">
        <li class="vacancy__item vacancy__item--vacancies" v-for="vacancy in vacanciesList" :key="vacancy">
          <p class="vacancy__type">{{ vacancy.type }}</p>
          <p class="vacancy__number">Требуется специалистов: <span class="vacancy__amount">{{ vacancy.amount }}</span></p>
        </li>
      </ul>
      <p class="vacancy__description">Преимущества работы именно у нас:</p>
      <ul class="vacancy__list vacancy__list--advantage">
        <li class="vacancy__item vacancy__item--advantage" v-for="advantage in jobAdvantage" :key="advantage">{{ advantage }}</li>
      </ul>
      <p class="vacancy__job">По вопросам трудоустройства: <a href="tel:+79518300111">8 951 830 01 11</a></p>
    </div>
  </section>
</template>
