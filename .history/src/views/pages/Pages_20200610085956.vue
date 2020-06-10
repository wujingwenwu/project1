<template>
  <div>
    <el-container>
      <el-header class="d-f a-i-c j-c-s-b">
      
        <div class="f-c-b">欢迎{{obj.username}}来到小爱后台管理系统</div>
        <div class="d-f">
          <div class="f-c-b">{{items}},亲爱的{{obj.username}}</div>
          <div class="f-c-b">上次登录时间：{{time}}</div>
        </div>
       
      </el-header>
      <el-container>
      <div class=" p-f">
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12" width='100%'>
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="rgb(52,64,85)"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <div v-for="(item,index) in arr" :key="index">
                  <el-menu-item :index="item.index">
                    <i :class="item.log"></i>
                    {{item.name}}
                  </el-menu-item>
                </div>
                <br />
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        </div>
        <el-main class="pades">
      <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
      
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  data() {
    return {
      obj: {},
      time: "",
      items: {},
      arr: [
        {
          name: "首页",
          log: "el-icon-location",
          index: "1"
        },
        {
          name: "已发布",
          log: "el-icon-menu",
          index: "2"
        },
        {
          name: "统计",
          log: "el-icon-menu",
          index: "3"
        },
        {
          name: "发表文章",
          log: "el-icon-check",
          index: "4"
        },
        {
          name: "标签页",
          log: "el-icon-setting",
          index: "5"
        },
        {
          name: "导出excel",
          log: "el-icon-setting",
          index: "6"
        },
        {
          name: "图片上传",
          log: "el-icon-setting",
          index: "7"
        },
        {
          name: "退出系统",
          log: "el-icon-delete",
          index: "8"
        }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.obj = JSON.parse(sessionStorage.getItem("user"));
    this.time = dayjs().format("YYYY年MM月DD日HH时mm分ss秒");
    let items = dayjs(this.obj.date).format("HH");
    if (items > 5 && items <= 11) {
      this.items = "早上好";
    } else if (items > 11 && items <= 13) {
      this.items = "中午好";
    } else if (items > 13 && items <= 17) {
      this.items = "下午好";
    } else if (items > 17 && items <= 23) {
      this.items = "晚上好";
    } else {
      this.items = "该睡觉了";
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background: rgb(46, 94, 133);
  width: 100%;
  z-index: 9999;
}
.el-aside {
  background: rgb(52, 64, 85);
}
.el-col-12{
width: 100%;

}

</style>