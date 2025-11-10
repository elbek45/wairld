<template>
  <div>
    <div class="table-head">
      <h1 class="pageTitle20">Users</h1>
      <div class="table-filters">
        <div class="table-filter">
          <el-input @keyup.enter.native="submitFilter" @change="submitFilter" v-model="filter.full_name" clearable placeholder="Full name" />
        </div>
        <div class="table-filter">
          <el-select v-model="filter.role" placeholder="Select role" clearable @change="submitFilter">
            <el-option label="Member" value="member"></el-option>
            <el-option label="Tester" value="tester"></el-option>
            <el-option label="Investor" value="investor"></el-option>
          </el-select>
        </div>
        <div class="table-filter">
          <el-select v-model="filter.is_active" placeholder="Select status" clearable @change="submitFilter">
            <el-option label="Активный" :value="true"></el-option>
            <el-option label="Не активный" :value="false"></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <table class="table-1">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Phone number</th>
          <th>Country</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="models.length">
        <tr v-for="(model,index) in models" :key="index">
          <td>{{ pagination.startIndex+(index+1) }}</td>
          <td>{{ model.member.full_name }}</td>
          <td>{{ model.member.email }}</td>
          <td>{{ model.is_active?"Активный":"Не активный" }}</td>
          <td>{{ model.member.phone_number }}</td>
          <td>
            <form-option :items="countries" :id="model.member.country_id" label="name" />
          </td>
          <td>{{ model.role }}</td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editModel(model)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>

    <el-pagination
      v-if="pagination"
      background
      :hide-on-single-page="true"
      :page-size="1 * pagination.limit"
      :current-page.sync="pagination.page"
      layout="prev, pager, next"
      :pager-count="7"
      prev-text="<"
      next-text=">"
      @current-change="changePage"
      :total="pagination.total">
    </el-pagination>
    
    <UserEditModal
      v-if="showEditModal"
      :show="showEditModal"
      :model="modelEdit"
      @submited="getModels"
      @closed="closeEditModal" />
    
  </div>
</template>

<script>
import UserEditModal from '@/components/models/UserEditModal'
import {mapActions, mapGetters} from 'vuex';
import filter from '@/mixins/filter'
export default {
  mixins: [filter],
  components:{
    UserEditModal
  },
  data(){
    return {
      filter: {
        page: 1,
        full_name: "",
        role: "",
        is_active: null,
      },
      showEditModal: false,
      modelEdit: null,
    }
  },
  computed:{
    ...mapGetters({
      models: 'users/LIST',
      pagination: 'users/PAGINATION',
      countries: 'classifiers/COUNTRIES'
    })
  },
  watch:{
    queries(){
      this.getModels();
    }
  },
  mounted(){
    this.getModels();
    this.getCountries();
  },
  methods: {
    ...mapActions({
      getList: 'users/list',
      getCountries: 'classifiers/getCountries',
    }),
    getModels(){
      this.getList(this.queries)
    },
    editModel(model){
      this.modelEdit = model;
      this.showEditModal = true;
    },
    closeEditModal(){
      this.showEditModal = false;
      this.modelEdit = null;
    }
  }
}
</script>
