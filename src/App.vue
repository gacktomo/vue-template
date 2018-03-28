<style lang="scss" scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-item {
  cursor: pointer;
}

ons-list-item {
  cursor: pointer;
}
</style>
<template>
<v-ons-page id="app">
  <v-ons-splitter>
    <v-ons-splitter-side swipeable collapse width="250px" :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'" :open.sync="menuIsOpen" @update:open="onUserInteraction">
      <v-ons-page>
        <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
        <div class="header">
          <img src="./assets/onsenui-logo.png">
        </div>

        <v-ons-list-title>Onsen UI Essential Links</v-ons-list-title>
        <v-ons-list>
          <v-ons-list-item modifier="chevron" v-for="item in essentialLinks" @click="goTo(item.routeName)" :key="item.routeName">
            <div class="left">
              <v-ons-icon fixed-width :icon="item.icon"></v-ons-icon>
            </div>
            <div class="center">{{ item.label }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <router-view></router-view>
    </v-ons-splitter-content>
  </v-ons-splitter>
</v-ons-page>
</template>

<script>
import HomePage from './pages/home/HomePage';
import store from './store';

export default {
  name: 'app',
  store,
  computed: {
    menuIsOpen() {
      return store.state.menuIsOpen;
    },
  },
  data() {
    return {
      essentialLinks: [
        {
          label: 'Home',
          routeName: 'home',
          icon: 'fa-home',
        },
        {
          label: 'About',
          routeName: 'posts',
          icon: 'fa-info',
        },
      ],
    };
  },
  components: {
    HomePage,
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
      store.commit('toggleMenu', false);
    },
    onUserInteraction(event) {
      // console.log(event);   // on click ons-splitter-side-mask, event always false(?)
      store.commit('toggleMenu', event);
    },
  },
};
</script>
