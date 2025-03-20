<template>
  <div class="bg-[#da3a2a] py-4 text-center">
    <div class="px-32">
      <div class="text-white dark:text-blue-300 font-bold text-xs">
        <div class="col-span-6 uppercase flex justify-between">
          <div class="pt-1">
            <NuxtLink to="/distributor" class="px-2"
              >Join Us as A Distributor & Grow Together</NuxtLink
            >
            |
            <NuxtLink to="/contact" class="px-2">Contact Us</NuxtLink>
            |
            <NuxtLink to="/about" class="px-2">About Us</NuxtLink>
            |
            <NuxtLink
              to="https://www.comcitybd.com/brand/Havit"
              target="blank"
              class="px-2"
              >Shop</NuxtLink
            >
          </div>

          <!-- dark mode -->
          <div class="pt-1">
            <label class="swap swap-rotate">
              <input
                type="checkbox"
                value="dark"
                v-model="colormode"
                @change="runme"
                class="theme-controller"
              />
              <span class="swap-off icon-[tabler--sun] size-5"></span>
              <span class="swap-on icon-[tabler--moon] size-5"></span>
            </label>
          </div>
          <!-- end of dark mode -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colormode = ref(false);

const runme = () => {
  console.log(colormode.value);
  if (colormode.value == true) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
};
</script>
