<template>
  <USpace layout="wrapper" class="_mob">
    <USpace display="col" gap="lg" full>
      <USpace display="col" pos="left">
        <UText type="h2" :text="title" />
        <div style="max-width: 40rem">
          <UText type="p" gray :text="desc" />
        </div>
      </USpace>
      <slot />
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
defineProps<{ title: string; desc: string }>()
</script>
