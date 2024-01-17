<template>
  <nav class="flex flex-1 flex-col sticky top-0 z-50 bg-black p-5 items-center md:items-start min-h-[8rem]">
    <div class="flex w-full h-2 border-b border-white border-solid mb-4"></div>
    <div class="flex container mx-auto justify-between pb-10 md:pb-14 pl-3">
      <div class="flex-1 grid grid-cols-3 h-6 text-white">
        <div class="pt-4">
          <nuxt-link :to="`${$router.options.base}`" title="Escobedo Lucea Biomaterial and Tissue Engineering Lab"
            target="_self">
            <nuxt-img class="invisible xl:visible w-48 h-auto ml-8" format="webp" src="/logo_blanco.png"
              alt="Escobedo Lucea Biomaterial and Tissue Engineering Lab logo 2" />
          </nuxt-link>
        </div>

        <div class="flex flex-row justify-self-center pt-2">
          <nuxt-link :to="`${$router.options.base}`" title="Escobedo Lucea Biomaterial and Tissue Engineering Lab"
            target="_self">
            <nuxt-img class="visible xl:invisible w-48 h-auto" format="webp" src="/logo_blanco.png"
              alt="Escobedo Lucea Biomaterial and Tissue Engineering Lab logo" />
          </nuxt-link>
        </div>

        <div class="flex flex-row justify-self-end">

          <div class="flex flex-col visible xl:hidden w-34" ref="menu">
            <div class="flex justify-end w-30">
              <button
                class="border border-solid rounded-none border-white border-opacity-75 bg-black text-white hover:bg-gray-200 hover:border-gray-400 hover:text-black py-3 md:p-4 ml-4 h-12 md:h-16"
                @click="showMenu = !showMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <title>Menu</title>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            <div class="xl:hidden w-30 ml-4 text-sm tracking-bit" v-show="showMenu">
              <nuxt-link :to="`${$router.options.base}`" title="Home"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Home</nuxt-link>

              <nuxt-link :to="`${$router.options.base}#about`" title="About Section"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">About</nuxt-link>
                
              <nuxt-link :to="`${$router.options.base}research`" title="Research Section"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Research</nuxt-link>
              
              <nuxt-link :to="`${$router.options.base}#team`" title="Team Section"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Team</nuxt-link>

              <nuxt-link :to="`${$router.options.base}projects`" title="Projects Section"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Projects</nuxt-link>

              <nuxt-link :to="`${$router.options.base}blog`" title="Blog Section"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Blog</nuxt-link>

              <nuxt-link :to="`${$router.options.base}publications`" title="Publications Section"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Publications</nuxt-link>

              <a title="Google Maps Link" href="https://www.google.com/maps?cid=3154699187674670345" target="_blank"
                class="flex justify-center px-2 py-2 bg-black text-black border-b-2 border-black text-center align-middle ">
                <nuxt-img class="w-6 h-6 bg-black" format="webp" src="/map.webp" alt="Google Map Link"
                  fetchpriority="high" />
              </a>

              <nuxt-link :to="`${$router.options.base}#contact`" title="Contact Section"
                class="font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2">Contact</nuxt-link>
            </div>
          </div>

          <div class="hidden xl:flex text-sm tracking-bit">
            <div>
              <nuxt-link :to="`${$router.options.base}`" title="Home" class="mx-2.5 font-avenir color-corvid">Home</nuxt-link>
            </div>
            <div>
              <nuxt-link :to="`${$router.options.base}#about`" title="About Section" class="mx-2.5 font-avenir color-corvid">About</nuxt-link>
            </div>
            <div>
              <nuxt-link :to="`${$router.options.base}research`" title="Research Section" class="mx-2.5 font-avenir color-corvid">Research</nuxt-link>
            </div>
            <div>
              <nuxt-link :to="`${$router.options.base}#team`" title="Team Section" class="mx-2.5 font-avenir color-corvid">Team</nuxt-link>
            </div>
            <div>
              <nuxt-link :to="`${$router.options.base}projects`" title="Projects Section" class="mx-2.5 font-avenir color-corvid">Projects</nuxt-link>
            </div>
            <div>
              <nuxt-link :to="`${$router.options.base}blog`" title="Blog Section" class="mx-2.5 font-avenir color-corvid">Blog</nuxt-link>
            </div>
            <div>
              <nuxt-link :to="`${$router.options.base}publications`" title="Publications Section" class="mx-2.5 font-avenir color-corvid">Publications</nuxt-link>
            </div>
            <div class="w-10 ml-2 font-avenir color-corvid">
              <a title="Google Maps Link" href="https://www.google.com/maps?cid=3154699187674670345" target="_blank">
                <nuxt-img class="w-6 h-6 bg-cover" format="webp" src="/map.webp" alt="Google Map Link"
                  fetchpriority="high" />
              </a>
            </div>
            <div>
              <nuxt-link :to="`${$router.options.base}#contact`" title="Contact Section" class="mx-2.5 font-avenir color-corvid">Contact</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      showMenu: false,
    }
  },
  mounted() {
    /* console.log('options', this.$router.options);
    console.log('base', this.$router.options.base);
    console.log(this.router.options.base);
    console.log(router.options); */

    document.addEventListener('click', this.handleDocumentClick)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleDocumentClick)
  },
  methods: {
    handleDocumentClick(e) {
      const menu = this.$refs.menu;
      if (!menu.contains(event.target)) {
        this.showMenu = false;
      }
    }
  }
};
</script>