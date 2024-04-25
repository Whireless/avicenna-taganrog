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

.<style lang="scss">
.about {
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

.about__title {
  color: $darkblue;
  width: max-content;
  margin: 0 auto;
}

.about__subtitle {
  width: max-content;
  margin: 0 auto;
  margin-top: 40px;

  @media (min-width: $tablet) {
    margin-top: 50px;
  }

  @media (min-width: $desktop) {
    margin-top: 60px;
  }
}

.about__description {
  text-align: center;
  margin-top: 25px;
}

.about__list {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  list-style: none;
  margin-top: 25px;

  @media (min-width: $tablet) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 30px;
    margin-top: 40px;
  }

  @media (min-width: $desktop) {
    row-gap: 35px;
  }
}

.about__item {
  position: relative;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  row-gap: 15px;
  width: 293px;
  padding: 50px 20px 10px 20px;
  border: 1px solid $blue;
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 45%;
    width: 40px;
    height: 40px;
    background-image: url("/img/icons/team.svg");
    background-size: contain;
  }

  @media (min-width: $tablet) {
    row-gap: 20px;
    width: 270px;
    // height: 115px;
    height: 100px;
    padding: 80px 20px 20px 20px;

    &::before {
      top: 25px;
    }
  }

  @media (min-width: $desktop) {
    row-gap: 25px;
    width: 360px;
    height: 91px;
    // height: 80px;
  }
}

.about__clinic-photo {
  object-fit: cover;
  border-radius: 20px;
}
</style>