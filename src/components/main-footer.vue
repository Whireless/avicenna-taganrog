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

.<style lang="scss">
.main-footer {
  font-size: 15px;
  border-top: 1px solid $blue;
}

.main-footer__links {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: $tablet) {
    row-gap: 13px;
  }
}

.main-footer__link {
  text-decoration: none;
  color: $blue;
  width: max-content;
  transition: $t03;

  &:hover {
    opacity: $op06;
  }
}

.main-footer__info {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: $tablet) {
    row-gap: 15px;
  }

  @media (min-width: $desktop) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}

.main-footer__search {
  font-weight: bold;
  margin-top: 15px;

  @media (min-width: $tablet) {
    margin-top: 20px;
  }

  @media (min-width: $desktop) {
    flex-basis: 100%;
    margin-top: 25px;
  }
}

.main-footer__geo-info {
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media (min-width: $tablet) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: $desktop) {
    column-gap: 25px;
  }
}

.main-footer__location {
  position: relative;
  padding: 5px 5px 5px 35px;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 0;
    width: 30px;
    height: 30px;
    background-image: url('/img/icons/geo.svg');
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: $tablet) {
      top: 10px;
    }
  }
}

.main-footer__phone {
  text-decoration: none;
  color: $blue;
  transition: $t03;

  &:hover {
    opacity: $op06;
  }
}

.main-footer__dev {
  font-size: 13px;
  line-height: 16px;
  color: $grey;
  display: block;
  width: max-content;
  margin: 10px auto 0 auto;

  @media (min-width: $desktop) {
    margin: 0 0 0 auto;
  }
}
</style>