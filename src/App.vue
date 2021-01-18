<template>
  <v-app>
    <header>
      <Nav />
    </header>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: 'App',

  components: {
    Nav,
  },

  data () {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/reset.css";
@import "assets/css/style.scss";

  .drawer {
  @include mq(md) {
    display: none !important;
  }
}

</style>
