<template>
 <div>
  <div class="d-f j-c-s-b">
  <div class="orderb orderb2 ">V</div>
  <div class=" orderb2">Todo List</div>
  </div>
  <div class="orderb1 m-t-20"></div>
 <div v-if="todos.length > 0">
   <div v-for="(item,index) in todos" :key="index" class="box1">
   <div class="d-f j-c-s-b m-t-10">
     <div>
       <input type="checkbox" v-model="item.complete"> {{item.title}}
      </div>
     <div @click="clickDel(item,index)" class="orderb3">X</div>
     </div>
   </div>
  </div>
  <div v-else>你的任务已经全部完成了，没有任务啦！</div>
  
  
  



 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      todos: [{
         
          title: 'star this repository',
          complete: false
        }, {
         
          title: 'fork this repository',
          complete: false
        }, {
         
          title: 'follow author',
          complete: false
        }, {
         
          title: 'vue-admin',
          complete: false
        }, {
         
         title: 'vue',
         complete: false
        }, {
         
          title: 'element-ui',
          complete: false
        }, {
         
          title: 'axios',
          complete: false
        },{
            title: 'webpack',
            complete: false
        },{
           title: '6 items left',
           complete: false
        },{
          title: 'All',
          complete: false
        },{
          title: 'Active',
          complete: false 
        },{
          title: 'Completed',
          complete: false 
        }],
       
      }
    
   },
   components: {

   },
   methods: {

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
}
</style>