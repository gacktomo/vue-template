<style lang="scss" scoped >
.page-title {
  text-align: center;
}
</style>
<template>
<v-ons-page>
  <navbar></navbar>
  <div class="page-content">
    <h3 class="page-title">
      About
    </h3>
    <p>Vue sample App</p>
  </div>
</v-ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';

export default {
  name: 'posts-page',
  components: {
    Navbar,
  },
};
</script>
