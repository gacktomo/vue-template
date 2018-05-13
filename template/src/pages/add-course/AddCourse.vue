<template>
  <ons-page>
    <navbar navType="back" msg="コースを追加"></navbar>

    <v-ons-list>
      <v-ons-list-header>時間</v-ons-list-header>
      <v-ons-list-item>
        <el-time-select
          v-model="course.time"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '23:45'
          }"
          placeholder="Select time">
        </el-time-select>
      </v-ons-list-item>

      <v-ons-list-header>場所</v-ons-list-header>
      <v-ons-list-item>
        <gmap-autocomplete
          placeholder="スポット名を検索"
          style="font-size:15px; margin: 6px 0; width:80%"
          :value="course.name"
          @place_changed="setPlace"
          :options="{
            bounds: {north: 45, south: 20, east: 153, west: 122},
            strictBounds: true
          }">
        </gmap-autocomplete>
        <div class="right">
          <v-ons-button modifier="quiet" @click="resetPlace();$event.stopPropagation()">
            <v-ons-icon icon="md-close"></v-ons-icon>
          </v-ons-button>
        </div>
      </v-ons-list-item>

      <v-ons-list-header>詳細</v-ons-list-header>
      <v-ons-list-item>
        <v-ons-input placeholder="コースの説明" float v-model="course.description"></v-ons-input>
      </v-ons-list-item>

    </v-ons-list>
    <br>
    <center>
      <v-ons-button modifier="cta" style="margin: 6px 0" @click="checkCourse">
        <span v-if="edit">変更</span>
        <span v-else>コース追加</span>
      </v-ons-button>
    </center>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'add-course',
  components: {
    Navbar,
  },
  props: {
    index: {
      default: false
    },
  },
  data() {
    return {
      course: {
        uniq: Math.floor(Math.random() * 100000),
        name: '',
        description: '',
        time: "19:00",
        place_id: '',
        thumbnail: '',
      },
      edit: false,
      idx: 0,
    };
  },
  mounted() {
    if(Math.round(this.$props.index) === this.$props.index) {
      // 直にstoreを代入すると参照渡しになっちゃうのでjson再変換すべき？
      // this.course = JSON.parse(JSON.stringify(this.$store.state.createPlan.courses[this.$props.index]));
      this.course = this.$store.state.createPlan.courses[this.$props.index];
      this.edit = true;
      this.idx = this.$props.index;
    }

  },
  methods: {
    checkCourse() {
      if (this.course.name == '') {
        this.$ons.notification.alert('場所を入力してください');
        return
      } else {
        this.addCourse();
      }

    },
    addCourse() {
      this.$store.commit('addCourse', { 
        edit: this.edit,
        index: this.idx,
        data: this.course,
      });
      this.$emit('pop-page');
    },
    setPlace(place) {
      console.log(place);
      this.course.name = place.name;
      this.course.place_id = place.place_id;
      this.course.thumbnail = place.photos[0].getUrl({'maxWidth': 400, });
    },
    resetPlace() {
      this.course.name = '';
    },
  },
};
</script>
