<template>
 <div>
  <div class="d-f j-c-s-b">
  <div class="orderb orderb2 ">V</div>
  <div class=" orderb2">Todo List</div>
  </div>
  <div class="orderb1 m-t-20"></div>
 <input type="checkbox" class="checkbox">
  



 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      tableData: [{
         
          address: 'star this repository'
        }, {
         
          address: 'fork this repository'
        }, {
         
          address: 'follow author'
        }, {
         
          address: 'vue-admin'
        }, {
         
          address: 'vue'
        }, {
         
          address: 'element-ui'
        }, {
         
          address: 'axios'
        },{
            address: 'webpack'
        },{
           address: '6 items left'
        },{
          address: 'All'
        },{
          address: 'Active' 
        },{
          address: 'Active' 
        }],
        multipleSelection: []
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

.Checkbox {
  border-bottom-right-radius: 50%;
  border-bottom-right-radius: 50%;
  width: 50px;
  height: 50px;
   
}

</style>