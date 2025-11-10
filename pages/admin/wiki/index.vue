<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Wiki</h1>
      <nuxt-link class="btn btn-primary" to="/admin/wiki/create">Add new</nuxt-link>
    </div>

    <TableRow v-for="(model,index) in models" :key="index" :item="model" :index="index" @deleteModel="deleteModel" />
    
    <!-- <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Updated at</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>1</td>
          <td>{{model.title}}</td>
          <td>{{model.updated_at|date('DD.MM.YYYY')}}</td>
          <td>
            <nuxt-link class="btn btn-sm btn-primary" :to="`/admin/wiki/update/${model.id}`">Edit</nuxt-link>
            <button class="btn btn-sm btn-danger" @click="deleteModel(model.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table> -->
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
      list: 'wiki/list',
      destroy: 'wiki/destroy',
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
