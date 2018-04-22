<template>
  <el-container>
    <el-header>
      <el-header>
        <div class="position__right">
          <nuxt-link to="/user/sign-in">
            <el-button type="text">
              Sign In
            </el-button>
          </nuxt-link>

          <nuxt-link to="/user/sign-up">
            <el-button type="text">
              Sign Up
            </el-button>
          </nuxt-link>
        </div>
      </el-header>
    </el-header>

    <el-main>
      <section class="container">
        <div>
          <app-logo/>
          <h1 class="title">
            interview
          </h1>
          <h2 class="subtitle">
            Nuxt.js project
          </h2>
          <div class="links">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              class="button--green">Documentation</a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              class="button--grey">GitHub</a>
            <vue-button type="primary" title="Github"/>
          </div>
        </div>
      </section>
    </el-main>
    <el-footer>
      <page-footer/>
    </el-footer>
  </el-container>

</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import VueButton from '~/components/button/VueButton'
  import PageFooter from '../components/PageFooter'

  export default {
    components: {
      PageFooter,
      VueButton,
      AppLogo
    },
    data: () => ({
      visibleSignInDialog: false,
      visibleSignUpDialog: false,
    }),
    methods: {

    }
  }
</script>

<style lang="less">
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .position {
    &__right {
      position: absolute;
      right: 10px;
    }
  }
</style>
