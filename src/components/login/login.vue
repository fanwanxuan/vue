<template>
  <div>
    <mu-text-field hintText="最多不超过10个字符" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10" /><br/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputErrorText: ''
      }
    },
    methods: {
      handleInputOverflow(isOverflow) {
        this.inputErrorText = isOverflow ? '超过啦！！！！' : ''
      }
    }
  }
</script>

<style lang="css">

</style>
