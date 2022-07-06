<!--
 * @Author: YanHSama 15768715682@163.com
 * @Date: 2022-07-04 22:37:28
 * @LastEditors: YanHSama 15768715682@163.com
 * @LastEditTime: 2022-07-06 22:34:07
 * @FilePath: \umi_newvue\src\layouts\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="navs">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/docs">Docs</router-link>
      </li>
      <li>
        <a href="https://github.com/umijs/umi">Github</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import 'element-plus/es/components/button/style/css'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="less">
  .navs {
    ul {
      padding: 0;
      list-style: none;
      display: flex;
    }
    li {
      margin-right: 1em;
    }
  }
</style>
