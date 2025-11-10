<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Categories</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>

    <TableRow v-for="(model,index) in models" 
      :key="index" 
      :item="model" 
      :index="index" 
      @editModel="editModel"
      @deleteModel="deleteModel" 
      :isEditModal="true"
      secondcolumn="image_full" />
    
    <!-- <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>{{model.title}}</td>
          <td>
            <img :src="model.image_full" width="100px" alt="">
          </td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table> -->

    <AddCategoryModal
      v-if="showAddModal"
      :show="showAddModal"
      :model="uploadModal"
      :parents="models"
      @closed="closeModal"
      @submited="getModels" />
    
  </div>
</template>

<script>
import AddCategoryModal from '@/components/models/AddCategoryModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddCategoryModal
  },
  data(){
    return {
      showAddModal: false,
      uploadModal: null,
      models: [],
    }
  },
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      list: 'categories/list',
      destroy: 'categories/destroy',
    }),
    getModels(){
      this.list().then(res => {
        this.models = this.getTree(res['data']);
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
    },
    getTree(list, parent_id) {
      if (list && list.length) {
          if (parent_id) {
              return list.filter(child => child.parent_id == parent_id).map(item => {
                item['children'] = this.getTree(list, item.id);
                return item;
              })
          } else {
              return list.filter(parent => !parent.parent_id).map(item => {
                item['children'] = this.getTree(list, item.id);
                return item;
              })
          }
      }
      return [];
    },
  }
}
</script>
