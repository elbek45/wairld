<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type2" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Parent" prop="parent_id" :rules="[]">
        <el-select-tree
          width="120px"
          :data="parents"
          :props="{
            value: 'id',
            label: (data) => data.title,
            children: 'children',
          }"
          check-strictly
          v-model="form.parent_id"
        ></el-select-tree>
        
      </el-form-item>
      
      <el-form-item label="Image" prop="image_file" :rules="[]">
        <UploadBox v-model="form.image_file" :oldimg="oldImage" />
      </el-form-item>

      <!-- <el-form-item label="Cover" prop="cover_file" :rules="[]">
        <UploadBox v-model="form.cover_file" :oldimg="oldCover" />
      </el-form-item> -->

      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
import UploadBox from "@/components/elements/UploadBox"
import { mapActions } from 'vuex'
export default {
  props:['model','parents'],
  components: {
    UploadBox,
  },
  mixins: [modals],
  data() {
    return {
      form:{
        image_file: null,
        cover_file: null,
        parent_id: null,
        title: null,
        order: null,
        status: null,
      },
      parentsArr: []
    };
  },
  computed: {
    oldImage(){
      return this.model?this.model.image_full:null;
    },
    oldCover(){
      return this.model?this.model.cover_full:null;
    },
  },
  created() {
    this.getParents();
    if(this.model){
      this.form = {...this.form, ...this.model}
    }
  },
  methods: {
    ...mapActions({
      create: 'categories/create',
      update: 'categories/update',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.model){
            this.form['id'] = this.model.id;
            this.update(this.form).then(res => {
              this.$emit('submited', res);
              this.close();
            })
          }else{
            this.create(this.form).then(res => {
              this.$emit('submited', res);
              this.close();
            })
          }
        }
      })
    },
    getParents(){
      if(this.parents && this.parents.length){
        var arr = [];
        if(this.model){
          arr = this.parents.filter(item => item.id != this.model.id);
        }else{
          arr = this.parents;
        }
        this.parentsArr = this.getTree(arr, null);
      }
    },
    getTree(list, parent_id) {
      if (list && list.length) {
          if (parent_id) {
              return list.filter(child => child.parent_id == parent_id).map(item => {
                return {value: item.id, label: item.title, children: this.getTree(list, item.id)};
              })
          } else {
              return list.filter(parent => !parent.parent_id).map(item => {
                return {value: item.id, label: item.title, children: this.getTree(list, item.id)};
              })
          }
      }
      return [];
    },
  },
};
</script>