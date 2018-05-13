<template>
  <!-- <ons-page> -->
  <ons-page>
    <!-- <navbar></navbar> -->
    <navbar navType="back" v-bind:msg="planname"></navbar>
    <!-- <h1 align="center"> 鹿児島県内のデートスポット </h1> -->
    <!-- <plan-component></plan-component>
    <plan-component></plan-component>
    <plan-component></plan-component> -->

    <!-- <div class="right">
      <v-ons-button @click="$ons.notification.alert(String(random_nam))">Click me</v-ons-button>
    </div> -->
    <v-ons-popover cancelable
      :visible.sync="popoverVisible"
      :target="popoverTarget"
      :direction="popoverDirection"
      :cover-target="coverTarget"
    >
      <v-ons-list v-for="item in items" v-bind:key="item.id">
        {{ item.title }}
      </v-ons-list>
    </v-ons-popover>
    <!-- {{ $route.params.id }} -->
    <!-- ここから -->
    <div>
      <v-ons-list v-for="(plan, index) in plans" v-bind:key="plan.id" modifier="inset" style="margin: 10px 40px 20px 30px">
        <v-ons-list-header> {{ plan.id }}位 <v-ons-icon icon='fa-star' v-show="index <= 2">&nbsp; おすすめ！</v-ons-icon></v-ons-list-header>
        <v-ons-list-item modifier="longdivider">
          <div class="left">
            <img class="list-item__thumbnail" v-bind:src='plan.thumbnail'>
          </div>
          <div class="right" style="font-size: 20px">
            <i class="zmdi zmdi-comment-outline" style="color: green;" tappable @click="showPopover($event, 'left')"></i>
            &nbsp;
            &nbsp;
            <i class="zmdi zmdi-favorite-outline" style="color: blue;"></i>
            &nbsp;
          </div>
          <div class="center" tappable @click="goPlan(plan.id)">
            <span class="list-item__title">
              {{ plan.title }}
            </span>
            <span class="list-item__subtitle">
              {{ plan.detail }}
            </span>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
    <!-- ここまで -->
    
    <!-- ここから -->
    <!-- <v-ons-list v-for="(item, index) in items" v-bind:key="item.id" modifier="inset" style="margin: 10px 40px 20px 30px">
      <v-ons-list-header> {{ item.id }}位 <v-ons-icon icon='fa-star' v-show="index <= 2">&nbsp; おすすめ！</v-ons-icon></v-ons-list-header>
      <v-ons-list-item modifier="longdivider">
        <div class="left">
          <img class="list-item__thumbnail" v-bind:src='item.src'>
        </div>
        <div class="right" style="font-size: 20px">
          <i class="zmdi zmdi-comment-outline" style="color: green;" tappable @click="showPopover($event, 'left')"></i>
          &nbsp;
          {{ item.comment }}
          &nbsp;
          <i class="zmdi zmdi-favorite-outline" style="color: blue;"></i>
          &nbsp;
          {{ item.love }}
        </div>
        <div class="center" tappable @click="$router.push({ name: 'detail-plan' });">
          <span class="list-item__title">
            {{ item.title }}
          </span>
          <span class="list-item__subtitle">
            {{ item.sub_title }}
          </span>
        </div>
      </v-ons-list-item>
    </v-ons-list> -->
    <!-- ここまで -->
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import PlanComponent from '../../components/plan/Plan';
import DetailPlan from '../../pages/detail-plan/DetailPlan';

export default {
  name: 'test',
  components: {
    Navbar,
    PlanComponent,
  },
  props: {
    pref_id: {
      default: 1,
    },
  },
  mounted() {
    const apiURL = `http://59.157.6.140:3000/prefectures/${this.pref_id}`;
    this.axios.get(apiURL).then((res) => {
      this.plans = res.data.plans;
      this.planname = `${res.data.name}のデートスポット`;
      console.log(res);
    })
    .catch(err => console.log(err));
  },
  // mounted() {
  //   console.log(this.$route.params.id);
  // },
  methods: {
    goPlan(id) {
      this.$emit('push-page', {
        extends: DetailPlan,
        onsNavigatorProps: {
          plan_id: id,
        }
      })
    },
    showPopover(event, direction, coverTarget = false) {
      this.popoverTarget = event;
      this.popoverDirection = direction;
      this.coverTarget = coverTarget;
      this.popoverVisible = true;
    },
  },
  data() {
    return {
      popoverVisible: false,
      popoverTarget: null,
      popoverDirection: 'up',
      coverTarget: false,

      plans: [],
      planname: '',
      state: true,
      count: 5,
      random_nam: Math.random(),

      items: [
        {
          id: 1,
          title: 'ディズニーランド',
          sub_title: 'ド定番！',
          src: 'https://media1.tokyodisneyresort.jp/images/adventure/event/767_thumbnail.jpg?mod=20180207124628、https://www.google.co.jp/',
          love: 5,
          comment: 2,
        },
        {
          id: 2,
          title: 'えはまの家',
          sub_title: 'ちょっと汚いよ！',
          src: 'http://iewouru.com/wp-content/uploads/sites/19/2014/02/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2014-02-05-19.23.22.png',
          love: 5,
          comment: 2,
        },
        {
          id: 3,
          title: 'えはまの実家',
          sub_title: 'ちょっと臭うよ！',
          src: 'https://time-space.kddi.com/feature/genbadamashii-sp/20160129/images/img002.jpg',
          love: 5,
          comment: 2,
        },
        {
          id: 4,
          title: '塗木研究室',
          sub_title: '淳夫が待ってるよ！',
          src: 'https://imitsu.jp/image.php?f=CZIKyb0D&adir=curation&id=8601181437720234&w=700',
          love: 5,
          comment: 2,
        },
        {
          id: 5,
          title: 'まつを部屋',
          sub_title: 'ともくんが待ってるよ！',
          src: 'https://eroimg.net/images/video/850/470/_5abca51a919e2.jpeg',
          love: 5,
          comment: 2,
        },
      ],
    };
  },
};
</script>
