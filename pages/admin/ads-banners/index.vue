<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Ads brands</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>url</th>
          <th>Status</th>
          <th>Position</th>
          <th>Limits</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{index+1}}</td>
          <td>
            <img :src="model.image_full" width="100px" alt="">
          </td>
          <td>
            <a :href="model.url" target="_blank">{{model.url}}</a>
          </td>
          <td>
            <el-tag type="success" v-if="model.status == 1">Published</el-tag>
            <el-tag type="danger" v-if="model.status == 0">Blocked</el-tag>
          </td>
          <td>{{ model.position }}</td>
          <td>
            <div v-if="model.limit_date_from && model.limit_date_to">Даты показа: {{ model.limit_date_from|date('DD.MM.YYYY') }} - {{ model.limit_date_to|date('DD.MM.YYYY') }}</div>
            <div v-if="model.limit_show">Количество показов: {{ model.limit_show }}</div>
          </td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddAdBannerModal
      v-if="showAddModal"
      :show="showAddModal"
      :model="uploadModal"
      @closed="closeModal"
      @submited="getModels" />
    
  </div>
</template>

<script>
import AddAdBannerModal from '@/components/models/AddAdBannerModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddAdBannerModal
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
      list: 'adsBanners/list',
      destroy: 'adsBanners/destroy',
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
