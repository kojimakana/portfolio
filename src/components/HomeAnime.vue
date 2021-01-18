<template>
  <div class="TextAnime1">
    <p
      v-for="(t, index) in text"
      :key="`first-${index}`"
      class="item"
      :style="{animationDelay: index*100+'ms'}"
      v-text="t"
      ></p>
      <br class="is-sp">
    <p
      v-for="(t, index) in text2"
      :key="`second-${index}`"
      class="item"
      :style="{animationDelay: index*100+'ms'}"
      v-text="t"
      ></p>
  </div>
</template>

<script>

export default {
  name: 'HelloAnime',
  data() {
    return {
      text : `Kana's `,
      text2 : `Portfolio`,
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 60px;
  animation: text-in 3s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
  

  @include mq(sm) {
    font-size: 35px;
  } 
}
</style>