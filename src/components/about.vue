<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';

  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { specialistsList, managerList, clinicPhoto } = useGlobalStore();
      return {
        specialistsList,
        managerList,
        clinicPhoto,
        modules: [Navigation, Pagination, Autoplay],
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
  }
</script>

<template>
  <section class="about">
    <div class="container">
      <h2 class="about__title">О клинике</h2>
      <h3 class="about__subtitle about__subtitle--specialists">Специалисты</h3>
      <p class="about__description">Помогают просто и безболезненно, с предоставлением всего спектра стоматологических услуг</p>
      <ul class="about__list about__list--specialists">
        <li class="about__item" v-for="specialist in specialistsList" :key="specialist">
          <h3 class="about__specialist-name">{{ specialist.name }}</h3>
          <p class="about__description">{{ specialist.description }}</p>
        </li>
      </ul>
      <h3 class="about__subtitle about__subtitle--manager">Руководители</h3>
      <p class="about__description">Список руководителей стоматологий</p>
      <ul class="about__list about__list--manager">
        <li class="about__item" v-for="manager in managerList" :key="manager">
          <h3 class="about__specialist-name">{{ manager.name }}</h3>
          <p class="about__description">{{ manager.description }}</p>
        </li>
      </ul>
      <h3 class="about__subtitle about__subtitle--photos">Фотографии</h3>
      <p class="about__description">Наша небольшая фото-галерея</p>
      <swiper :modules="modules"
              :options="swiperOption"
              :space-between="40"
              :pagination="true"
              :speed="600"
              :autoplay="{delay: 2500}">
        <swiper-slide v-for="slide in clinicPhoto" :key="slide">
          <img class="about__clinic-photo" :src="slide.src" :alt="slide.alt" width="100%" height="96%">
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
