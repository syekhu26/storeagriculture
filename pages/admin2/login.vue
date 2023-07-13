<template>
  <div class="">
    <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->
    <div class="">
      <div class="w-full">
        <div class="bg-white shadow-md rounded w-full h-screen">
          <!-- Konten card login -->
          <div class="flex">
            <div class="w-1/2 px-4 mt-32">
                <div class=" mb-4 justify-center flex">
                    <nuxt-link to="/" class="text-black">
                        <img src="/images/logo1.png" width="50" class="rounded bg-green-500 mx-4"/>
                        <h3 class="mt-2 font-weight-bold">Store Agriculture</h3>
                    </nuxt-link>
                </div>
              <div class="mt-10">
                <form action="" @submit.prevent="login">
                    <div class="w-full">
                    <div class="my-2">
                        <h1 class="text-black font-semibold text-2xl mb-2">Login</h1>
                        <div v-if="validation.message" class="mt-2">
                            <b-alert show class="text-red-500">{{ validation.message }}</b-alert>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                            <input
                            v-model="user.email" 
                            :class="{ 'is-invalid': validation.email }"
                            type="email"
                            class="w-full border text-black px-4 py-2 h-14 form-control outline-none focus:outline-green-500"
                            placeholder="Masukan email"
                           
                            />  
                        </div>
                        <div v-if="validation.email" class="mt-2">
                            <b-alert show class="text-red-500">{{ validation.email[0] }}</b-alert>
                        </div>
                    </div>
                    <div class="my-2">
                        <label for="password" class="text-sm"> Kata sandi </label>
                        <div class="flex items-center justify-between relative">
                        <!-- <input
                            :type="inputTypeIcon"
                            @input="passwordValidate"
                            v-model="password"
                            class="w-full bg-transparent text-black px-4 outline-none border py-2 h-14"
                            placeholder="Masukan Kata Sandi"
                            required
                        /> -->
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                            <input
                            :type="inputTypeIcon"
                            v-model="user.password" 
                            :class="{ 'is-invalid': validation.password }"
                            class="w-full border text-black px-4 py-2 h-14 form-control"
                            placeholder="Masukan kata sandi"
                            
                            />  
                        </div>
                        <div
                            @click.prevent="ToggleIcon"
                            class="absolute inset-y-0 flex items-center right-2 -mt-3"
                        >
                            <i v-if="inputTypeIcon == 'password'"><iconEyeShow /></i>
                            <i v-else><iconEyeHide /></i>
                        </div>
                        </div>
                        <!-- <span v-if="passwordError" class="text-red-500">{{
                        passwordError
                        }}</span> -->
                        <div v-if="validation.password" class="mt-2">
                            <b-alert show class="text-red-500">{{ validation.password[0] }}</b-alert>
                        </div>
                    </div>
                    <NuxtLink to="/forgotpassword">
                        <div class="text-blue-600 float-right cursor-pointer">
                        Lupa kata sandi?
                        </div>
                    </NuxtLink>
                    </div>
                    <div class="mt-20">
                    <button
                        type="submit"
                        class="text-base bg-green-500 text-white font-semibold py-3 px-8 w-full rounded hover:shadow-lg"
                    >
                        Masuk
                    </button>
                    </div>
                </form>
              </div>
             
            </div>
            <div class="col-md-6 w-1/2">
              <img
                src="/images/toko.png"
                alt="Gambar"
                class="w-full h-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: 'authenticated',
  data(){
    return{
        inputTypeIcon: 'password',
        user: {
          email: '',
          password: '',
        },
        validation:[]
    }
  },
  methods:{
    ToggleIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === 'password' ? 'text' : 'password'
    },
    async login() {
        await this.$auth.loginWith('admin', {
            data: {
            email: this.user.email,
            password: this.user.password
            }
        })
        .then(() => {

            
            this.$router.push({
            name: 'admin-dashboard'
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
.container {
  height: 100%;
}
</style>

