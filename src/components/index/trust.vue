<script>
export default {
  data() {
    return {
      trustList: [
        {
          title: 'Честные цены, без хитрых уловок',
          description: 'Фиксируем цены в плане лечения, не повышаем в процессе.',
          class: 'trust__info--one',
        },
        {
          title: 'Опытные Врачи',
          description: 'Врачи постоянно совершенствуются в своей специальности, несмотря на богатый опыт работы.',
          class: 'trust__info--two',
        },
        {
          title: 'Комфортные условия',
          description: 'Уютная обстановка и отзывчивый персонал сделают поход к стоматологу максимально приятным.',
          class: 'trust__info--three',
        },
      ],
    }
  }
}
</script>

<template>
  <section class="trust">
    <div class="container">
      <h2 class="trust__title">Нам доверяют пациенты</h2>
      <article :class="['trust__info', info.class]" v-for="info in trustList" v-bind:key="info">
        <h3 class="trust__subtitle">{{ info.title }}</h3>
        <p class="trust__description">{{ info.description }}</p>
      </article>
    </div>
  </section>
</template>
