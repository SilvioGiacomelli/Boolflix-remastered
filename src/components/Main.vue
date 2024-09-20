<script>
import Card from './partials/Card.vue';
import {store} from '../data/store';
  export default {
        components:{
          Card,
        },
        data() {
          return {
            store,
          }
        },
  }
</script>

<template>
  <Card/>
</template>

<style lang="scss" scoped>

</style>