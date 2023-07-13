<!-- <template>
  <header
    class="c-header c-header-light c-header-fixed c-header-with-subheader"
  >
    <button
      class="c-header-toggler c-class-toggler d-lg-none mfe-auto"
      type="button"
      data-target="#sidebar"
      data-class="c-sidebar-show"
    >
      <svg class="c-icon c-icon-lg">
        <use
          xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-menu"
        ></use>
      </svg>
    </button>
    <button
      class="c-header-toggler c-class-toggler mfs-3 d-md-down-none"
      type="button"
      data-target="#sidebar"
      data-class="c-sidebar-lg-show"
      responsive="true"
    >
      <svg class="c-icon c-icon-lg">
        <use
          xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-menu"
        ></use>
      </svg>
    </button>
    <ul class="c-header-nav ml-auto mr-4">
      <li class="c-header-nav-item dropdown">
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
          <div class="dropdown-header bg-light py-2 rounded">
            <strong>QUICK MENU</strong>
          </d<iv>
          <a class="dropdown-item" href="#">
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
          </a>
        </div>
      </li>
    </ul>
  </header>
</template> -->

<!-- <script>
export default {
  computed: {
    user() {
      return this.$auth.user
    },
  },

  methods: {
    async logout() {
      await this.$auth.logout()

      this.$router.push({
        name: 'admin-login',
      })
    },
  },
}
</script>

<style></style> -->

<template>
  <Nav
    class="flex w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10"
  >
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <!-- <img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-24" /> -->
      <div class="flex">
        <img
          src="/images/logo1.png"
          class="bg-green-500 rounded shadow-sm p-2"
          width="35"
        />
        <span class="ml-2 font-weight-bold mt-2">Store Agriculture</span>
      </div>
    </div>
    <div class="flex items-center">
      <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
        <!-- <div class="c-avatar">
          <img
            class="c-avatar-img"
            :src="`https://ui-avatars.com/api/?name=${user.name}&amp;background=19e627&amp;color=ffffff&amp;size=100`"
          />
        </div> -->
        <ul class="c-header-nav ml-auto mr-4">
          <li class="c-header-nav-item dropdown">
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
              > -->
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" role="button" @click="logout">
                <svg class="c-icon mr-2">
                  <use
                    xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-account-logout"
                  ></use>
                </svg>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        @click="isOpen = false"
        class="flex w-full items-center p-4 border-b"
      >
        <div class="flex">
          <img
            src="/images/logo1.png"
            class="bg-green-500 rounded shadow-sm p-2"
            width="35"
          />
          <span class="ml-2 font-weight-bold mt-2">Store Agriculture</span>
        </div>
      </span>
      <nuxt-link :to="{ name: 'admin-dashboard' }" href="index.html">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
          ><span class="mr-2">
            <svg class="w-6 h-6">
              <use
                xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-speedometer"
              ></use>
            </svg>
          </span>
          <span>Dashboard</span></span
        >
      </nuxt-link>

      <nuxt-link :to="{ name: 'admin-categories' }">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
          ><span class="mr-2">
            <svg class="w-6 h-6">
              <use
                xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-folder"
              ></use>
            </svg>
          </span>
          <span>Categories</span></span
        >
      </nuxt-link>
      <nuxt-link :to="{ name: 'admin-products' }">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
          ><span class="mr-2">
            <svg class="w-6 h-6">
              <use
                xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-layers"
              ></use>
            </svg>
          </span>
          <span>Products</span></span
        >
      </nuxt-link>

      <nuxt-link :to="{ name: 'admin-invoices' }">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
          ><span class="mr-2">
            <svg class="w-6 h-6">
              <use
                xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-cart"
              ></use>
            </svg>
          </span>
          <span>Invoices</span></span
        >
      </nuxt-link>
      <nuxt-link :to="{ name: 'admin-customers' }">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
          ><span class="mr-2">
            <svg class="w-6 h-6">
              <use
                xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-user"
              ></use>
            </svg>
          </span>
          <span>Customers</span></span
        >
      </nuxt-link>
      <nuxt-link :to="{ name: 'admin-sliders' }">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
          ><span class="mr-2">
            <svg class="w-6 h-6">
              <use
                xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-laptop"
              ></use>
            </svg>
          </span>
          <span>Sliders</span></span
        >
      </nuxt-link>
      <nuxt-link :to="{ name: 'admin-users' }">
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
          ><span class="mr-2">
            <svg class="w-6 h-6">
              <use
                xlink:href="@/node_modules/@coreui/icons/sprites/free.svg#cil-group"
              ></use>
            </svg>
          </span>
          <span>Users</span></span
        >
      </nuxt-link>
      <!-- <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </span>
        <span>Home</span></span
      > -->
      <!-- <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>Trending Globally</span></span
      > -->
      <!-- <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
          </svg>
        </span>
        <span>Wishlist</span></span
      > -->
      <!-- <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
        <span>About</span></span
      > -->
      <!-- <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white"
        ><span class="mr-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </span>
        <span>Contact</span></span -->
      >
      <!-- <div class="fixed bottom-0 w-full">
        <button
          class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="h-6 w-6 mr-2"
          >
            <path
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
          <span>Share</span>
        </button>
        <a
          rel="noopener"
          class="flex items-center p-4 bg-orange-700 text-white "
          href="https://www.buymeacoffee.com/fayazahmed"
          target="_blank"
        >
          <img
            class="mr-2 h-8 w-auto"
            src="/sidebar/bmc.svg"
            alt="Buy Me Coffee"
          />
          <p>
            <span class="font-bold">Buy me a Coffee</span>
            <br />
            <span class="text-sm text-white">Help me keep this site alive</span>
          </p>
        </a>
      </div> -->
    </aside>
    <!-- <SideBar :class="isOpen ? 'translate-x-0' : '-translate-x-full'"/> -->
  </Nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
    async logout() {
      await this.$auth.logout()

      this.$router.push({
        name: 'admin-login',
      })
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  computed: {
    user() {
      return this.$auth.user
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  },
}
</script>
