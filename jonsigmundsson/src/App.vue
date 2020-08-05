<template>
  <v-app>
    <navigation/>
    <v-main>
      <frontpage/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navigation from './components/shared/navigation.vue';
import frontpage from './components/shared/frontpage.vue'
export default {
  

  created(){

  },
  components: {
    navigation,
    frontpage
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
