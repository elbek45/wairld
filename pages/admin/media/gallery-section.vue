<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Gallery section</h1>
      <!-- <button class="btn btn-primary" @click="showAddModal=true">Add new</button> -->
    </div>
    <div class="fSectionGrid">
      <div class="fSectionGridCol">
        <div class="fSectionGridMinVideo relative" v-if="models[0]">
          <video :src="models[0].path_full" muted autoplay loop="loop" playsinline></video>
          <button class="btn btn-primary btn-sm blockEditBtn" @click="editModel(models[0])">
            Edit
          </button>
        </div>
        <div class="fSectionGridMinVideo relative" v-if="models[1]">
          <video :src="models[1].path_full" muted autoplay loop="loop" playsinline></video>
          <button class="btn btn-primary btn-sm blockEditBtn" @click="editModel(models[1])">
            Edit
          </button>
        </div>
        <div class="fSectionGridMinVideo relative" v-if="models[2]">
          <video :src="models[2].path_full" muted autoplay loop="loop" playsinline></video>
          <button class="btn btn-primary btn-sm blockEditBtn" @click="editModel(models[2])">
            Edit
          </button>
        </div>
      </div>
      <div class="fSectionGridCol">
        <div class="fSectionGridItem relative" v-if="models[3]">
          <div class="imgBox" :style="`background-image: url(${models[3].path_full});`"></div>
          <div class="fSectionGridItemCont" v-if="models[3].title || models[3].description">
            <div class="fSectionGridItemTitle">{{models[3].title}}</div>
            <div class="fSectionGridItemTxt">{{models[3].description}}</div>
          </div>
          <button class="btn btn-primary btn-sm blockEditBtn" @click="editModel(models[3])">
            Edit
          </button>
        </div>
      </div>
      <div class="fSectionGridCol">
        <div class="fSectionGridItem fSectionGridItemMin relative" v-if="models[4]">
          <div class="imgBox" :style="`background-image: url(${models[4].path_full});`"></div>
          <button class="btn btn-primary btn-sm blockEditBtn" @click="editModel(models[4])">
            Edit
          </button>
        </div>
        <div class="fSectionGridItem fSectionGridItemMin relative" v-if="models[5]">
          <div class="imgBox" :style="`background-image: url(${models[5].path_full});`"></div>
          <button class="btn btn-primary btn-sm blockEditBtn" @click="editModel(models[5])">
            Edit
          </button>
        </div>
        <div class="fSectionGridItem fSectionGridItemMin relative" v-if="models[6]">
          <div class="imgBox" :style="`background-image: url(${models[6].path_full});`"></div>
          <button class="btn btn-primary btn-sm blockEditBtn" @click="editModel(models[6])">
            Edit
          </button>
        </div>
      </div>
      <div class="fSectionGridCol">
        <div class="fSectionGridItem relative" v-if="models[7]">
          <div class="imgBox" :style="`background-image: url(${models[7].path_full});`"></div>
          <button class="btn btn-primary btn-sm blockEditBtn" @click="editModel(models[7])">
            Edit
          </button>
        </div>
      </div>
    </div>

    <AddGallerySectionModal
      v-if="showAddModal"
      :model="uploadModal"
      :show="showAddModal"
      @closed="closeModal"
      @submited="getModels" />
  </div>
</template>

<script>
import AddGallerySectionModal from '@/components/models/AddGallerySectionModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddGallerySectionModal
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
      this.list('gallery_section').then(res => {
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
    },
    editModel(model){
      this.uploadModal = model;
      this.showAddModal = true;
    }
  }
}
</script>
