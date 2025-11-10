<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Brands</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Logo</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>{{model.title}}</td>
          <td>
            <div v-for="(item,index) in model.category_id" :key="index">
              - <form-option :items="categories" :id="item" />
            </div>
          </td>
          <td>
            <img :src="model.logo_full" width="100px" alt="">
          </td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddBrandsModal
      v-if="showAddModal"
      :show="showAddModal"
      :model="uploadModal"
      :categories="categories"
      @closed="closeModal"
      @submited="getModels" />
    
  </div>
</template>

<script>
import AddBrandsModal from '@/components/models/AddBrandsModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddBrandsModal
  },
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
      list: 'brands/list',
      destroy: 'brands/destroy',
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
