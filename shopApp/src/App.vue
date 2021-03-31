<template>
  <div id="app">

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}


</script>

<style>
html,
body,
#app,
.el-container,
.el-header,
.el-footer,
h2,
.el-main {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.el-col-20 {
  width: 1200px;
}
.el-col-10 {
  width: 600px;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
