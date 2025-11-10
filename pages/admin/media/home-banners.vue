<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Banner video</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Video</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>1</td>
          <td>
            <video autoplay controls muted playsinline width="300px" height="200px">
              <source :src="model.path_full" type="video/mp4">
            </video>
          </td>
          <td>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddBannerVideoModal
      v-if="showAddModal"
      :show="showAddModal"
      @closed="closeModal"
      @submited="getModels" />
  </div>
</template>

<script>
import AddBannerVideoModal from '@/components/models/AddBannerVideoModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddBannerVideoModal
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
      list: 'mediaFiles/getByKey',
      destroy: 'mediaFiles/destroy',
    }),
    getModels(){
      this.list('banner_video').then(res => {
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
    closeModal(){
      this.showAddModal = false;
      this.uploadModal = null;
    }
  }
}
</script>
