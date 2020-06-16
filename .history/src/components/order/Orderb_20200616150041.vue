<template>
 <div>
 <orbet :todos="todos" @del="del"></orbet>
  <orbeta :todos="todos" @completeDel='completeDel'></orbeta>
 </div>
</template>

<script>
import Orbet from "../orders/Orbet"
import Orbeta from "../orders/Orbeta"
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
          complete: true
        },{
            title: 'webpack',
            complete: true
        },
       ],
       
      }
    
   },
   components: {
    Orbet,
    Orbeta,
   },
   methods: {
      del(data) {
      this.todos.splice(data,1)
    },
    completeDel(data) {
      this.todos=data
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


</style>