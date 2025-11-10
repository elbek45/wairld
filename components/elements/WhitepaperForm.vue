<template>
  <div>
    <p>
      <nuxt-link to="/admin/whitepaper">Back</nuxt-link>
    </p>
    <div class="table-head">
      <h1 class="pageTitle20">Whitepaper</h1>
    </div>

    <el-form ref="form" v-if="(paramId && form.id) || !paramId" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Parent" prop="parent_id" :rules="[]">
        <ElSelectTree
          v-model="form.parent_id"
          :data="parents"
          check-strictly
        ></ElSelectTree>
        
        <!-- <el-select v-model="form.parent_id">
          <el-option label=" - " :value="null"></el-option>
          <el-option v-for="(item,index) in parents" :key="index" :label="item.title" :value="item.id"></el-option>
        </el-select> -->
      </el-form-item>
      
      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="Content" prop="content" :rules="[vRequired]">
        <Editor v-model="form.content" />
      </el-form-item>

      <el-form-item label="Order" prop="order" :rules="[vRequired]">
        <el-input v-model="form.order" type="number" />
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
        parent_id: null,
        title: null,
        content: "",
        order: null,
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
      list: 'whitepaper/list',
      create: 'whitepaper/create',
      update: 'whitepaper/update',
    }),
    getParents(){
      this.list().then(res => {
        this.parents = this.getTree(res['data'].filter(item => item.id != this.paramId));
        this.getModel(res['data']);
      })
    },
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.paramId){
            this.form['id'] = this.paramId;
            this.update(this.form).then(res => {
              this.$router.push('/admin/whitepaper')
            })
          }else{
            this.create(this.form).then(res => {
              this.$router.push('/admin/whitepaper')
            })
          }
        }
      })
    },
    getModel(parents){
      if(this.paramId){
        var model = parents.find(item => item.id == this.paramId);
        this.form = {...this.form, ...model}
      }
    },
    getTree(list, parent_id) {
      if (list && list.length) {
          if (parent_id) {
              return list.filter(child => child.parent_id == parent_id).map(item => {
                  return {
                      value: item.id,
                      label: item.title,
                      children: this.getTree(list, item.id),
                  }
              })
          } else {
              return list.filter(parent => !parent.parent_id).map(item => {
                  return {
                      value: item.id,
                      label: item.title,
                      children: this.getTree(list, item.id),
                  }
              })
          }
      }
      return [];
    },
  }
}
</script>
