
<template>
  <span class="small-text">{{block.text}}</span>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>