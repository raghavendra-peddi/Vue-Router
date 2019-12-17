<template>
  <div>
    <div class="form-group">
      <label for="usr">Name:</label>
      <input type="text" class="form-control" id="usr" v-model="user" />
    </div>
    <button type="button" class="btn btn-primary btn-lg" @click="submit">Submit</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userNames: this.$store.getters.content,
      user: ""
    };
  },
  mounted() {
    const item = this.userNames.filter(element => {
      return element.id === this.$route.params.id;
    });
    this.user = item[0].name;
  },
  methods: {
    submit() {
      const conentIndex = this.userNames.findIndex(
        element => element.id === this.$route.params.id
      );
      this.userNames[conentIndex].name = this.user;
      this.$store.commit("SET_VALUE", this.userNames);
      this.$router.push({ path: "/user" });
    }
  }
};
</script>