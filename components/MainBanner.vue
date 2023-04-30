<!-- Please remove this file from your project -->
<template>
  <div class="relative">
    <div 
      id="parallax-image" 
      class="absolute inset-0 bg-center bg-cover"
      :style="`background-image: url('${require('~/assets/BTE_banner_1.jpg')}'); z-index: -1;`"></div>
    <div id="parallax-text" class="w-full min-h-screen flex items-center justify-center">
      <div class="flex flex-col text-center text-white justify-center">
        <h1 class="flex font-futura text-4xl md:text-6xl md:font-semibold md:tracking-mid text-white pl-5 pr-5 leading-snug pb-10">
          <div class="leading-tight">BIOMEDICAL & TISSUE<br/>ENGINEERING LABORATORY</div>
        </h1>
        <h2 class="font-futura text-3xl md:text-4xl md:font-semibold md:tracking-mid text-white text-opacity-70 text-center">ESCOBEDO-LUCEA LAB</h2>
      </div>
  </div>

  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', () => {
      const parallaxText = document.getElementById('parallax-text');
      const parallaxImage = document.getElementById('parallax-image');
      const scrollPosition = window.pageYOffset;
      parallaxText.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      parallaxImage.style.transform = `translateY(${scrollPosition * 0.9}px)`;
    });
  },
};
</script>
