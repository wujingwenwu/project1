<template>
 <div class="picture1 m-t-10">
 <div>
 <div class="picture m-l-20">支持拖拽</div>
 <div class="picture2 m-t-20 d-f a-i-c"><div class="m-l-20">UI自带上传组件</div> </div>
<el-upload
  class="upload-demo m-t-20 m-l-20"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<div class="picture m-l-20 m-t-20">支持裁剪</div>
 <div class="picture2 m-t-20 d-f a-i-c"><div class="m-l-20">vue-image-crop-upload</div> </div>
 <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
   <el-button size="small" type="primary" class="item">上传图片</el-button>
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
      fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
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
.item{
    margin-left: 20px;
    margin-top: 20px;
}
</style>