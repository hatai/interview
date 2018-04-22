<template>
  <div>
    <el-form :model="user">
      <el-form-item>
        <el-input
          placeholder="Email"
          v-model="user.email"
          auto-complete="off"
          prefix-icon="fas fa-user"
          type="email"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="Password"
          v-model="user.password"
          auto-complete="off"
          prefix-icon="fas fa-key"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="Retype Password"
          v-model="user.retypePassword"
          auto-complete="off"
          prefix-icon="fas fa-key"
          type="password"
        />
      </el-form-item>
      <div>
        <span>By registering you agree to our terms of service</span>
      </div>
      <el-form-item>
        <nuxt-link to="/user/sign-in">
          <el-button type="text">Sign In</el-button>
        </nuxt-link>
        <el-button type="primary" @click="signUp">Sign Up</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'
  import {REGEX_EMAIL} from '~/assets/js/constants/regex'
  import {MSG_INVALID_EMAIL} from '~/assets/js/constants/message'

  export default {
    name: 'sign-up',
    layout: 'register',
    data () {
      return {
        user: {
          email: '',
          password: '',
          retypePassword: '',
        },
      }
    },
    methods: {
      signUp () {
        const {email, password} = this.user
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.$router.push('/contents/')
          })
          .catch(err => console.error(err))
      },
    },
    computed: {
      validationMessageEmail() {
        const {email} = this.user
        if (REGEX_EMAIL.test(email)) {
          return MSG_INVALID_EMAIL
        }
      }
    }
  }
</script>

<style scoped>

</style>
