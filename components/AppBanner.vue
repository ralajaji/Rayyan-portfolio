<template>
  <div class="" data-v-6fbaf86c="">
    <section
      class="
        flex flex-col
        sm:justify-between
        items-center
        sm:flex-row
        mt-12
        sm:mt-10
      "
      data-v-7563be6a=""
      data-v-6fbaf86c=""
    >
      <div class="w-full md:w-1/3 text-left" data-v-7563be6a="">
        <h1
          class="
            font-general-semibold
            text-3xl
            md:text-3xl
            xl:text-4xl
            text-center
            sm:text-left
            text-ternary-dark
            dark:text-primary-light
            uppercase
          "
          data-v-7563be6a=""
        >
          Hi, I am Rayyan
        </h1>
        <p
          class="
            font-general-medium
            mt-2
            text-lg
            sm:text-xl
            xl:text-2xl
            text-center
            sm:text-left
            leading-none
            text-gray-400
          "
          data-v-7563be6a=""
        >
          Software Engineering &amp; A Full-Stack Developer
        </p>
        <div class="flex justify-center sm:block" data-v-7563be6a="">
          <a
            href="assets/files/CV.pdf"
            download=""
            aria-label="Download Resume"
            class="
              flex
              justify-center
              items-center
              w-36
              sm:w-48
              mt-12
              mb-6
              sm:mb-0
              text-lg
              border border-indigo-200
              dark:border-ternary-dark
              py-2.5
              sm:py-3
              shadow-lg
              rounded-lg
              bg-indigo-50
              focus:ring-1 focus:ring-indigo-900
              hover:bg-indigo-500
              text-gray-500
              hover:text-white
              duration-500
            "
            data-v-7563be6a=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="
                feather feather-arrow-down-circle
                ml-0
                sm:ml-1
                mr-2
                sm:mr-3
                w-5
                sm:w-6
                duration-100
              "
              data-v-7563be6a=""
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="8 12 12 16 16 12"></polyline>
              <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
            <span
              class="text-sm sm:text-lg font-general-medium duration-100"
              data-v-7563be6a=""
              >Download CV</span
            ></a
          >
        </div>
      </div>
      <div class="w-full md:w-2/3 text-right float-right" data-v-7563be6a="">
        <img
          src="	https://nuxtjs-tailwindcss-portfolio.netlify.app/_nuxt/img/developer-dark.3f07bd1.svg"
          alt="Developer Dark"
          data-v-7563be6a=""
        />
      </div>
    </section>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style lang="scss" scoped></style>
