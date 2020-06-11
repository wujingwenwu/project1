<template>
 <div>
  <div class="d-f j-c-s-b">
  <div class="orderb orderb2 ">V</div>
  <div class=" orderb2">Todo List</div>
  </div>
  <div class="orderb1 m-t-20"></div>

  
  
  



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
         
          title: 'star this repository'
        }, {
         
          title: 'fork this repository'
        }, {
         
          title: 'follow author'
        }, {
         
          title: 'vue-admin'
        }, {
         
         title: 'vue'
        }, {
         
          title: 'element-ui'
        }, {
         
          title: 'axios'
        },{
            title: 'webpack'
        },{
           title: '6 items left'
        },{
          title: 'All'
        },{
          title: 'Active' 
        },{
          title: 'Completed' 
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
</style>