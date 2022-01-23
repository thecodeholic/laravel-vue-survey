<template>
  <div
    class="bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down"
  >
    <h3 v-if="title" class="text-2xl font-semibold">
      {{title}}
    </h3>
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>

<script setup>
const {title} = defineProps({
  title: String
})
</script>

<style></style>
