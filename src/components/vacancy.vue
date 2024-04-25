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

.<style lang="scss">
.vacancy {
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

.vacancy__title {
  color: $darkblue;
  width: max-content;
  margin: 0 auto;
}

.vacancy__description {
  text-align: center;
  margin-top: 25px;

  @media (min-width: $tablet) {
    margin-top: 30px;
  }

  @media (min-width: $desktop) {
    margin-top: 40px;
  }
}

.vacancy__list {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  &--vacancies {
    align-content: center;
    align-items: center;
    row-gap: 15px;
  }

  &--advantage {
    font-weight: bold;
    row-gap: 5px;
  }

  @media (min-width: $tablet) {
    margin-top: 30px;

    &--vacancies {
      flex-direction: row;
      justify-content: space-around;
      row-gap: 20px;
    }

    &--advantage {
      row-gap: 10px;
    }
  }

  @media (min-width: $desktop) {
    &--vacancies {
      row-gap: 25px;
    }
  }
}

.vacancy__item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  &--vacancies {
    font-size: 16px;
    text-align: center;
    width: max-content;
    padding: 10px 20px;
    border: 1px solid $blue;
    border-radius: 20px;
  }

  &--advantage {
    font-size: 14px;
    position: relative;
    padding-left: 20px;

    &::before {
      content: "\2714";
      position: absolute;
      left: 0px;
    }
  }

  @media (min-width: $tablet) {
    &--vacancies {
      font-size: 18px;
      padding: 15px 25px;
    }

    &--advantage {
      font-size: 17px;
      padding-left: 25px;
    }
  }

  @media (min-width: $desktop) {
    &--vacancies {
      font-size: 21px;
      padding: 20px 30px;
    }

    &--advantage {
      font-size: 20px;
      padding-left: 30px;
    }
  }
}

.vacancy__type {
  font-weight: bold;
  align-self: center;
  width: max-content;
  padding: 2px 10px;
  border: 1px solid $blue;
  border-radius: 20px;

  @media (min-width: $tablet) {
    padding: 3px 15px;
  }

  @media (min-width: $desktop) {
    padding: 5px 17px;
  }
}

.vacancy__job {
  text-align: justify;
  margin-top: 30px;

  a {
    text-decoration: none;
    color: $blue;
    transition: $t03;

    &:hover {
      opacity: $op06;
    }
  }
}
</style>