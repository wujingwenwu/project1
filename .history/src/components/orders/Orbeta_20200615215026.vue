<template>
 <div>
   <div class="d-f j-c-s-a m-t-10">
   <div class=" hover">{{completeArr}}item left</div>
      
      <input type="button" value="All" class="buttona" />
      <div @click="clickItem">Active</div>
     <div>Completed</div>
      
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
    todos: {
      type: Array,
      default: () => {},
    }
    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {
       del(){
       let arr = []
       arr = this.todos.filter(item => {
         return item.complete === false
       })
       this.$emit('completeDel', arr)
     },
     clickItem(index){
         if(todos.complete===true)
         this.todos.splice('del')
     }
   },
   mounted() {

   },
   watch: {

   },
   computed: {
      completeArr() {
       let arr = []
       arr = this.todos.filter(item => {
         return item.complete === false
       })
       return arr.length
     }
   }
 }
</script>

<style scoped lang='scss'>

</style>