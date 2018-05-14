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
  <v-ons-toolbar class="home-toolbar">
    <div v-if="navType=='menu'" class="left">
      <v-ons-toolbar-button @click="toggleMenu()">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div v-else-if="navType=='back'" class="left">
      <v-ons-back-button>戻る</v-ons-back-button>
    </div>
    <div class="center" style="font-size: 15px;font-weight:800;">{{ msg }}</div>
  </v-ons-toolbar>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    msg: {
      default: 'タイトル',
    },
    navType: {
      default: 'menu',
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu', true);
    },
  },
};
</script>
