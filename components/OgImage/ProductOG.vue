<template>
  <div
    class="mx-auto px-4 py-8 h-[600px] w-[1200px]"
    style="background-color: white; background-size: 1200px 600px"
  >
    <div class="flex flex-cols p-12">
      <div
        class="text-2xl font-semibold text-gray-900 uppercase pb-2"
        style="width: 50%"
      >
        <h2 class="text-[#da3a2a]">Havit</h2>
        <h2 class="font-semibold text-gray-900 text-5xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-gray-700 text-xl">
          {{ description }}
        </p>
      </div>

      <div style="width: 50%" class="">
        <img
          v-if="image"
          :src="image"
          class="rounded-2xl h-[450px] w-[450px]"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    image?: string;
  }>(),
  {
    title: "Havit",
  }
);
</script>
