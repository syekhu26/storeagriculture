<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm">
              <div class="card-header">
                <span class="font-weight-bold"
                  > Users</span
                >
              </div>
              <div class="card-body">
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div
                        @click="show"
                        class="bg-green-500 btn-sm cursor-pointer"
                        style="padding-top: 10px"
                      >
                        <i class="fa fa-plus-circle"></i> ADD NEW
                      </div>
                      <FormAddUser :show="isOpen" @close="hide" />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="search"
                      @keypress.enter="searchData"
                      placeholder="cari berdasarkan nama user"
                    />
                    <div class="input-group-append">
                      <button @click="searchData" class="btn btn-success">
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
                  :items="users.data"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(image)="data">
                    <img class="img-fluid" width="50" :src="data.item.image" />
                  </template>
                  <template v-slot:cell(actions)="row">
                    <b-button
                      :to="{
                        name: 'admin-users-edit-id',
                        params: { id: row.item.id },
                      }"
                      class=""
                    >
                      <iconEditIcon />
                    </b-button>
                    <b-button @click="destroyUser(row.item.id)" class="">
                      <iconRemoveIcon />
                    </b-button>
                  </template>
                </b-table>

                <!-- pagination -->
                <b-pagination
                  align="right"
                  :value="users.current_page"
                  :total-rows="users.total"
                  :per-page="users.per_page"
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
  layout: 'admin2',
  head() {
    return {
      title: 'Users - Administrator',
    }
  },
  data() {
    return {
      isOpen: false,
      fields: [
        {
          label: 'User Name',
          key: 'name',
        },
        {
          label: 'Email Address',
          key: 'email',
        },
        {
          label: 'Actions',
          key: 'actions',
          tdClass: 'text-center',
        },
      ],
      search: '',
    }
  },
  async asyncData({ store }) {
    await store.dispatch('admin/user/getUsersData')
  },
  computed: {
    users() {
      return this.$store.state.admin.user.users
    },
  },
  methods: {
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
    searchData() {
      this.$store.commit('admin/user/SET_PAGE', 1)
      this.$store.dispatch('admin/user/getUsersData', this.search)
    },
    changePage(page) {
      this.$store.commit('admin/user/SET_PAGE', page)
      this.$store.dispatch('admin/user/getUsersData', this.search)
    },
    destroyUser(id) {
      this.$swal
        .fire({
          title: 'APAKAH ANDA YAKIN ?',
          text: 'INGIN MENGHAPUS DATA INI !',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Hapus',
          cancelButtonText: 'Batal',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('admin/user/destroyUser', id).then(() => {
              this.$nuxt.refresh()
              this.$swal.fire({
                title: 'BERHASIL!',
                text: 'Data Berhasil Dihapus!',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
              })
            })
          }
        })
    },
  },
}
</script>

<style></style>
