<template>
    <div v-show="modalActive" class="relative flex justify-center" style="z-index: 999;">
        <!-- x-data="{ isOpen: true }" -->
        <!-- <button @click="isOpen = true"
            class="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Open Modal
        </button> -->
        <!-- x-show="isOpen" -->
        <div v-if="modalActive" x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            class=" backdrop-blur-sm fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
            aria-modal="true">
            <div class="  flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div
                    class=" w-[90vw] h-[90vh] relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle ">
                    <div>
                        <!-- <div class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-700 dark:text-gray-300"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </div> -->

                        <div class=" mt-2 text-center">
                            <dir class="holds-the-iframe"><iframe id="frame" style="opacity: 1"
                                    class="w-[90vw] h-[70vh]"
                                    src="https://form.jotform.com/clientservices98/the-weight-loss-meds-"
                                    frameborder="0"></iframe></dir>

                            <!-- <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                id="modal-title">get started</h3>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur dolorum aliquam ea, ratione deleniti porro officia?
                                Explicabo
                                maiores suscipit.
                            </p> -->
                        </div>
                    </div>

                    <div class="mt-5 sm:flex sm:items-center sm:justify-between">
                        <!-- <a href="#" class="text-sm text-blue-500 hover:underline">Learn more</a> -->

                        <div class="sm:flex sm:items-center ">
                            <button @click="$emit('close-model')"
                                class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Cancel
                            </button>

                            <!-- <button
                                class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Archive
                            </button> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- <slot /> -->
        </div>

    </div>










</template>



<script setup>

defineEmits(["close-model"])

defineProps({
    modalActive: {
        type: Boolean,
        default: false
    }
})



</script>

<style>
.holds-the-iframe {
    background: url(/assets/imgs/loader.gif) center center no-repeat;
}
</style>