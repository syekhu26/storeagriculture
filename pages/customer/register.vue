<template>
  <div class="container mt-custom mb-3">
    <div class="fade-in">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <!-- <div class="card-group">
          <div class="card border-top-orange border-0 shadow-sm rounded">
            <div class="card-body">
              <h3>REGISTER</h3>
              <hr>
              <div v-if="validation.message" class="mt-2">
                <b-alert show variant="danger">{{ validation.message }}</b-alert>
              </div>
              <form @submit.prevent="register">

                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input class="form-control" v-model="user.name" type="text" placeholder="Nama Lengkap">
                    </div>
                    <div v-if="validation.name" class="mt-2">
                      <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </div>
                      <input class="form-control" v-model="user.email" type="email" placeholder="Email Address">
                    </div>
                    <div v-if="validation.email" class="mt-2">
                      <b-alert show variant="danger">{{ validation.email[0] }}</b-alert>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group mb-4">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                      <input class="form-control" v-model="user.password" type="password" placeholder="Password">
                    </div>
                    <div v-if="validation.password" class="mt-2">
                      <b-alert show variant="danger">{{ validation.password[0] }}</b-alert>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group mb-4">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-lock"></i>
                        </span>
                      </div>
                      <input class="form-control" v-model="user.password_confirmation" type="password"
                        placeholder="Password Confirmation">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <button class="btn btn-info shadow-sm rounded-sm px-4" type="submit">REGISTER</button>
                    <button class="btn btn-warning shadow-sm rounded-sm px-4" type="reset">RESET</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> -->
          <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
            <!-- <div class="flex item-center justify-center mb-5 mt-4">
              <img
                src="/images/logo1.png"
                width="50"
                class="rounded bg-green-500 mx-4"
              />
              <h3 class="mt-2 font-weight-bold text-black">Store Agriculture</h3>
            </div> -->
            <div>
              <h3 class="text-center text-black font-bold text-3xl">Register</h3>
            </div>
            <div v-if="validation.message" class="mt-2">
              <b-alert show variant="danger">{{ validation.message }}</b-alert>
            </div>
            <div>
              <form action="" @submit.prevent="register">
                <div class="w-full my-3">
                  <div class="my-2">
                    <label for="name" class="text-sm text-black">
                      Nama Lengkap
                    </label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        v-model="user.name"
                        type="text"
                        class="w-full border text-black px-4 py-2 h-14 form-control outline-none focus:outline-green-500"
                        placeholder="Masukkan nama"
                      />
                    </div>
                    <div v-if="validation.name" class="mt-2">
                      <b-alert show variant="danger">{{ validation.name[0] }}</b-alert>
                    </div>
                  </div>
                  <div class="my-2">
                    <label for="email" class="text-sm text-black">
                      E-mail
                    </label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        v-model="user.email"
                        type="email"
                        class="w-full border text-black px-4 py-2 h-14 form-control outline-none focus:outline-green-500"
                        placeholder="Masukan email"
                      />
                    </div>
                    <div v-if="validation.email" class="mt-2">
                      <b-alert show variant="danger">{{
                        validation.email[0]
                      }}</b-alert>
                    </div>
                  </div>
                  <div class="my-2">
                    <label for="password" class="text-sm text-black">
                      Kata sandi
                    </label>
                    <div class="flex items-center justify-between relative">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa fa-lock"></i>
                          </span>
                        </div>
                        <input
                          :type="inputTypeIcon"
                          v-model="user.password"
                          class="w-full border text-black px-4 py-2 h-14 form-control"
                          placeholder="Masukan kata sandi"
                        />
                      </div>
                      <div
                        @click.prevent="ToggleIcon"
                        class="absolute inset-y-0 flex items-center right-2 -mt-3"
                      >
                        <i v-if="inputTypeIcon == 'password'"
                          ><iconEyeShow
                        /></i>
                        <i v-else><iconEyeHide /></i>
                      </div>
                    </div>
                    <div v-if="validation.password" class="mt-2">
                      <b-alert show variant="danger">{{
                        validation.password[0]
                      }}</b-alert>
                    </div>
                  </div>
                  <div class="my-2">
                    <label for="password" class="text-sm text-black">
                      Konfirmasi kata sandi
                    </label>
                    <div class="flex items-center justify-between relative">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa fa-lock"></i>
                          </span>
                        </div>
                        <input
                          :type="inputType"
                          v-model="user.password_confirmation"
                          class="w-full border text-black px-4 py-2 h-14 form-control"
                          placeholder="Masukan kata sandi"
                        />
                      </div>
                      <div
                        @click.prevent="Toggle"
                        class="absolute inset-y-0 flex items-center right-2 -mt-3"
                      >
                        <i v-if="inputType == 'password'"
                          ><iconEyeShow
                        /></i>
                        <i v-else><iconEyeHide /></i>
                      </div>
                    </div>
                    <div v-if="validation.password" class="mt-2">
                      <b-alert show variant="danger">{{
                        validation.password[0]
                      }}</b-alert>
                    </div>
                  </div>
                  <!-- <NuxtLink to="/forgotpassword">
                    <div class="text-blue-600 float-right cursor-pointer">
                      Lupa kata sandi?
                    </div>
                  </NuxtLink> -->
                </div>

                <!-- <Message :message="error" v-if="error" /> -->
                <div class="mt-20">
                  <button
                    type="submit"
                    class="text-base bg-green-500 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg"
                  >
                    Daftar
                  </button>
                </div>
              </form>
            </div>
            <!-- <div class="mb-8 mt-8 justify-center items-center flex">
              Belum punya akun?
              <NuxtLink to="/register" class="text-blue-500 px-2 font-bold"
                >Daftar</NuxtLink
              >
            </div> -->
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        Sudah punya akun?
        <nuxt-link :to="{ name: 'customer-login' }" class="font-weight-bold">
          Login Disini
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  layout: 'default',
  head() {
    return {
      title: 'Register - Customer',
    }
  },
  data() {
    return {
      inputTypeIcon: 'password',
      inputType: 'password',
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      validation: [],
    }
  },

  methods: {
    ToggleIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
    Toggle() {
      this.inputType =
        this.inputType === 'password' ? 'text' : 'password'
    },
    async register() {
      await this.$store
        .dispatch('customer/customer/storeRegister', {
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation,
        })

        .then(() => {
          this.$swal.fire({
            title: 'REGISTER BERHASIL!',
            text: 'Proses Register Berhasil!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
          })
          this.$router.push({
            name: 'customer-login',
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
