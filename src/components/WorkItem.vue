<template>
  <v-container>
      <v-card
        class="mx-auto mb-5 mb-lg-0"
        max-width="344">
        <v-img
          :src="img"
          height="200px"
        ></v-img>

        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-card-subtitle>
          {{ subtitle }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange" text>
            {{ btn }}
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ text }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'WorkItem',
  props: {
    id: Number,
    title:String,
    subtitle:String,
    text:String,
    img:String,
    btn:String
  },
  data() {
  return {
    show: false,
  }
  }
}
</script>

<style lang="scss">  
  .v-card {
    transition: .3s;

    &:hover {
      opacity: .8;
      transform: translate(0, -5px);
    }
    }
</style>