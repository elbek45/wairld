<template>
  <div>
    <p>
      <nuxt-link to="/admin/categories">Back</nuxt-link>
    </p>
    <div class="table-head">
      <h1 class="pageTitle20">Category</h1>
    </div>

    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Parent" prop="parent_id" :rules="[]">
        <el-select v-model="form.parent_id">
          <el-option label=" - " :value="null"></el-option>
          <el-option v-for="(item,index) in parents" :key="index" :label="item.title" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="Content" prop="content" :rules="[vRequired]">
        <Editor v-model="form.content" />
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
    Editor
  },
  data(){
    return {
      form: {
        parent_id: null,
        title: null,
        content: "",
      },
      parents: [],
    }
  },
  computed: {
    paramId(){
      return this.$route.params['id'];
    },
  },
  mounted(){
    this.getParents();
  },
  methods: {
    ...mapActions({
      list: 'categories/list',
      create: 'categories/create',
      update: 'categories/update',
    }),
    getParents(){
      this.list().then(res => {
        this.parents = res['data'];
        this.getModel();
      })
    },
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.paramId){
            this.form['id'] = this.paramId;
            this.update(this.form).then(res => {
              this.$router.push('/admin/categories')
            })
          }else{
            this.create(this.form).then(res => {
              this.$router.push('/admin/categories')
            })
          }
        }
      })
    },
    getModel(){
      if(this.paramId){
        var model = this.parents.find(item => item.id == this.paramId);
        this.form = {...this.form, ...model}
        this.parents = this.parents.filter(item => item.id != this.paramId);
      }
    }
  }
}
</script>
