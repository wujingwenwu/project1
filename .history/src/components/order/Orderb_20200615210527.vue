<template>
 <div>
 



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
      
       clickItem(item,index) {
         this.$emit( this.todos.splice(data,1),index)
         
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