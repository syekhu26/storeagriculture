<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm">
              <div class="card-header">
                <span class="font-weight-bold"
                  >Edit Category</span
                >
              </div>
              <div class="card-body">
                <!-- <form @submit.prevent="updateCategory">

                  <div class="form-group">
                    <label>GAMBAR</label>
                    <input type="file" @change="handleFileChange" class="form-control">
                  </div>

                  <div class="form-group">
                    <label>NAMA CATEGORY</label>
                    <input type="text" v-model="category.name" placeholder="Masukkan Nama Category" class="form-control">
                    <div v-if="validation.name" class="mt-2">
                      <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
                    UPDATE</button>
                  <button class="btn btn-warning btn-reset" type="reset"><i class="fa fa-redo"></i>
                    RESET</button>

                </form> -->
                <form action="" @submit.prevent="updateCategory" class="w-full">
                  <div>
                    <div class="flex">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Nama Category</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        v-model="category.name"
                        placeholder="Tulis Category"
                        required
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <div v-if="validation.name" class="mt-2">
                        <b-alert class="text-red-500">{{
                          validation.name[0]
                        }}</b-alert>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Gambar</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="file"
                        name="file"
                        id="fileInput"
                        class="overflow-hidden absolute opacity-0"
                        @change="onChange"
                        ref="file"
                      />
                    </div>
                    <!-- <input
                  type="file"
                  name="file"
                  id="fileInput"
                  @change="handleFileChange"
                  class="overflow-hidden absolute opacity-0"
                  ref="file"
                /> -->
                    <div
                      class="text-base bg-white text-black font-semibold py-2 px-4 border border-slate-300 w-44 rounded cursor-pointer disabled:bg-slate-500"
                    >
                      <label for="fileInput" class="text-center">
                        <div>Upload file</div>
                      </label>
                    </div>
                    <div v-if="validation.files" class="mt-2">
                      <b-alert class="text-red-500">{{
                        validation.files[0]
                      }}</b-alert>
                    </div>
                    <!-- <div class="mt-4" v-if="image.length && !isUpload">
                  <div>
                    <img
                      class="w-72 h-44 rounded border"
                      :src="generateThumbnail(file)"
                    />
                    <div
                      class="flex items-center justify-between bg-slate-200 border"
                    >
                      <p class="px-3 text-black" :title="file.name">
                        {{ makeName(file.name) }}
                      </p>
                      <div>
                        <button
                          class="ml-2 mt-2"
                          type="button"
                          @click="remove(files.indexOf(file))"
                          title="Remove file"
                        >
                          <iconHapusIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div> -->
                    <div class="mt-4">
                      <img
                        class="w-72 h-44 rounded border"
                        :src="thumbnail"
                        v-if="thumbnail"
                        alt="Thumbnail"
                      />
                      <p class="bg-slate-300 w-72 px-3 text-black">
                        {{ fileName }}
                      </p>
                    </div>
                  </div>
                  <div class="flex justify-end mt-8">
                    <button
                      type="submit"
                      value="submit"
                      class="text-base w-[300px] bg-green-500 text-white font-semibold py-2 px-5 rounded"
                    >
                      <!-- {{ this.edit ? 'Simpan Catatan' : 'Buat Catatan' }} -->
                      Simpan
                    </button>
                  </div>
                </form>
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
      title: 'Edit Category - Administrator',
    }
  },

  data() {
    return {
      thumbnail: null,
      category: {
        image: '',
        name: '',
      },
      validation: [],
    }
  },
  async asyncData({ store, route }) {
    await store.dispatch('admin/category/getDetailCategory', route.params.id)
  },

  mounted() {
    this.category.name = this.$store.state.admin.category.category.name
  },
  methods: {
    // handleFileChange(e) {
    //   const image = this.category.image = e.target.files[0]
    //   if (!image.type.match('image.*')) {
    //     e.target.value = ''
    //     this.category.image = null
    //     this.$swal.fire({
    //       title: 'OOPS!',
    //       text: "Format File Tidak Didukung!",
    //       icon: 'error',
    //       showConfirmButton: false,
    //       timer: 2000
    //     })
    //   }

    // },
    onChange(e) {
      //   this.files = this.$refs.file.files
      const image = (this.category.image = e.target.files[0])
      this.fileName = image.name
      this.createThumbnail(image)

      if (!image.type.match('image.*')) {
        e.target.value = ''

        this.image = null

        this.$swal.fire({
          title: 'OOPS!',
          text: 'Format File Tidak Didukung!',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
        })
      }
    },
    createThumbnail(image) {
      const reader = new FileReader()
      reader.onload = (event) => {
        this.thumbnail = event.target.result
      }
      reader.readAsDataURL(image)
    },
    async updateCategory() {
      const formData = new FormData()

      formData.append('image', this.category.image)
      formData.append('name', this.category.name)
      formData.append('_method', 'PATCH')
      await this.$store
        .dispatch('admin/category/updateCategory', {
          categoryId: this.$route.params.id,
          payload: formData,
        })
        .then(() => {
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Data Berhasil Diupdate!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
          })
          this.$router.push({
            name: 'admin-categories',
          })
        })
        .catch((error) => {
          this.validation = error.response.data
        })
    },
  },
}
</script>

<style></style>
