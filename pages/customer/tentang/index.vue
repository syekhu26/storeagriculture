<template>
  <div class="container-fluid mt-custom">
    <div class="fade-in">
      <div class="">
        <div class="">
          <div class="card border-0 rounded shadow-sm">
            <div class="card-body">
              <h3 class="font-bold">About Us</h3>
              <hr />

              <div>
                <img
                  src="/images/gambar 2.jpg"
                  width="500"
                  class="mt-4 flex items-center justify-center mx-auto"
                />
              </div>

              <div class="mt-5 text-base">
                <p>
                  Store Agriculture adalah tempat dimana anda melengkapi
                  kebutuhan obat pertanian. Dari pupuk hingga pestisida, kami
                  menawarkan beragam produk yang telah terbukti efektif dalam
                  mengatasi masalah pertanian, meningkatkan pertumbuhan tanaman,
                  dan melindungi tanaman dari serangan hama dan penyakit. 
                  
                  <p>
                    Apa
                  yang Kami Tawarkan:
                  </p>
                  <p>
                    1. Produk Berkualitas Tinggi: Kami hanya
                  menjual produk-produk dari merek terkemuka dan terpercaya di
                  industri pertanian. Kualitas adalah prioritas kami, dan kami
                  mengambil langkah-langkah untuk memastikan bahwa setiap produk
                  yang kami tawarkan telah diuji dan terbukti memberikan hasil
                  yang diharapkan.
                  </p>
                 <p>
                    2. Beragam Pilihan: Dari herbisida hingga
                  fungisida, kami memiliki berbagai produk untuk setiap jenis
                  tanaman dan tantangan pertanian yang mungkin Anda hadapi. Kami
                  memahami bahwa setiap jenis tanaman memiliki kebutuhan unik,
                  dan kami berusaha menyediakan solusi yang sesuai. 
                 </p>

                 <p>
                    3.
                  Pengalaman Mudah dan Aman: Pengalaman berbelanja online Anda
                  adalah prioritas kami. Dengan antarmuka yang ramah pengguna
                  dan sistem pembayaran yang aman, Anda dapat dengan percaya
                  diri berbelanja di toko kami.
                 </p> 
                 <p>
                    4. Pengiriman Cepat: Kami
                  memahami betapa pentingnya waktu dalam pertanian. Oleh karena
                  itu, kami berkomitmen untuk mengirimkan pesanan Anda dengan
                  cepat, sehingga Anda dapat segera menerapkan solusi yang Anda
                  butuhkan.
                 </p>
                </p>
              </div>
              <!-- <div class="form-group">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" v-model="search" @keypress.enter="searchData" placeholder="cari berdasarkan no. invoice">
                  <div class="input-group-append">
                    <button @click="searchData" class="btn btn-success"><i class="fa fa-search"></i>
                      SEARCH
                    </button>
                  </div>
                </div>
              </div> -->

              <!-- <b-table striped bordered hover :items="invoices.data" :fields="fields" show-empty>
                <template v-slot:cell(grand_total)="row">
                  Rp. {{ formatPrice(row.item.grand_total) }}
                </template>
                <template v-slot:cell(status)="row">
                  <button v-if="row.item.status == 'pending'" class="btn btn-sm btn-primary"><i class="fa fa-circle-notch fa-spin"></i> {{ row.item.status }}</button>
                  <button v-if="row.item.status == 'success'" class="btn btn-sm btn-success"><i class="fa fa-check-circle"></i> {{ row.item.status }}</button>
                  <button v-if="row.item.status == 'expired'" class="btn btn-sm btn-warning-2"><i class="fa fa-exclamation-triangle"></i> {{ row.item.status }}</button>
                  <button v-if="row.item.status == 'failed'" class="btn btn-sm btn-danger"><i class="fa fa-times-circle"></i> {{ row.item.status }}</button>
                </template>
                <template v-slot:cell(actions)="row">
                  <b-button :to="{name: 'customer-invoices-show-snap_token', params: {snap_token: row.item.snap_token}}" variant="info" size="sm">
                    DETAIL
                  </b-button>
                </template>
              </b-table> -->

              <!-- pagination -->
              <!-- <b-pagination align="right" :value="invoices.current_page" :total-rows="invoices.total"
                :per-page="invoices.per_page" @change="changePage" aria-controls="my-table"></b-pagination> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'isCustomer',
  layout: 'default',
  // components: {
  //   Sidebar
  // },
  head() {
    return {
      title: 'Invoices - Customer',
    }
  },
  data() {
    return {
      fields: [
        {
          label: 'No. Invoice',
          key: 'invoice',
        },
        {
          label: 'Grand Total',
          key: 'grand_total',
        },
        {
          label: 'Status Payment',
          key: 'status',
          tdClass: 'text-center',
        },
        {
          label: 'Actions',
          key: 'actions',
          tdClass: 'text-center',
        },
      ],
      search: '',
    }
  },
  async asyncData({ store }) {
    await store.dispatch('customer/invoice/getInvoicesData')
  },
  computed: {
    invoices() {
      return this.$store.state.customer.invoice.invoices
    },
  },
  methods: {
    searchData() {
      this.$store.commit('customer/invoice/SET_PAGE', 1)
      this.$store.dispatch('customer/invoice/getInvoicesData', this.search)
    },
    changePage(page) {
      this.$store.commit('customer/invoice/SET_PAGE', page)
      this.$store.dispatch('customer/invoice/getInvoicesData', this.search)
    },
  },
}
</script>

<style></style>
