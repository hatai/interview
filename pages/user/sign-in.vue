<template>
  <div>
    <el-form :model="user" action="void 0" method="POST">
      <el-form-item>
        <el-input
          placeholder="Email"
          v-model="user.email"
          auto-complete="on"
          prefix-icon="fas fa-user"
          type="email"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="Password"
          v-model="user.password"
          auto-complete="on"
          prefix-icon="fas fa-key"
          type="password"
        />
      </el-form-item>

      <el-form-item>
        <nuxt-link to="/user/sign-up">
          <el-button type="text">need an account?</el-button>
        </nuxt-link>
        <el-button type="primary" @click="signIn">Sign In</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'


  export default {
    name: 'sign-in',
    layout: 'register',
    data: () => ({
      user: {
        email: '',
        password: '',
      }
    }),
    methods: {
      signIn () {
        const {email, password} = this.user
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            this.$router.push('/contents/')
          })
          .catch(err => console.error(err))
      }
    }
  }
</script>

<style scoped>

</style>
