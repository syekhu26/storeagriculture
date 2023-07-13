<template>
  <header class="section-header fixed-top">
    <!-- <section class="header-main border-bottom">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-3 col-sm-4 col-md-4 col-5">
            <nuxt-link to="/" class="brand-wrap" data-abc="true">
              <img
                src="/images/xiaomi.png"
                width="35"
                class="bg-light p-2 rounded"
              />
              <span class="logo">MI STORE</span>
            </nuxt-link>
          </div>
          <div class="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
            <div class="search-wrap">
              <div class="input-group w-100">
                <input
                  type="text"
                  class="form-control search-form"
                  v-model="search"
                  @keypress.enter="searchData"
                  style="width: 55%"
                  placeholder="mau belanja apa hari ini ?"
                />
                <div class="input-group-append">
                  <button
                    @click="searchData"
                    class="btn btn-primary search-button"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
            <div class="d-flex justify-content-end">
              <nuxt-link
                :to="{ name: 'cart' }"
                class="btn search-button btn-md d-md-block ml-4"
                ><i class="fa fa-shopping-cart"></i>
                <span class="ml-2">{{ cartTotal }}</span> | Rp.
                {{ formatPrice(cartPrice) }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <nav class="navbar navbar-expand-md navbar-main border-bottom p-2">
      <div class="container-fluid">
        <div class="d-md-none my-2">
          <div class="input-group"> 
            <input type="search" name="search" class="form-control" v-model="search" @keypress.enter="searchData" placeholder="mau belanja apa hari ini ?">
            <div class="input-group-append"> 
              <button @click="searchData" class="btn btn-warning"> <i class="fa fa-search"></i></button> 
            </div>
          </div>
        </div> 
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#dropdown6"
          aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button>
        <div class="navbar-collapse collapse" id="dropdown6">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                data-abc="true" aria-expanded="false"><i class="fa fa-list-ul"></i> KATEGORI</a>
              <div class="dropdown-menu">
                <nuxt-link :to="{name: 'categories-slug', params: {slug: category.slug}}" class="dropdown-item" v-for="category in categories" :key="category.id">
                  <img :src="category.image" width="50"> {{ category.name }}
                </nuxt-link>
                <div class="dropdown-divider"></div>
                <nuxt-link :to="{name: 'categories'}" class="dropdown-item active text-center" href="" data-abc="true">
                  LIHAT SEMUA KATEGORI <i class="fa fa-long-arrow-alt-right"></i>
                </nuxt-link>
              </div>
            </li>
            <li class="nav-item"> <nuxt-link :to="{name: 'products'}" class="nav-link" data-abc="true"><i class="fa fa-shopping-bag"></i> SEMUA PRODUK</nuxt-link> </li>
            <li class="nav-item"> <a href="#" class="nav-link" data-abc="true"><i class="fa fa-info-circle"></i> TENTANG</a> </li>
            <li class="nav-item"> <a href="#" class="nav-link" data-abc="true"><i class="fa fa-comments"></i> KONTAK</a> </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown" v-if="!$auth.loggedIn">
              <nuxt-link :to="{name: 'customer-login'}" class="nav-link" href="#" role="button" aria-expanded="false"> <i class="fa fa-user-circle"></i>
                ACCOUNT</nuxt-link>
            </li>
            <li class="nav-item dropdown" v-if="$auth.loggedIn">
              <nuxt-link :to="{name: 'customer-dashboard'}" class="nav-link" href="#" role="button" aria-expanded="false"> <i class="fa fa-tachometer-alt"></i>
                DASHBOARD</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <Nav
      class="flex items-center justify-between w-full px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10"
    >
      <div class="flex items-center">
        <!-- <img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-24" /> -->
        <div class="flex cursor-pointer">
          <nuxt-link to="/" v-if="!$auth.loggedIn" class="flex">
            <img
              src="/images/logo1.png"
              class="bg-green-500 rounded shadow-sm p-2"
              width="35"
            />
            <span class="ml-2 font-weight-bold mt-2">Store Agriculture</span>
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'customer-beranda' }"
            v-if="$auth.loggedIn"
            class="flex"
          >
            <img
              src="/images/logo1.png"
              class="bg-green-500 rounded shadow-sm p-2"
              width="35"
            />
            <span class="ml-2 font-weight-bold mt-2">Store Agriculture</span>
          </nuxt-link>
        </div>
      </div>
      <ul class="flex items-center justify-center">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
            data-abc="true"
            aria-expanded="false"
            ><i class="fa fa-list-ul"></i> KATEGORI</a
          >
          <div class="dropdown-menu">
            <nuxt-link
              :to="{
                name: 'categories-slug',
                params: { slug: category.slug },
              }"
              class="dropdown-item"
              v-for="category in categories"
              :key="category.id"
            >
              <div class="flex items-center">
                <img :src="category.image" width="50" />
                
                <div class="px-3">
                  {{ category.name }}
                </div>
              </div>
            </nuxt-link>
            <div class="dropdown-divider"></div>
            <nuxt-link
              :to="{ name: 'categories' }"
              class="dropdown-item active text-center"
              href=""
              data-abc="true"
            >
              LIHAT SEMUA KATEGORI
              <i class="fa fa-long-arrow-alt-right"></i>
            </nuxt-link>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link :to="{ name: 'products' }" class="nav-link" data-abc="true"
            ><i class="fa fa-shopping-bag"></i> SEMUA PRODUK</nuxt-link
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" data-abc="true"
            ><i class="fa fa-info-circle"></i> TENTANG</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" data-abc="true"
            ><i class="fa fa-comments"></i> KONTAK</a
          >
        </li>
      </ul>
      <div class="flex items-center">
        <div
          class="hidden md:block md:flex md:justify-between md:bg-transparent"
        >
          <ul class="flex justify-end">
            <li class="nav-item dropdown" v-if="!$auth.loggedIn">
              <nuxt-link
                :to="{ name: 'customer-login' }"
                class="nav-link"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <i class="fa fa-user-circle"></i> Login</nuxt-link
              >
            </li>
            <li class="nav-item dropdown flex" v-if="$auth.loggedIn">
              <!-- <nuxt-link
                :to="{ name: 'customer-dashboard' }"
                class="nav-link"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <i class="fa fa-tachometer-alt"></i> DASHBOARD</nuxt-link
              > -->
              <div class="flex">
                <nuxt-link
                  :to="{ name: 'cart' }"
                  class="btn search-button btn-md d-md-block ml-4"
                  ><i class="fa fa-shopping-cart"></i>
                  <span class="ml-2">{{ cartTotal }}</span>
                </nuxt-link>
                <div>
                  <a
                    class="c-header-nav-link"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div class="c-avatar">
                      <img
                        class="c-avatar-img"
                        :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=19e627&amp;color=ffffff&amp;size=100`"
                      />
                    </div>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right pt-0">
                    <!-- <div class="dropdown-header bg-light py-2 rounded">
                      <strong>QUICK MENU</strong>
                    </div> -->
                    <!-- <a class="dropdown-item" href="#">
                      <svg class="c-icon mr-2">
                        <use
                          xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-folder"
                        ></use>
                      </svg>
                      Categories</a
                    ><a class="dropdown-item" href="#">
                      <svg class="c-icon mr-2">
                        <use
                          xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-layers"
                        ></use>
                      </svg>
                      Products</a
                    ><a class="dropdown-item" href="#">
                      <svg class="c-icon mr-2">
                        <use
                          xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-user"
                        ></use>
                      </svg>
                      Customers</a
                    >
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-header bg-light py-2 rounded">
                      <strong>ORDERS</strong>
                    </div>
                    <a class="dropdown-item" href="#">
                      <svg class="c-icon mr-2">
                        <use
                          xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-cart"
                        ></use>
                      </svg>
                      Invoices</a
                    >
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" role="button" @click="logout">
                      <svg class="c-icon mr-2">
                        <use
                          xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-account-logout"
                        ></use>
                      </svg>
                      Logout
                    </a> -->
                    <!-- <nuxt-link
                      :to="{ name: 'customer-beranda' }"
                      class="dropdown-item"
                      ><i class="fa fa-tachometer-alt"></i> Dashboard
                    </nuxt-link> -->

                    <nuxt-link
                      :to="{ name: 'customer-invoices' }"
                      class="dropdown-item"
                      ><i class="fa fa-shopping-cart"></i> My Orders
                    </nuxt-link>

                    <a
                      @click="logout"
                      class="dropdown-item"
                      style="cursor: pointer"
                      ><i class="fa fa-sign-out-alt"></i> Logout
                    </a>
                  </div>
                </div>
              </div>
              <!-- | Rp.
              {{ formatPrice(cartPrice) }} -->
            </li>
          </ul>
          <!-- <div class="c-avatar">
          <img
            class="c-avatar-img"
            :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=19e627&amp;color=ffffff&amp;size=100`"
          />
        </div> -->
        </div>
      </div>
      <!-- <SideBar :class="isOpen ? 'translate-x-0' : '-translate-x-full'"/> -->
    </Nav>
  </header>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('web/category/getCategoriesData')

    if (this.$auth.loggedIn && this.$auth.strategy.name === 'customer') {
      await this.$store.dispatch('web/cart/getCartsData')
      await this.$store.dispatch('web/cart/getCartPrice')
    }
  },
  computed: {
    categories() {
      return this.$store.state.web.category.categories
    },
    cartPrice() {
      return this.$store.state.web.cart.cartPrice
    },
    cartTotal() {
      return this.$store.state.web.cart.carts.length
    },
    user() {
      return this.$auth.user
    },
  },

  data() {
    return {
      search: '',
    }
  },

  methods: {
    searchData() {
      this.$router.push({
        name: 'search',
        query: {
          q: this.search,
        },
      })
    },
    async logout() {
      await this.$auth.logout()
      this.$store.commit('web/cart/SET_CARTS_DATA', [])
      this.$store.commit('web/cart/SET_CART_PRICE', 0)
      this.$router.push({
        name: 'customer-login',
      })
    },
  },
}
</script>

<style scoped>
.btn {
  font-size: initial;
}
</style>
