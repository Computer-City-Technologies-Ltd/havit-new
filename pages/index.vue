<template>
  <Banner />
  <Collection />
  <Slider />
  <FourCards class="px-32 py-5" />
  <Video class="px-32 py-5" />
  <News class="px-32 py-5 mt-8" />
  <AudioCenter class="px-32 py-5 mt-8" />
</template>
<script setup>
const title = "Havit Bangladesh";
const description =
  "Authorized Distributor - Computer City Technologies Ltd in Bangladesh";

defineOgImageComponent("HavitOG", {
  headline: "Welcome",
  title: title,
  description: description,
});

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});
</script>
