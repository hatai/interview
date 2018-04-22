<template>
  <el-container>
    <el-header>
      <div class="position__right">
        <el-button type="text" @click="signOut">Sign Out</el-button>
      </div>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      <page-footer/>
    </el-footer>
  </el-container>
</template>

<script>
  import PageFooter from '../components/PageFooter'
  import firebase from '~/plugins/firebase'
  import auth from '~/plugins/auth'

  export default {
    name: 'need-sign-in',
    components: {PageFooter},
    beforeMount () {
      auth()
        .then((result) => {
          if (result) {}
          else {
            this.$router.replace('/')
          }
        })
    },
    methods: {
      signOut() {
        firebase.auth().signOut()
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => {
            console.error(err)
          })
      }
    }
  }
</script>

<style lang="less">
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
