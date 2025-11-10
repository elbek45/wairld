<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Test questions</h1>
      <nuxt-link class="btn btn-primary" to="/admin/test-questions/create">Add new</nuxt-link>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>Number</th>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{model.number}}</td>
          <td>{{model.title}}</td>
          <td>
            <nuxt-link class="btn btn-sm btn-primary" :to="`/admin/test-questions/update/${model.id}`">Edit</nuxt-link>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      models: [],
    }
  },
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      list: 'testQuestions/list',
      destroy: 'testQuestions/destroy',
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
  }
}
</script>
