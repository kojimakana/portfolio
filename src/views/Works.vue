<template>
  <div id="works" class="works">
    <h2 class="util-title">Works</h2>
    <v-container class="d-md-flex">
      <WorkItem v-for="item in list"
      :key="item.id"
      :title="item.title"
      :subtitle="item.subtitle"
      :text="item.text"
      :img="item.img"
      :btn="item.btn"
      :link="item.link"
      :displayImage="item.displayImage"
      ></WorkItem>
    </v-container>
  </div>
</template>

<script>
  import WorkItem from "@/components/WorkItem";

  export default {
    name: 'Works',
    components: {
      WorkItem
    },
    data() {
      return {
        list: [
          { id:0,
            title:'読書メモ',
            subtitle:'読書習慣をつけたい人、読書を振り返りたい人のための  シンプルな『読書記録アプリ』です。',
            text:'HTML/CSS/JavaScript/Sass/Vue.js/Vuex/Vuetify/Firebase',
            img: require("@/assets/img/reading-memo.png"),
            btn: 'アプリを見る',
            link: 'https://reading-memo.xyz/'
            },
          { id:1,
            title:'ポートフォリオ',
            subtitle:'現在閲覧されているポートフォリオサイトです。',
            text:'HTML/CSS/JavaScript/Sass/Vue.js/Vuetify/Firebase',
            img: require("@/assets/img/Portfolio.png")},
          { id:2,
            title:'LP模写',
            subtitle:'isara.lifeの模写サイトです。レスポンシブ対応済。',
            text:'HTML/CSS/jQuery/Sass/Bootstrap',
            img: require("@/assets/img/ISARA-copy.png"),
            displayImage: '画像を見る'
            }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";

.works {
  height: 100%;
  background-color: #EEEEEE;
}

</style>