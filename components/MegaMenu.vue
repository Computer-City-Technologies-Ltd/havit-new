<template>
  <header
    class="bg-base-100 flex w-full flex-wrap py-4 text-lg md:flex-nowrap md:justify-start md:py-4"
  >
    <nav class="mx-auto w-full px-4" aria-label="Global">
      <div class="relative md:flex md:items-center">
        <!-- logo start here -->
        <div class="flex items-center justify-between">
          <a
            class="link text-base-content link-neutral text-xl font-semibold no-underline"
            href="/"
          >
            <img src="/public/img/logo.png" class="w-40" />
          </a>
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
                        <NuxtLink to="/MobileAccessories/mobilecase"
                          >Mobile Case</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/MobileAccessories/powerbank"
                          >Power Bank</NuxtLink
                        >
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/MobileAccessories/wirelesscharger"
                          >Wireless Charger</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/MobileAccessories/carcharger"
                          >Car Charger</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/MobileAccessories/usbcharger"
                          >USB Charger</NuxtLink
                        >
                      </li>
                      <li
                        class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"
                      >
                        <NuxtLink to="/MobileAccessories/chargingcable"
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
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/ComputerAccessories/wiredmouse"
                          >Wired Mouse</NuxtLink
                        >
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/ComputerAccessories/wirelessmouse"
                          >Wireless Mouse</NuxtLink
                        >
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/ComputerAccessories/keyboard"
                          >Keyboard</NuxtLink
                        >
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/ComputerAccessories/keymousecombo"
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
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/Audio/btheadearphone"
                          >BT Headphone & Earphone</NuxtLink
                        >
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/Audio/wiredheadearphone"
                          >Wired Headphone & Earphone</NuxtLink
                        >
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"><NuxtLink to="/Audio/speaker">Speaker</NuxtLink></li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/Audio/speaker"
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
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/GamingSetup/gamingchair"
                          >Gaming Chair</NuxtLink
                        >
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]"> 
                        <NuxtLink to="/GamingSetup/gamingtable"
                          >Gaming Table</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NuxtLink to="/" class="menu-title uppercase font-bold"
                      >Cables</NuxtLink
                    >
                    <ul class="menu">
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/Cables/hdmicable">HDMI Cable</NuxtLink>
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/Cables/vgacable">VGA Cable</NuxtLink>
                      </li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/Cables/usbextension"
                          >USB Extention Cable</NuxtLink
                        >
                      </li>
                      <li class="text-gray-800 hover:text-[#da3a2a] dark:text-gray-300 dark:hover:text-[#da3a2a]">
                        <NuxtLink to="/Cables/powercable">Power Cable</NuxtLink>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NuxtLink
                      to="/projector"
                      class="menu-title uppercase font-bold"
                      >Projector</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/microphone"
                      class="menu-title uppercase font-bold"
                      >Microphone</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/gamepad"
                      class="menu-title uppercase font-bold"
                      >Gamepad</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/laptopcoolingpad"
                      class="menu-title uppercase font-bold"
                      >Laptop Cooling Pad</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/smartwatch"
                      class="menu-title uppercase font-bold"
                      >Smart Watch</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/headphonestand"
                      class="menu-title uppercase font-bold"
                      >Headphone Stand</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink to="/hub" class="menu-title uppercase font-bold"
                      >Hub</NuxtLink
                    >
                  </li>

                  <li>
                    <NuxtLink
                      to="/mousepad"
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

<style>
.btn-text {
  background-color: none;
}

.btn-text:hover {
  border-color: transparent;
  background-color: unset;
}

ul.menu li a:hover {
  background:none;
  background-image: none;
}
</style>
