<template>
  <div id="skill" class="skill">
    <h2 class="util-title">Skill</h2>
    <v-container>
      <v-row>
        <v-col class="skill-item" cols="8" lg="6">
          <p class="skill-title">言語</p>
          <transition name="bottom" appear>
            <div class="d-flex skill-icon">
              <div> 
                <i class="devicon-html5-plain colored"></i>
                <p>HTML</p>
              </div>
              <div> 
                <i class="devicon-css3-plain colored"></i>
                <p>CSS</p>
              </div>
              <div> 
                <i class="devicon-javascript-plain colored"></i>
                <p>JavaScript</p>
              </div>
              <div> 
                <i class="devicon-sass-original colored"></i>
                <p>Sass</p>
              </div>
            </div>
          </transition>
        </v-col>
        <v-col class="skill-item" cols="8" lg="6">
          <p class="skill-title">フレームワーク</p>
          <transition name="bottom" appear>
            <div class="d-flex skill-icon">
              <div> 
              <i class="devicon-bootstrap-plain colored"></i>
              <p>Bootstrap</p>
            </div>
            <div> 
              <i class="devicon-jquery-plain colored"></i>
              <p>jQuery</p>
            </div>
            <div> 
              <i class="devicon-vuejs-plain colored"></i>
              <p>Vue.js</p>
            </div>
            </div>
          </transition>
        </v-col>
        <v-col class="skill-item" cols="8" lg="6">
          <p class="skill-title">その他</p>
          <transition name="bottom" appear>
            <div class="d-flex skill-icon">
              <div> 
              <i class="devicon-github-original colored"></i>
              <p>GitHub</p>
            </div>
            <div> 
              <i class="devicon-git-plain colored"></i>
              <p>git</p>
            </div>
            <div class="firebase"> 
              <img src="https://img.icons8.com/color/48/000000/google-firebase-console.png"/>
              <p>Firebase</p>
            </div>
            </div>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "devicon";

export default {
  name: "Skill"
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.skill {
  height: 100%;
  background-color: #EEEEEE;
}

.skill-item {
  margin: 0 auto;

  p {
    text-align: center;
  }

  @include mq(sm) {
    margin-bottom: 50px;
  }
}

.skill-title {
  font-weight: bold;
}

.skill-icon {
  justify-content: center;
}

i {
  margin: 0 20px !important;
  font-size: 48px;
}

.firebase {
  img {
    display: inline-block;
    width: 48px;
    height: 48px;
    margin: 0 20px !important;
  }
}

.bottom-enter-active, .bottom-leave-active {
  transform: translate(0px, 0px);
  transition: transform 2s cubic-bezier(0, 0, 0.2, 1) 0s;
}

.bottom-enter, .bottom-leave-to {
  transform: translateY(100vh) translateY(0px);
}

</style>