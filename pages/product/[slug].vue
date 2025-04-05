<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <!-- product not found -->
        <div class="text-lg text-gray-800" v-if="products.length == 0">
          No Product in This Category
        </div>

        <!-- product loop -->
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="product in products">
          <a
            :href="`https://comcitybd.com/product/${product.slug}`"
            target="_blank"
            class="block relative rounded overflow-hidden"
          >
            <img
              :alt="product.name"
              class="object-cover object-center w-full h-full block rounded-lg dark:text-gray-100"
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
              <h2
                class="text-gray-900 dark:text-gray-100 title-font text-lg font-medium"
              >
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
const route = useRoute();
const name = route.params;
const url = ref("");
const title = name.slug.split("-");

if (name.slug == "hakii") {
  url.value = `https://admindash.comcitybd.com/api/search/${name.slug}/?brand=undefined&page=1`;
} else {
  const pp = name.slug.split("-");
  url.value = `https://admindash.comcitybd.com/api/brands/Havit/${pp[1]}?id[]=${pp[2]}&id[]=${pp[3]}&id[]=${pp[4]}`;
}
const { data } = await useFetch(url);
const products = data.value.data;

console.log(products[0].thumbnail);

defineOgImageComponent("ProductOG", {
  title: products[0].category?.name,
  image: products[0].thumbnail,
  description: products[0].name,
});

useSeoMeta({
  title: products[0].category?.name,
  description: products[0].name,
  ogTitle: products[0].category?.name,
  ogDescription: products[0].name,
});
</script>
