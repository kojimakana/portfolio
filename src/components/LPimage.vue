<template>
  <div class="text-center">
    <v-card>
      <v-card-text>
        <v-img :src="require('@/assets/img/ISARA1.png')"></v-img>
        <v-img :src="require('@/assets/img/ISARA2.png')"></v-img>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click.prevent="close"
        >
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LPimage',
  methods: {
    close() {
      this.$emit('closeImage')
    }
  }
}
</script>