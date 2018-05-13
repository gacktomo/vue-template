<style lang="scss" scoped>
</style>

<template>
  <div>
    <!-- <v-ons-input v-model="message" placeholder="edit me"> -->
    <v-ons-input placeholder="Input your name" float v-model="message" ></v-ons-input>
    <p>Message is: {{ tax }}</p>
  </div>
</template>

<script>
export default {
  name: 'ehama-form',
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
