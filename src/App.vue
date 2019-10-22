<template>
  <div id="app">
    <Intro msg="ESCOLA CAPOEIRA"/>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'

export default {
  name: 'app',
  components: {
    Intro
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
