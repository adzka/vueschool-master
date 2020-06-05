<template>
  <div class="col-full push-top">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories"/>
  </div>

</template>

<script>
  import {mapActions} from 'vuex'
  import CategoryList from '@/components/CategoryList'
export default {
    name: 'HelloWorld',

    components: {
      CategoryList
    },

    computed: {
      categories () {
        return Object.values(this.$store.state.categories)
      }
    },
    methods: {
      ...mapActions(['fetchAllCategories', 'fetchForums'])
    },
    created () {
      this.fetchAllCategories()
      .then(categories => {
        categories.forEach(category => this.fetchForums({ids: Object.keys(category.forums)}))
      })
    // },
    // beforeCreate () {
    //   console.log('beforeCreate', this.categories)
    // },
    // created () {
    //   console.log('created', this.categories)
    // },
    // beforeMount () {
    //   console.log('beforeMount', this.categories)
    // },
    // mounted () {
    //   console.log('mounted', this.categories, this.$el.innerText)
    // },
    // beforeDestroy () {
    //   console.log('beforeDestroy - turn off listener', this.categories)
    // },
    // destroyed () {
    //   console.log('destroyed', this.categories)
    // }
    }
}
</script>
