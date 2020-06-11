<template>
 <div class="picture1 m-t-10">
 <div>
 <div class="picture m-l-20">支持拖拽</div>
 <div class="picture2 m-t-20 d-f a-i-c">Element UI自带上传组件</div>
<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
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
.picture{
    font-weight: 700;
    font-size: 20px;
}
.picture1{
    background: white;
    height: 600px;
}
.picture2{
   
   width: 1200px;
   height: 40px;
   background: rgb(238, 238, 238);
   margin-left: 20px;
}
</style>