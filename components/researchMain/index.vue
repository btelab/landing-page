<template>
    <div class="w-full mx-auto md:px-20 bg-black text-white text-center pb-16">

        <h2 class="flex-1 w-full font-futura text-4xl md:text-5xl font-semibold tracking-mid pb-10 md:pb-12">RESEARCH</h2>
        
        <div class="flex">

            <div class="flex-1 flex xl:flex-row flex-col">

                <div class="flex-1 flex flex-col">
                    <h4 class="font-futura text-2xl font-semibold h-20 xl:h-36 pl-10 pr-10 pb-4 xl:pb-10">
                        MICROFABRICATION AND<br />ORGAN-ON-A-CHIP</h4>
                    <div class="w-full text-center h-20 pb-36 md:pb-0">
                        <router-link to="/research"
                            title="Microfabrication and Organ-on-a-Chip"
                            class="font-avenir inline-block text-sm px-12 py-4 leading-none border text-white border-white hover:text-black hover:bg-greygreen hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0">
                            More
                        </router-link>
                    </div>
                </div>

                <div class="flex-1 flex flex-col">
                    <h4 class="font-futura text-2xl font-semibold h-28 xl:h-36 pl-10 pr-10 pb-4 xl:pb-10">3D
                        BIOPRINTING,<br />ADDITIVE<br />MANUFACTURING AND <br/>XR TECHNOLOGIES</h4>
                    <div class="w-full text-center h-20 pb-36 md:pb-0">
                        <router-link to="/research#bioprinting"
                            title="3D Bioprinting and Additive Manufacturing"
                            class="font-avenir inline-block text-sm px-12 py-4 leading-none border text-white border-white hover:text-black hover:bg-greygreen hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0">
                            More
                        </router-link>
                    </div>
                </div>

                <div class="flex-1 flex flex-col">
                    <h4 class="font-futura text-2xl font-semibold h-20 xl:h-36 pl-10 pr-10 pb-4 xl:pb-10">STEM CELL
                        BIOLOGY AND TISSUE ENGINEERING</h4>
                    <div class="w-full text-center h-20 pb-36 md:pb-0">
                        <router-link to="/research#stem-cell"
                            title="Stem Cell Biology and Tissue Engineering"
                            class="font-avenir inline-block text-sm px-12 py-4 leading-none border text-white border-white hover:text-black hover:bg-greygreen hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0">
                            More
                        </router-link>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "ResearchMain",
    components: {},
    methods: {
    },
    data() {
        return {
        }
    }
};
</script>