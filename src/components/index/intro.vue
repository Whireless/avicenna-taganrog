<script>
export default {
  data() {
    return {
      advantageList: [
        {
          text: 'Команда квалифицированных специалистов',
          class: 'intro__advantages-item--team',
        },
        {
          text: 'Сеть стоматологических клиник',
          class: 'intro__advantages-item--offices',
        },
        {
          text: 'Удобное расположение',
          class: 'intro__advantages-item--geo',
        },
      ],
    }
  }
}
</script>

<template>
  <section class="intro">
    <div class="container">
      <article class="intro__info">
        <h1 class="intro__title">Стоматология АвиценнА</h1>
        <p class="intro__subtitle">Лечение зубов в тот же день</p>
        <p class="intro__description">Мы проведем полную консультацию, профессиональную гигиену полости рта, лечение зубов и десен</p>
        <router-link to="/worktime" class="intro__go-heal">Записаться на приём</router-link>
      </article>
      <article class="intro__advantages">
        <ul class="intro__advantages-list">
          <li :class="['intro__advantages-item', li.class]" v-for="li in advantageList" v-bind:key="li">{{ li.text }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
