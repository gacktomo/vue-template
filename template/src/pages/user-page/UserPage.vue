<style lang='scss' scoped>
.page-title {
  text-align: center;
}
.body {
  margin-top: 50px;
}
</style>

<template>
  <v-ons-page>
    <navbar></navbar>
    <v-ons-card>
    <div align="center">
      <h3>My Page</h3>
      <img src="../../assets/noimage.jpeg">
      <b><p>{{info.name}}</p></b>
      <p>user ID: {{info.ID}}</p>
    </div>
    </v-ons-card>

  </v-ons-page>

</template>


<script>
import { mapGetters } from 'vuex';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import Navbar from '../../components/navbar/Navbar';

export default{
  name: 'user-page',
  components: {
    LoadingIndicator,
    Navbar,
  },
  computed: mapGetters({
    info: 'getInfo',
  }),
};
</script>
