<template>
  <div class="about" id="about">
    <v-container>
      <h2 class="util-title">About</h2>
      <v-row>
        <div class="my-img mx-auto" lg="5" cols="12">
          <transition name="fade-left" appear>
            <img v-bind:src="img_src" alt="プロフィール写真">
          </transition>
        </div>
      <transition name="fade-right" appear>
        <div class="mx-auto my-auto" lg="7" cols="12">
          <ul class="about-list">
            <li class="about-item">小島 香菜</li>
            <li class="about-item">1997年5月22日生まれ</li>
            <li class="about-item">埼玉県出身</li>
          </ul>
          <!-- <p class="ml-5">
            2020年9月から独学でプログラミング学習開始。<br>
            フロントエンドエンジニアを目指し日々勉強中。
          </p> -->
        </div>
      </transition>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_src: require("@/assets/img/my-img.png")
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.my-img {
  img {
    display: block;
    width: 280px;
    height: 280px;
    border-radius: 999px;
    margin: 40px auto;
  }
}

.about-item {
  margin: 20px 0;
  
  &:first-child {
    font-size: 200%;
  }
}

.fade-left-enter-active {
  transform: translate(0px, 0px);
  transition: transform 2s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.fade-left-enter {
  transform: translateX(-100vw) translateX(0px);
}

.fade-right-enter-active {
  transform: translate(0px, 0px);
  transition: transform 2s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.fade-right-enter {
  transform: translateX(100vw) translateX(0px);
}
</style>

