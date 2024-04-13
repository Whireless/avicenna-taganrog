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
