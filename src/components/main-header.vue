<script>
export default {
  data() {
    return {
      navList: [
        {
          href: '/home',
          name: 'Главная',
        },
        {
          href: '/about',
          name: 'О нас',
        },
        {
          href: '/worktime',
          name: 'График работы',
        },
      ],
    }
  },
  methods: {
    openMenu() {
      const page = document.querySelector('body');
      const nav = page.querySelector('.main-nav__nav-list');
      nav.classList.toggle('main-nav__nav-list--open');
      nav.classList.contains('main-nav__nav-list--open') ? page.style.overflow = 'hidden' : page.removeAttribute('style');
    },
    closeMenu() {
      document.querySelector('.main-nav__nav-list').classList.remove('main-nav__nav-list--open');
    },
  },
}
</script>

<template>
  <header class="main-header">
    <nav class="main-nav">
      <router-link to="/home" class="main-nav__logo" aria-label="Логотип нашей стоматологии" v-on:click="closeMenu()"></router-link>
      <p class="main-nav__title">АвиценнА</p>
      <ul class="main-nav__nav-list">
        <li class="main-nav__nav-item"
            v-for="li in navList"
            v-bind:key="li">
          <router-link :to="li.href"
                        class="main-nav__nav-link"
                        active-class="main-nav__nav-link--active"
                        v-on:click="closeMenu()">
                        {{ li.name }}
          </router-link>
        </li>
      </ul>
      <button class="main-nav__button"
              v-on:click="openMenu()"
              type="button"
              aria-label="Открыть меню">
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
        <span class="main-nav__button-elem"></span>
      </button>
    </nav>
  </header>
</template>
