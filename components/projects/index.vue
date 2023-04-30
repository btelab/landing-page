<template>
    <div class="flex flex-col bg-white">
        <div class="flex flex-col container mx-auto pt-20 pb-20" v-if="selectedPage === 'PROJECTS'">
            <h1 class="w-full flex justify-center text-6xl pb-4 font-raleway">Projects</h1>
            <div class="flex flex-1 w-full justify-center ">
                <div class="title-line bg-black"></div>
            </div>
        </div>

        <div class="flex flex-1 container mx-auto pb-24" v-if="selectedPage === 'PROJECTS'">
            <div class="flex flex-1 w-full justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="w-80 h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="selectedPage = 'REALISTIC'"
                            class="h-full w-full flex items-center justify-center text-center">
                            <span class="text-5xl font-raleway">REALISTIC</span>
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="selectedPage = 'AICO'"
                            class="h-full w-full flex items-center justify-center text-center">
                            <span class="text-5xl font-raleway">AICO</span>
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="selectedPage = 'GENT'"
                            class="h-full w-full flex items-center justify-center text-center">
                            <span class="text-5xl font-raleway">PLAN<br />GENT</span>
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="selectedPage = 'GJIDI'"
                            class="h-full w-full flex items-center justify-center text-center">
                            <span class="text-5xl font-raleway">GJIDI</span>
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="selectedPage = 'APOTI'"
                            class="h-full w-full flex items-center justify-center text-center">
                            <span class="text-5xl font-raleway">APOTI</span>
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="selectedPage = 'UPHOT'"
                            class="h-full w-full flex items-center justify-center text-center">
                            <span class="text-5xl font-raleway">NIM-UPHOT</span>
                        </a>
                    </div>
                    <div class="place-self-auto h-80 bg-grey-green transition duration-500 hover:bg-gray-500">
                        <a href="#" @click.prevent="selectedPage = 'INVESTIGO'"
                            class="h-full w-full flex items-center justify-center text-center">
                            <span class="text-5xl font-raleway">INVESTIGO</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'REALISTIC'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-28 pb-16 font-raleway">REALISTIC</h1>
                <p class="flex w-full pb-36 font-avenir">Project description...</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>

                <div class="flex flex-1 items-center justify-center">
                    <img src="~/assets/realistic_logo.webp" alt="Realistic" class="object-none object-center w-64" />
                </div>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_realistic.png" alt="Logos Realistic project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'AICO'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-28 pb-16 font-raleway">AICO</h1>
                <p class="flex w-full pb-36 font-avenir">Project description...</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_aico.png" alt="Logos AICO project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'GENT'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-28 pb-16 font-raleway">PLAN GENT</h1>
                <p class="flex w-full pb-36 font-avenir">Project description...</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_plangent.png" alt="Logos Plan Gent project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'GJIDI'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-28 pb-16 font-raleway">GJIDI</h1>
                <p class="flex w-full pb-36 font-avenir">Project description...</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_gjidi.png" alt="Logos GJIDI project">
            </div>
        </div>


        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'APOTI'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-28 pb-16 font-raleway">APOTI</h1>
                <p class="flex w-full pb-36 font-avenir">Project description...</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_apoti.png" alt="Logos APOTI project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'UPHOT'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-28 pb-16 font-raleway">NIM-UPHOT</h1>
                <p class="flex w-full pb-36 font-avenir">Project description...</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_nimuphot.png" alt="Logos NIM-UPHOT project">
            </div>
        </div>

        <div class="flex container mx-auto pt-20 pb-20 h-auto md:w-2/3" v-if="selectedPage === 'INVESTIGO'">
            <div class="w-4/6 flex flex-col h-auto">
                <a href="#" @click.prevent="selectedPage = 'PROJECTS'" title="Go Back">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <h1 class="w-full flex  text-6xl pt-28 pb-16 font-raleway">INVESTIGO</h1>
                <p class="flex w-full pb-36 font-avenir">Project description...</p>
                <p class="font-avenir font-semibold">IP: Carmen Escobedo Lucea</p>
            </div>
            <div class="w-2/6 flex border-l-2 border-gray-300">
                <img src="~/assets/logos_investigo.png" alt="Logos INVESTIGO project">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Projects",
    components: {},
    methods: {
        select: function (event) {
            event.stopPropagation();
            event.preventDefault();
        }
    },
    data() {
        return {
            selectedPage: 'PROJECTS'
        }
    }
};
</script>