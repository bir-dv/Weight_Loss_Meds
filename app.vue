<template>

  <layoutNav />

  <!-- no insurance... -->
  <section class="bg-slate-100 dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="lg:-mx-6 lg:flex lg:items-center">

        <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
          <!-- <p class="text-5xl font-semibold text-blue-500 ">“</p> -->
          <p class="text-lg text-green-700">No Insurance Needed</p>
          <h2 class="text-5xl font-bold mt-5 mb-2 text-gray-700">
            Helping men
          </h2>
          <h2 class="text-5xl font-bold mb-2 text-gray-700 line-through ...">
            on their weight
          </h2>
          <h2 class="text-5xl font-bold mb-2 text-gray-700">
            loss journey
          </h2>


          <!-- <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
            Help us improve our productivity
          </h1> -->

          <!-- <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
            tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
            aperiam dolorum, obcaecati corrupti aspernatur a. ”
          </p> -->
          <h3 class="text-3xl mt-10 mb-8 text-gray-500">
            Upfront pricing with no hidden fees.
          </h3>
          <!-- <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
          <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p> -->

          <div class="flex items-center justify-between mt-12 lg:justify-start">
            <button @click="toggleModal"
              class="bg-white font-bold rounded-lg py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-green-600 mb-6">
              Get Started
            </button>
            <!-- <button title="left arrow"
              class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button title="right arrow"
              class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button> -->
          </div>
        </div>
        <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
          src="/assets/imgs/three.jpg" alt="">

      </div>
    </div>
    <getstartmodal :modal-active="modalActive" @close-model="toggleModal">
    </getstartmodal>
  </section>


  <!-- new compound...... -->

  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-6xl px-6 py-10 mx-auto">
      <!-- <p class="text-xl font-medium text-blue-500 ">Testimonials</p> -->

      <!-- <h1 class="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        What clients saying
      </h1> -->

      <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
        <div class="absolute w-full bg-blue-400 -z-10 md:h-96 rounded-2xl"></div>

        <div
          class="w-full p-6 bg-blue-400 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
          <img
            class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
            src="/assets/imgs/first_imag.jpg" alt="" />

          <div class="mt-2 md:mx-6">
            <div>
              <p class="  text-5xl text-black font-bold flex ">NEW <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </p>
              <p class="text-2xl font-medium tracking-tight text-gray-700 mb-5">Compounded</p>
            </div>
            <div>
              <p class="text-4xl font-medium tracking-tight text-white">Oral Semaglutide</p>
              <!-- <p class="text-blue-200 ">Marketing Manager at Stech</p> -->
            </div>

            <p class="  mt-4 text-lg leading-relaxed text-white md:text-xl"> For easy and convenient weight loss,
              without injections.</p>

            <div class="flex items-center justify-between mt-6 md:justify-start">
              <button @click="toggleModal"
                class="bg-white font-bold rounded-lg py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-green-600 mb-6">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    <getstartmodal :modal-active="modalActive" @close-model="toggleModal">
    </getstartmodal>
  </section>

  <!-- we can help you with -->

  <section class="mt-20">
    <div class="">

      <h1 class="text-4xl font-mono font-bold text-gray-600 antialiased text-center ">We Can Help You With</h1>
    </div>
  </section>


  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-6xl px-6 py-10 mx-auto">
      <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12 gap-5">
        <div class="absolute w-full bg-transparent -z-10 md:h-96 rounded-2xl"></div>

        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto pb-5">
          <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style="background-image: url(https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWluZXJ8ZW58MHx8MHx8fDI%3D)">
          </div>

          <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Weight
              Management
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <!-- <span class="font-bold text-gray-800 dark:text-gray-200">$129</span> -->
              <button
                class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>



        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto pb-5">
          <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style="background-image: url(https://images.unsplash.com/photo-1618517047922-d18a5a36c109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zb21uaWF8ZW58MHx8MHx8fDI%3D)">
          </div>

          <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Insomnia
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <!-- <span class="font-bold text-gray-800 dark:text-gray-200">$129</span> -->
              <button
                class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto pb-5">
          <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style="background-image: url(https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8Mg%3D%3D)">
          </div>

          <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Testosterone
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <!-- <span class="font-bold text-gray-800 dark:text-gray-200">$129</span> -->
              <button
                class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>


      </main>

    </div>


  </section>


  <!-- How Henry Meds Works -->
  <section class="mt-20">
    <div class="">

      <h1 class="text-4xl font-mono font-bold text-gray-600 antialiased text-center ">How Weight Loss Meds Works</h1>
      <p class="text-xl font-mono text-gray-600 antialiased text-center">Weight Loss Meds Makes it easy to get started
        with no insurance required</p>
    </div>
  </section>


</template>

<script setup lang="ts">
import { ref } from 'vue';

// import getstartmodal from './components/getstartmodal.vue';

import getstartmodal from './components/getstartmodal.vue';

const modalActive = ref();
const toggleModal = () => {
  modalActive.value = !modalActive.value;
}

</script>