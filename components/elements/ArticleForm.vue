<template>
  <div class="admin-minContainer">
    <p>
      <nuxt-link to="/admin/articles">Back</nuxt-link>
    </p>
    <div class="table-head">
      <h1 class="pageTitle20">Article</h1>
    </div>

    <el-form v-if="(paramId && form.id) || !paramId" ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Image" prop="image_file" :rules="paramId?[]:[vRequired]">
        <UploadBox v-model="form.image_file" :oldimg="form.image_full" />
      </el-form-item>
      
      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="Description" prop="description" :rules="[vRequired]">
        <el-input v-model="form.description" type="textarea" rows="4" />
      </el-form-item>

      <el-form-item label="Content" prop="content" :rules="[vRequired]">
        <Editor v-model="form.content" />
      </el-form-item>

      <el-form-item label="Status" prop="status" :rules="[vRequiredGender]">
        <el-select v-model="form.status">
          <el-option label="Published" :value="1"></el-option>
          <el-option label="Blocked" :value="0"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="User roles" prop="user_roles" :rules="[]">
        <el-select
          v-model="form.user_roles"
          multiple
          placeholder="Choose roles">
          <el-option label="Unregistered" value="unregistered"></el-option>
          <el-option label="Member" value="member"></el-option>
          <el-option label="Tester" value="tester"></el-option>
          <el-option label="Investor" value="investor"></el-option>
        </el-select>
      </el-form-item>

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import UploadBox from "@/components/elements/UploadBox"
import Editor from '@/components/elements/Editor'
export default {
  components:{
    Editor,
    UploadBox
  },
  data(){
    return {
      form: {
        title: null,
        image_file: null,
        content: null,
        description: null,
        status: 1,
        date: null,
        user_roles: [],
      },
    }
  },
  computed: {
    paramId(){
      return this.$route.params['id'];
    },
  },
  mounted(){
    this.getModel();
  },
  methods: {
    ...mapActions({
      show: 'articles/show',
      create: 'articles/create',
      update: 'articles/update',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.paramId){
            this.form['id'] = this.paramId;
            this.update(this.form).then(res => {
              this.$router.push('/admin/articles')
            })
          }else{
            this.create(this.form).then(res => {
              this.$router.push('/admin/articles')
            })
          }
        }
      })
    },
    getModel(){
      if(this.paramId){
        this.show(this.paramId).then(res => {
          this.form = {...this.form, ...res['data']}
        })
      }
    }
  }
}
</script>
