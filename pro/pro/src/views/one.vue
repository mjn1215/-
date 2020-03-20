<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      {{CtP}}
      <div class="box1">
            <bread-nav :pubPtoC='valData' @pubCtoP = 'cVAL'></bread-nav>
        <div>
          <span class="hobby" v-for="item1 in hobby" :key="item1">{{item1}},</span>
        </div>
        <span class="number" v-for="item2 in number" :key="item2">({{item2}})=></span>
      </div>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
    <el-tab-pane label="角色管理" name="third"></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      mess2: "这个是用户管理页面的文档",
      hobby: null,
      number: null,
      valData:'这个是公共第一',
      CtP:null
    };
  },
  mounted() {
    this.getList1();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.name == "first") {
        this.$router.push({ name: "one" });
        this.getList1();
      } else if (tab.name == "second") {
        this.$router.push({ name: "second" });
      }
    },
    getList1() {
      this.$axios({
        url: "http://127.0.0.1/datas.php",
        method: "post"
      }).then(res => {
        console.log(res);
        this.hobby = res.data.msg.hobby;
        this.number = res.data.msg.number;
      });
    },
    cVAL(val){
       console.log(val)
       this.CtP = val
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1 {
  font-size: 22px;
  /* color: red; */
  font-weight: bold;
}
</style>
