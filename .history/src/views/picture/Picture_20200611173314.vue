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
 <div id="app">    <button class="btn" @click="toggleShow">上传图片</button>
     <my-upload  
     @crop-success="cropSuccess" 
     @crop-upload-success="cropUploadSuccess"
     @crop-upload-fail="cropUploadFail"
     v-model="show" 
     :width="200" 
     :height="200" 
     img-format="png" 
     :size="size"
    langType='zh'
    :noRotate='false'
     field="Avatar1"
    url="https://httpbin.org/post"></my-upload>
    <img :src="imgDataUrl">
  </div>
</div>
 </div>
</template>

<script>
import 'babel-polyfill';
import myUpload from 'vue-image-crop-upload';
 export default {
   name:'',
   props:{

    },
   data () {
     return {
       imgDataUrl: "",
        show: false,
        size:2.1
   }
   },
   components: {
      "my-upload": myUpload
   },
   methods: {
      toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------',imgDataUrl, field);
        },
        //上传成功回调
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            this.imgDataUrl = jsonData.files.Avatar1;
            console.log(jsonData);
            console.log('field: ' + field);
        },
        //上传失败回调
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log('上传失败状态'+ status);
            console.log('field: ' + field);
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