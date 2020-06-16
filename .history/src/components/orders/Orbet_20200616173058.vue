<template>
  <div>
    <div class="d-f j-c-s-b">
      <div class="orderb orderb2" @click="Gou">V</div>
      <div class="orderb2">Todo List</div>
    </div>
    
    <div class="orderb1 m-t-20"></div>
    <div>
      <div v-if="todos.length > 0">
        <div v-for="(item,index) in todos" :key="index" class="box1">
          <div class="d-f j-c-s-b m-t-10 orderb4">
            <div class="m-l-10 d-f">
              <div class="itema d-f j-c-c a-i-c" @click="clickgou(item)"><i class="iconfont el-icon-check" v-if="item.complete" ></i></div>
              <div class="m-l-10">{{item.title}}</div>
            </div>
            <div class="orderb3" @click="clickItem(item,index)">X</div>
          </div>
        </div>
      </div>
      <div v-else>你的任务已经全部完成了，没有任务啦！</div>
    </div>
    <div class="orderb1 m-t-10"></div>
    
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    clickItem(item, index) {
      this.$emit("del", index);
    },
    clickgou(item){
      item.complete =! item.complete
    },
     Gou(){
     this.complete=!this.complete;
      this.todos.map(item => {
        item.complete= this.complete;
      }); 
     },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.orderb {
  color: rgb(172, 151, 149);
}
.orderb1 {
  width: 100%;
  height: 1px;
  background: rgb(172, 151, 149);
  z-index: 99;
}
.orderb2 {
  padding: 4px 20px;
}
.orderb3 {
  margin-right: 30px;
  visibility: hidden;
  color: rgb(236, 68, 68);
  font-size: 18px;
}
.orderb4:hover > .orderb3 {
  visibility: visible;
  cursor: pointer;
}
.buttons {
  background: white;
  border: none;
}
.buttona {
  background: white;
  border: 1px solid rgb(188, 188, 188);
  width: 60px;
  height: 20px;
}
.itema{
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid #777777;
  z-index: 99;
  margin-top: 5px;
  
}
</style>