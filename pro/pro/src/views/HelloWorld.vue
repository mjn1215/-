<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span type='success' @click='toGo'>去看看</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // vue的生命周期
  beforeCreate(){
    console.log('创建前')
  },
  created(){
     console.log('创建后')
  },
  beforeMount(){
     console.log('挂载前')
  },
  mounted(){
     console.log('挂载后')
     this.msg = '欢迎来到vue的第一张页面'
  },
  beforeUpdate(){
    console.log('修改前')
  },
  updated(){
    console.log('修改后')
  },
  beforeDestroy(){
     console.log('销毁前')
  },
  destroyed(){
     console.log('销毁后')
  },
  methods:{
    toGo(){
      // vue相关的面试题整理：
      // 1.vue-router的实现方式有哪几种？哪一种好用？为什么？
      // 2.vue的生命周期？每一步分别是干嘛的？
      // 3.什么是vue-cli？
      // 4.vue的axios是什么？怎么用？
      // 5.什么mock.js？你一般用来干嘛？ 在没有接口的时候，使用它来模拟接口
      // 6.vue的父子组件如何进行通讯？子传父？父传子分别怎么传
      // 7.什么是webpack？webpack可以做什么？
      // 没学的可以不写：computed计算属性 watch监听 vuex（状态管理器）的5个核心属性
      // 还有其他你搜索到的vue的相关面试题（一共15个），剩下的8个不能完全

      //路由跳转的常用方式
       this.$router.push({name:'second'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
