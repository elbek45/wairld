<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Team</h1>
      <button class="btn btn-primary" @click="showAddModal=true">Add new</button>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Full name</th>
          <th>Position</th>
          <th>Description</th>
          <th>Social networks</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>1</td>
          <td>
            <div class="teamMemberPhoto" :style="`background-image: url(${model.photo_full});`"></div>
          </td>
          <td>{{model.full_name}}</td>
          <td>{{model.position}}</td>
          <td>{{model.description}}</td>
          <td>
            <div class="teamMemberSN mt-0 text-start" v-if="model.social_networks">
              <template v-for="(key,index) in snKeys">
                <a v-if="model.social_networks[key]" :key="index" :href="model.social_networks[key]|link" target="_blank">
                  <img :src="`/img/icons/sn/icon-${key}.svg`" alt="">
                </a>
              </template>
            </div>
          </td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <AddMemberToTeamModal
      v-if="showAddModal"
      :model="uploadModal"
      :show="showAddModal"
      @closed="closeModal"
      @submited="getModels" />
  </div>
</template>

<script>
import AddMemberToTeamModal from '@/components/models/AddMemberToTeamModal'
import {mapActions} from 'vuex';
export default {
  components:{
    AddMemberToTeamModal
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
      list: 'team/list',
      destroy: 'team/destroy',
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
