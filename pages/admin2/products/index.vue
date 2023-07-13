<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-layer-group"></i> PRODUCTS</span
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
                      <FormAddProduct :show="isOpen" @close="hide" />
                    </div>
                    <input
                      v-model="search"
                      @keypress.enter="searchData"
                      type="text"
                      class="form-control"
                      placeholder="cari berdasarkan nama product"
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
                  :items="products.data"
                  :fields="fields"
                  show-empty
                >
                <template v-slot:cell(actions)="row">
                    <!-- <b-button
                      :to="{
                        name: 'admin-categories-edit-id',
                        params: { id: row.item.id },
                      }"
                      variant="info"
                      size="sm"
                    >
                      EDIT
                    </b-button> -->
                    <b-button
                      :to="{
                        name: 'admin-products-edit-id',
                        params: { id: row.item.id },
                      }"
                      class=""
                    >
                      <iconEditIcon />
                    </b-button>
                    <b-button
                      @click="destroyProduct(row.item.id)"
                      class=""
                    >
                      <iconRemoveIcon />
                    </b-button>
                  </template>
                </b-table>

                <b-pagination
                  align="right"
                  :value="products.current_page"
                  :total-rows="products.total"
                  :per-page="products.per_page"
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
      title: 'Products - Administrator',
      search: '',
    }
  },

  data() {
    return {
      isOpen: false,
      fields: [
        {
          label: 'Product Name',
          key: 'title',
        },
        {
          label: 'Category Name',
          key: 'category.name',
        },
        {
          label: 'Stock',
          key: 'stock',
          tdClass: 'text-center',
        },
        {
          label: 'Actions',
          key: 'actions',
          tdClass: 'text-center',
        },
      ],
    }
  },

  async asyncData({ store }) {
    await store.dispatch('admin/product/getProductsData')
  },
  computed: {
    products() {
      return this.$store.state.admin.product.products
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
      this.$store.commit('admin/product/setPage', 1)
      this.$store.dispatch('admin/product/getProductsData', this.search)
    },
    changePage(page) {
      this.$store.commit('admin/product/SET_PAGE', page)
      this.$store.dispatch('admin/product/getProductsData', this.search)
    },
    destroyProduct(id) {
          this.$swal.fire({
            title: 'APAKAH ANDA YAKIN ?',
            text: "INGIN MENGHAPUS DATA INI !",
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#30d63e',
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Batal',
          }).then((result) => {
            if (result.isConfirmed) {
              this.$store.dispatch('admin/product/destroyProduct', id)
                .then(() => {
                  this.$nuxt.refresh()
                  this.$swal.fire({
                    title: 'BERHASIL!',
                    text: "Data Berhasil Dihapus!",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                  })

                })
            }
          })
        }
  },
}
</script>

<style></style>