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

.<style lang="scss">
.trust {
  background-color: $grey1;
}

.trust__title {
  color: $darkblue;
  margin: 0 auto;
  width: max-content;
}

.trust__description {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;

  @media (min-width: $tablet) {
    margin-top: 40px;
  }

  @media (min-width: $desktop) {
    margin-top: 50px;
  }
}

.trust__info {
  text-align: justify;
  position: relative;
  background-color: $white;
  width: 309px;
  margin: 0 auto;
  padding: 55px 13px 13px 13px;
  border-radius: 20px;

  &+.trust__info {
    margin-top: 20px;
  }

  &::before {
    font-size: 25px;
    line-height: 28px;
    left: 15px;
    top: 20px;
    color: $blue;
    position: absolute;
  }

  &--one {
    &::before {
      content: "1";
    }
  }

  &--two {
    &::before {
      content: "2";
    }
  }

  &--three {
    &::before {
      content: "3";
    }
  }

  @media (min-width: $tablet) {
    width: 628px;
    padding: 70px 20px 20px 20px;

    &::before {
      font-size: 30px;
      left: 19px;
    }
  }

  @media (min-width: $desktop) {
    padding: 70px 25px 25px 25px;

    &::before {
      left: 24px;
    }

    &--one {
      margin: 0 auto 0 0;
    }

    &--three {
      margin: 0 0 0 auto;
    }
  }
}

.trust__info-description {
  margin-top: 10px;

  @media (min-width: $tablet) {
    margin-top: 20px;
  }
}

.trust__feedback {
  position: relative;
  width: 335px;
  height: 730px;
  margin: 30px auto 0 auto;
  overflow: hidden;

  @media (min-width: $tablet) {
    width: 668px;
    height: 700px;
    margin: 40px auto 0 auto;
  }

  @media (min-width: $desktop) {
    width: 760px;
    height: 690px;
    margin: 50px auto 0 auto;
  }
}
</style>