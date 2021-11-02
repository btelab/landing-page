<template>
  <nav class="flex flex-1 flex-col sticky top-0 z-50 bg-black p-6 items-center md:items-start">
    <div class="flex w-full h-2 border-b border-white border-solid mb-3"></div>
    <div class="flex flex-shrink-0 text-white md:container md:mx-auto">
      <a href="#">
        <img 
          class="w-44 h-auto md:w-32"
          src="~assets/logo_blanco.png" 
          alt="Escobedo Lucea Biomaterial and Tissue Engineering Lab logo" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>