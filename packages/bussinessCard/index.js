/*
 * @Author: gyp
 * @Date: 2023-03-27 15:09:35
 * @LastEditTime: 2023-03-27 15:10:50
 * @LastEditors: gyp
 * @Description: 
 * @FilePath: /smartbi-ui/packages/card/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import BussinessCard from './src/bussinessCard.vue';

BussinessCard.install = function (Vue) {
  Vue.component(BussinessCard.name, Card);
};

export default BussinessCard;
