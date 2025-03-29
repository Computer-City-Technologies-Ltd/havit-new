<template>
  <header
    class="bg-base-100 flex w-full flex-wrap py-4 text-lg md:flex-nowrap md:justify-start md:py-4"
  >
    <nav class="mx-auto w-full px-4" aria-label="Global">
      <div class="relative md:flex md:items-center">
        <!-- logo start here -->
        <div class="flex items-center justify-between">
          <NuxtLink
            to="/"
            class="link text-base-content link-neutral text-xl font-semibold no-underline"
          >
            <img src="/public/img/logo.png" class="w-40" />
          </NuxtLink>
          <div class="md:hidden">
            <button
              type="button"
              class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
              data-collapse="#navbar-mega-menu-hover"
              aria-controls="navbar-mega-menu-hover"
              aria-label="Toggle navigation"
            >
              <span
                class="icon-[tabler--menu-2] collapse-open:hidden size-4"
              ></span>
              <span
                class="icon-[tabler--x] collapse-open:block hidden size-4"
              ></span>
            </button>
          </div>
        </div>
        <!-- logo end here -->

        <!-- navmenu start here -->
        <div
          id="navbar-mega-menu-hover"
          class="collapse hidden grow basis-full overflow-hidden rounded-lg transition-all duration-300 md:block uppercase"
        >
          <div
            class="flex flex-col rounded-lg max-md:mt-3 max-md:border max-md:p-2 md:flex-row md:items-center md:justify-end gap-2 md:ps-5 md:pe-0.5 md:py-0.5"
          >
            <ul
              class="menu md:menu-horizontal p-0 font-medium max-md:w-fit gap-2"
            >
              <NuxtLink to="/product/hakii">
                <li class="px-4 py-1 hover:text-[#da3a2a]">Hakii</li>
              </NuxtLink>
              <NuxtLink to="/product/music-80-103-112">
                <li class="px-4 py-1 hover:text-[#da3a2a]">Music</li>
              </NuxtLink>
              <NuxtLink to="/product/game-80-100-101-99">
                <li class="px-4 py-1 hover:text-[#da3a2a]">Game</li>
              </NuxtLink>
              <NuxtLink to="/product/watch-80-123">
                <li class="px-4 py-1 hover:text-[#da3a2a]">Watch</li>
              </NuxtLink>
              <NuxtLink to="/product/mobile-80-90-107">
                <li class="px-4 py-1 hover:text-[#da3a2a]">Mobile</li>
              </NuxtLink>
            </ul>

            <!-- Mega Dropdown Menu -->
            <div
              class="dropdown [--adaptive:none] [--auto-close:inside] [--strategy:static] [--trigger:hover] md:[--strategy:absolute] uppercase"
            >
              <button
                type="button"
                class="dropdown-toggle btn btn-text text-gray-800 hover:text-[#da3a2a] dark:text-gray-400 uppercase text-lg"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                Products
                <span
                  class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4 uppercase"
                ></span>
              </button>
              <div
                class="dropdown-menu dropdown-open:opacity-100 start-0 py-0 mt-0 top-full hidden w-full min-w-60 rounded-lg p-0 opacity-0 shadow-none transition-[opacity,margin] duration-[0.1ms] before:absolute"
                role="menu"
                aria-orientation="vertical"
              >
                <ul
                  class="menu rounded-box w-full max-xl:gap-4 max-md:border md:shadow grid grid-cols-5"
                >
                  <li>
                    <NuxtLink to="/" class="menu-title uppercase font-bold"
                      >Mobile Accessories</NuxtLink
                    >
                    <ul class="menu">
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] hover:bg-none dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/mobilecase-20-105"
                          >Mobile Case</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/powerbank-20-107"
                          >Power Bank</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/wirelesscharger-80-113">
                          Wireless Charger
                        </NuxtLink>
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/carcharger-80-104"
                          >Car Charger</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/usbcharger-80-110"
                          >USB Charger</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/chargingcable-80-90"
                          >Charging Cable</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NuxtLink to="/" class="menu-title uppercase font-bold"
                      >Computer Accessories</NuxtLink
                    >
                    <ul class="menu">
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/wiredmouse-80-97"
                          >Wired Mouse</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/wirelessmouse-80-98"
                          >Wireless Mouse</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/keyboard-80-96"
                          >Keyboard</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/keymousecombo-80-99"
                          >Mouse Keyboard Combo</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NuxtLink to="/" class="menu-title uppercase font-bold"
                      >Audio</NuxtLink
                    >
                    <ul class="menu">
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/btheadearphone-80-103"
                          >BT Headphone & Earphone</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/wiredheadearphone-80-112"
                          >Wired Headphone & Earphone</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/speaker-80-121">
                          Speaker
                        </NuxtLink>
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/BTspeaker-80-102"
                          >Bluetooth Speaker</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NuxtLink to="/" class="menu-title uppercase font-bold"
                      >Gaming Setup</NuxtLink
                    >
                    <ul class="menu">
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/gamingchair-80-100"
                          >Gaming Chair</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/gamingtable-80-101"
                          >Gaming Table</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NuxtLink to="/" class="menu-title uppercase font-bold">
                      Cables
                    </NuxtLink>
                    <ul class="menu">
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/hdmicable-80-86">
                          HDMI Cable
                        </NuxtLink>
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/vgacable-80-85">
                          VGA Cable
                        </NuxtLink>
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/usbextension-80-89">
                          USB Extention Cable
                        </NuxtLink>
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/product/powercable-80-87">
                          Power Cable
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NuxtLink
                      to="/product/projector-80-130"
                      class="menu-title uppercase font-bold"
                      >Projector</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/product/microphone-80-124"
                      class="menu-title uppercase font-bold"
                      >Microphone</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/product/gamepad-80-118"
                      class="menu-title uppercase font-bold"
                      >Gamepad</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/product/laptopcoolingpad-80-119"
                      class="menu-title uppercase font-bold"
                      >Laptop Cooling Pad</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/product/smartwatch-80-123"
                      class="menu-title uppercase font-bold"
                      >Smart Watch</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/product/Headphonestand-80-115"
                      class="menu-title uppercase font-bold"
                    >
                      Headphone Stand
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/product/hub-80-111"
                      class="menu-title uppercase font-bold"
                      >Hub</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/product/mousepad-80-120"
                      class="menu-title uppercase font-bold"
                      >Mousepad</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- navmenu end here -->
      </div>
    </nav>
  </header>
</template>

<style scoped>
.btn-text {
  background-color: none;
}

.btn-text:hover {
  border-color: transparent;
  background-color: unset;
}

ul.menu li a:hover {
  background: none;
  background-image: none;
}
</style>
