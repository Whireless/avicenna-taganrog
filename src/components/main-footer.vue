<script>
export default {
  data() {
    return {
      locationList: [
        {
          adress: 'г. Таганрог, ул. Ленина, д. 190',
          phone: '+7 (918) 566-20-20',
        },
        {
          adress: 'г. Таганрог, ул. П. Тольятти, д. 26',
          phone: '+7 (918) 581-71-71',
        },
      ],
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
      <section class="main-footer__info">
        <article class="main-footer__geo-info">
          <article class="main-footer__location" v-for="location in locationList" v-bind:key="location">
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
