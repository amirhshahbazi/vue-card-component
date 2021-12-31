<template>
  <div class="box-grid">
    <x-box v-for="box in boxes" :key="box.id"></x-box>
  </div>
</template>

<script>
import XBox from "./XBox";

export default {
  name: "XBoxGrid",
  components: {XBox},
  props: {
    boxes: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.box-grid {
  padding: 229px 157px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media only screen and (max-width: 1500px) {
    padding: 100px 100px 10px 10px;
  }

  @media only screen and (max-width: 670px) {
    justify-content: center;
    padding: 100px 10px 10px 10px;
  }
}
</style>
