<template>
    <div id="team">
        <div class="w-full flex flex-col bg-black pt-72 pb-28">
            <div class="mx-auto md:w-4/5 px-4 md:px-0">
                <div class="flex flex-col text-center text-white">
                    <h2 class="font-futura text-4xl md:text-5xl font-semibold pb-16 tracking-mid">TEAM</h2>
                </div>

                <div class="grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div v-for="(image, index) in team" :key="index" class="relative">
                        <a :href="image.link" :title="image.name" @click.prevent="handleClick($event, image)">

                            <nuxt-img
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110"
                                format="webp"
                                :src="image.url"
                                :alt="image.name"
                                fetchpriority="high" />

                            <!-- <img :src="image.url"
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110" /> -->
                            <div class="absolute bottom-10 left-4 inset-0 flex items-end justify-left ">
                                <div class="bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black">
                                    <p class="text-gray-100">{{ image.name }}</p>
                                    <p class="text-gray-100">{{ image.title }}</p>
                                    <p class="text-gray-100">{{ image.position }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="mx-auto md:w-4/5 px-4 md:px-0 pt-10 md:pt-16">
                <div class="flex flex-col text-center text-white">
                    <h2 class="font-futura text-3xl md:text-4xl font-semibold pb-10 tracking-mid">PhD Candidates</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div v-for="(image, index) in PhDCandidates" :key="index" class="relative">
                        <a :href="image.link" :title="image.name" @click.prevent="handleClick($event, image)">

                            <nuxt-img
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110"
                                format="webp"
                                :src="image.url"
                                :alt="image.name"
                                fetchpriority="high" />

                            <!-- <img :src="image.url"
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110" /> -->
                            <div class="absolute bottom-10 left-4 inset-0 flex items-end justify-left ">
                                <div class="bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black">
                                    <p class="text-gray-100">{{ image.name }}</p>
                                    <p class="text-gray-100">{{ image.title }}</p>
                                    <p class="text-gray-100">{{ image.position }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="mx-auto md:w-4/5 px-4 md:px-0 pt-10 md:pt-16">
                <div class="flex flex-col text-center text-white">
                    <h2 class="font-futura text-3xl md:text-4xl font-semibold pb-10 tracking-mid">Graduates</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div v-for="(image, index) in Graduates" :key="index" class="relative">
                        <a :href="image.link" :title="image.name" @click.prevent="handleClick($event, image)">

                            <nuxt-img
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110"
                                format="webp"
                                :src="image.url"
                                :alt="image.name"
                                fetchpriority="high" />

                            <!-- <img :src="image.url"
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110" /> -->
                            <!-- <img :src="image.url"
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110" /> -->
                            <div class="absolute bottom-10 left-4 inset-0 flex items-end justify-left ">
                                <div class="bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black">
                                    <p class="text-gray-100">{{ image.name }}</p>
                                    <p class="text-gray-100">{{ image.title }}</p>
                                    <p class="text-gray-100">{{ image.position }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mx-auto md:w-4/5 px-4 md:px-0 pt-10 md:pt-16">
                <div class="flex flex-col text-center text-white">
                    <h2 class="font-futura text-3xl md:text-4xl font-semibold pb-10 tracking-mid">Collaborators</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div v-for="(image, index) in collaborators" :key="index" class="relative">
                        <a :href="image.link" :title="image.name" @click.prevent="handleClick($event, image)">

                            <nuxt-img
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110"
                                format="webp"
                                :src="image.url"
                                :alt="image.name"
                                fetchpriority="high" />

                            <!-- <img :src="image.url"
                                class="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110" /> -->
                            <div class="absolute bottom-10 left-4 inset-0 flex items-end justify-left ">
                                <div class="bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black">
                                    <p class="text-gray-100">{{ image.name }}</p>
                                    <p class="text-gray-100">{{ image.title }}</p>
                                    <p class="text-gray-100">{{ image.position }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* Add hover animation */
.relative:hover img {
    transform: scale(1.05);
}

/* Set a minimum height for the images to prevent them from being too small on small screens */
@media (max-width: 640px) {
    .relative {
        min-height: 200px;
    }
}
</style>

<script>
const maleStatic = '/ICON-MALE.png';
const femaleStatic = '/ICON-FEMALE.png';
export default {
    name: "Team",
    methods: {
        handleClick(event, image) {
            event.preventDefault();

            if (!image.link.length) {
                return; // do nothing if the URL is empty
            } else {
                window.open(image.link, "_blank"); // open in new window if URL is not empty
            }
        }
    },
    data() {
        return {
            team: [{
                name: "Carmen Escobedo Lucea",
                title: "PhD, Biologist",
                position: "PI BTELab",
                url: '/CARMEN.png',
                link: "https://www.linkedin.com/in/carmen-escobedo-lucea-75672190/"
            }, {
                name: "Andrés Sanz García",
                title: "PhD",
                position: "Engineer Senior Researcher",
                url: '/ANDRES.png',
                link: "https://www.linkedin.com/in/andres-sanz-ba079b29",
            }, {
                name: "Matteo Perra",
                title: "PhD",
                position: "Pharmacy Postdoctoral Researcher",
                url: maleStatic,
                link: "https://www.linkedin.com/in/matteo-perra-b3a457241",
            }, {
                name: "Néstor Villalba Rojas",
                title: "MSC Biotechnology",
                position: "Lab Manager",
                url: '/NESTOR.png',
                link: "https://www.linkedin.com/in/nestorvillalbarojas",
            }, {
                name: "Neus Alemany Ortolá",
                title: "MSC Biotechnology",
                position: "Lab Technician",
                url: maleStatic,
                link: "https://www.linkedin.com/in/neusalemanyortola",
            }, {
                name: "Cristina Andrés Carbonell",
                title: "Anatomy & Pathology",
                position: "Lab Technician",
                url: femaleStatic,
                link: "",
            },],
            PhDCandidates: [{
                name: "Armando Gonzalez",
                title: "MSC",
                position: "PhD candidate",
                url: maleStatic,
                link: "https://www.linkedin.com/in/armando-gonzález-muñoz-a8b1b6165",
            }, {
                name: "Julia Gonzalez Cantó",
                title: "MSC",
                position: "PhD candidate",
                url: femaleStatic,
                link: "https://www.linkedin.com/in/julia-gonzález-cantó-b1a29b228",
            }, {
                name: "Pepo Garcia Moreno",
                title: "MD",
                position: "PhD candidate",
                url: maleStatic,
                link: "https://www.linkedin.com/in/pepo-garcía-moreno-0ba032248",
            }, {
                name: "Jose Luis de Pablo Franco",
                title: "MSC",
                position: "PhD candidate",
                url: '/JOSE-LUIS.png',
                link: "https://reproduccionart.com/jose-luis-de-pablo/",
            },],
            Graduates: [{
                name: "Sara Mirabet Torres",
                title: "MSC",
                position: "Biologist",
                url: femaleStatic,
                link: "https://www.linkedin.com/in/saramirabettorres",
            }, {
                name: "Alejandro López Cuquerella",
                title: "MSC",
                position: "Biomedical Engineer",
                url: '/ALEX.png',
                link: "https://www.linkedin.com/in/alejandro-lópez-cuquerella",
            }, {
                name: "Andrea Sanchez Villena",
                title: "MSC",
                position: "Industrial Design Engineer",
                url: femaleStatic,
                link: "https://www.linkedin.com/in/andrea-sánchez-villena-035606156",
            }, {
                name: "Francesca Flore",
                title: "MSC",
                position: "Biomedical Engineer",
                url: femaleStatic,
                link: "https://www.linkedin.com/in/francesca-flore-46a01a90",
            }, {
                name: "Andrea Martinez Vela",
                title: "MSC",
                position: "Chemist",
                url: femaleStatic,
                link: "https://www.linkedin.com/in/andrea-martínez-vela-66251b167",
            }, {
                name: "Anuar Gimenez El Amrani",
                title: "",
                position: "Mechanical and Electrical Engineer",
                url: '/ANUAR.png',
                link: "https://www.linkedin.com/in/anuargimenez",
            }, {
                name: "Borja Goméz Colmenar",
                title: "MSC",
                position: "",
                url: maleStatic,
                link: "https://www.linkedin.com/in/borja-gómez-colmenar-3078b111a",
            }],
            collaborators: [{
                name: "Vicente Mirabet",
                title: "PhD",
                position: "Biologist",
                url: maleStatic,
                link: "https://www.linkedin.com/in/vicente-mirabet-41790662",
            }, {
                name: "David Peris Puchol",
                title: " M.D.Ph.D.",
                position: "Biotechnologist and Orthopedic Surgeon",
                url: maleStatic,
                link: "https://www.linkedin.com/in/david-peris-puchol-4710272a",
            }, {
                name: "Isabel Moreno",
                title: "MD Ph.D",
                position: "Plastic Surgeon",
                url: femaleStatic,
                link: "https://www.linkedin.com/in/isabel-moreno-gallent-02182342",
            }]
        }
    }
};
</script>