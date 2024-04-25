<script>
  import { useGlobalStore } from '/src/store';

  export default {
    setup() {
      const { advantagesList } = useGlobalStore();
      return {
        advantagesList,
      }
    },
  }
</script>

<template>
  <section class="intro">
    <div class="container">
      <article class="intro__info">
        <h1 class="intro__title">Стоматология АвиценнА</h1>
        <p class="intro__subtitle">Лечение зубов в тот же день</p>
        <p class="intro__description">Мы проведем полную консультацию, профессиональную гигиену полости рта, лечение зубов и десен</p>
        <!-- <router-link to="/" class="intro__go-heal">Записаться на приём</router-link> -->
      </article>
      <article class="intro__advantages">
        <ul class="intro__advantages-list">
          <li :class="['intro__advantages-item', li.class]" v-for="li in advantagesList" :key="li">{{ li.text }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

.<style lang="scss">
.intro {
  margin-top: 62px;
  background-image: url("/img/intro-bg.png");
  background-position: 70%;
  background-repeat: no-repeat;
  background-size: cover;

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

.intro__title {
  font-weight: 300;
  position: relative;
  margin-top: 60px;
  margin-left: 25px;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -24px;
    height: 1px;
    width: 20px;
    background-color: $black;
    border-radius: 5px;
  }
}

.intro__subtitle {
  font-weight: 700;
  color: $darkblue;
  margin-top: 10px;

  @media (min-width: $tablet) {
    margin-top: 15px;
  }

  @media (min-width: $desktop) {
    margin-top: 20px;
  }
}

.intro__description {
  margin-top: 20px;

  @media (min-width: $tablet) {
    margin-top: 25px;
  }

  @media (min-width: $desktop) {
    width: 870px;
    margin-top: 30px;
  }
}

// .intro__go-heal {
//   font-size: 14px;
//   color: $white;
//   text-decoration: none;
//   display: block;
//   background-color: $blue;
//   width: max-content;
//   margin-top: 25px;
//   padding: 15px 25px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: $t05;

//   &:hover {
//     opacity: $op06;
//   }

//   @media (min-width: $tablet) {
//     font-size: 16px;
//     margin-top: 30px;
//   }

//   @media (min-width: $desktop) {
//     margin-top: 35px;
//   }
// }

.intro__advantages {
  margin-top: 35px;
}

.intro__advantages-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  list-style: none;

  @media (min-width: $tablet) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.intro__advantages-item {
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(100%, 100%, 100%, 0.9);
  width: 290px;
  padding: 50px 20px 15px 20px;
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    width: 35px;
    height: 35px;
  }

  &--team {
    &::before {
      background-image: url("/img/icons/team.svg");
    }
  }

  &--offices {
    &::before {
      background-image: url("/img/icons/offices.svg");
    }
  }

  &--geo {
    &::before {
      background-image: url("/img/icons/geo.svg");
    }
  }

  @media (min-width: $tablet) {
    font-size: 15px;
    width: 170px;
    height: 70px;

    &::before {
      left: 90px;
    }
  }

  @media (min-width: $desktop) {
    font-size: 17px;
    width: 300px;
    height: 55px;

    &::before {
      left: 150px;
    }
  }
}
</style>