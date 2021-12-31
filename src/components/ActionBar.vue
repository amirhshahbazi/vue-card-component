<template>
  <div class="actions">
    <button @click="addBox">add</button>
    <button @click="removeBox">remove</button>
  </div>
</template>

<script>
export default {
  name: "ActionBar",
  methods: {
    addBox() {
      this.$emit("add-box")
    },
    removeBox() {
      this.$emit("remove-box")
    }
  }
}
</script>

<style scoped>

</style>
