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

.<style lang="scss">
.services__title {
  color: $darkblue;
  width: max-content;
  margin: 10px auto;
}

.services__description {
  text-align: center;
  margin-top: 30px;

  @media (min-width: $tablet) {
    margin-top: 50px;
  }

  @media (min-width: $desktop) {
    margin-top: 50px;
  }
}

.services__service-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  margin-top: 30px;
  list-style: none;

  @media (min-width: $tablet) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
  }

  @media (min-width: $desktop) {
    margin-top: 50px;
  }
}

.services__service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  width: 300px;
  padding: 13px 10px;
  border: 1px solid $blue;
  border-radius: 20px;

  @media (min-width: $tablet) {
    width: 290px;
    padding: 18px 15px;

    .service__details {
      &[open] {
        height: max-content;
      }
    }
  }

  @media (min-width: $desktop) {
    width: 310px;
    padding: 23px 20px;
    align-self: start;
  }
}

.service__details {
  width: 100%;

  &[open] {
    .services__subtitle {
      &::after {
        transform: rotate(90deg);
      }
    }
  }

  @media (min-width: $tablet) {
    &[open] {
      height: 140px;
    }
  }
}

.services__subtitle {
  font-size: 16px;
  font-weight: bold;
  display: block;
  width: max-content;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -40px;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    right: -25px;
    background-image: url("/img/icons/arrow.svg");
    background-size: contain;
    width: 20px;
    height: 20px;
    transition: $t03;
  }

  &--general {
    &::before {
      background-image: url("/img/icons/services/general.svg");
    }
  }

  &--prostheses {
    &::before {
      background-image: url("/img/icons/services/prostheses.svg");
    }
  }

  &--caries {
    &::before {
      background-image: url("/img/icons/services/caries.svg");
    }
  }

  &--perodontitis {
    &::before {
      background-image: url("/img/icons/services/perodontitis.svg");
    }
  }

  &--pulpitis {
    &::before {
      background-image: url("/img/icons/services/pulpitis.svg");
    }
  }

  &--crowns {
    &::before {
      background-image: url("/img/icons/services/crowns.svg");
    }
  }

  @media (min-width: $tablet) {
    font-size: 17px;

    &--prostheses {
      &::before {
        top: -4px;
      }
    }

    &::after {
      top: 1px;
    }
  }

  @media (min-width: $desktop) {
    font-size: 19px;

    &::before {
      top: -2px;
    }

    &::after {
      top: 2px;
    }
  }
}

.services__prices {
  display: flex;
  flex-direction: column;
  row-gap: 11px;
  margin-top: 20px;

  @media (min-width: $tablet) {
    margin-top: 25px;
  }
}

.services__service {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: $desktop) {
    font-size: 16px;
  }
}

.services__price {
  font-size: 12px;
  color: $blue;
}
</style>