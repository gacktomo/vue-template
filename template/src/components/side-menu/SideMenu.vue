<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>

<template>
  <v-ons-page>
    <v-ons-toolbar modifier="transparent"></v-ons-toolbar>
    <div class="header">
      <img src="../../assets/noimage.jpeg">
    </div>
    <div align="center">
      <router-link to="user-page">{{info.name}}</router-link>
      <p>user ID: {{info.ID}}</p>
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
</template>

<script>
import { mapGetters } from 'vuex';
import store from '../../store';

export default {
  name: 'side-menu',
  store,
  data() {
    return {
      msg: 'OpenWeatherMap',
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
        {
          label: 'Test',
          routeName: 'test',
          icon: 'fa-info',
        },
      ],
    };
  },
  computed: mapGetters({
    info: 'getInfo',
  }),
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
      store.commit('toggleMenu', false);
    },
  },
};
</script>
