<template>
  <div class="admin-minContainer">
    <div class="row">
      <div class="col-md-3">
        <el-form-item label="Lists" :prop="`lists.${index}.list`" :rules="[vRequired]">
          <el-select v-model="item.list">
            <el-option v-for="(item,index) in lists" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="col-md-5">
        <el-form-item :prop="`lists.${index}.limit_dates`" :rules="[]">
          <el-date-picker
            v-model="item.limit_dates"
            class="w-100"
            type="daterange"
            format="dd.MM.yyyy"
            value-format="yyyy-MM-dd"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date">
          </el-date-picker>
        </el-form-item>
      </div>
      <div class="col-md-3">
        <el-form-item :prop="`lists.${index}.limit_show`" :rules="[]">
          <el-input placeholder="Количество показов" v-model="item.limit_show" type="number" />
        </el-form-item>
      </div>
      <div class="col-md-1">
        <button class="btn btn-sm btn-danger" type="button" @click="deleteModel">
          <i class="icon-close"></i>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['index', 'item'],
  data(){
    return {
    }
  },
  computed: {
    lists(){
      return [
        "discount",
        "trending",
      ]
    }
  },
  mounted(){
  },
  methods: {
    deleteModel(){
      this.$emit('deleted', this.index);
    }
  }
}
</script>
