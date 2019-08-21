<template>
  <div class="col-lg-4 col-10 col-sm-6 p-0 m-0 border border-dark rounded d-flex my-3 my-lg-5 ">
    <router-link
      to="/calendar-view"
      class="custom-tab-button w-100 d-flex justify-content-center align-items-center text-responsive"
    >
      Calendar View
    </router-link>
    <router-link
      to="/list-view"
      class="custom-tab-button w-100 d-flex justify-content-center align-items-center text-responsive"
    >
      List View
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .custom-tab {
    width: 300px;
  }
  .custom-tab-button {
    height: 2rem;
    text-decoration: none;
    color: #000;
  }
  .custom-tab-button.active {
    background: #000;
    color: white;
  }
  .custom-tab-button:hover {
    cursor: pointer;
  }
</style>