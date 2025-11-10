<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type2" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Status" prop="is_active" :rules="[]">
        <el-select v-model="form.is_active">
          <el-option label="Активный" :value="true"></el-option>
          <el-option label="Не активный" :value="false"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Role" prop="role" :rules="[]">
        <el-select v-model="form.role">
          <el-option label="Member" value="member"></el-option>
          <el-option label="Tester" value="tester"></el-option>
          <el-option label="Investor" value="investor"></el-option>
        </el-select>
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
        role: null,
        is_active: false,
      },
    };
  },
  computed: {
  },
  created() {
    if(this.model){
      this.form.id = this.model.id;
      this.form.is_active = this.model.is_active;
      this.form.role = this.model.role;
    }
  },
  methods: {
    ...mapActions({
      update: 'users/update',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.form['id'] = this.model.id;
          this.update(this.form).then(res => {
            this.$emit('submited', res);
            this.close();
          })
        }
      })
    },
  },
};
</script>