import DynamicWarpper from './src/dynamicWarpper.vue';

DynamicWarpper.install = function (Vue) {
  Vue.component(DynamicWarpper.name, DynamicWarpper);
};

export default DynamicWarpper;