<template>
  <div>
    {{mess}}
  </div>
</template>
 
<script>
export default {
  name: 'child',
    data() {
    return {
         mess:'这个是子组件'
    };
  },
  // 传入子组件的参数写到props
  props: {
    
  }
}
</script>
 
<style scoped>

</style>
