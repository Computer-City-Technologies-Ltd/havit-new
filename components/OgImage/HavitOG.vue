<template>
  <div
    class="mx-auto px-4 py-8 h-[600px] w-[1200px]"
    style="
      background-image: url('/img/background_ogimage.jpg');
      background-repeat: no-repeat;
      background-size: 1200px 600px;
    "
  >
    <div class="flex justify-between p-12">
      <div
        class="text-2xl font-semibold text-gray-900 uppercase pb-2"
        style="width: 50%"
      >
        <h2>Welcome</h2>
        <h2 class="font-semibold text-gray-900 text-5xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-gray-700 text-xl">
          Authorized Distributor- Computer City Technologies Ltd in Bangladesh
        </p>
      </div>

      <div style="width: 50%" class="flex">
        <img v-if="image" :src="image" class="rounded h-52 w-52" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    image?: string;
  }>(),
  {
    title: "Havit",
  }
);
</script>
