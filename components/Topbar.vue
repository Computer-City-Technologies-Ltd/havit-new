<template>
  <div class="bg-red-600 px-32 py-4 text-center">
    <div class="container">
      <div class="text-white dark:text-blue-300 font-bold text-xs">
        <div class="col-span-6 uppercase flex justify-between">
          <div>
            <NuxtLink to="/about" class="px-2">Join Us as A Distributor & Grow Together</NuxtLink> |
            <NuxtLink to="/about" class="px-2">Contact Us</NuxtLink>
          </div>

          <!-- dark mode -->
          <div>
            <label class="swap swap-rotate">
            <input type="checkbox" value="dark" class="theme-controller" />
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