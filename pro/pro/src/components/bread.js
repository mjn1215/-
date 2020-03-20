import breadNav from '@/components/breadNav'
 
// 添加install方法
breadNav.install = function(Vue) {
  Vue.component(breadNav.name, breadNav);
};
 
export default breadNav;
