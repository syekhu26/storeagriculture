<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm">
              <div class="card-header">
                <span class="font-weight-bold"> Edit Product</span>
              </div>
              <div class="card-body">

                <!-- <form @submit.prevent="updateProduct">

                  <div class="form-group">
                    <label>GAMBAR</label>
                    <input type="file" @change="handleFileChange" class="form-control">
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>NAMA PRODUCT</label>
                        <input type="text" v-model="product.title" placeholder="Masukkan Nama Product"
                          class="form-control">
                        <div v-if="validation.title" class="mt-2">
                          <b-alert show variant="danger">{{ validation.title[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>CATEGORY</label>
                        <select class="form-control" v-model="product.category_id">
                          <option value="">-- select category --</option>
                          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                        </select>
                        <div v-if="validation.category_id" class="mt-2">
                          <b-alert show variant="danger">{{ validation.category_id[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>WEIGHT (Gram)</label>
                        <input type="number" v-model="product.weight" placeholder="Masukkan Berat Product (Gram)"
                          class="form-control">
                        <div v-if="validation.weight" class="mt-2">
                          <b-alert show variant="danger">{{ validation.weight[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>STOCK</label>
                        <input type="number" v-model="product.stock" placeholder="Masukkan Stock Product"
                          class="form-control">
                        <div v-if="validation.stock" class="mt-2">
                          <b-alert show variant="danger">{{ validation.stock[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>DESCRIPTION</label>
                    <client-only placeholder="loading...">
                      <ckeditor-nuxt v-model="product.description" :config="editorConfig" />
                    </client-only>
                    <div v-if="validation.description" class="mt-2">
                      <b-alert show variant="danger">{{ validation.description[0] }}</b-alert>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>PRICE</label>
                        <input type="number" v-model="product.price" placeholder="Masukkan Harga Product"
                          class="form-control">
                        <div v-if="validation.price" class="mt-2">
                          <b-alert show variant="danger">{{ validation.price[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>DISCOUNT (%)</label>
                        <input type="number" v-model="product.discount" placeholder="Masukkan Discount Product (%)"
                          class="form-control">
                        <div v-if="validation.discount" class="mt-2">
                          <b-alert show variant="danger">{{ validation.discount[0] }}</b-alert>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button class="btn btn-info mr-1 btn-submit" type="submit"><i class="fa fa-paper-plane"></i>
                    UPDATE</button>
                  <button class="btn btn-warning btn-reset" type="reset"><i class="fa fa-redo"></i>
                    RESET</button>

                </form> -->

                <form action="" @submit.prevent="updateProduct" class="w-full">
                  <div>
                    <div class="flex">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Nama Product</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        v-model="product.title"
                        placeholder="Masukkan Nama Product"
                        required
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <div v-if="validation.title" class="mt-2">
                        <b-alert class="text-red-500">{{
                          validation.title[0]
                        }}</b-alert>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Deskripsi</label
                      >
                    </div>
                    <div class="mb-3">
                      <textarea
                        type="text"
                        v-model="product.description"
                        placeholder="Tulis Deskripsi"
                        required
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <div v-if="validation.description" class="mt-2">
                        <b-alert show class="text-red-500">{{
                          validation.description[0]
                        }}</b-alert>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Weight(Gram)</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        v-model="product.weight"
                        placeholder="Masukkan berat product"
                        required
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <div v-if="validation.weight" class="mt-2">
                        <b-alert class="text-red-500">{{
                          validation.weight[0]
                        }}</b-alert>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Stock</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        v-model="product.stock"
                        placeholder="Masukkan Stock product"
                        required
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <div v-if="validation.stock" class="mt-2">
                        <b-alert class="text-red-500">{{
                          validation.stock[0]
                        }}</b-alert>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      class="mb-2 block text-sm text-black flex items-start"
                    >
                      Category</label
                    >
                    <select
                      v-model="product.category_id"
                      class="border w-full mt-2 h-10 mb-3 px-4 text-black focus:border-blue-500 flex items-start"
                    >
                      <option class="" disabled selected value="">
                        Pilih Category
                      </option>
                      <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.id"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                    <div v-if="validation.category_id" class="mt-2">
                      <b-alert class="text-red-500">{{
                        validation.category_id[0]
                      }}</b-alert>
                    </div>
                  </div>

                  <div>
                    <div class="flex">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Price</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        v-model="product.price"
                        placeholder="Masukkan Harga Product"
                        required
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <div v-if="validation.price" class="mt-2">
                        <b-alert class="text-red-500">{{
                          validation.price[0]
                        }}</b-alert>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Discount (%)</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        v-model="product.discount"
                        placeholder="Masukkan Discount Product"
                        required
                        class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <div v-if="validation.discount" class="mt-2">
                        <b-alert class="text-red-500">{{
                          validation.discount[0]
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
                      class="text-base bg-white text-black font-semibold py-2 px-3 border border-slate-300 w-44 rounded cursor-pointer disabled:bg-slate-500"
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
        title: 'Edit Product - Administrator',
      }
    },

    // components: {
    //   'ckeditor-nuxt': () => {
    //     if (process.client) {
    //       return import('@blowstack/ckeditor-nuxt')
    //     }
    //   },
    // },

    data() {
      return {
        thumbnail: null,
        product: {
          image: '',
          title: '',
          category_id: '',
          description: '',
          weight: '',
          price: '',
          stock: '',
          discount: ''
        },
        validation: [],
        // editorConfig: {
        //   removePlugins: ['Title'],
        // }
      }
    },

   
    async asyncData({ store, route }) {
        await store.dispatch('admin/category/getListAllCategories')
        await store.dispatch('admin/product/getDetailProduct', route.params.id)
    },
    computed: {
        categories() {
            return this.$store.state.admin.category.categories
        },
    },
    mounted() {
        this.product.title       = this.$store.state.admin.product.product.title
        this.product.category_id = this.$store.state.admin.product.product.category_id
        this.product.weight      = this.$store.state.admin.product.product.weight
        this.product.stock       = this.$store.state.admin.product.product.stock
        this.product.description = this.$store.state.admin.product.product.description
        this.product.price       = this.$store.state.admin.product.product.price
        this.product.discount    = this.$store.state.admin.product.product.discount
    },

    methods: {
      // handleFileChange(e) {
      //   let image = this.product.image = e.target.files[0]
      //   if (!image.type.match('image.*')) {
      //     e.target.value = ''
      //     this.product.image = null
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
      const image = (this.product.image = e.target.files[0])
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

      async updateProduct() {
        const formData = new FormData();

        formData.append('image', this.product.image)
        formData.append('title', this.product.title)
        formData.append('category_id', this.product.category_id)
        formData.append('description', this.product.description)
        formData.append('weight', this.product.weight)
        formData.append('price', this.product.price)
        formData.append('stock', this.product.stock)
        formData.append('discount', this.product.discount)
        formData.append("_method", "PATCH")

        await this.$store.dispatch('admin/product/updateProduct', {
            productId: this.$route.params.id,
            payload: formData
        })

          .then(() => {
            this.$swal.fire({
              title: 'BERHASIL!',
              text: "Data Berhasil Diupdate!",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            })
            this.$router.push({
              name: 'admin-products'
            })

          })
          .catch(error => {
            this.validation = error.response.data
          })
      }
    }

  }
</script>

<style>
  .ck-editor__editable {
    min-height: 200px;
  }
</style>