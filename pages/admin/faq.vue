<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">FAQ</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Answer</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>{{ model.title }}</td>
          <td>{{ model.description }}</td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddFaqModal
      v-if="showAddModal"
      :show="showAddModal"
      :model="uploadModal"
      @closed="closeModal"
      @submited="getModels" />
  </div>
</template>

<script>
import AddFaqModal from '@/components/models/AddFaqModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddFaqModal
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
      this.list('faq').then(res => {
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
