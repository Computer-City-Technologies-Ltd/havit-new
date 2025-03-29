<template>
  <div class="container mx-auto">
    <h1 class="text-2xl text-red-800 dark:text-gray-100">Alin's World</h1>
    <h1
      class="text-2xl bg-red-800 text-gray-100 dark:bg-blue-600 dark:text-white p-10 rounded"
    >
      Alin's World
    </h1>

    <HavitOG />
  </div>
</template>

<script lang="ts" setup>
import HavitOG from "~/components/OgImage/HavitOG.vue";

defineOgImageComponent("HavitOG", {
  title: "Is this thing on?",
});

useSeoMeta({
  title: "About - Havit Bangladesh",
  image:
    "https://images.unsplash.com/photo-1742878012833-7c819d682ab4?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
</script>
