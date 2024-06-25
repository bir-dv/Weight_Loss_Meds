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
    <div class="max-w-6xl px-6 py-5 mx-auto">
      <!-- <p class="text-xl font-medium text-blue-500 ">Testimonials</p> -->

      <!-- <h1 class="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        What clients saying
      </h1> -->

      <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
        <div class="absolute w-full bg-slate-100 -z-10 md:h-96 rounded-2xl"></div>

        <div
          class="w-full p-6 bg-blue-400 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
          <img
            class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
            src="/assets/imgs/Oral_Semaglutide.jpg" alt="" />

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
              <p class="text-4xl font-medium tracking-tight text-gray-600">Oral Semaglutide</p>
              <!-- <p class="text-blue-200 ">Marketing Manager at Stech</p> -->
            </div>

            <p class="  mt-4 text-lg leading-relaxed text-gray-600 md:text-xl"> For easy and convenient weight loss,
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

  <!-- <section class="mt-20">
    <div class="">

      <h1 class="text-4xl font-mono font-bold text-gray-600 antialiased text-center">How
        Weight
        loss
        meds work</h1>
    </div>
  </section> -->


  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-6xl px-6 py-14 mx-auto">
      <div class="">

        <h1 class="text-4xl font-mono font-bold text-gray-600 antialiased text-center">How
          Weight
          Loss
          Meds Work</h1>
      </div>
      <main class="relative z-20 w-full mt-6 md:flex md:items-center xl:mt-12 gap-10">
        <div class="absolute w-full bg-transparent -z-10 md:h-96 rounded-2xl"></div>

        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto pb-5">
          <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style="background-image: url(https://images.pexels.com/photos/1181450/pexels-photo-1181450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)">
          </div>

          <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-950 uppercase dark:text-white">Triage
            </h3>

            <div class="flex items-center justify-between px-4 py-4 bg-slate-100 dark:bg-gray-700 text-center">
              <p class="text-gray-800">Fill out our online form by answering a few simple questions. This will help us
                determine your eligibility before sending you triage.</p>
              <!-- <span class="font-bold text-gray-800 dark:text-gray-200">$129</span> -->
              <!-- <button
                class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clip-rule="evenodd" />
                </svg>
              </button> -->
            </div>
          </div>
        </div>



        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto pb-5">
          <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style="background-image: url(https://images.pexels.com/photos/7195310/pexels-photo-7195310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)">
          </div>

          <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-950 uppercase dark:text-white">Online
              Consultation
            </h3>

            <div class="flex items-center justify-between px-4 py-4 bg-slate-100 dark:bg-gray-700 text-center">
              <p class="text-gray-800">We will put you in contact with one of our knowledgeable doctors, who will
                determine the most effective regimen for your conditions.
              </p>

              <!-- <span class="font-bold text-gray-800 dark:text-gray-200">$129</span> -->
              <!-- <button
                class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clip-rule="evenodd" />
                </svg>
              </button> -->
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto pb-5">
          <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style="background-image: url(https://images.pexels.com/photos/7857541/pexels-photo-7857541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)">
          </div>

          <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 dark:bg-gray-800">
            <h3 class="py-2 font-bold tracking-wide text-center text-gray-950 uppercase dark:text-white">Straight To You
            </h3>

            <div class="flex items-center justify-between px-4 py-4 bg-slate-100 dark:bg-gray-700 text-center">
              <p class="text-gray-800">Avoid the awkward back and forth to the doctors and have Weight Loss Meds deliver
                your medication straight trough mail.

              </p>
              <!-- <span class="font-bold text-gray-800 dark:text-gray-200">$129</span> -->
              <!-- <button
                class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"><svg
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clip-rule="evenodd" />
                </svg>
              </button> -->
            </div>
          </div>
        </div>


      </main>

    </div>


  </section>

  <!-- comparison weight loss meds with diffrent products -->


  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-5xl container px-6  mx-auto">
      <div class="flex flex-col items-center xl:items-start xl:mx-8">
        <!-- text-4xl font-mono font-bold text-gray-600 antialiased text-center -->
        <p class="max-w-3xl font-medium text-gray-600  lg:text-xl dark:text-white text-center mx-auto">Shed
          15% of
          your body
          weight effortlessly with compounded Semaglutide, the same active ingredient in Wegovy® and Ozempic®</p>





      </div>
      <div class="xl:items-center xl:-mx-8 xl:flex">


        <div class="flex-1 xl:mx-20">
          <div class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">


            <div class="max-w-sm mx-auto border shadow-lg rounded-lg md:mx-4 dark:border-gray-700">
              <div class="p-6">
                <h1 class="text-xl font-bold text-gray-700 capitalize lg:text-2xl dark:text-white">Weight Loss Meds
                </h1>

                <p class="mt-4 text-gray-500 dark:text-gray-300 ">
                  HOW WE COMPARE TO OTHER PROGRAMS
                </p>


              </div>

              <hr class="border-gray-200 dark:border-gray-700">

              <div class="p-6">
                <h1 class="text-lg font-bold text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:
                </h1>

                <div class="mt-8 space-y-4">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">99% Pure</span>
                  </div>

                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">FDA Approved</span>
                  </div>



                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">Free consultation </span>
                  </div>

                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">Money back guarantee</span>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">Made In The USA</span>
                  </div>

                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">Not mixed with B12 Vitamin</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="max-w-sm mx-auto border shadow-lg rounded-lg md:mx-4 dark:border-gray-700">
              <div class="p-6">
                <h1 class="text-xl font-bold text-gray-700 capitalize lg:text-2xl dark:text-white">other programs</h1>

                <p class="mt-4 text-gray-500 dark:text-gray-300">
                  HOW WE COMPARE TO OTHER PROGRAMS

                </p>



              </div>

              <hr class="border-gray-200 dark:border-gray-700">

              <div class="p-6">
                <h1 class="text-lg font-bold text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:
                </h1>

                <div class="mt-8 space-y-4">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">99% Pure</span>
                  </div>

                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">FDA Approved</span>
                  </div>



                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">Free consultation </span>
                  </div>

                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">Money back guarantee</span>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">Made In The USA</span>
                  </div>

                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>

                    <span class="mx-4 text-gray-700 dark:text-gray-300">Not mixed with B12 Vitamin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>




  <!-- comparision up to this  -->



  <!-- more info starts -->
  <section class="bg-slate-100 dark:bg-gray-900 mt-12">
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">


        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img class="w-full h-full lg:max-w-3xl -ml-40 -mt-8" src="/assets/imgs/image_a.png" alt="">
        </div>
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">The <span
                class=" ">"Game-Changer"</span> Hollywood
              Weight Loss Formula is
              <span class="">Here!</span>
            </h1>

            <p class="mt-3 text-gray-600 dark:text-gray-400">No exercise, no doctor's visit, all-convenient prescription
              based weight loss guided by dedicated doctors.
              Start Today For Just $295</p>
            <!-- <p class="mt-3 text-gray-600 dark:text-gray-400">
              Shed 15% of your body weight effortlessly with compounded Semaglutide, the same active ingredient in
              Wegovy® and Ozempic®</p> -->
            <p class="mt-3 text-gray-600 dark:text-gray-400">Meet our doctors online, get your prescription hassle-free
            </p>
            <p class="mt-3 text-gray-600 dark:text-gray-400">Your success team guides you to a sleek new figure,
              stress-free
            </p>
            <p class="mt-3 text-gray-600 dark:text-gray-400">Start today, includes Provider & Medication,
            </p>
            <p class="mt-3 font-bold text-gray-700 dark:text-gray-400">
              NO INSURANCE
              NEEDED
            </p>

            <button @click="toggleModal"
              class="bg-white font-bold rounded-lg py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-green-600 mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>





  <!-- more info ends -->



  <section class="mt-40 max-w-6xl mx-auto rounded-3xl bg-lime-200 dark:bg-gray-900 -mb-12 ">


    <div class="container px-6 py-16 mx-auto text-center ">
      <div class="max-w-lg mx-auto">
        <img class="-mt-[200px] scale-90 mb-4 object-center mx-auto  lg:w-4/5 " src="/assets/imgs/money.png" />
        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Weight loss meds</h1>
        <p class="font-bold mt-6 text-gray-500 dark:text-gray-300">100% Satisfaction Or Your Money Back</p>
        <p class=" mt-6 text-gray-500 dark:text-gray-300">For the first 30 days from when you sign up, you get
          complete
          access to Weight loss meds programs and our providers to fully test how effective our weight loss treatments
          are. Join
          the thousands of patients in the trusting Weight loss meds.</p>
        <p class="mt-6 text-gray-500 dark:text-gray-300">if you are not 100% satisfied, or you do not see adequate
          results within those 30 days, simply request your money back and you will be refunded in full.</p>
        <p class="mt-6 text-gray-700 dark:text-gray-300 font-bold">No questions asked.
        </p>
        <!-- <button
          class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
          Get Started
        </button> -->
        <button @click="toggleModal"
          class="bg-white font-bold rounded-lg py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-green-600 mt-6">
          Get Started
        </button>
      </div>


    </div>
  </section>

  <section>
    <div class="flex justify-center -mb-8">
      <img class="scale-75 object-center w-auto h-96 rounded-xl lg:w-4/5" src="/assets/imgs/hipaa.png" />
      <!-- <img class="scale-75 object-center w-auto h-96 rounded-xl lg:w-4/5" src="/assets/imgs/certified.png" /> -->

    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 pb-12 -pt-6 mx-auto text-center">
      <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
        Join Our <span class="">Mailing List.</span>
      </h2>

      <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
        stay up to date on our new treatments and offers.
      </p>

      <div class="inline-flex w-full mt-6 sm:w-auto">

        <!-- <button ref="#"
          class="bg-white font-bold rounded-lg py-2 px-6 shadow-lg uppercase tracking-wider hover:bg-green-600">
          Join Our Mailing List </button> -->
        <button href="#"
          class="bg-[#1877F2] flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg  duration-300 transition-colors border border-transparent px-8 py-2.5">
          Join Our Mailing List
        </button>
      </div>
    </div>
  </section>


  <!-- How Henry Meds Works -->
  <!-- <section class="mt-20">
    <div class="">

      <h1 class="text-4xl font-mono font-bold text-gray-600 antialiased text-center ">How Weight Loss Meds Works</h1>
      <p class="text-xl font-mono text-gray-600 antialiased text-center">Weight Loss Meds Makes it easy to get started
        with no insurance required</p>
    </div>
  </section> -->

  <LayoutFooter />

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