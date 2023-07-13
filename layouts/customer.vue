<template>
    <div class="">
      <!-- <div
        class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show"
        id="sidebar"
      >
        <div class="c-sidebar-brand d-lg-down-none">
          <img
            src="/images/logo1.png"
            class="bg-light rounded shadow-sm p-2"
            width="35"
          />
          <span class="ml-2 font-weight-bold">Store Agriculture</span>
        </div>
  
      
        <adminSideBar />
        
      </div> -->
      <div class="c-wrapper ">
        <!-- header -->
        <customerNavBar />
        <!-- end header -->
  
        <div class="c-body">
          <!-- content -->
          <Nuxt />
          <!-- end content -->
  
          <footer class=" bg-white border border-slate-500 h-12">
            <div class="text-black mt-3 px-2"><strong>Store Agriculture</strong> &copy; 2023</div>
          </footer>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    middleware: 'admin',
  }
  </script>
  
  <style></style>
  