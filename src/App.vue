<template>
  <div id="xino">
    <div class="main">
      <action-bar @add-box="addBox" @remove-box="removeBox" />
      <x-box-grid :boxes="boxes" />
    </div>
  </div>
</template>

<script>
import XBoxGrid from "./components/XBoxGrid";
import ActionBar from "./components/ActionBar";
export default {
  name: 'App',
  components: {ActionBar, XBoxGrid},
  data() {
    return {
      boxes: [{id: Math.random()}],
    }
  },
  methods: {
    addBox() {
      this.boxes.push({id: Math.random()})
    },
    removeBox() {
      this.boxes.pop()
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
