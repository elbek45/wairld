<template>
  <div class="admin-minContainer">
    <p>
      <nuxt-link to="/admin/pages">Back</nuxt-link>
    </p>
    <div class="table-head">
      <h1 class="pageTitle20">Pages</h1>
    </div>

    <el-form v-if="(paramId && form.id) || !paramId" ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
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

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Editor from '@/components/elements/Editor'
export default {
  components:{
    Editor,
  },
  data(){
    return {
      form: {
        title: null,
        content: null,
        status: 1,
        date: null,
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
      show: 'pages/show',
      create: 'pages/create',
      update: 'pages/update',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.paramId){
            this.form['id'] = this.paramId;
            this.update(this.form).then(res => {
              this.$router.push('/admin/pages')
            })
          }else{
            this.create(this.form).then(res => {
              this.$router.push('/admin/pages')
            })
          }
        }
      })
    },
    getModel(){
      if(this.paramId){
        this.show(this.paramId).then(res => {
          this.form = {...this.form, ...res['data']}
          console.log(this.form);
        })
      }
    }
  }
}
</script>
