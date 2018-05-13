<template>
  <ons-page>
    <navbar></navbar>
    <h1> Hello </h1>
    <ehama-form></ehama-form>
  </ons-page>
</template>

<script>
import Navbar from '../../components/navbar/Navbar';
import EhamaForm from '../../components/form/Form';

export default {
  name: 'test',
  components: {
    Navbar,
    EhamaForm,
  },
};
</script>
