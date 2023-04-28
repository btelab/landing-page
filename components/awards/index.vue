<template>
    <div class="flex flex-col bg-white">
        <div class="flex flex-col container mx-auto pt-20 pb-20">
            <h1 class="w-full flex justify-center text-6xl pb-4 font-raleway">Awards</h1>
            <div class="flex flex-1 w-full justify-center ">
                <div class="title-line bg-black"></div>
            </div>
        </div>

        <div class="flex flex-1 container mx-auto pb-24">
            <div class="flex flex-1 w-full justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="w-80 h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <div class="h-full w-full flex items-center justify-center text-center">
                            <span class="font-raleway text-5xl">VALBIOCAR</span>

                        </div>
                    </div>
                    <div class="w-80 h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <div class="h-full w-full flex items-center justify-center text-center">
                            <span class="font-raleway text-5xl">BIOEVOOC</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Awards",
    components: {},
    methods: {
    },
    data() {
        return {
        }
    }
};
</script>