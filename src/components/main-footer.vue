<script>
export default {
  data() {
    return {
      // socialList: [
      //   {
      //     name: 'Вконтакте',
      //     href: 'https://vk.com',
      //     class: 'main-footer__social-link--vk',
      //   },
      //   {
      //     name: 'Telegram',
      //     href: 'https://t.me/avicenna_stom_tgn',
      //     class: 'main-footer__social-link--telegram',
      //   },
      // ],
    }
  },
}
</script>

<template>
  <footer class="main-footer">
    <div class="container">
      <!-- <ul class="main-footer__social-list">
        <li class="main-footer__social-item" v-for="li in socialList" v-bind:key="li">
          <a :href="li.href" :class="['main-footer__social-link', li.class]" :aria-label="li.name"></a>
        </li>
      </ul> -->
      <article class="main-footer__info">
        <h4 class="main-footer__title">Можете найти нас по адресу:</h4>
        <p class="main-footer__adress">г. Таганрог, ул. Ленина, д. 190</p>
        <a class="main-footer__phone" href="tel:+7 (918) 566-20-20">+7 (918) 566-20-20</a>
        <p class="main-footer__adress">г. Таганрог, ул. П. Тольятти, д. 26</p>
        <a class="main-footer__phone" href="tel:+7 (918) 581-71-71">+7 (918) 581-71-71</a>
        <p class="main-footer__copyright">© Стоматология ООО "АвиценнА"</p>
      </article>
    </div>
  </footer>
</template>
