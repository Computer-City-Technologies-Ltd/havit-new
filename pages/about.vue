<template>
  <div class="w-full h-screen relative">
    <img
      src="/img/aboutusbanner.jpg"
      class="absolute top-0 left-0 min-h-full ob"
      alt=""
    />
  </div>

  <div class="relative overflow-hidden">
    <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
      <div class="flex flex-col items-end pr-12 pt-8">
        <div class="h-full mt-auto overflow-hidden relative">
          <img src="/img/hq.jpg" alt="" />
        </div>
      </div>

      <div
        class="py-20 bg-gray-900 relative before:absolute before:h-full before:w-screen before:bg-gray-900 before:top-0 before:left-0"
      >
        <div class="relative z-20 pl-12">
          <h2 class="text-[#da3a2a] font-black text-5xl leading-snug mb-10">
            About Us
          </h2>
          <p class="text-white text-sm">
            Authorized Distributor- COMPUTER CITY TECHNOLOGIES LTD Computer City
            Technologies Ltd is one of the largest ICT hardware distribution
            company as well as a solution provider in network and security space
            in Bangladesh. CCTL has been operating in Bangladesh ICT industry
            since 1999. Responding to the ICT needs of the country, CCTL was
            established with the goal to keep our generation updated with latest
            technology while assisting to secure the fastest access to the
            digital world. We have been able to set an example of excellence to
            our customers using the state of the art technology, quality
            products and dedicated pre-sales and post-sales support and service.
          </p>
          <button
            class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white bg-[#da3a2a] hover:bg-white hover:bg-opacity-10"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="py-4 relative overflow-hidden bg-white">
    <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
      <div
        class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#da3a2a] before:top-0 before:right-0"
      >
        <div class="relative z-20 pl-2 pr-12">
          <h2 class="text-gray-100 font-black text-5xl leading-snug mb-10">
            Design <br />Philosophy
          </h2>
          <p class="text-gray-100 text-sm">
            Inspired by smart aesthetics, HAVIT focuses on essential needs,
            blending omnisonic scenarios, comfort, style, and innovative
            technology to create visually appealing, user-centric products.
          </p>

          <p class="text-gray-100">
            <span class="text-xl font-bold block mt-8"
              >H655BT Hybrid ANC Wireless Headphones</span
            >
            Utility Model Patents<br /><br />
            <span class="text-xl font-bold block mt-8"
              >OPENBUDS 1 Open-Ear Clip Headphones</span
            >
            iF Design Award<br />
            MUSE Design Awards<br />
            International Design Excellence Awards<br /><br />
            <span class="text-xl font-bold block mt-8"
              >Freego1 Air Air Conduction Wireless Headphones</span
            >
            Canton Fair Design Award
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col pl-16">
        <div class="h-full mt-auto overflow-hidden relative">
          <img
            src="/img/products.webp"
            class="h-full w-full object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="relative overflow-hidden bg-white">
    <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
      <div class="flex flex-col items-end pr-12 pt-8">
        <div class="h-full mt-auto overflow-hidden relative">
          <img src="/img/hq.jpg" alt="" />
        </div>
      </div>

      <div
        class="py-20 bg-gray-900 relative before:absolute before:h-full before:w-screen before:bg-gray-900 before:top-0 before:left-0"
      >
        <div class="relative z-20 pl-12">
          <h2 class="text-[#da3a2a] font-black text-5xl leading-snug mb-10">
            Global Tech Exhibitions
          </h2>
          <p class="text-white text-sm">
            HAVIT showcases its leading consumer electronics at global tech
            exhibitions, fueling industry growth through innovation. We aim to
            deliver an exceptional smart living experience to all consumers.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = "About - Havit Bangladesh";
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
