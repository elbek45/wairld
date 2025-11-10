<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Section with blocks</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th width="220px">Image</th>
          <th>Title</th>
          <th width="300px">Description</th>
          <th>link</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>
            <img :src="model.file_full_path" alt="" width="200px" height="100px">
          </td>
          <td>{{ model.title }}</td>
          <td>{{ model.description }}</td>
          <td>
            <a :href="model.link" target="_blank">{{ model.link }}</a>
          </td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddLinkBlocksModal
      v-if="showAddModal"
      :show="showAddModal"
      :model="uploadModal"
      @closed="closeModal"
      @submited="getModels" />
  </div>
</template>

<script>
import AddLinkBlocksModal from '@/components/models/AddLinkBlocksModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddLinkBlocksModal
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
      list: 'textBlocks/getByKey',
      destroy: 'textBlocks/destroy',
    }),
    getModels(){
      this.list('link_block').then(res => {
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
