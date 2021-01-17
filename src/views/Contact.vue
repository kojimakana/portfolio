<template>
  <div id="contact" class="contact bg-red">
    <h2 class="util-title">Contact</h2>
    <p class="text-center">
    ご不明点、ご相談等ございましたらお気軽にお問い合わせください。<br>
    下記フォーム、またはTwitterのDMにてお待ちしております。
    </p>
    <v-container>
      <v-row>
          <v-col cols="12" class="contact-form">
            <transition name="fade-in" appear>
              <ContactForm />
            </transition>
          </v-col>
        <v-col cols="12" class="text-center">
          <v-btn href="https://github.com/kojimakana" target="_blank" text>
            <v-icon color="github" large>fab fa-github</v-icon>
          </v-btn>
          <v-btn href="https://twitter.com/Kana522813" target="_blank" text>
            <v-icon color="twitter" large>fab fa-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <p class="text-center"><small>@2021 Kana Kojima</small></p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "Contact",
  components: {
    ContactForm
  },
  data() {
    return {

    }
  }
};
</script>

<style>
  #contact {
    background-color: #F3E5F5;
    height: 100%;
  }

.fade-in-enter-active {
  transition: opacity 2s;
}
.fade-in-enter {
  opacity: 0;
}
.fade-in-enter-to {
  opacity: 1;
}

</style>

