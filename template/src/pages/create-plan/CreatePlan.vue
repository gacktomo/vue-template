<template>
  <ons-page>
    <navbar navType="back" msg="プラン作成"></navbar>
    <v-ons-list>
      <v-ons-list-header>情報</v-ons-list-header>
      <v-ons-list-item>
        <v-ons-input placeholder="プラン名" float v-model="plan.title"></v-ons-input>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder="概要" float v-model="plan.detail"></v-ons-input>
      </v-ons-list-item>

      <v-ons-list-header>エリア</v-ons-list-header>
      <v-ons-list-item>
        <div class="center">
          <v-ons-select style="width: 40%" v-model="plan.prefecture_id" >
            <option v-for="item in prefs" :value="item.id" v-bind:key="item.id">
              {{ item.name }}
            </option>
          </v-ons-select>
        </div>
      </v-ons-list-item>

      <v-ons-list-header>コース</v-ons-list-header>
      <v-ons-list-item tappable v-for="(item,i) in courses" 
        v-bind:key="item.uniq" @click="addCourse(i)">
        {{ item.time }} 
        <span style="margin-left: 20px;"> {{item.name}} </span>
        <div class="right">
          <v-ons-button modifier="cta" @click="removeCourse(i);$event.stopPropagation()">削除</v-ons-button>
        </div>
      </v-ons-list-item>

      <center>
        <v-ons-button modifier="quiet" style="margin: 6px 0" @click="addCourse">コースを追加</v-ons-button>
      </center>
    </v-ons-list>
    <br>
    <center>
      <v-ons-button modifier="cta" @click="checkPlan();">プラン作成</v-ons-button>
    </center>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import AddCourse from '../../pages/add-course/AddCourse';

export default {
  name: 'create-plan',
  components: {
    Navbar,
  },
  data() {
    return {
      plan: {
        title: '',
        detail: '',
        prefecture_id: null,
        courses_attributes: {},
      },
      prefs: [],
    };
  },
  computed: {
    courses() {
      return this.$store.state.createPlan.courses
    }
  },
  mounted() {
    this.axios.get('http://59.157.6.140:3000/prefectures')
    .then((res) => {
      this.prefs = res.data;
      this.prefs.unshift({id: null, name: 'エリアを選択'});
    })
    .catch((res) => {
      console.log(res);
    });
  },
  destroyed() {
    this.$store.commit('initCourse');
  },
  methods: {
    addCourse(num) {
      this.$emit('push-page', {
        extends: AddCourse,
        onsNavigatorProps: {
          index: num,
        }
      })
    },
    removeCourse(num) {
      this.$store.commit('removeCourse', num);
    },
    checkPlan() {
      if (this.plan.title == '') {
        this.$ons.notification.alert('プラン名を入力してください');
        return
      } else if (this.plan.prefecture_id == null) {
        this.$ons.notification.alert('エリアを選択してください');
        return
      } else {
        this.$ons.notification.confirm('プランを作成しますか？')
        .then((res) => {
          if (res == 1) this.postPlan();
        });
      }
    },
    postPlan() {
      this.courses.forEach((v)=>{
        this.plan.courses_attributes[v.uniq] = v
      });
      this.axios.post('http://59.157.6.140:3000/plans', {
        plan: this.plan,
      })
      .then(res => {
        console.log(res)
        this.$emit('pop-page');
        this.$ons.notification.alert('プランを作成しました');
      });
    },
  },
};
</script>
