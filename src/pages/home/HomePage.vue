<style lang="scss" scoped>
.page-title {
  text-align: center;
}
</style>

<template>
  <v-ons-page>
    <navbar></navbar>
    <div class="page-content">
      <h3 class="page-title">
        Today's Weather
      </h3>
      <loading-indicator :is-loading="isLoading"></loading-indicator>
      <v-ons-card v-for="post in posts" :key="post.dt">
        <div class="title">{{post.dt}}</div>
      </v-ons-card>
    </div>
  </v-ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import PostService from '../../services/PostService';
import Config from '../../config/Config';

export default {
  name: 'posts-page',
  components: {
    Navbar,
    LoadingIndicator,
  },
  data() {
    return {
      config: Config,
      isLoading: false,
      posts: [],
      found: 0,
    };
  },
  mounted() {
    this.isLoading = true;
    PostService.getPosts().then((response) => {
      this.posts = response.list;
      this.found = response.cnt;
      this.isLoading = false;
    });
  },
};
</script>
