<template>
  <div id="nav">
  <v-app-bar app class="nav">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="is-sp"></v-app-bar-nav-icon>

    <div class="is-pc pc-nav">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/skill" class="nav-link">Skill</router-link>
    <router-link to="/works" class="nav-link">Works</router-link>
    <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer" absolute left temporary class="sp-nav">
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title> 
              <router-link to="/" class="nav-link">Home</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>    <router-link to="/about" class="nav-link">About</router-link>
              </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>    <router-link to="/skill" class="nav-link">Skill</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>    <router-link to="/works" class="nav-link">Works</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>    <router-link to="/contact" class="nav-link">Contact</router-link>    
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
      drawer: false,
      group: null,
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style lang="scss">
@import "../assets/css/style.scss";
  .nav {
    font-family: 'Abril Fatface', cursive,Verdana, Geneva, Tahoma, sans-serif;
    background-color: $sub-bg;
    }
  
  .pc-nav {
    margin: 0 auto !important;
  }

  .nav-link {
    font-weight: bold;
    font-size: 150%;
    margin: 10px 30px;
    color: $nav-color !important;
    position: relative;
    display: inline-block;
    transition: .3s;

    @include mq(md) {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: $nav-color;
        transition: .3s;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      &:hover::after {
        width: 100%;
      }
    }

    &:hover {
      @extend .hoverChanged;
    }
  }

  .sp-nav {
    position: fixed !important;
  }
</style>
