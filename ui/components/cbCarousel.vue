<template>
  <v-carousel hide-delimiters class="cb-carousel" height="300">
      <v-carousel-item v-if="items.length >0"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
 props:{
   folder: String,
   filenames: Array
 },
 data (){
   return {
     items:[]
   }
 },
 mounted(){
   const imageDir ="/carousels/"+this.folder+'/'
   this.importAll(imageDir)
 },
   methods: {
    importAll(imageDir) {
      const allItems = []
      this.filenames.forEach(filename => {
        const img = { src : imageDir + filename}
        allItems.push(img)
      });
      this.items = allItems;
    }
  }
}
</script>

<style>

</style>