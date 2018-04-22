<template>
    <el-container>
      <el-header>
        <nuxt-link to="/">
          <el-button type="text">back to top</el-button>
        </nuxt-link>
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
  export default {
    name: 'register',
    components: {PageFooter}
  }
</script>

<style scoped>

</style>
