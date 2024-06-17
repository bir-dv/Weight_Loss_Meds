<template>
    <nav class="fixed w-full top-0 left-0 bg-white shadow" style="z-index: 999;">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <nuxt-link class="text-xl font-semibold text-gray-700" to="#">Weight Loss Meds</nuxt-link>

            <div class="flex items-center space-x-1">

                <!-- check -->

                <!-- <button
              class="group  relative dropdown  px-3 text-gray-700 hover:text-green-700 cursor-pointer font-semi-bold text-base tracking-wide "><nuxt-link
                class="flex">Treatments
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6 hover:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></nuxt-link>
    
              <div class="group-hover:block dropdown-menu absolute hidden h-auto">
    
                <ul class="top-0 w-48 bg-zinc-50 shadow px-6 py-8 rounded-lg ...">
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item 1</a>
                  </li>
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                      2</a></li>
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                      3</a></li>
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                      4</a></li>
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                      5</a></li>
                </ul>
              </div>
            </button> -->

                <!-- <button
              class="group  relative dropdown  px-3 text-gray-700 hover:text-green-700 cursor-pointer font-semi-bold text-base tracking-wide"><nuxt-link
                class="flex">FAQ
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6 hover:rotate-180">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></nuxt-link>
              <div class="group-hover:block dropdown-menu absolute hidden h-auto">
    
                <ul class="top-0 w-48 bg-zinc-50 shadow px-6 py-8 rounded-lg ...">
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item 1</a>
                  </li>
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                      2</a></li>
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                      3</a></li>
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                      4</a></li>
                  <li class="py-1"><a class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                      5</a></li>
                </ul>
              </div>
            </button> -->

                <!-- from here -->

                <li
                    class="group  relative dropdown  px-3 text-gray-700 hover:text-green-700 cursor-pointer font-semi-bold text-base tracking-wide ">
                    <a>Treatments</a>
                    <div class="group-hover:block dropdown-menu absolute hidden h-auto">

                        <ul class="top-0 w-48 bg-white shadow px-6 py-8">
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item</a>
                            </li>
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                                    2</a></li>
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                                    3</a></li>
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                                    4</a></li>
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                                    5</a></li>
                        </ul>
                    </div>
                </li>

                <li
                    class="group  relative dropdown  px-3 text-gray-700 hover:text-green-700 cursor-pointer font-semi-bold text-base tracking-wide ">
                    <a>FAQ</a>
                    <div class="group-hover:block dropdown-menu absolute hidden h-auto">

                        <ul class="top-0 w-48 bg-white shadow px-6 py-8">
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item</a>
                            </li>
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                                    2</a></li>
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                                    3</a></li>
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                                    4</a></li>
                            <li class="py-1"><a
                                    class="block text-gray-700  text-base  hover:text-green-700 cursor-pointer">Item
                                    5</a></li>
                        </ul>
                    </div>
                </li>

                <!--to here-->

                <!-- <button class="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">Treatments</button> -->
                <!-- <nuxt-link to="#" class="py-2 px-3 text-gray-700 hover:text-gray-900 hidden md:block">Treatments</nuxt-link> -->
                <!-- <nuxt-link to="#" class="py-2 px-3 text-gray-700 hover:text-gray-900 hidden md:block">FAQ</nuxt-link> -->
                <nuxt-link to="#"
                    class="py-2 px-3 text-gray-700 hover:text-green-700 hidden md:block">Contact</nuxt-link>
                <nuxt-link to="#" class="py-2 px-3 text-gray-700 hover:text-green-700 hidden md:block">Login</nuxt-link>


                <!-- <a href="#"
              class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-green-600 transition duration-300 hidden md:block">Get
              Started</a> -->

                <button @click="toggleModal"
                    class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-green-600 transition duration-300 hidden md:block">Get
                    Started
                </button>


                <button @click="isOpen = !isOpen" class="text-gray-700 hover:text-gray-900 md:hidden">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- mobile menu -->
        <div :class="isOpen ? 'block' : 'hidden'" class="md:hidden">
            <nuxt-link to="#" class="block py-2 px-3 text-sm hover:bg-green-700">Contact</nuxt-link>
            <nuxt-link to="#" class="block py-2 px-3 text-sm hover:bg-green-700">Login</nuxt-link>


            <button @click="toggleModal"
                class="bg-white font-bold rounded-lg py-2 px-6 shadow-lg uppercase tracking-wider hover:bg-green-600">
                Get Started
            </button>
        </div>
        <getstartmodal :modal-active="modalActive" @close-model="toggleModal">
        </getstartmodal>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref<boolean>(false);
// const isOpen = ref(false)
import getstartmodal from '../getstartmodal.vue';

const modalActive = ref();
const toggleModal = () => {
    modalActive.value = !modalActive.value;
};

</script>