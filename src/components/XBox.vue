<template>
  <div class="box">
    <div :class="{box__behind: true, 'box__behind--active': opened}" @click="toggleState">
      <span>
        <img v-if="!opened" src="@/assets/add.svg">
        <img v-else src="@/assets/add_light.svg">
      </span>
    </div>
    <div :class="{box__front: true, 'box__front--active': opened}">
      <div :class="{box__button: true, 'box__button--active': opened}">
        <a href="#">
          {{ buttonTitle }}
        </a>
      </div>
      <transition name="fade" mode="out-in">
        <div class="box__info" v-if="!opened">
          <div class="info__title">LIKING</div>
          <div class="info__count">100</div>
        </div>
      </transition>
      <transition-group name="fade" mode="out-in">
        <div class="box__divider" v-if="opened">
          <div class="divider__left"></div>
          <div class="divider__text">Date Period</div>
          <div class="divider__right"></div>
        </div>

        <div class="box__date" v-if="opened">
          <div class="date__title">Pick Date Range:</div>
          <div class="title__range">
            <div class="range__from">2020/09/10</div>
            <span>TO</span>
            <div class="range__to">2020/09/10</div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "XBox",
  props: ['id'],
  data() {
    return {
      opened: false,
    }
  },
  computed: {
    buttonTitle() {
      return this.opened ? 'CREATE BOOST' : 'BOOST';
    }
  },
  methods: {
    toggleState() {
      this.opened = !this.opened
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.box {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 30px 8px;
  width: max-content;

  * {
    transition: all 0.7s ease-in-out;
  }

  &__front {
    width: $frontBoxWidth;
    min-height: 114px;
    background: white;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    z-index: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: {
      top: 24px;
      left: 16px;
      right: 16px;
      bottom: 32px;
    }

    &--active {
      min-height: 256px;
      justify-content: flex-start;
    }

    .box__button {
      border: 1px solid #CCD0DE;
      border-radius: 13px;
      width: max-content;
      min-height: 24px;
      padding: 0px 12px;
      min-width: 63px;
      justify-content: center;
      display: flex;
      align-items: center;
      transition: all 0.2s ease-in-out;

      &--active {
        background: #4F5BD51F;
        border: none;
        transform: translate(calc(50% + 20px));
        a {
          color: $primary !important;
        }
      }

      a {
        font-size: 11px;
        text-decoration: none;
        color: #CCD0DE;
      }
    }

    .box__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #3C3C3C;

      .info__title {
        font-size: 16px;
      }

      .info__count {
        font-size: 30px;
        font-weight: bolder;
      }
    }

    .box__divider {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-left: -16px;
      margin-right: -16px;
      margin-top: 24px;
      .divider__text {
        color: #A6ACBA;
        font-size: 12px;
        text-align: center;
        min-width: 64px;
        background: white;
      }
      .divider__left, .divider__right {
        width: 100%;
        height: 1px;
        border: none;
        border-top: 2px dashed #A6ACBA;
      }

      .divider__left {
        margin-right: 10px;
      }

      .divider__right {
        margin-left: 10px;
      }
    }

    .box__date {
      display: flex;
      flex-flow: column;
      text-align: center;
      .date__title {
        font-size: 12px;
        margin-top: 24px;
      }
      .title__range {
        display: flex;
        justify-content: space-evenly;
        margin-top: 18px;
        .range__from, .range__to {
          font-size: 14px;
          color: #3C3C3C;
          border-bottom: 1px solid black;
          padding-bottom: 1px;
        }

        span {
          color: #3C3C3C80;
          font-size: 12px;
        }
      }
    }
  }

  &__behind {
    width: $backBoxWidth;
    height: $backBoxHeight;
    background: white;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    position: absolute;
    top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &--active {
      background: $primary;
      transform: translateY(-28px);
    }

    &:hover {
      cursor: pointer;
    }

    span {
      padding: 104px 8px;
    }
  }
}

.box:hover .box__behind {
  transform: translateY(-28px);
}
</style>
