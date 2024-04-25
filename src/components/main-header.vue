<script>
  import { useGlobalStore } from '../store';
  import { storeToRefs } from 'pinia';

  export default {
    setup() {
      const { menuStatus } = storeToRefs(useGlobalStore());
      const { navList, mobileMenu } = useGlobalStore();
      return {
        menuStatus,
        navList,
        mobileMenu,
      }
    },
  }
</script>

<template>
  <header class="main-header">
    <nav class="main-nav">
      <router-link to="/home" class="main-nav__logo" aria-label="Логотип нашей стоматологии" @click="mobileMenu(true)">АвиценнА</router-link>
      <a class="main-nav__tel" href="tel:+79185662020">+7 (918) 566-20-20</a>
      <ul :class="['main-nav__nav-list', {'main-nav__nav-list--open' : menuStatus}]">
        <li class="main-nav__nav-item"
            v-for="li in navList"
            :key="li">
          <router-link :to="li.href"
                        class="main-nav__nav-link"
                        active-class="main-nav__nav-link--active"
                        @click="mobileMenu(true)">
                        {{ li.name }}
          </router-link>
        </li>
      </ul>
      <button class="main-nav__button"
              @click="mobileMenu()"
              type="button"
              aria-label="Открыть меню">
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
      </button>
    </nav>
  </header>
</template>

<style lang="scss">
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $white;
  padding: 15px 20px;
  border-bottom: 1px solid $blue;
  z-index: 2;

  @media (min-width: $tablet) {
    padding: 20px 50px;
  }

  @media (min-width: $desktop) {
    padding: 25px 100px;
  }

  @media (min-width: $laptop) {
    padding: 30px 120px;
  }
}

.main-nav__logo {
  font-size: 17px;
  text-decoration: none;
  color: $darkblue;
  display: flex;
  align-items: center;
  width: 93px;
  height: 31px;
  padding-left: 37px;
  background-image: url("/img/icons/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  transition: $t05;

  &:hover {
    opacity: $op06;
  }

  @media (min-width: $tablet) {
    font-size: 16px;
  }

  @media (min-width: $desktop) {
    font-size: 23px;
    width: 45px;
    height: 45px;
    padding-left: 60px;
  }
}

.main-nav__tel {
  font-size: 14px;
  text-decoration: none;
  color: $blue;
  transition: $t05;

  &:hover {
    opacity: $op06;
  }

  @media (min-width: $tablet) {
    font-size: 14px;
  }

  @media (min-width: $desktop) {
    font-size: 18px;
  }
}

.main-nav__nav-list {
  position: absolute;
  top: 62px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  height: 85vh;
  background-color: $white;
  padding: 120px 0;
  list-style: none;
  transform: translateX(-130%);
  opacity: 0;
  transition: $t05;

  &+.main-nav__button {
    .main-nav__button-elem {
      &:nth-of-type(1) {
        animation: ease 0.5s topClose forwards;
      }

      &:nth-of-type(2) {
        animation: ease 0.5s mdlClose forwards;
      }

      &:nth-of-type(3) {
        animation: ease 0.5s btmClose forwards;
      }
    }
  }

  &--open {
    transform: translateX(0);
    opacity: 1;

    &+.main-nav__button {
      .main-nav__button-elem {
        &:nth-of-type(1) {
          animation: ease 0.5s topOpen forwards;
        }

        &:nth-of-type(2) {
          animation: ease 0.5s mdlOpen forwards;
        }

        &:nth-of-type(3) {
          animation: ease 0.5s btmOpen forwards;
        }
      }
    }
  }

  @media (min-width: $tablet) {
    position: static;
    flex-direction: row;
    column-gap: 20px;
    height: auto;
    padding: 0;
    transform: scale(1);
    opacity: 1;
  }

  @media (min-width: $desktop) {
    column-gap: 40px;
  }
}

.main-nav__nav-link {
  font-size: 20px;
  text-decoration: none;
  color: $black;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  transition: $t05;
  padding: 15px 30px;

  &:hover {
    color: $white;
    background-color: $blue;
  }

  &--active {
    color: $white;
    background-color: $blue;

    &::before {
      content: "";
      position: absolute;
      left: -5px;
      top: 25px;
      background-color: $white;
      height: 1px;
      width: 25px;
    }
  }

  @media (min-width: $tablet) {
    font-size: 16px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 50px;

    &::before {
      display: none;
    }
  }

  @media (min-width: $desktop) {
    font-size: 19px;
    padding: 8px;
  }
}

.main-nav__button {
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  width: 35px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: $tablet) {
    display: none;
  }
}

.main-nav__button-elem {
  position: relative;
  display: block;
  background-color: $blue;
  width: 100%;
  height: 3px;
  border-radius: 3px;
}
</style>