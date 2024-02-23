<script>
export default {
  data() {
    return {
      servicesList: [
        {
          text: 'Лечение кариеса',
          class: '--caries',
          services: [
            {
              name: 'Пломба «VALUX» (светоотверждаемая)',
              price: '1500',
            },
            {
              name: 'Пломба «GRADIA» (светоотверждаемая)',
              price: '1700',
            },
            {
              name: 'Прямой винир «GRADIA»',
              price: '2200',
            },
          ],
        },
        {
          text: 'Лечение переодонтита',
          class: '--perodontitis',
          services: [
            {
              name: 'Однокорневой',
              price: '2500',
            },
            {
              name: 'Двухкорневой',
              price: '3000',
            },
            {
              name: 'Трехкорневой',
              price: '3500',
            },
          ],
        },
        {
          text: 'Лечение пульпита',
          class: '--pulpitis',
          services: [
            {
              name: 'Однокорневой',
              price: '2000',
            },
            {
              name: 'Двухкорневой',
              price: '2500',
            },
            {
              name: 'Трехкорневой',
              price: '3200',
            },
          ],
        },
        {
          text: 'Коронки',
          class: '--crowns',
          services: [
            {
              name: 'Снятие одной коронки',
              price: '200',
            },
            {
              name: 'Фиксация одной коронки',
              price: '250',
            },
          ],
        },
        {
          text: 'Зубные отложения',
          class: '--deposits',
          services: [
            {
              name: 'Снятие зубных отложений ультразвуком (за один зуб)',
              price: '100',
            },
          ],
        },
        {
          text: 'Установка штифтов',
          class: '--pins',
          services: [
            {
              name: 'Анкерный штифт с композитом',
              price: '2200',
            },
            {
              name: 'Титановый штифт с композитом',
              price: '2500',
            },
          ],
        },
        {
          text: 'Протезирование',
          class: '--prostheses',
          services: [
            {
              name: 'Коронка металлическая штампованная с напылением',
              price: '1500',
            },
            {
              name: 'Коронка металлическая штампованная с пластмассовой облицовкой',
              price: '2000',
            },
            {
              name: 'Коронка металлическая цельнолитая с напылением',
              price: '2200',
            },
            {
              name: 'Коронка металлокерамическая',
              price: '3500',
            },
            {
              name: 'Съемный протез акриловый',
              price: '6000',
            },
            {
              name: 'Съемный протез термопластичный',
              price: '12000',
            },
          ],
        },
      ],
    }
  },
}
</script>

<template>
  <section class="services">
    <div class="container">
      <h2 class="services__title">Услуги</h2>
      <p class="services__description">Мы постарались сделать прайс, максимально простым и понятным.</p>
      <ul class="services__service-list">
        <li :class="['services__service-item', `services__service-item${li.class}`]" v-for="li in servicesList" v-bind:key="li">
          <h3 :class="['services__subtitle', `services__subtitle${li.class}`]">{{ li.text }}</h3>
          <article class="services__prices">
            <p class="services__service" v-for="service in li.services" v-bind:key="service">{{ service.name }}: <span class="services__price">{{ service.price }}₽</span></p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
