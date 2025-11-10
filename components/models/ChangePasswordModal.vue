<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="574px"
    class="whiteDialog withDialogHeader"
    title="Change password"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type2" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="New password" prop="password" :rules="[vRequired]">
        <el-input v-model="form.password" type="password" />
      </el-form-item>

      <el-form-item label="Confirm password" prop="password_confirmation" :rules="[vRequired, vConfomPass(form.password)]">
        <el-input v-model="form.password_confirmation" type="password" />
      </el-form-item>

      <el-form-item label="Security level">
        <div class="securityLevel">
          <span :class="{'active': passwordLevel>0}"></span>
          <span :class="{'active': passwordLevel>1}"></span>
          <span :class="{'active': passwordLevel>2}"></span>
          <span :class="{'active': passwordLevel>3}"></span>
          <span :class="{'active': passwordLevel>4}"></span>
        </div>
      </el-form-item>

      <button class="btn btn-primary btn-large w-100" type="submit">Confirm</button>

    </el-form>
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
import {checkpassword} from '@/utils'
export default {
  mixins: [modals],
  data() {
    return {
      passwordLevel: 0,
      form:{
        password: "",
        password_confirmation: "",
      },
    };
  },
  computed: {
  },
  watch:{
    "form.password"(val){
      this.passwordLevel = checkpassword(val);
    }
  },
  created() {
  },
  methods: {
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.close();
          this.$emit('submited', this.form.password); 
        }
      })
    },
  },
};
</script>