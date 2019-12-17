<template>
  <div>
    <h1>Users</h1>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="item in userNames" v-bind:key="item.id">
        {{item.name}}
        <router-link
          :to="`/user/${item.id}/details`"
          tag="button"
          class="btn btn-primary btn-position_details"
        >Details</router-link>
        <router-link
          :to="`/user/${item.id}/edit`"
          tag="button"
          class="btn btn-primary btn-position_edit"
        >Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userNames: this.$store.getters.content
    };
  }
};
</script>

<style lang="scss">
.btn-position_details {
  position: absolute;
  top: 3px;
  right: 5px;
}
.btn-position_edit {
  position: absolute;
  top: 3px;
  right: 87px;
}
</style>