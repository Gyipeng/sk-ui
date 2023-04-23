/*
 * @Author: gyp
 * @Date: 2023-03-27 15:09:35
 * @LastEditTime: 2023-03-27 15:10:50
 * @LastEditors: gyp
 * @Description:
 * @FilePath: /smartbi-ui/packages/card/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import Card from './src/card.vue'

Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}
export default Card
