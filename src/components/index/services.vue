<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { servicesList } = useGlobalStore();
      return {
        servicesList,
      }
    },
  }
</script>

<template>
  <section class="services">
    <div class="container">
      <h2 class="services__title">Услуги</h2>
      <p class="services__description">
        Мы постарались сделать прайс, максимально простым и понятным. <br>
        Цены на наиболее популярные услуги:
      </p>
      <ul class="services__service-list">
        <li :class="['services__service-item', `services__service-item${li.class}`]" v-for="li in servicesList" :key="li">
          <details class="service__details">
            <summary :class="['services__subtitle', `services__subtitle${li.class}`]">{{ li.text }}</summary>
            <article class="services__prices">
              <p class="services__service" v-for="service in li.services" :key="service">{{ service.name }}: <span class="services__price">{{ service.price }}₽</span></p>
            </article>
          </details>
        </li>
      </ul>
    </div>
  </section>
</template>
