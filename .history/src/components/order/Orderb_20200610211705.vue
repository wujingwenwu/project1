<template>
 <div>
  <div class="d-f j-c-s-b">
  <div class="orderb orderb2 ">V</div>
  <div class=" orderb2">Todo List</div>
  </div>
  <div class="orderb1 m-t-20"></div>
 <input type="checkbox" class="a">
 


 </div>
</template>

<script>
 export default {
   name:'',
   props:{

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
.a{
  
   position: absolute;
  top: 0;
  background-color: #33d883;
  color: #fff;
  width: 1rem;
  height: 1rem;
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: ' ';
  border-radius: 50%;
}
</style>