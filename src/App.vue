<template>
  <div id="xino">
    <div class="main">
      <div class="actions">
        <button @click="addBox">add</button>
        <button @click="removeBox">remove</button>
      </div>
      <div class="box-grid">
        <x-box v-for="box in boxes" :id="box.id"></x-box>
      </div>
    </div>
  </div>
</template>

<script>


import XBox from "./components/XBox";
export default {
  name: 'App',
  components: {XBox},
  data() {
    return {
      boxCount: 1,
    }
  },
  computed: {
    boxes() {
      return new Array(this.boxCount).fill({id: Math.random()})
    }
  },
  methods: {
    addBox() {
      ++this.boxCount
    },
    removeBox() {
      if (this.boxCount > 1) --this.boxCount
    }
  }
}
</script>

<style lang="scss">
@import "styles/app";

body, html {
  margin: 0;
  box-sizing: border-box;
  background: $mainBackground;
  font-family: Arial;
}

.box-grid {
  padding: 229px 157px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.actions {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;

  button {
    background: $primary;
    color: white;
    outline: none;
    border: none;
    margin: 5px;
    border-radius: 13px;
    min-height: 24px;
    padding: 0px 12px;
    min-width: 63px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
