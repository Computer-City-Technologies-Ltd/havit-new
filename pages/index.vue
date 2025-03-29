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
defineOgImageComponent("HavitOG", {
  headline: "Welcome",
  title: "Havit Bangladesh",
  description:
    "Authorized Distributor - Computer City Technologies Ltd in Bangladesh.",
});

useSeoMeta({
  title: "Havit Bangladesh",
  description:
    "Authorized Distributor - Computer City Technologies Ltd in Bangladesh",
});
</script>
