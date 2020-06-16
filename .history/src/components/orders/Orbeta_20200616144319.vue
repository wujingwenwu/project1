<template>
 <div>
   <div class="d-f j-c-s-a m-t-10">
   <div class=" hover">{{completeArr}}item left</div>
      
      <input type="button" value="All" class="buttona" />
      <div @click="del">Active</div>
     <div @click="dels">Completed</div>
      
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
     },
      del(){
       let arr = []
       arr = this.todos.filter(item => {
         return item.complete === false
       })
       this.$emit('completeDel',arr)
     },
     dels(){
         let ass = []
         ass = this.todos.filter(item => {
          return item.complete === true
       })
      this.$emit('completeDel', ass)
       
     }
   }
 }
</script>

<style scoped lang='scss'>

</style>