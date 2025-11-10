<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type2" :model="form" label-position="top" @submit.prevent.native="submit">
      
      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="Products" prop="product_ids" :rules="[]">
        <el-select v-model="form.product_ids" multiple>
          <el-option v-for="(item,index) in products" :key="index" :label="item.title" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <div class="enterFormSubmit mb-0">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
import { mapActions } from 'vuex'
export default {
  props:['model','products'],
  mixins: [modals],
  data() {
    return {
      form:{
        title: null,
        product_ids: [],
      },
    };
  },
  computed: {
  },
  created() {
    if(this.model){
      this.form = {...this.form, ...this.model}
    }
  },
  methods: {
    ...mapActions({
      create: 'collections/create',
      update: 'collections/update',
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
  },
};
</script>