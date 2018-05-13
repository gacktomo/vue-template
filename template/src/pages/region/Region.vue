<style lang="scss" scoped >
.page-title {
  text-align: center;
}
</style>
<template>
	<v-ons-page>
		<navbar navType="back" msg="地域選択"></navbar>
    <v-ons-list-header>
      地方一覧
    </v-ons-list-header>
		<el-tree
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick">
    </el-tree>
	</v-ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import Recommend from '../../pages/recommend/Recommend';

export default {
  name: 'region',
  components: {
    Navbar,
  },
  data() {
    const arr = [];
    this.axios.get('http://59.157.6.140:3000/regions')
    .then((res) => {
      for (let i = 0; i < res.data.length; i += 1) {
        const regions = { label: res.data[i].name, id: res.data[i].id, children: [] };
        arr.push(regions);
      }
      this.axios.get('http://59.157.6.140:3000/prefectures')
      .then((res) => {
        for (let j = 0; j < res.data.length; j += 1) {
          const prefectures = {
            label: res.data[j].name,
            regionId: res.data[j].region_id,
            id: res.data[j].id };
          arr[(prefectures.regionId - 1)].children.push(prefectures);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    })
    .catch((error) => {
      console.log(error);
    });

    return {
      data: arr,
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      if (!data.children) {
        console.log(data)
        this.$store.commit('setArea', { id: data.id, name: data.label} );
        this.$emit('pop-page');
        // this.$emit('push-page', {
        //   extends: Recommend,
        //   onsNavigatorProps: {
        //     pref_id: data.id,
        //   }
        // })
        // this.$router.push({ name: 'recommend', params: { id: data.id } });
        console.log(data.id);
      }
    },
  },
};
</script>
