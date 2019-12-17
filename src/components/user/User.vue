<template>
  <div>
    <h1>Users</h1>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="item in userNames" v-bind:key="item.id">
        {{item.name}}
        <router-link :to="`/user/${item.id}/edit`" tag="button" class="btn btn-primary">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userNames: this.$store.getters.content
    };
  }
};
</script>

<style>
</style>