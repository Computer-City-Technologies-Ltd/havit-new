<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1
        class="text-center text-5xl pb-12 text-gray-900 dark:text-gray-200 sm:text-4xl font-bold"
      >
        Collection
      </h1>
      <div class="flex flex-wrap -m-4">
        <!-- product 1 -->
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <NuxtLink
            to="/product/music?p1=80&p2=103&p3=112"
            target="_blank"
            class="block relative rounded overflow-hidden"
          >
            <img src="/public/img/headphone.webp" alt="headphone" />
          </NuxtLink>
          <div class="mt-4">
            <NuxtLink to="/product/music?p1=80&p2=103&p3=112" target="_blank">
              <h2
                class="text-gray-900 dark:text-gray-200 text-center text-lg font-bold"
              >
                Audio Series
              </h2>
            </NuxtLink>
          </div>
        </div>
        <!-- end of product 1 -->

        <!-- product 2 -->
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <NuxtLink
            to="/product/mobile?p1=80&p2=90&p3=107"
            target="_blank"
            class="block relative rounded overflow-hidden"
          >
            <img
              src="/public/img/MobileAccessories.webp"
              alt="MobileAccessories"
            />
          </NuxtLink>
          <div class="mt-4">
            <NuxtLink to="/product/mobile?p1=80&p2=90&p3=107" target="_blank">
              <h2
                class="text-gray-900 dark:text-gray-200 text-center text-lg font-bold"
              >
                Mobile Accessories
              </h2>
            </NuxtLink>
          </div>
        </div>
        <!-- end of product 2 -->

        <!-- product 3 -->
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <NuxtLink
            to="/product/game?p1=80&p2=100&p3=101&p4=99"
            target="_blank"
            class="block relative rounded overflow-hidden"
          >
            <img src="/public/img/GameSeries.webp" alt="GameSeries" />
          </NuxtLink>
          <div class="mt-4">
            <NuxtLink
              to="/product/game?p1=80&p2=100&p3=101&p4=99"
              target="_blank"
            >
              <h2
                class="text-gray-900 dark:text-gray-200 text-center text-lg font-bold"
              >
                Game Series
              </h2>
            </NuxtLink>
          </div>
        </div>
        <!-- end of product 3 -->

        <!-- product 4 -->
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <NuxtLink
            to="/product/watch?p1=80&p2=123"
            target="_blank"
            class="block relative rounded overflow-hidden"
          >
            <img src="/public/img/SmartLife.webp" alt="Smart Life" />
          </NuxtLink>
          <div class="mt-4">
            <NuxtLink to="/product/watch?p1=80&p2=123" target="_blank">
              <h2
                class="text-gray-900 dark:text-gray-200 text-center text-lg font-bold"
              >
                Smart Life
              </h2>
            </NuxtLink>
          </div>
        </div>
        <!-- end of product 4 -->
      </div>

      <!-- <div class="container mx-auto py-15 text-center">
        <button
          class="btn bg-[#da3a2a] text-gray-200 hover:bg-black hover:text-white max-sm:btn-sm lg:btn-lg rounded-none"
        >
          View All
        </button>
      </div> -->
    </div>
  </section>
</template>
