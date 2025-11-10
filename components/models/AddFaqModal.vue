<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Question" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="Answer" prop="description" :rules="[vRequired]">
        <el-input v-model="form.description" type="textarea" autosize />
      </el-form-item>

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
import { mapActions } from 'vuex'
export default {
  props:['model'],
  mixins: [modals],
  data() {
    return {
      form:{
        title: "",
        description: "",
        key: "faq",
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
      create: 'textBlocks/create',
      update: 'textBlocks/update',
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