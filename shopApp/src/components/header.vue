<template>
  <el-header class="header"
             style="height:100%">
    <!-- 定义购物车页面图标 -->
    <div>
      <el-row type='flex'
              justify='center'
              class="nav-box">
        <el-col :span='10'
                class="nav-logo-box">
          <div class="nav-logo-box">
            <el-link href=""><img src="../assets/logo.png"
                   alt=""
                   class="nav-logo"></el-link>
          </div>
        </el-col>
        <el-col :span='10'
                class="">
          <div class="nav-shop-box">
            <el-link href=""
                     class="nav-link">我的id</el-link>
            <el-link href=""
                     class="nav-link">
              <i class="el-icon-shopping-cart-2"></i>
            </el-link>
          </div>

        </el-col>
      </el-row>
      <el-row class="nav-breadcrumb-wrap"
              type='flex'
              justify='center'>
        <el-col class="container"
                :span='20'>
          <el-link href="">首页</el-link>
          <span>/</span>
          <el-link href=""
                   type="primary">购物车</el-link>
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>
<script>

export default ({
  name: 'nav-hader',
  props: {}
})
</script>
<style scoped>
.header {
  width: 100%;
  background-color: white;
  font-family: "moderat", sans-serif;
  font-size: 16px;
}
.nav-box {
  margin: 0 auto;
}
.nav-logo-box {
  min-height: 70px;
  text-align: left;
}
.nav-logo {
  width: 70px;
  padding-left: 10px;
}
.nav-shop-box {
  text-align: right;
  min-height: 70px;
  min-width: 100px;
  font-size: 20px;
  padding-right: 10px;
}
.nav-shop-box a {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  line-height: 70px;
  width: 70px;
  height: 70px;
}
.nav-breadcrumb-wrap {
  background: #f0f0f0;
  width: 100%;
  height: 30px;
}
.container {
  margin: 0 auto;
}
</style>