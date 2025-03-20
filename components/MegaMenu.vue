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

            <div
              class="dropdown [--adaptive:none] [--auto-close:inside] [--strategy:static] [--trigger:hover] md:[--strategy:absolute] uppercase"
            >
              <button
                type="button"
                class="dropdown-toggle btn btn-text text-gray-800 dark:text-gray-400 dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-3 uppercase"
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
                class="dropdown-menu dropdown-open:opacity-100 start-0 top-full hidden w-full min-w-60 rounded-lg p-0 opacity-0 shadow-none transition-[opacity,margin] duration-[0.1ms] before:absolute"
                role="menu"
                aria-orientation="vertical"
              >
                <ul
                  class="menu md:menu-horizontal rounded-box w-full max-xl:gap-4 max-md:border md:shadow"
                >
                  <li>
                    <a href="/" class="menu-title uppercase font-bold"
                      >Mobile Accessories</a
                    >
                    <ul class="menu">
                      <li>
                        <a href="/MobileAccessories/mobilecase">Mobile Case</a>
                      </li>
                      <li>
                        <a href="/MobileAccessories/powerbank">Power Bank</a>
                      </li>
                      <li>
                        <a href="/MobileAccessories/wirelesscharger"
                          >Wireless Charger</a
                        >
                      </li>
                      <li>
                        <a href="/MobileAccessories/carcharger">Car Charger</a>
                      </li>
                      <li>
                        <a href="/MobileAccessories/usbcharger">USB Charger</a>
                      </li>
                      <li>
                        <a href="/MobileAccessories/chargingcable"
                          >Charging Cable</a
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/" class="menu-title uppercase font-bold"
                      >Computer Accessories</a
                    >
                    <ul class="menu">
                      <li>
                        <a href="/ComputerAccessories/wiredmouse"
                          >Wired Mouse</a
                        >
                      </li>
                      <li>
                        <a href="/ComputerAccessories/wirelessmouse"
                          >Wireless Mouse</a
                        >
                      </li>
                      <li>
                        <a href="/ComputerAccessories/keyboard">Keyboard</a>
                      </li>
                      <li>
                        <a href="/ComputerAccessories/keymousecombo"
                          >Mouse Keyboard Combo</a
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/projector" class="menu-title uppercase font-bold"
                      >Projector</a
                    >
                  </li>

                  <li>
                    <a href="/" class="menu-title uppercase font-bold">Audio</a>
                    <ul class="menu">
                      <li>
                        <a href="/Audio/btheadearphone"
                          >BT Headphone & Earphone</a
                        >
                      </li>
                      <li>
                        <a href="/Audio/wiredheadearphone"
                          >Wired Headphone & Earphone</a
                        >
                      </li>
                      <li><a href="/Audio/speaker">Speaker</a></li>
                      <li><a href="/Audio/speaker">Bluetooth Speaker</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="/microphone" class="menu-title uppercase font-bold"
                      >Microphone</a
                    >
                  </li>

                  <li>
                    <a href="/" class="menu-title uppercase font-bold"
                      >Gaming Setup</a
                    >
                    <ul class="menu">
                      <li>
                        <a href="/GamingSetup/gamingchair">Gaming Chair</a>
                      </li>
                      <li>
                        <a href="/GamingSetup/gamingtable">Gaming Table</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="/gamepad" class="menu-title uppercase font-bold"
                      >Gamepad</a
                    >
                  </li>

                  <li>
                    <a
                      href="/laptopcoolingpad"
                      class="menu-title uppercase font-bold"
                      >Laptop Cooling Pad</a
                    >
                  </li>

                  <li>
                    <a href="/smartwatch" class="menu-title uppercase font-bold"
                      >Smart Watch</a
                    >
                  </li>

                  <li>
                    <a href="/" class="menu-title uppercase font-bold"
                      >Cables</a
                    >
                    <ul class="menu">
                      <li><a href="/Cables/hdmicable">HDMI Cable</a></li>
                      <li><a href="/Cables/vgacable">VGA Cable</a></li>
                      <li>
                        <a href="/Cables/usbextension">USB Extention Cable</a>
                      </li>
                      <li><a href="/Cables/powercable">Power Cable</a></li>
                    </ul>
                  </li>

                  <li>
                    <a
                      href="/headphonestand"
                      class="menu-title uppercase font-bold"
                      >Headphone Stand</a
                    >
                  </li>

                  <li>
                    <a href="/hub" class="menu-title uppercase font-bold"
                      >Hub</a
                    >
                  </li>

                  <li>
                    <a href="/mousepad" class="menu-title uppercase font-bold"
                      >Mousepad</a
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
</style>
