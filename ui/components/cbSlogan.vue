<template>
  <div class="slogan pt-sm-1 pt-md-12">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'CbSlogan',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
