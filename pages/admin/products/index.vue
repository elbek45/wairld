<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Products</h1>
      <nuxt-link class="btn btn-primary" to="/admin/products/create">Add new</nuxt-link>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>Categories</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>
            <img :src="model.image_full" width="100px" alt="">
          </td>
          <td>{{model.title}}</td>
          <td>
            <div v-for="(item,index) in model.category_id" :key="index">
              - <form-option :items="categories" :id="item" />
            </div>
          </td>
          <td>
            <nuxt-link class="btn btn-sm btn-primary" :to="`/admin/products/update/${model.id}`">Edit</nuxt-link>
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
      showAddModal: false,
      uploadModal: null,
      models: [],
      categories: []
    }
  },
  mounted(){
    this.getModels();
    this.getCategories();
  },
  methods: {
    ...mapActions({
      categoriesList: 'categories/list',
      list: 'products/list',
      destroy: 'products/destroy',
    }),
    getCategories(){
      this.categoriesList().then(res => {
        this.categories = res['data'];
      })
    },
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
    editModel(model){
      this.uploadModal = model;
      this.showAddModal = true;
    },
    closeModal(){
      this.showAddModal = false;
      this.uploadModal = null;
    }
  }
}
</script>
