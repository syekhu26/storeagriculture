<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm ">
              <div class="card-header">
                <span class="font-weight-bold"> Edit User</span>
              </div>
              <div class="card-body">

                <form action="" @submit.prevent="updateUser" class="w-full">
                  <div>
                    <div class="flex">
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Nama Lengkap</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        v-model="user.name"
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
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Email</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        v-model="user.email"
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
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Password</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="password"
                        v-model="user.password"
                        placeholder="Masukkan nama"
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
                      <label
                        class="mb-2 block text-sm text-black flex items-start"
                      >
                        Password confirmasi</label
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        type="password"
                        v-model="user.password_confirmation"
                        placeholder="Masukkan nama"
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
    </div>
  </main>
</template>

<script>
  export default {
    layout: 'admin2',
    head() {
      return {
        title: 'Edit User - Administrator',
      }
    },

    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
        validation: []
      }
    },
    async asyncData({ store, route }) {
        await store.dispatch('admin/user/getDetailUser', route.params.id)
    },
    mounted() {
        this.user.name = this.$store.state.admin.user.user.name
        this.user.email = this.$store.state.admin.user.user.email
    },

    methods: {
      async updateUser() {
        const formData = new FormData();

        formData.append('name', this.user.name)
        formData.append('email', this.user.email)
        formData.append('password', this.user.password)
        formData.append('password_confirmation', this.user.password_confirmation)
        formData.append("_method", "PATCH")

        await this.$store.dispatch('admin/user/updateUser', {
            userId: this.$route.params.id,
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
              name: 'admin-users'
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

</style>