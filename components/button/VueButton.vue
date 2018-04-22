<template>
  <button class="vue-button" :class="type" @onClick="$emit('click')">{{title}}</button>
</template>

<script>
  export default {
    name: 'VueButton',
    props: {
      type: {type: String, default: () => ''},
      title: {type: String, default: () => ''},
    }
  }
</script>

<style lang="less" scoped>
  button {
    > .vue-button {
      display: inline-block;
      border-radius: 4px;
      text-decoration: none;
      padding: 10px 30px;
      background: 0 0;

      .primary {
        border: 1px solid #3b8070;
        color: #3b8070;

        &:hover {
          color: #fff;
          background-color: #3b8070;
        }
      }

      .gray {
        border: 1px solid #35495e;
        color: #35495e;

        &:hover {
          color: #fff;
          background-color: #35495e;
        }
      }
    }
  }
</style>
