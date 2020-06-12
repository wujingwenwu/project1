<template>
  <div class="rab">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息()" name="first">
     
      <div class="tab">
        <div v-for="(item,index) in arr" :key="index">
        <div class="d-f j-c-s-b">
         <div class="m-t-20 tab2">{{item.name}}</div>
         <div class="d-f">
         <div class="m-t-20">{{item.time}}</div>
          <el-button class="tab-item1">标为已读</el-button>
         </div>
         </div>
         <div class="tab1"></div>
        </div>
        
         
        <el-button type="primary" class="tab5">全部标为已读</el-button>
      </div>
      </el-tab-pane>
       <el-tab-pane label="已读消息()" name="second">
          <div class="tab">
        <div class="d-f j-c-s-b tab-item">
          <div class="tab2">[系统通知]该系统将于今晚凌晨2点到5点进行升级维护</div>
          <div class="d-f tab3">
            <div  class="m-t-10">2020-6-12 9:03</div>
            <el-button class="tab4">删除</el-button>
          </div>
        </div>
        <div class="tab1"></div>
         <el-button type="danger" class="tab5">删除全部</el-button>
        </div>
       </el-tab-pane>
      <el-tab-pane label="回收箱()" name="third">
         <div class="tab">
        <div class="d-f j-c-s-b tab-item">
          <div class="tab2">[系统通知]您的优惠券已经过期</div>
          <div class="d-f tab3">
            <div  class="m-t-10">2020-6-12 9:03</div>
            <el-button class="tab4" type="warning">还原</el-button>
          </div>
        </div>
        <div class="tab1"></div>
         <el-button type="info" class="tab5">清空回收站</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr:[
        {
          name: '[系统通知]该系统将于今晚凌晨2点到5点进行升级维护',
          time:  "2020-6-12 9:03",
        },
        {
          name: '今晚12点整发大红包,先到先得',
          time:  "2020-6-12 9:03",
        }
      ]
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
.rab{
  height: 622px;
}
.tab{
  background: white;
  width: 1280px;
  height: 250px;
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
  width: 1200px;
  height: 1px;
  margin-left: 30px;
  margin-top: 20px;
  background: rgb(151, 146, 146);
}
.tab5{
  margin-left: 30px;
  margin-top: 30px;
}
.tab-item1{
  margin-top: 10px;
}
</style>