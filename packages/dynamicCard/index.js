import DynamicCard from './src/dynamicCard.vue';

DynamicCard.install = function (Vue) {
  Vue.component(DynamicCard.name, Card);
};

export default DynamicCard;