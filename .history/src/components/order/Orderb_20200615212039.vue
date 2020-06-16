<template>
 <div>
 <orbet :todos="todos" @del="del"></orbet>
 </div>
</template>

<script>
import Orbet from "../orders/Orbet"
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
    Orbet
   },
   methods: {
      del(data) {
      this.todos.splice(data,1)
    }, 
       
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


</style>