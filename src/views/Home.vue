<template>
  <div class="home" id="home">
    <div class="home-box">
    <h1 class="home-title">
      <HomeAnime />
    </h1>
    </div>
  </div>
</template>

<script>
import HomeAnime from '@/components/HomeAnime';

export default {
  name: 'Home',
  components: {
    HomeAnime
  }
}
</script>

<style lang='scss' scoped>
  .home {
    font-family: 'Abril Fatface', cursive,Verdana, Geneva, Tahoma, sans-serif;
    position: relative;
    background: url('../assets/img/top.jpeg') no-repeat;
    background-size: cover;
    padding: 50px;
    height: 100%;
  }

  .home-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid #fff;
    width: 95%;
    height: 90%;
  }

  .home-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 3px;
    color: #fff;
  }


</style>