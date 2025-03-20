<template>
  <nav class="navbar justify-between gap-4 shadow">
    <!-- site logo start here -->
    <div class="navbar-start">
      <NuxtLink to="/">
        <img src="/public/img/logo.png" class="w-40" />
      </NuxtLink>
    </div>
    <!-- site logo end here -->

    <!-- navigation menu start here -->
    <div class="navbar-center flex items-center text-lg">
      <div class="col-span-6 uppercase">
        <ul class="flex">
          <NuxtLink to="/hakii">
            <li class="px-4 py-1 hover:text-[#da3a2a]">Hakii</li>
          </NuxtLink>
          <NuxtLink to="/music">
            <li class="px-4 py-1 hover:text-[#da3a2a]">Music</li>
          </NuxtLink>
          <NuxtLink to="/game">
            <li class="px-4 py-1 hover:text-[#da3a2a]">Game</li>
          </NuxtLink>
          <NuxtLink to="/watch">
            <li class="px-4 py-1 hover:text-[#da3a2a]">Watch</li>
          </NuxtLink>
          <NuxtLink to="/mobile">
            <li class="px-4 py-1 hover:text-[#da3a2a]">Mobile</li>
          </NuxtLink>

          <!-- Mega menu for products start here -->
          <li
            class="px-4 py-1 hover:text-[#da3a2a] dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]"
          >
            <button
              id="dropdown-nav"
              type="button"
              class="uppercase dropdown-toggle dropdown-open:text-[#da3a2a]"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              Products
              <span
                class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"
              ></span>
            </button>
            <ul
              class="dropdown-menu dropdown-open:opacity-100 hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-nav"
            >
              <li>
                <a class="dropdown-item hover:text-[#da3a2a]" href="#"
                  >UI kits</a
                >
              </li>
              <li>
                <a class="dropdown-item hover:text-[#da3a2a]" href="#"
                  >Templates</a
                >
              </li>
              <li>
                <a class="dropdown-item hover:text-[#da3a2a]" href="#"
                  >Component library</a
                >
              </li>
              <hr class="border-base-content/25 -mx-2 my-3" />
              <li>
                <a class="dropdown-item hover:text-[#da3a2a]" href="#"
                  >Figma designs</a
                >
              </li>
            </ul>
          </li>
          <!-- Mega menu for products end here -->

          <NuxtLink to="/about">
            <li class="px-4 py-1 hover:text-[#da3a2a]">About Us</li>
          </NuxtLink>
          <NuxtLink to="/contact">
            <li class="px-4 py-1 hover:text-[#da3a2a]">Contact Us</li>
          </NuxtLink>
        </ul>
      </div>
    </div>
    <!-- navigation menu end here -->

    <!-- search start here -->
    <div class="navbar-end items-center gap-4 text-lg">
      <button
        class="btn btn-sm btn-text btn-circle size-[2.125rem]"
        aria-label="Search Button"
      >
        <span class="icon-[tabler--search] size-[1.375rem]"></span>
      </button>
    </div>
    <!-- search end here -->
  </nav>
</template>

<style>
.dropdown-item:hover {
  background: none;
}
</style>
