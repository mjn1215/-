<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"></el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <div class="box2">
         <bread-nav></bread-nav>
            <ul>
               <li class="listLi" v-for="item in list2" :key="item">
                    <div>{{item.s_name}}</div>
                    <img :src="item.s_src" alt="找不到">
                    <div>{{item.s_content}}</div>
               </li>
            </ul>
      </div>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third"></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
      mess2: "这个是配置管理页面的文档",
      list2:null
    };
  },
  mounted(){
     this.getList2()
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.name == "first") {
        this.$router.push({ name: "one" });
      } else if (tab.name == "second") {
        this.$router.push({ name: "second" });
        this.getList2()
      }
    },
    getList2() {
      this.$axios({
        url: "http://127.0.0.1/addSearch.php",
        method: "post"
      }).then(res => {
        // console.log(res)
        this.list2 = res.data.msg
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listLi{
  width:25%;
  margin-right:20px;
  border:1px solid #ccc;
}
.listLi img{
  width: 50%;
  height: 50%;
}
</style>
