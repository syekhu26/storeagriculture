<template>
  <div class="container-fluid">
    <!-- <div class="fade-in">
    <div class="row">
      <div class="col-md-3">
        <Sidebar />
      </div>
      <div class="col-md-9">
        <div class="card border-0 rounded shadow-sm border-top-orange">
          <div class="card-body">
            <h5><i class="fa fa-tachometer-alt"></i> DASHBOARD</h5>
            <hr>

            <div class="row">
              <div class="col-md-12">
                <div class="alert alert-success" role="alert">
                  Selamat Datang <strong>{{ $auth.user.name }}</strong>
                </div>
              </div>
            </div>

            <div class="row">

              <div class="col-6 col-lg-3">
                <div class="card rounded shadow-sm overflow-hidden">
                  <div class="card-body p-0 d-flex align-items-center">
                    <div class="bg-primary py-4 px-5 mfe-3">
                      <i class="fas fa-circle-notch fa-spin fa-2x"></i>
                    </div>
                    <div>
                      <div class="text-value text-primary">{{ pending }}</div>
                      <div class="text-muted text-uppercase font-weight-bold small">PENDING</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-lg-3">
                <div class="card rounded shadow-sm overflow-hidden">
                  <div class="card-body p-0 d-flex align-items-center">
                    <div class="bg-success py-4 px-5 mfe-3">
                      <i class="fas fa-check-circle fa-2x"></i>
                    </div>
                    <div>
                      <div class="text-value text-success">{{ success }}</div>
                      <div class="text-muted text-uppercase font-weight-bold small">SUCCESS</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-lg-3">
                <div class="card rounded shadow-sm overflow-hidden">
                  <div class="card-body p-0 d-flex align-items-center">
                    <div class="bg-warning py-4 px-5 mfe-3">
                      <i class="fas fa-exclamation-triangle fa-2x"></i>
                    </div>
                    <div>
                      <div class="text-value text-warning">{{ expired }}</div>
                      <div class="text-muted text-uppercase font-weight-bold small">EXPIRED</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-lg-3">
                <div class="card rounded shadow-sm overflow-hidden">
                  <div class="card-body p-0 d-flex align-items-center">
                    <div class="bg-danger py-4 px-5 mfe-3">
                      <i class="fas fa-times-circle fa-2x"></i>
                    </div>
                    <div>
                      <div class="text-value text-danger">{{ failed }}</div>
                      <div class="text-muted text-uppercase font-weight-bold small">FAILED</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div> -->

    <div class="fade-in">
      <!-- slider -->
      <webSliderHome />
      <!-- end slider -->

      <!-- product -->
      <div class="container-fluid mt-4 mb-5">
        <div class="mb-4">
          <h5 class="text-uppercase">
            <i class="fa fa-shopping-bag"></i> PRODUK TERBARU
          </h5>
          <!-- Solid divider -->
          <hr class="solid" />
        </div>
        <div class="row">
          <div
            class="col-md-3 mt-1 mb-4"
            v-for="product in products.data"
            :key="product.id"
          >
            <div class="card h-100 border-0 rounded shadow-sm">
              <div class="card-body">
                <div class="card-img-actions">
                  <img :src="product.image" class="card-img img-fluid" />
                </div>
              </div>
              <div class="card-body bg-light-custom text-center rounded-bottom">
                <div class="mb-2">
                  <h6 class="font-weight-semibold mb-2">
                    <nuxt-link
                      :to="{
                        name: 'products-slug',
                        params: { slug: product.slug },
                      }"
                      class="text-default mb-2"
                      data-abc="true"
                      >{{ product.title }}</nuxt-link
                    >
                  </h6>
                  <nuxt-link
                    :to="{
                      name: 'categories-slug',
                      params: { slug: product.category.slug },
                    }"
                    class="text-muted"
                    data-abc="true"
                    >{{ product.category.name }}</nuxt-link
                  >
                </div>
                <h6 class="mb-0 font-weight-semibold">
                  <s class="text-red">Rp. {{ formatPrice(product.price) }}</s> /
                  <strong>{{ product.discount }} %</strong>
                </h6>
                <h5 class="mb-0 font-weight-semibold mt-3 text-success">
                  Rp. {{ formatPrice(calculateDiscount(product)) }}
                </h5>
                <hr />
                <client-only>
                  <vue-star-rating
                    :rating="parseFloat(product.reviews_avg_rating)"
                    :increment="0.5"
                    :star-size="20"
                    :read-only="true"
                    :show-rating="false"
                    :inline="true"
                  ></vue-star-rating>
                  (<strong>{{ product.reviews_count }}</strong> ulasan)
                </client-only>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-4">
          <div class="text-center">
            <nuxt-link
              :to="{ name: 'products' }"
              class="btn btn-lg btn-success border-0 rounded shadow-sm"
              >LIHAT LEBIH BANYAK</nuxt-link
            >
          </div>
        </div>
      </div>
      <!-- end product -->
    </div>
  </div>
</template>

<script>
// import Slider from '@/components/web/slider.vue'

export default {
  middleware: 'isCustomer',
  layout: 'default',
  // components: {
  //   Slider,
  // },
  // head() {
  //   return {
  //     title: 'Dashboard - Customer',
  //   }
  // },
  head() {
    return {
      title: 'store_agriculture',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'store_agriculture',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'store_agriculture',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/images/logo2.png',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Official Toko Online Penjualan Produk Store Agriculture',
        },
      ],
    }
  },

  // async asyncData({ $axios }) {
  //   const dashboard = await $axios.$get('/api/customer/dashboard')

  //   return {
  //     pending: dashboard.data.count.pending,
  //     success: dashboard.data.count.success,
  //     expired: dashboard.data.count.expired,
  //     failed: dashboard.data.count.failed,
  //   }
  // },
  async asyncData({ store }) {
    await store.dispatch('web/product/getProductsData')
  },

  computed: {
    products() {
      return this.$store.state.web.product.products
    },
  },
}
</script>

<style></style>
