<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Pages</h1>
      <nuxt-link class="btn btn-primary" to="/admin/pages/create">Add new</nuxt-link>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Url</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>{{model.title}}</td>
          <td>
            <a :href="getPageUrl(model.slug)" target="_blank">{{getPageUrl(model.slug)}}</a>
          </td>
          <td>
            <el-tag type="success" v-if="model.status == 1">Published</el-tag>
            <el-tag type="danger" v-if="model.status == 0">Blocked</el-tag>
          </td>
          <td>
            <nuxt-link class="btn btn-sm btn-primary" :to="`/admin/pages/update/${model.id}`">Edit</nuxt-link>
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
    console.log(window.location.origin);
  },
  methods: {
    ...mapActions({
      list: 'pages/list',
      destroy: 'pages/destroy',
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
    getPageUrl(slug){
      return `/pages/${slug}`;
    }
  }
}
</script>
