<style lang="scss" scoped>
.page-title {
  text-align: center;
}
.body {
  margin-top: 100px;
}
</style>

<template>
  <v-ons-page>
    <navbar></navbar>
  <div class="page-content">
    <h3 class="page-title"> Today's Weather </h3>
    <loading-indicator :is-loading="isLoading"></loading-indicator>
    <v-ons-card v-if="isLoading==false">
      <div class="title">{{today.weather[0].main}}</div>
      <div>temp_max：{{today.main.temp_max}}</div>
      <div>temp_min：{{today.main.temp_min}}</div>
    </v-ons-card>
  </div>
  </v-ons-page>
</template>

<script>
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import PostService from '../../services/PostService';
import Navbar from '../../components/navbar/Navbar';
import Config from '../../config/Config';

export default {
  name: 'posts-page',
  components: {
    LoadingIndicator,
    Navbar,
  },
  data() {
    return {
      config: Config,
      isLoading: true,
      today: {},
    };
  },
  mounted() {
    this.isLoading = true;
    PostService.getPosts().then((response) => {
      this.today = response.list[0];
      this.isLoading = false;
    });
  },
};
</script>
