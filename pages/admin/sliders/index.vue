<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm">
              <div class="card-header">
                <span class="font-weight-bold"
                  > Sliders</span
                >
              </div>
              <div class="card-body">
                <div @click="show" class="btn btn-success btn-sm mb-3 p-2">
                  <i class="fa fa-plus-circle"></i> ADD NEW
                </div>
                <FormAddSlider :show="isOpen" @close="hide" />

                <b-table
                  striped
                  bordered
                  hover
                  :items="sliders.data"
                  :fields="fields"
                  show-empty
                >
                  <template v-slot:cell(image)="data">
                    <img class="img-fluid" width="200" :src="data.item.image" />
                  </template>
                  <template v-slot:cell(actions)="row">
                    <b-button @click="destroySlider(row.item.id)" class="">
                      <iconRemoveIcon />
                    </b-button>
                  </template>
                </b-table>

                <!-- pagination -->
                <b-pagination
                  align="right"
                  :value="sliders.current_page"
                  :total-rows="sliders.total"
                  :per-page="sliders.per_page"
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
      title: 'Sliders - Administrator',
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
          label: 'Link Slider',
          key: 'link',
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
    await store.dispatch('admin/slider/getSlidersData')
  },
  computed: {
    sliders() {
      return this.$store.state.admin.slider.sliders
    },
  },
  methods: {
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
    changePage(page) {
      this.$store.commit('admin/slider/SET_PAGE', page)
      this.$store.dispatch('admin/slider/getSlidersData', this.search)
    },
    destroySlider(id) {
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
            this.$store.dispatch('admin/slider/destroySlider', id).then(() => {
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
