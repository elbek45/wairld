<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type2" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Image" prop="image_file" :rules="model?[]:[vRequired]">
        <UploadBox v-model="form.image_file" :oldimg="oldImage" />
      </el-form-item>

      <el-form-item label="Url" prop="url" :rules="[vRequired]">
        <el-input v-model="form.url" />
      </el-form-item>

      <el-form-item label="Position" prop="position" :rules="[vRequired]">
        <el-select v-model="form.position">
          <el-option label="LargeTop" value="LargeTop"></el-option>
          <el-option label="LargeBottom" value="LargeBottom"></el-option>
          <el-option label="SmallOne" value="SmallOne"></el-option>
          <el-option label="SmallTwo" value="SmallTwo"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="Даты показа" prop="limit_dates" :rules="[]">
        <el-date-picker
          v-model="form.limit_dates"
          class="w-100"
          type="daterange"
          format="dd.MM.yyyy"
          value-format="yyyy-MM-dd"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="Количество показов" prop="limit_show" :rules="[]">
        <el-input v-model="form.limit_show" type="number" />
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
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
import UploadBox from "@/components/elements/UploadBox"
import { mapActions } from 'vuex'
export default {
  props:['model'],
  components: {
    UploadBox,
  },
  mixins: [modals],
  data() {
    return {
      form:{
        image_file: "",
        url: "",
        position: "",
        limit_dates: [],
        limit_date_from: "",
        limit_date_to: "",
        limit_show: "",
        status: 1,
      },
    };
  },
  computed: {
    oldImage(){
      return this.model?this.model.image_full:null;
    }
  },
  watch:{
    "form.limit_dates"(val){
      if(val && val.length){
        this.form.limit_date_from = val[0];
        this.form.limit_date_to = val[1];
      }else{
        this.form.limit_date_from = "";
        this.form.limit_date_to = "";
      }
    }
  },
  created() {
    if(this.model){
      this.form = {...this.form, ...this.model}
      if(this.model.limit_date_from && this.model.limit_date_to){
        this.form.limit_dates = [this.model.limit_date_from,this.model.limit_date_to];
      }
    }
  },
  methods: {
    ...mapActions({
      create: 'adsBanners/create',
      update: 'adsBanners/update',
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