<template>
  <div class="breadcrumb">
     <ul>
       <li v-for='item in list' :key="item">{{item}}</li>
       {{pubPtoC}}
     </ul>
  </div>
</template>
 
<script>
export default {
  name: 'breadNav',
    data() {
    return {
         list:['首页','详情页','公共页'],
         mess:'这是子要传过去的值'
    };
  },
  // 传入子组件的参数写到props
  props: ['pubPtoC'],
  mounted(){
    this.$emit('pubCtoP',this.mess)
  }
}
</script>
 
<style scoped>
  .breadcrumb { width: 100%; font-size: 14px; }
  ul{
    overflow: hidden;
  }
  li{
    padding:5px 12px;
    border:1px solid #ccc;
    float: left;
  }
</style>
<style>
  *{
    list-style: none;
    margin: 0;
    padding:0;
    cursor: pointer;
  }
</style>
