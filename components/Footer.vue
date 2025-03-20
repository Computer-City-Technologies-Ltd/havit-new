<template>
  <div class="w-full text-white">
    <footer class="footer bg-[#da3a2a] p-10">
      <form class="gap-6">
        <div class="flex items-center gap-2 text-xl font-bold">
          <NuxtLink to="/">
            <img src="/public/img/logo_footer.png" class="w-40" />
          </NuxtLink>
        </div>
        <p class="text-white w-80">
          Authorized Distributor- COMPUTER CITY TECHNOLOGIES LTD Computer City
          Technologies Ltd is one of the largest ICT hardware distribution
          company as well as a solution provider in network and security space
          in Bangladesh.
        </p>
      </form>

      <nav class="text-white">
        <a href="/hakii" class="link link-hover">Hakii</a>
        <a href="/music" class="link link-hover">Music</a>
        <a href="/game" class="link link-hover">Game</a>
        <a href="/watch" class="link link-hover">Watch</a>
        <a href="/mobile" class="link link-hover">Mobile</a>
      </nav>

      <nav class="text-white">
        <a href="/about" class="link link-hover">About Us</a>
        <a href="/contact" class="link link-hover">Contact Us</a>
      </nav>
    </footer>

    <footer
      class="footer bg-[#da3a2a] border-base-content/25 border-t px-6 py-4"
    >
      <div class="flex w-full items-center justify-between">
        <aside class="grid-flow-col items-center">
          <p class="text-white">
            ©2025
            <a class="link link-hover font-medium text-white" href="/">Havit</a>
          </p>
        </aside>
        <div class="flex h-5 gap-4">
          <a href="#" class="link" aria-label="Facebook Link">
            <span
              class="icon-[tabler--brand-facebook] size-5 text-white"
            ></span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
