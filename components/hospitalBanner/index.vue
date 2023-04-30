<template>
    <div class="w-full bg-black pb-10">
        <div class="container mx-auto ">
            <div class="carousel-container container overflow-hidden" >
                <slick class="relative" ref="slick" :options="slickOptions" dir="rtl">

                    <nuxt-img
                        format="webp"
                        src="/hospital1600px.png"
                        alt="Hospital General Universitario de Valencia"
                        fetchpriority="low"
                        width="980"
                        height="auto"
                        quality="100"
                        style="object-fit: scale-down;"
                         />
                    
                     <nuxt-img
                        format="webp"
                        src="/fotogrupo-1600px.png"
                        alt="BTE Lab team photo"
                        fetchpriority="low" 
                        width="980"
                        height="auto"
                        quality="100"
                        style="object-fit: scale-down;"
                        />
                        
                    <nuxt-img
                        format="webp"
                        src="/valencia1600px.png"
                        alt="Science Museum in Valencia"
                        fetchpriority="low" 
                        width="980"
                        height="auto"
                        quality="100"
                        style="object-fit: scale-down;"
                        />
                        
                    <!--
                        class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110"
                         <img src="~/assets/hospital1600px.png" alt="Hospital General">
                    <img src="~/assets/fotogrupo-1600px.png" alt="BTE Lab team photo">
                    <img src="~/assets/valencia1600px.png" alt="Science Museum in Valencia"> -->

                </slick>
            </div>
        </div>
</div>
</template>

<style scoped>
.carousel-container-mobile {
    height: 600px;
}

.slick-slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin: auto;
}
</style>


<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';


export default {
    name: "HospitalBanner",
    components: { Slick },
    data() {
        return {
            slickOptions: {
                prevArrow: null,
                nextArrow: null,
                autoplay: true,
                slidesToShow: 1,
                autoplaySpeed: 1100,
                adaptiveHeight: true,
                dots: false,
                speed: 1100,
                // fade: true,
                cssEase: 'ease',
                rtl: true
            },
        };
    }
};
</script>
