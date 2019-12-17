<template>
  <div>
    <p class="display-show text-primary">{{user}}</p>
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
  }
};
</script>
<style>
.display-show {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>