<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm">
              <div class="card-header">
                <span class="font-weight-bold"
                  > Categories</span
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
                      <FormAddCategory :show="isOpen" @close="hide" />
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      v-model="search"
                      @keypress.enter="searchData"
                      placeholder="cari berdasarkan nama category"
                    />
                    <div class="input-group-append">
                      <button @click="searchData" class="btn btn-success">
                        <i class="fa fa-search"></i>SEARCH
                      </button>
                    </div>
                  </div>
                </div>

                <b-table
                  striped
                  bordered
                  hover
                  :items="categories.data"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(image)="data">
                    <img class="img-fluid" width="50" :src="data.item.image" />
                  </template>
                  <template v-slot:cell(actions)="row">
                    <b-button
                      :to="{
                        name: 'admin-categories-edit-id',
                        params: { id: row.item.id },
                      }"
                      class=""
                    >
                      <iconEditIcon />
                    </b-button>
                    <b-button @click="destroyCategory(row.item.id)" class="">
                      <iconRemoveIcon />
                    </b-button>
                  </template>
                </b-table>

                <!-- pagination -->
                <b-pagination
                  align="right"
                  :value="categories.current_page"
                  :total-rows="categories.total"
                  :per-page="categories.per_page"
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
      title: 'Categories - Administrator',
    }
  },
  data() {
    return {
      isOpen: false,
      fields: [
        {
          label: 'Image',
          key: 'image',
          tdClass: 'text-center',
        },
        {
          label: 'Category Name',
          key: 'name',
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
    await store.dispatch('admin/category/getCategoriesData')
  },
  computed: {
    categories() {
      return this.$store.state.admin.category.categories
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
      this.$store.commit('admin/category/SET_PAGE', 1)
      this.$store.dispatch('admin/category/getCategoriesData', this.search)
    },
    changePage(page) {
      this.$store.commit('admin/category/SET_PAGE', page)
      this.$store.dispatch('admin/category/getCategoriesData', this.search)
    },
    destroyCategory(id) {
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
            this.$store
              .dispatch('admin/category/destroyCategory', id)
              .then(() => {
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
