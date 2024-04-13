<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { locationList, footerNav } = useGlobalStore();
      return {
        locationList,
        footerNav,
      }
    },
  }
</script>

<template>
  <footer class="main-footer">
    <div class="container">
      <article class="main-footer__links">
        <router-link class="main-footer__link" v-for="link in footerNav" :key="link" :to="link.href">{{ link.name }}</router-link>
      </article>
      <section class="main-footer__info">
        <p class="main-footer__search">Нас можно найти по адресу:</p>
        <article class="main-footer__geo-info">
          <article class="main-footer__location" v-for="location in locationList" :key="location">
            <p class="main-footer__adress">{{ location.adress }}</p>
            <a class="main-footer__phone" :href="`tel:${location.phone}`">{{ location.phone }}</a>
          </article>
        </article>
        <iframe class="main-footer__rating" src="https://yandex.ru/sprav/widget/rating-badge/157213945902?type=rating" width="150" height="50" frameborder="0"></iframe>
        <p class="main-footer__copyright">© Стоматология ООО "АвиценнА"</p>
      </section>
      <span class="main-footer__dev">dev: <a href="https://github.com/Whireless" title="Разработчик">whireless</a></span>
    </div>
  </footer>
</template>
