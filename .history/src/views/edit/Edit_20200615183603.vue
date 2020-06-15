<template>
 <div>
    <div class="d-f j-c-s-a">
    <el-button type="danger">返回</el-button>
    <el-button type="primary" @click="pub
    ">发布</el-button>
    </div>
     <div class="m-t-30">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="文章标题"
          prop="title"
          :rules="[{ required: true, message: '请输入标题', trigger: 'blur' }]"
        >
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item
          label="文章摘要"
          prop="abstract"
          :rules="[{ required: true, message: '请输入摘要', trigger: 'blur' }]"
        >
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="d-f">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        label-width="100px"
        class="demo-ruleForm d-f publish2"
      >
        <el-form-item label="作者" prop="author" :rules="[{ required: true}]" class="item3">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item
          label="类目"
          prop=" category"
          :rules="[{ required: true, trigger: 'blur' }]"
          class="item2"
        >
          <el-select v-model="ruleForm.category" placeholder="请选择">
            <el-option label="vue" value="Vue"></el-option>
            <el-option label="React" value="React"></el-option>
            <el-option label="Nodejs" value="Nodejs"></el-option>
            <el-option label="性能优化" value="性能优化"></el-option>
            <el-option label="JavaScript" value="JavaScript"></el-option>
            <el-option label="小程序" value="小程序"></el-option>
            <el-option label="工具类" value="工具类"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="来源"
          prop="source"
          :rules="[{ required: true, trigger: 'blur' }]"
          class="item2"
        >
          <el-select v-model="ruleForm.source" placeholder="请选择">
            <el-option label="原创" value="原创"></el-option>
            <el-option label="转载" value="转载"></el-option>
            <el-option label="与他人合作 " value="与他人合作"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          
          label="重要性"
          prop="star"
          :rules="[{ required: true, trigger: 'blur' }]"
          class="item2"
        >
          <el-select v-model="ruleForm.star" placeholder="请选择">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
       <el-form-item label="发布时间" prop="times">
            <el-date-picker
              type="datetime"
              placeholder="选择日期时间"
              v-model="ruleForm.date"
              style="width: 150px;"
            ></el-date-picker>
          </el-form-item>

      </el-form>
    </div>
    <mavon-editor v-model="text" />
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     text: "",
      ruleForm: {
          id:'',
        title: "",
        abstract: "",
        category: "",
        source: "",
        star: "",
        date: "",
        author:'',
        arr:[]
        
      }
   }
   },
   components: {

   },
   methods: {
       pub(){
      axios.post(`/api/article/create`,{
        date:this.ruleForm.date,
         title:this.ruleForm.title,
        abstract:this.ruleForm.abstract,
       category:this.ruleForm.category,
        source:this.ruleForm.source,
       star:this.ruleForm.star,
        text:this.text,
        author:this.ruleForm.author,

      }).then(res=>{
        if(res.data.code===200){
               this.id = res.data;
            this.arr = res.data.data
           this.$message.success("发布成功");
           this.$router.push('/')
        }else{
            this.$message.success("发布失败");
        }
        
      }).catch(err=>{
        console.log(err);
      })
    },
   },
   mounted() {
     this.id = this.$route.query.id,
      console.log(this.$route);
     axios.post(`/api /article/update`,{

     }).then(res=>{

     }).catch(err=>{
         console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>