<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white"
        >
          Contact Us
        </h1>
      </div>

      <form @submit.prevent="sendMail" class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label
                for="name"
                class="leading-7 text-sm text-gray-600 dark:text-white"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                v-model="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label
                for="email"
                class="leading-7 text-sm text-gray-600 dark:text-white"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                v-model="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label
                for="message"
                class="leading-7 text-sm text-gray-600 dark:text-white"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                v-model="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              class="flex mx-auto text-white bg-[#da3a2a] py-2 px-8 focus:outline-none hover:bg-black text-lg rounded"
            >
              {{ buttonName }}
            </button>
          </div>

          <div
            class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
          >
            <p class="leading-normal my-5 dark:text-white">
              75-76, B.S. Bhaban, 3rd Floor <br />
              Laboratory Road Dhaka-1205, Bangladesh <br />
              Tel: +8809604700800.
            </p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const name = ref("");
const email = ref("");
const message = ref("");
const sendButton = ref(true);
const buttonName = ref("Send");

const sendMail = async function () {
  await $fetch("https://formspree.io/f/manebrgb", {
    method: "POST",
    body: {
      name: name.value,
      email: email.value,
      message: message.value,
    },
    headers: {
      Accept: "application/json",
    },
  });

  // after sending the email
  name.value = "";
  email.value = "";
  message.value = "";
  sendButton.value = false;
  buttonName.value = "Sucess";
};

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Contact Page - ${titleChunk} ` : "Contact Page";
  },
});

// SEO Start Here
const title = "Contact - Havit Bangladesh";
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
// SEO End
</script>
