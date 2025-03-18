<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <!-- product loop -->
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="product in products">
          <a
            :href="`https://comcitybd.com/product/${product.slug}`"
            target="_blank"
            class="block relative h-48 rounded overflow-hidden"
          >
            <img
              :alt="product.name"
              class="object-cover object-center w-full h-full block rounded-lg"
              :src="product.thumbnail"
            />
          </a>
          <div class="mt-4">
            <a
              :href="`https://comcitybd.com/product/${product.slug}`"
              target="_blank"
            >
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                {{ product.category.name }}
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                {{ product.name }}
              </h2>
              <span
                v-if="product.api.retailprice == 0"
                class="text-red-600 dark:text-red-500"
                >Out Of Stock
              </span>
              <span v-else class="text-xl dark:text-gray-200"
                >Tk. {{ product.api.retailprice }}</span
              >
            </a>
          </div>
        </div>
        <!-- end of product loop -->
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch(
  "https://admindash.comcitybd.com/api/search/haki/?brand=undefined&page=1"
);
const products = data.value.data;
</script>
