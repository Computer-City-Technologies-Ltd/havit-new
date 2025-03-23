<template>
  <div
    id="image"
    data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "isInfiniteLoop": true }'
    class="relative w-full"
  >
    <div class="carousel rounded-none">
      <div class="carousel-body h-full opacity-0">
        <!-- Slide 1 -->
        <div class="carousel-slide">
          <div class="flex h-full justify-center relative">
            <!-- image -->
            <img
              src="/img/slider-1.webp"
              class="size-full object-cover"
              alt="game"
            />

            <!-- text -->
            <div class="absolute text-gray-700 top-1/3 left-[100px]">
              <h1 class="font-bold md:text-5xl sm:text-sm">
                Have It, Have Fun
              </h1>
              <p class="md:text-4xl sm:text-sm mt-4">
                H655BT Hybrid ANC Wireless Headphones
              </p>
            </div>
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-slide">
          <div class="flex h-full justify-center relative">
            <!-- image -->
            <img
              src="/img/slider-2.webp"
              class="size-full object-cover"
              alt="vrbox"
            />

            <!-- text -->
            <div class="absolute text-gray-200 top-1/3 left-[100px]">
              <h1 class="font-bold md:text-5xl sm:text-sm">
                Top Esports Seller
              </h1>
              <p class="md:text-4xl sm:text-sm mt-4">
                H2002d 3.5mm Gaming Headphones
              </p>
            </div>
          </div>
        </div>
        <!-- Slide 3 -->
        <div class="carousel-slide">
          <div class="flex h-full justify-center relative">
            <img
              src="/img/slider-3.webp"
              class="size-full object-cover"
              alt="laptop"
            />

            <!-- text -->
            <div class="absolute text-gray-200 top-1/3 left-[100px]">
              <h1 class="font-bold md:text-5xl sm:text-sm">
                Block the Noise, Boost the Sound
              </h1>
              <p class="md:text-4xl sm:text-sm mt-4">
                H670BT-Adaptive Noise Cancelling <br />
                Wireless Headphones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Previous Slide -->
    <button type="button" class="carousel-prev">
      <span
        class="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow"
      >
        <span
          class="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"
        ></span>
      </span>
      <span class="sr-only">Previous</span>
    </button>
    <!-- Next Slide -->
    <button type="button" class="carousel-next">
      <span class="sr-only">Next</span>
      <span
        class="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow"
      >
        <span
          class="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"
        ></span>
      </span>
    </button>
  </div>
</template>
