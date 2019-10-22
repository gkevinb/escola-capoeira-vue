<template>
  <div class="intro">
    <h1>{{ msg }}</h1>
    <img src="http://escolacapoeira.hu/wp-content/uploads/2019/10/shutterstock_1279510786.jpg" alt="capoeira" width="420">
    <p>Come and try out Capoeira, a brazilian martial art!</p>
    <h3>Navigation</h3>
    <ul>
      <li>Home</li>
      <li>Practice</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
