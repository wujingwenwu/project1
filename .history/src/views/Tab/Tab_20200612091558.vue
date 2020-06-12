<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息()" name="first"></el-tab-pane>
      <el-tab-pane label="已读消息()" name="second"></el-tab-pane>
      <el-tab-pane label="回收箱()" name="third"></el-tab-pane>
      <div class="tab">
        <div class="d-f j-c-s-b">
          <div class="tab2">[系统通知]该系统将于今晚凌晨2点到5点进行升级维护</div>
          <div class="d-f tab3">
            <div class="m-t-10">2020-6-12 9:03</div>
            <el-button class="tab4">默认按钮</el-button>
          </div>
        </div>
        <div class="tab1"></div>
        <div class="d-f j-c-s-b">
          <div>今晚12点整发大红包,先到先得</div>
          <div class="d-f">
            <div>2020-6-12 9:03</div>
            <el-button>默认按钮</el-button>
          </div>
        </div>
        <div class="tab1"></div>
        <el-button type="primary">主要按钮</el-button>
      </div>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeName: "second"
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.tab{
  background: white;
  width: 1280px;
}
.tab2{
  margin-left: 30px;
  margin-top: 15px;
}
.tab3{
  margin-right: 50px;
  margin-top: 10px;
}
.tab4{
  margin-left: 15px;;
}
.tab1{
  width: 1000px;
  height: 1px;
  background: rgb(151, 146, 146);
}
</style>