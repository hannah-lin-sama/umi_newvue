/*
 * @Author: YanHSama 15768715682@163.com
 * @Date: 2022-07-04 22:37:28
 * @LastEditors: YanHSama 15768715682@163.com
 * @LastEditTime: 2022-07-06 23:16:58
 * @FilePath: \umi_newvue\.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  npmClient: 'pnpm',
  presets: [require.resolve('@umijs/preset-vue')],
  links: [
    // href的图片你可以放在public里面，直接./图片名.png 就可以了，也可以是cdn链接
    //https://www.baidu.com/img/flexible/logo/pc/result.png
    //./assets/image/header_icon.png
    { rel: 'icon', href: 'https://www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg' },
  ],
  title: 'Umi4+Vue3自学项目',//设置浏览器title
  // ssr: {
  //   // 默认为 true
  //   // devServerRender: false,
  // },
  proxy:{ //设置代理-跨域

  }
};
