<!--
 * @Author: YanHSama 15768715682@163.com
 * @Date: 2022-07-04 22:37:28
 * @LastEditors: YanHSama 15768715682@163.com
 * @LastEditTime: 2022-07-06 23:11:09
 * @FilePath: \umi_newvue\src\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h2>Yay! Welcome to umi ❤️ vue!</h2>
    <p>
      <img src="../assets/yay.jpg" width="388" />
    </p>
    <p>To get started, edit <code>pages/index.vue</code> and save to reload.</p>
    <!-- <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button> -->
    <div class="box">
      this is test
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { ElButton } from "element-plus";
export default defineComponent({
  components: {
    // ElButton,
  },
  setup() {},
});
</script>
<style lang="less" scoped>
@import url('@/assets/style/variable.less');
.box {
  height: 400px;
  border: 1px @black-color-1 solid;
}
</style>
