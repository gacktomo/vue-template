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
  <div class='page-content' align='center'>
    <v-ons-list> 
      <v-ons-list-header>
        <v-ons-icon icon="ion-favorite, material:md-favorite"></v-ons-icon>
        リスト
      </v-ons-list-header>
      <v-ons-list-item @click="goRegion">地域:  {{currentArea.name}}</v-ons-list-item>
      <v-ons-list-item @click="goRegion">並び順：人気順</v-ons-list-item>
    </v-ons-list>
    <!-- <v-ons-list-header>話題のデート体験記</v-ons-list-header> -->
    <v-ons-card v-for='item in experiences' :v-bind='item' v-bind:key="item.id" @click="goPlan(item.id)">
      <img v-bind:src="item.courses[0].thumbnail" style="width: 100%">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="content">
        {{ item.detail }}
      </div>
    </v-ons-card>
    <v-ons-fab @click="goCreate" style="position:fixed;" modifier="material" position="bottom right" >
      <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
  </div>
  </v-ons-page>
</template>

<script>
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import CreatePlan from '../../pages/create-plan/CreatePlan';
import RegionPage from '../../pages/region/Region';
import DetailPlan from '../../pages/detail-plan/DetailPlan';
import Navbar from '../../components/navbar/Navbar';
import Config from '../../config/Config';

export default {
  name: 'posts-page',
  components: {
    LoadingIndicator,
    Navbar,
  },
  methods: {
    goCreate() {
      this.$emit('push-page', CreatePlan)
    },
    goRegion() {
      this.$emit('push-page', RegionPage)
    },
    goPlan(id) {
      this.$emit('push-page', {
        extends: DetailPlan,
        onsNavigatorProps: {
          plan_id: id,
        }
      })
    },
  },
  created() {
    this.axios.get("http://59.157.6.140:3000/plans")
    .then((res) => {
      console.log(res.data);
      this.experiences = res.data
    });
  },
  data() {
    return {
      config: Config,
      experiences: [
        {
          title: 'えはまの奮発日記',
          detail: 'tinderで知り合った女性と食事することになりました。しかし女性の右手には...',
          path: 'detail-plan',
          color: '#085078',
          courses: [{thumbnail:""}]
        },
        {
          title: 'sawlowの遅漏体験',
          detail: '...',
          path: 'detail-plan',
          color: '#085078',
          courses: [{thumbnail:""}]
        },
      ],
    };
  },
  computed: {
    currentArea() {
      return this.$store.state.currentArea;
    },
  }
};
</script>
