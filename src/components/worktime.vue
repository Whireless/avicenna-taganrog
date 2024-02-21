<script>
export default {
  data() {
    return {
      worktimeList: [
        {
          day: 'Понедельник',
          time: '09:00 - 18:00',
        },
        {
          day: 'Вторник',
          time: '09:00 - 18:00',
        },
        {
          day: 'Среда',
          time: '09:00 - 18:00',
        },
        {
          day: 'Четверг',
          time: '09:00 - 18:00',
        },
        {
          day: 'Пятница',
          time: '09:00 - 18:00',
        },
        {
          day: 'Суббота',
          time: '10:00 - 15:00',
        },
        {
          day: 'Воскресенье',
          time: 'Выходной',
        },
      ],
    }
  }
}
</script>

<template>
  <section class="worktime">
    <div class="container">
      <h2 class="worktime__title">График работы</h2>
      <p class="worktime__description">Наша стоматологическая клиника работает по текущему графику:</p>
      <ul class="worktime__time-list">
        <li class="worktime__time-item" v-for="li in worktimeList" v-bind:key="li">
          {{ li.day }}<span>{{ li.time }}</span>
        </li>
      </ul>
      <p class="worktime__call">В рабочие дни вы можете узнать по поводу свободных мест и записаться позвонив нам:</p>
      <article class="worktime__numbers">
        <p class="worktime__number">ул. Ленина, д. 190:<a href="tel:+7 (918) 566-20-20">+7 (918) 566-20-20</a></p>
        <p class="worktime__number">ул. П. Тольятти, д. 26:<a href="tel:+7 (918) 581-71-71">+7 (918) 581-71-71</a></p>
      </article>
    </div>
  </section>
</template>
