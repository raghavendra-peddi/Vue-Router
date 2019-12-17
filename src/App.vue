<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <router-link to="/user" tag="button" class="btn btn-primary">User</router-link>
        <router-link to="/" tag="button" class="btn btn-primary">Home</router-link>
        <hr />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
