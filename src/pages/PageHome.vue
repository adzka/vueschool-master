<template>
  <div v-if="asyncDataStatus_ready" class="col-full push-top">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories"/>
  </div>

</template>

<script>
  import {mapActions} from 'vuex'
  import CategoryList from '@/components/CategoryList'
  import asyncDataStatus from '@/mixins/asyncDataStatus'
export default {
    name: 'HelloWorld',

    components: {
      CategoryList
    },
    mixins: [asyncDataStatus],

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
        .then(categories => Promise.all(categories.map(category => this.fetchForums({ids: Object.keys(category.forums)}))))
        .then(() => {
          this.asyncDataStatus_fetched()
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
