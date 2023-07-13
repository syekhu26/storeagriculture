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
              Tambah User
            </h3>
            <div
              @click="$emit('close')"
              class="w-10 h-10 rounded-full flex mt-3 top-5 right-5 cursor-pointer"
            >
              <iconSilangIcon />
            </div>
          </div>
          <div class="mt-4">
            <form action="" @submit.prevent="tambahUser" class="w-full">
              <div>
                <div class="flex">
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Nama Lengkap</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="name"
                    placeholder="Masukkan nama"
                    required
                    class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                  <div v-if="validation.name" class="mt-2">
                    <b-alert show class="text-red-500">{{
                      validation.name[0]
                    }}</b-alert>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex">
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Email</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Masukkan email"
                    required
                    class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                  <div v-if="validation.email" class="mt-2">
                    <b-alert show class="text-red-500">{{
                      validation.email[0]
                    }}</b-alert>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex">
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Password</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    v-model="password"
                    placeholder="Masukkan password"
                    required
                    class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                  <div v-if="validation.password" class="mt-2">
                    <b-alert show class="text-red-500">{{
                      validation.password[0]
                    }}</b-alert>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex">
                  <label class="mb-2 block text-sm text-black flex items-start">
                    Password confirmasi</label
                  >
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    v-model="password_confirmation"
                    placeholder="Masukkan password konfirmasi"
                    required
                    class="border text-black px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                  />
                  <div v-if="validation.password_confirmation" class="mt-2">
                    <b-alert show class="text-red-500">{{
                      validation.password_confirmation[0]
                    }}</b-alert>
                  </div>
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

<!-- <script>
  export default {
    async asyncData({ store }) {
      await store.dispatch('admin/category/getCategoriesData')
    },
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
    data() {
      return {
        files: [],
        isUpload: false,
        image: '',
        name:  '',
        validation: [],
        thumbnail: null,
        fileName: '',
      }
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
      },
      createThumbnail(image) {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.thumbnail = event.target.result
        }
        reader.readAsDataURL(image)
      },
  
      // generateThumbnail(file) {
      //   const fileSrc = URL.createObjectURL(file)
      //   setTimeout(() => {
      //     URL.revokeObjectURL(fileSrc)
      //   }, 1000)
      //   return fileSrc
      // },
  
      // makeName(name) {
      //   return (
      //     name.split('.')[0].substring(0) +
      //     '.' +
      //     name.split('.')[name.split('.').length - 1]
      //   )
      // },
  
      // remove(i) {
      //   this.files.splice(i, 1)
      // },
  
      async tambahCategory() {
        const formData = new FormData()
        formData.append('image', this.image)
        formData.append('name', this.name)
        await this.$store
          .dispatch('admin/category/storeCategory', formData)
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
      // async generateThumbnail(imageData) {
      //   // Menggunakan sharp untuk memanipulasi gambar dan membuat thumbnail
      //   const thumbnailBuffer = await sharp(imageData)
      //     .resize(200, 200) // Ubah ukuran sesuai kebutuhan Anda
      //     .toBuffer();
  
      //   return thumbnailBuffer;
      // },
    },
    computed: {
      categories() {
        return this.$store.state.admin.category.categories
      },
    },
    mounted() {
      this.$store.dispatch('admin/category/getCategoriesData')
    },
  }
  </script> -->

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
      title: 'Add New User - Administrator',
    }
  },

  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',

      validation: [],
    }
  },

  methods: {
    async tambahUser() {
      const formData = new FormData()

      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('password_confirmation', this.password_confirmation)
      await this.$store
        .dispatch('admin/user/storeUser', formData)
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
