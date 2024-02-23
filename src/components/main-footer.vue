<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { locationList } = useGlobalStore();
      return {
        locationList,
      }
    },
  }
</script>

<template>
  <footer class="main-footer">
    <div class="container">
      <section class="main-footer__info">
        <article class="main-footer__geo-info">
          <article class="main-footer__location" v-for="location in locationList" :key="location">
            <p class="main-footer__adress">{{ location.adress }}</p>
            <a class="main-footer__phone" :href="`tel:${location.phone}`">{{ location.phone }}</a>
          </article>
        </article>
        <p class="main-footer__copyright">© Стоматология ООО "АвиценнА"</p>
      </section>
      <span class="main-footer__dev">dev: <a href="https://github.com/Whireless" title="Разработчик">whireless</a></span>
    </div>
  </footer>
</template>
