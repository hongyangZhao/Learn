<template>
  <el-footer class="footer">
    <el-row type='flex'
            justify='center'>
      <el-col tag='ul'
              :span='20'
              class="footer-ul">
        <li>
          <el-link :underline="false">河畔一角主页</el-link>
        </li>
        <li>|</li>
        <li>
          <el-link :underline="false">Vue全栈打造商城</el-link>
        </li>
        <li>|</li>
        <li>
          <el-link :underline="false">React全家桶打造通用后台</el-link>
        </li>
        <li>|</li>
        <li>
          <el-link :underline="false">微信支付专项(H5/小程序/小程序云+Node+Mongo)</el-link>
        </li>
      </el-col>
    </el-row>
    <el-row type='flex'
            justify='center'>
      <el-col tag='ul'
              :span='20'
              class="footer-ul">
        <li>
          <el-link :underline="false">关于我们</el-link>
        </li>
        <li>|</li>
        <li>
          <el-link :underline="false">条款和条件</el-link>
        </li>
        <li>|</li>
        <li>
          <el-link :underline="false">隐私政策</el-link>
        </li>
      </el-col>
    </el-row>
    <el-row type='flex'
            justify='center'>
      <el-col :span='20'
              class="footer-ul">

        Copyright © 2021 河畔一角 版权所有
      </el-col>
    </el-row>
  </el-footer>
</template>
<script>

export default ({
  name: 'nav-footer',
  props: {}
})
</script>
<style scoped>
.el-footer {
  color: #606266;
}
.footer-ul {
  text-align: center;
  color: #606266;
}
.footer-ul li {
  display: inline-block;
}
</style>