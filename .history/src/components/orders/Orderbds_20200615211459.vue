<template>
 <div>
    <div class="d-f j-c-s-b">
  <div class="orderb orderb2 ">V</div>
  <div class=" orderb2">Todo List</div>
  </div>
  <div class="orderb1 m-t-20"></div>
  <div>
 <div v-if="todos.length > 0">
   <div v-for="(item,index) in todos" :key="index" class="box1">
   <div class="d-f j-c-s-b m-t-10 orderb4">
     <div class="m-l-10 ">
       <input type="checkbox" v-model="item.complete"> {{item.title}}
      </div>
     <div class="orderb3" @click="clickItem(item,index)">X</div>
     </div>
   </div>
  </div>
  <div v-else>你的任务已经全部完成了，没有任务啦！</div>
  </div>
  <div class="orderb1 m-t-20"></div>
  <div class="d-f j-c-s-a m-t-20">
  <input type="button" value="6 item left" class="buttons">
  <input type="button" value="All" class="buttona" >
    <input type="button" value="Active" class="buttons">
      <input type="button" value="Completed" class="buttons">
  </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
      todos: {
       type:Array,
       default: ()=>[]
     }
    },
   data () {
     return {

   }
   },
   components: {
    
   },
   methods: {
       clicItem(item,index){
       
       this.$emit('del', index)
     }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.orderb{
  color: rgb(172, 151, 149);
}
.orderb1{
  width: 100%;
  height: 1px;
  background: rgb(172, 151, 149);
  z-index: 99;
}
.orderb2{
  padding: 4px 20px;
}
.orderb3{
  margin-right: 30px;
  visibility: hidden;
  color: rgb(236, 68, 68);
  font-size: 18px;
}
.orderb4:hover > .orderb3{
  visibility: visible;
  cursor: pointer;
}
.buttons{
  background: white;
  border: none;
}
.buttona{
  background: white;
  border: 1px solid rgb(188, 188, 188);
  width: 60px;
  height: 20px;
}
</style>