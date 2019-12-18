<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 main-margin">
        <h1>Routing</h1>
        <router-link to="/user" tag="button" class="btn btn-primary main-margin-btn-margin">User</router-link>
        <router-link to="/" tag="button" class="btn btn-primary main-margin-btn-margin">Home</router-link>
        <hr />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main-margin {
  margin: auto;

  h1 {
    text-align: center;
  }
  &-btn-margin {
    margin: 20px;
  }
}
</style>
