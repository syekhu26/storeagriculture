<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-user"></i> CUSTOMERS</span
                >
              </div>
              <div class="card-body">
                <div class="form-group">
                  <div class="input-group mb-3">
                    <input
                      v-model="search"
                      @keypress.enter="searchData"
                      type="text"
                      class="form-control"
                      placeholder="cari berdasarkan nama customer"
                    />
                    <div class="input-group-append">
                      <button @click="searchData" class="btn btn-warning">
                        <i class="fa fa-search"></i>
                        SEARCH
                      </button>
                    </div>
                  </div>
                </div>

                <b-table
                  striped
                  bordered
                  hover
                  :items="customers.data"
                  :fields="fields"
                  show-empty
                >
                </b-table>
                <b-pagination
                  align="right"
                  :value="customers.current_page"
                  :total-rows="customers.total"
                  :per-page="customers.per_page"
                  @change="changePage"
                  aria-controls="my-table"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'admin',
  head() {
    return {
      title: 'Customers - Administrator',
    }
  },
  data() {
    return {
      search: '',
      fields: [
        {
          label: 'Customer Name',
          key: 'name',
        },
        {
          label: 'Email Address',
          key: 'email',
        },
        {
          label: 'Joined',
          key: 'created_at',
        },
      ],
    }
  },
  async asyncData({ store }) {
    await store.dispatch('admin/customer/getCustomersData')
  },
  //   mounted() {
  //     this.$store.dispatch('admin/customer/getCustomersData')
  //   },
  computed: {
    customers() {
      return this.$store.state.admin.customer.customers
    },
  },
  methods: {
    searchData() {
      this.$store.commit('admin/customer/setPage', 1)
      this.$store.dispatch('admin/customer/getCustomersData', this.search)
    },
    changePage(page) {
      this.$store.commit('admin/customer/setPage', page)
      this.$store.dispatch('admin/customer/getCustomersData', this.search)
    },
  },
}
</script>

<style></style>
