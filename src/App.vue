<template>
  <div id="app">
    <HeaderComponent :menuHeader="menuList"/>
    <MainComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'

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

      ]
    }
  },
  components: {
    HeaderComponent,
    MainComponent
  }
}
</script>

<style lang="scss">
@import './assets/styles/common.scss';
</style>
