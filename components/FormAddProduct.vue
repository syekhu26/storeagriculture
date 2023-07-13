<template>
  <div class="">
    <div
      v-if="show"
      class="bg-opacity-50 bg-black fixed inset-0 justify-center items-center overflow-y-auto overflow-x-hidden z-20"
    >
      <div class="mt-10 my-10">
        <div class="bg-white max-w-2xl w-full rounded p-6 mx-auto shadow-lg">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              <!-- {{ this.edit ? 'Edit Catatan' : 'Buat Catatan' }} -->
              Tambah Product
            </h3>
            <div
              @click="$emit('close')"
              class="w-10 h-10 rounded-full flex mt-3 top-5 right-5 cursor-pointer"
            >
              <iconSilangIcon />
            </div>
          </div>
          <div class="mt-4">
            <form action="" @submit.prevent="tambahProduct" class="w-full">
              <div>
                <div class="flex">
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Nama Product</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="title"
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
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Deskripsi</label
                  >
                </div>
                <div class="mb-3">
                  <textarea
                    type="text"
                    v-model="description"
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
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Weight(Gram)</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="weight"
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
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Stock</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="stock"
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
                <label class="mb-2 block text-sm text-black flex items-start">
                  Category</label
                >
                <select
                  v-model="category_id"
                  class="border w-full mt-2 h-10 mb-3 text-black focus:border-blue-500 flex items-start"
                >
                  <option class="" disabled selected value="">Pilih Category</option>
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
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Price</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="price"
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
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Discount (%)</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="discount"
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
                  <label class="mb-2 block text-sm text-black flex items-start">
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
                  class="text-base bg-white text-black font-semibold py-2 px-5 border border-slate-300 w-44 rounded cursor-pointer disabled:bg-slate-500"
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
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Object,
      default: () => ({}),
    },
  },
  layout: 'admin',
  head() {
    return {
      title: 'Add New Product - Administrator',
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
      image: '',
      title: '',
      category_id: '',
      description: '',
      weight: '',
      price: '',
      stock: '',
      discount: '',

      validation: [],
      // editorConfig: {
      //   removePlugins: ['Title'],
      // }
    }
  },
  async asyncData({ store }) {
    await store.dispatch('admin/category/getListAllCategories')
  },
  mounted() {
    this.$store.dispatch('admin/category/getListAllCategories')
  },
  computed: {
    categories() {
      return this.$store.state.admin.category.categories
    },
  },

  methods: {
    // handleFileChange(e) {
    //   const image = (this.image = e.target.files[0])
    //   if (!image.type.match('image.*')) {
    //     e.target.value = ''
    //     this.image = null
    //     this.$swal.fire({
    //       title: 'OOPS!',
    //       text: 'Format File Tidak Didukung!',
    //       icon: 'error',
    //       showConfirmButton: false,
    //       timer: 2000,
    //     })
    //   }
    // },

    onChange(e) {
      //   this.files = this.$refs.file.files
      const image = (this.image = e.target.files[0])
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
      //   if (image) {
      //     // Lakukan logika untuk mengunggah file ke server
      //     // Misalnya, Anda bisa menggunakan Axios untuk mengirim file ke server dan mendapatkan URL thumbnail kembali.
      //     // Di sini, kami hanya menggunakan URL lokal file sebagai contoh sementara
      //     this.thumbnailUrl = URL.createObjectURL(image)
      //   }

      //   const reader = new FileReader();
      //   reader.onload = async (e) => {
      //     const imageData = e.target.result;
      //     const thumbnailBuffer = await this.generateThumbnail(imageData);
      //     this.thumbnailUrl = URL.createObjectURL(new Blob([thumbnailBuffer]));
      //   };

      //   reader.readAsArrayBuffer(image);
    },

    createThumbnail(image) {
      const reader = new FileReader()
      reader.onload = (event) => {
        this.thumbnail = event.target.result
      }
      reader.readAsDataURL(image)
    },
    async tambahProduct() {
      const formData = new FormData()

      formData.append('image', this.image)
      formData.append('title', this.title)
      formData.append('category_id', this.category_id)
      formData.append('description', this.description)
      formData.append('weight', this.weight)
      formData.append('price', this.price)
      formData.append('stock', this.stock)
      formData.append('discount', this.discount)
      await this.$store
        .dispatch('admin/product/storeProduct', formData)
        .then(() => {
          this.$swal.fire({
            title: 'BERHASIL!',
            text: 'Data Berhasil Disimpan!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
          })
          this.$router.go()
        })
        .catch((error) => {
          this.validation = error.response.data
        })
    },
  },
}
</script>

<style>
.editableDiv2 {
  border-bottom: 1px solid gray;
  outline: none;
  margin-top: 20px;
}
.editableDiv2[contentEditable='true']:empty:before {
  content: attr(placeholder);
}
</style>
