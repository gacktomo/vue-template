<style lang="scss" scoped>
</style>

<template>
  <div>
    <v-ons-list modifier="inset">
      <v-ons-list-header>Inset list</v-ons-list-header>
      <v-ons-list-item modifier="longdivider">Item A</v-ons-list-item>
      <v-ons-list-item modifier="longdivider">Item B</v-ons-list-item>
    </v-ons-list>
  </div>
</template>

<script>
export default {
  name: 'plan-component',
  data() {
    return {
      message: 100,
    };
  },
  computed: {
    tax() {
      return this.message * 1.08;
    },
  },
};
</script>
