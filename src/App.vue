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
navbar {
  margin-bottom:100px;
}
</style>

<template>
<v-ons-page id="app">
  <v-ons-splitter>
    <v-ons-splitter-side swipeable collapse width="250px" :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'" :open.sync="menuIsOpen" @update:open="onUserInteraction">
      <side-menu></side-menu>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <router-view></router-view>
    </v-ons-splitter-content>
  </v-ons-splitter>
</v-ons-page>
</template>

<script>
import SideMenu from './components/side-menu/SideMenu';
import store from './store';

export default {
  name: 'app',
  store,
  computed: {
    menuIsOpen() {
      return store.state.menuIsOpen;
    },
  },
  components: {
    SideMenu,
  },
  methods: {
    onUserInteraction(event) {
      console.log(event);   // on click ons-splitter-side-mask, event always false(?)
      store.commit('toggleMenu', event);
    },
    toggleMenu() {
      this.$store.commit('toggleMenu', true);
    },
  },
};
</script>
