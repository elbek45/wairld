<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Collections</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Products</th>
          <th width="200"></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>{{model.title}}</td>
          <td>
            <span v-for="(product,index) in model.products" :key="index" class="me-2">
              <img :src="product.image_full" alt="" width="100px">
            </span>
            <!-- <ul class="mb-0">
              <li v-for="(product,index) in model.products" :key="index">{{product.title}}</li>
            </ul> -->
          </td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddCollectionModal
      v-if="showAddModal"
      :show="showAddModal"
      :products="products"
      :model="uploadModal"
      @closed="closeModal"
      @submited="getModels" />
    
  </div>
</template>

<script>
import AddCollectionModal from '@/components/models/AddCollectionModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddCollectionModal
  },
  data(){
    return {
      showAddModal: false,
      uploadModal: null,
      models: [],
      products: [],
    }
  },
  mounted(){
    this.getModels();
    this.getProducts();
  },
  methods: {
    ...mapActions({
      list: 'collections/list',
      destroy: 'collections/destroy',
      productsList: 'products/shortList',
    }),
    getProducts(){
      this.productsList().then(res => {
        this.products = res['data'];
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
