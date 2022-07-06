<template>
  <div class="m-48 border-8 text-xl  font-sans shadow-lg  w-3/12 content-center">
    {{ dummyData.exampleKey }}
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    dummyData () {
      return this.$store.getters.getDummyData
    }
  }
}
</script>
