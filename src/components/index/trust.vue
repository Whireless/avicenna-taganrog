<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { trustList } = useGlobalStore();
      return {
        trustList,
      }
    },
  }
</script>

<template>
  <section class="trust">
    <div class="container">
      <h2 class="trust__title">Нам доверяют пациенты</h2>
      <p class="trust__description">Сеть стоматологических клиник, которой доверяют семьи и вот почему:</p>
      <article :class="['trust__info', info.class]" v-for="info in trustList" :key="info">
        <h3 class="trust__info-subtitle">{{ info.title }}</h3>
        <p class="trust__info-description">{{ info.description }}</p>
      </article>
      <p class="trust__description">Ниже вы можете ознакомится с отзывами о нашей работе:</p>
      <div class="trust__feedback">
        <iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/157213945902?comments">
        </iframe>
        <a href="https://yandex.ru/maps/org/avitsenna/157213945902/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">
          АвиценнА на карте Таганрога — Яндекс Карты
        </a>
      </div>
    </div>
  </section>
</template>
