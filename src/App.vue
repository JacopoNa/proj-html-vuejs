<template>
  <div id="app">
    <HeaderComponent :menuHeader="menuList"/>
    <MainComponent/>
    <FooterComponent :menuFooter="footerList"/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      menuList: [
        {
          text:'Home',
          btn: false,
          new: false
        },
        {
          text:'Services',
          btn: false,
          new: false
        },
        {
          text:'About',
          btn: false,
          new: false
        },
        {
          text:'Videos',
          btn: false,
          new: false
        },
        {
          text:'Blog',
          btn: false,
          new: false
        },
        {
          text:'Store',
          btn: false,
          new: true
        },
        {
          text:'Schedule a workout',
          btn: true,
          new: false
        },

      ],
      footerList: [
        {
          text: 'RECENT POSTS' 
        },
        {
          text: 'The best protein shake' 
        },
        {
          text: 'Ultimate cardio workout' 
        },
        {
          text: 'New juices available now' 
        },
        {
          text: 'Tips to find training partners' 
        },
        {
          text: '20 best healthy recipes' 
        },
      ]
    }
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import './assets/styles/common.scss';
</style>
