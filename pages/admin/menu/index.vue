<template>
  <div>
    <div role="alert" class="el-alert el-alert--info is-light pt-3 mb-4">
      <div class="el-alert__content">
        <div class="row">
          <div class="col-md-6">
            <ul>
              <li>/</li>
              <li>/marketplace/dashboard</li>
              <li>/whitepaper</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul>
              <li>/pitch-deck</li>
              <li>/roadmap</li>
              <li>/wiki</li>
              <li>/articles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="table-head">
      <h1 class="pageTitle20">Menu</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Url</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>{{model.title}}</td>
          <td>
            <a :href="model.url" target="blank">{{model.url}}</a>
          </td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddMenuModal
      v-if="showAddModal"
      :show="showAddModal"
      :model="uploadModal"
      @closed="closeModal"
      @submited="getModels" />
    
  </div>
</template>

<script>
import AddMenuModal from '@/components/models/AddMenuModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddMenuModal
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
      list: 'menu/list',
      destroy: 'menu/destroy',
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
<style scoped>
.el-alert__content{
  flex: auto;
}
</style>