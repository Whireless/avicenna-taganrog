<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';

  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { specialistsList, adminsList, managersList, clinicPhoto } = useGlobalStore();
      return {
        specialistsList,
        adminsList,
        managersList,
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
          <p class="about__specialist-status">{{ specialist.description }}</p>
        </li>
      </ul>
      <h3 class="about__subtitle about__subtitle--admins">Администраторы</h3>
      <p class="about__description">Наши администраторы готовы помочь вам с любым вопросом</p>
      <ul class="about__list about__list--admins">
        <li class="about__item" v-for="admin in adminsList" :key="admin">
          <h3 class="about__specialist-name">{{ admin.name }}</h3>
          <p class="about__specialist-status">{{ admin.description }}</p>
        </li>
      </ul>
      <h3 class="about__subtitle about__subtitle--managers">Руководители</h3>
      <p class="about__description">Список руководителей наших клиник</p>
      <ul class="about__list about__list--managers">
        <li class="about__item" v-for="manager in managersList" :key="manager">
          <h3 class="about__specialist-name">{{ manager.name }}</h3>
          <p class="about__specialist-status">{{ manager.description }}</p>
        </li>
      </ul>
      <h3 class="about__subtitle about__subtitle--photos">Фотографии</h3>
      <p class="about__description">Фото-галерея наших клиник</p>
      <swiper :modules="modules"
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
