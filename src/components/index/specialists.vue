<script>
export default {
  data() {
    return {
      specialistList: [
        {
          name: 'Зуев Константин Евгеньевич',
          description: 'Зубной врач, высшее образование.',
        },
        {
          name: 'Пестунова Татьяна Владимировна',
          description: 'Зубной врач, среднее образование.',
        },
        {
          name: 'Кравченко Ольга Викторовна',
          description: 'Зубной врач, высшее образование.',
        },
      ],
    }
  }
}
</script>

<template>
  <section class="specialists">
    <div class="container">
      <h2 class="specialists__title">Специалисты</h2>
      <p class="specialists__description">Помогают просто и безболезненно, с предоставлением всего спектра стоматологических услуг</p>
      <ul class="specialists__specialist-list">
        <li class="specialists__specialist-item" v-for="specialist in specialistList" v-bind:key="specialist">
          <h3 class="specialists__specialist-name">{{ specialist.name }}</h3>
          <p class="specialists__specialist-description">{{ specialist.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
