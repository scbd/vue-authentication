<template>
  <div id="app">
    Iframe Installed <br>
    user:<pre>{{this.$me | json}}</pre>
  </div>
</template>

<script>

export default {
  name: 'app',
 filters: {
    json: (value) => { return JSON.stringify(value, null, 2) }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
