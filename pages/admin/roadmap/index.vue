<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Roadmap</h1>
      <nuxt-link class="btn btn-primary" to="/admin/roadmap/create">Add new</nuxt-link>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>State</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>1</td>
          <td>{{model.title}}</td>
          <td>
            <el-tag type="success" v-if="model.state == 2">Done</el-tag>
            <el-tag type="danger" v-if="model.state == 1">We are here</el-tag>
            <el-tag v-if="model.state == 3">Featured</el-tag>
          </td>
          <td>
            <nuxt-link class="btn btn-sm btn-primary" :to="`/admin/roadmap/update/${model.id}`">Edit</nuxt-link>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      models: [],
    }
  },
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      list: 'roadmap/list',
      destroy: 'roadmap/destroy',
    }),
    getModels(){
      this.list().then(res => {
        this.models = res['data'];
      })
    },
    deleteModel(id){
      this.$confirm("Are you sure?", "Attention",  {
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        type: 'warning',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
      }).then(() => {
        this.destroy(id).then(res => {
          this.getModels();
        })
      })
    },
  }
}
</script>
